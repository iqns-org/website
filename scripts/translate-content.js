#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'
import fg from 'fast-glob'
import { extractJson } from './translate-utils.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')
const DEFAULT_CONFIG_PATH = path.join(root, 'scripts', 'translate-config.json')
const DEFAULT_MODE = 'all'

const CLI_ARGS = parseArgs(process.argv.slice(2))
const MODE = CLI_ARGS.mode || DEFAULT_MODE
const FORCE = CLI_ARGS.force || false
const DRY_RUN = CLI_ARGS.dryRun || false
const CONFIG_PATH = CLI_ARGS.config || DEFAULT_CONFIG_PATH

await loadDotEnv()
const config = await loadConfig(CONFIG_PATH)
const SOURCE_LOCALE = config.sourceLocale
const LOCALES = Array.isArray(config.locales) ? config.locales : ['en', 'fr', 'es', 'de', 'pt', 'zh']
const TARGET_LOCALES = LOCALES.filter((locale) => locale !== SOURCE_LOCALE)
const CONTENT_DIR = config.contentDir || 'content'
const I18N_DIR = config.i18nDir || 'i18n/locales'
const PARALLEL_LOCALES = config.parallelLocales ?? true
const API_BASE_URL = process.env[config.apiEndpointEnv] || config.defaultEndpoint
const MODEL = process.env[config.modelEnv] || config.defaultModel
const API_KEY = process.env[config.apiKeyEnv]

if (!API_KEY) {
  console.error(`Missing ${config.apiKeyEnv}. Set it in your environment or in .env at the website root.`)
  process.exit(1)
}

const main = async () => {
  console.log(`Running translator: mode=${MODE} force=${FORCE} dryRun=${DRY_RUN}`)

  if (MODE === 'content' || MODE === 'all') {
    await translateContentFiles()
  }

  if (MODE === 'i18n' || MODE === 'all') {
    await translateI18nFiles()
  }

  console.log('Done.')
}

async function loadConfig(configPath) {
  try {
    const raw = await fs.readFile(configPath, 'utf8')
    return JSON.parse(raw)
  } catch (error) {
    throw new Error(`Failed to load translator config from ${configPath}: ${error.message}`)
  }
}

main().catch((error) => {
  console.error('Translator failed:', error)
  process.exit(1)
})

async function loadDotEnv() {
  const envPath = path.join(root, '.env')
  try {
    const buffer = await fs.readFile(envPath, 'utf8')
    for (const line of buffer.split(/\r?\n/)) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const [key, ...rest] = trimmed.split('=')
      const value = rest.join('=').trim().replace(/^['"]|['"]$/g, '')
      if (key && process.env[key] === undefined) {
        process.env[key] = value
      }
    }
  } catch (e) {
    // no .env file is acceptable if the environment is already configured
  }
}

function parseArgs(args) {
  const parsed = {}
  for (const arg of args) {
    if (arg.startsWith('--mode=')) {
      parsed.mode = arg.split('=')[1]
    } else if (arg === '--mode') {
      parsed.mode = args[args.indexOf(arg) + 1]
    } else if (arg === '--force') {
      parsed.force = true
    } else if (arg === '--dry-run') {
      parsed.dryRun = true
    }
  }
  return parsed
}

async function translateContentFiles() {
  const sourceGlob = `${CONTENT_DIR}/${SOURCE_LOCALE}/**/*.md`
  const sourceFiles = await fg(sourceGlob, { cwd: root, onlyFiles: true, dot: false })

  if (!sourceFiles.length) {
    console.warn('No source markdown files found:', sourceGlob)
    return
  }

  const localeTasks = TARGET_LOCALES.map((locale) => translateContentLocale(locale, sourceFiles))
  if (PARALLEL_LOCALES) {
    await Promise.all(localeTasks)
  } else {
    for (const task of localeTasks) {
      await task
    }
  }
}

async function translateContentLocale(locale, sourceFiles) {
  for (const relativePath of sourceFiles) {
    const sourcePath = path.join(root, relativePath)
    const targetRelative = relativePath.replace(`${CONTENT_DIR}/${SOURCE_LOCALE}/`, `${CONTENT_DIR}/${locale}/`)
    const targetPath = path.join(root, targetRelative)
    const targetExists = await fileExists(targetPath)
    const shouldTranslateFile = await shouldTranslate(sourcePath, targetPath)

    if (targetExists && !shouldTranslateFile && !FORCE) {
      console.log(`Skipping up-to-date translation ${targetRelative}`)
      continue
    }

    if (DRY_RUN) {
      if (!targetExists) {
        console.log(`[dry-run] Would translate markdown: ${relativePath} -> ${targetRelative}`)
      } else if (shouldTranslateFile || FORCE) {
        console.log(`[dry-run] Would re-translate markdown: ${relativePath} -> ${targetRelative}`)
      } else {
        console.log(`[dry-run] Would skip up-to-date translation ${targetRelative}`)
      }
      continue
    }

    const raw = await fs.readFile(sourcePath, 'utf8')
    const parsed = matter(raw)
    const translatedData = await translateFrontmatter(parsed.data, locale)
    translatedData.lang = locale
    const translatedBody = await translateMarkdownBody(parsed.content, locale)
    const result = matter.stringify(translatedBody, translatedData)
    await fs.mkdir(path.dirname(targetPath), { recursive: true })
    await fs.writeFile(targetPath, result, 'utf8')
    console.log(`Translated markdown: ${relativePath} -> ${targetRelative}`)
  }
}

async function translateI18nFiles() {
  const sourcePath = path.join(root, I18N_DIR, `${SOURCE_LOCALE}.json`)
  const sourceExists = await fileExists(sourcePath)
  if (!sourceExists) {
    console.warn('Source i18n file not found:', sourcePath)
    return
  }

  const sourceJson = JSON.parse(await fs.readFile(sourcePath, 'utf8'))
  const localeTasks = TARGET_LOCALES.map((locale) => translateI18nLocale(locale, sourcePath, sourceJson))

  if (PARALLEL_LOCALES) {
    await Promise.all(localeTasks)
  } else {
    for (const task of localeTasks) {
      await task
    }
  }
}

async function translateI18nLocale(locale, sourcePath, sourceJson) {
  const targetPath = path.join(root, I18N_DIR, `${locale}.json`)
  const targetExists = await fileExists(targetPath)
  const shouldTranslateFile = await shouldTranslate(sourcePath, targetPath)

  if (targetExists && !shouldTranslateFile && !FORCE) {
    console.log(`Skipping up-to-date i18n file ${locale}.json`)
    return
  }

  if (DRY_RUN) {
    if (!targetExists) {
      console.log(`[dry-run] Would translate i18n JSON: ${SOURCE_LOCALE}.json -> ${locale}.json`)
    } else if (shouldTranslateFile || FORCE) {
      console.log(`[dry-run] Would re-translate i18n JSON: ${SOURCE_LOCALE}.json -> ${locale}.json`)
    } else {
      console.log(`[dry-run] Would skip up-to-date i18n file ${locale}.json`)
    }
    return
  }

  const translated = await translateJsonObject(sourceJson, locale)
  await fs.writeFile(targetPath, JSON.stringify(translated, null, 2) + '\n', 'utf8')
  console.log(`Translated i18n file: ${locale}.json`)
}

async function translateFrontmatter(frontmatter, locale) {
  const cloned = JSON.parse(JSON.stringify(frontmatter))
  const paths = collectStringPaths(cloned, [], new Set(config.frontmatterSkipPatterns || []), cloned)

  if (!paths.length) return cloned

  const translations = await translatePaths(paths, locale)
  for (const { path: keyPath, setValue } of paths) {
    const translatedText = translations[keyPath]
    if (typeof translatedText === 'string') {
      setValue(translatedText)
    }
  }

  return cloned
}

async function translateMarkdownBody(markdownContent, locale) {
  if (!markdownContent.trim()) return markdownContent

  const languageName = localeToLanguageName(locale)
  const prompt = formatTemplate(config.promptTemplates.markdown, {
    language: languageName,
    content: markdownContent
  })
  return await requestChatCompletion(prompt)
}

async function translateJsonObject(source, locale) {
  const cloned = JSON.parse(JSON.stringify(source))
  const paths = collectStringPaths(cloned, [], new Set())
  if (!paths.length) return cloned
  const translations = await translatePaths(paths, locale)
  for (const { path: keyPath, setValue } of paths) {
    const translatedText = translations[keyPath]
    if (typeof translatedText === 'string') {
      setValue(translatedText)
    }
  }
  return cloned
}

function collectStringPaths(value, pathSegments, skipPatterns, rootObject) {
  const results = []
  const currentPath = pathSegments.join('.')

  if (typeof value === 'string') {
    if (shouldSkipPath(currentPath, skipPatterns)) return results
    results.push({
      path: currentPath,
      text: value,
      setValue: (newText) => {
        const target = resolvePath(rootObject, currentPath)
        if (target) {
          target.parent[target.key] = newText
        }
      }
    })
    return results
  }

  if (Array.isArray(value)) {
    for (let index = 0; index < value.length; index++) {
      const child = value[index]
      const childPath = [...pathSegments, String(index)]
      const childResults = collectStringPaths(child, childPath, skipPatterns, rootObject)
      results.push(...childResults)
    }
    return results
  }

  if (value && typeof value === 'object') {
    for (const key of Object.keys(value)) {
      const childPath = [...pathSegments, key]
      const childResults = collectStringPaths(value[key], childPath, skipPatterns, rootObject)
      results.push(...childResults)
    }
  }

  return results
}

function shouldSkipPath(currentPath, skipPatterns) {
  if (!currentPath) return false
  for (const pattern of skipPatterns) {
    const normalized = pattern.replace(/\*/g, '[^.]+' )
    const regex = new RegExp(`^${normalized}$`)
    if (regex.test(currentPath)) return true
  }
  return false
}

function resolvePath(rootObject, dottedPath) {
  const keys = dottedPath.split('.')
  let parent = rootObject
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    if (parent == null) return null
    parent = parent[key]
  }
  const key = keys[keys.length - 1]
  return parent == null ? null : { parent, key }
}

function formatTemplate(template, values) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replace(new RegExp(`\\{${key}\\}`, 'g'), String(value)),
    template
  )
}

async function shouldTranslate(sourcePath, targetPath) {
  if (!(await fileExists(targetPath))) {
    return true
  }

  try {
    const sourceStat = await fs.stat(sourcePath)
    const targetStat = await fs.stat(targetPath)
    return sourceStat.mtimeMs > targetStat.mtimeMs
  } catch (error) {
    console.warn(`Unable to compare timestamps for ${sourcePath} and ${targetPath}: ${error.message}`)
    return true
  }
}

async function translatePaths(paths, locale) {
  const payload = {}
  for (const entry of paths) {
    payload[entry.path] = entry.text
  }

  const languageName = localeToLanguageName(locale)
  const prompt = formatTemplate(config.promptTemplates.json, {
    language: languageName,
    content: JSON.stringify(payload, null, 2)
  })

  const rawResponse = await requestChatCompletion(prompt)
  const parsed = extractJson(rawResponse)
  if (!parsed) {
    throw new Error(
      `Could not parse JSON translation response for locale ${locale}. Response:
${rawResponse.slice(0, 2000)}`
    )
  }

  return parsed
}

async function requestChatCompletion(prompt) {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: MODEL,
      temperature: config.translationOptions.temperature,
      max_completion_tokens: config.translationOptions.max_completion_tokens,
      top_p: config.translationOptions.top_p,
      stream: false,
      reasoning_effort: config.translationOptions.reasoning_effort,
      stop: null,
      messages: [
        {
          role: 'system',
          content: 'You are a precise translator that preserves markdown, YAML frontmatter, JSON structure, and technical labels.'
        },
        { role: 'user', content: prompt }
      ]
    })
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Translation API error (${response.status}): ${errorText}`)
  }

  const json = await response.json()
  const choices = json.choices
  if (!choices || !choices.length) {
    throw new Error('Unexpected translation response format: no choices')
  }

  const message = choices[0].message || choices[0].delta
  if (!message) {
    throw new Error('Unexpected translation response format: no message text')
  }

  const content = message.content || message.delta || ''
  return typeof content === 'string' ? content.trim() : String(content)
}

function localeToLanguageName(locale) {
  const map = {
    en: 'English',
    fr: 'French',
    es: 'Spanish',
    de: 'German',
    pt: 'Portuguese',
    zh: 'Chinese'
  }
  return map[locale] || locale
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}
