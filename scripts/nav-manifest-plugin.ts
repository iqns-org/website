import type { Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import { load as yamlLoad } from 'js-yaml'

export interface NavPage {
  locale: string
  section: string
  label: string
  key: string
  order: number
  to: string
}

export interface ContentPage {
  locale: string
  section: string
  title: string
  description: string
  tags: string[]
  key: string
  to: string
  order: number
  navLabel?: string
}

export interface ContentIndex {
  pages: ContentPage[]
  sections: Record<string, ContentPage[]>
  tags: Record<string, ContentPage[]>
  nav: NavPage[]
}

const NAV_VIRTUAL_ID = 'virtual:nav-manifest'
const NAV_RESOLVED_ID = '\0virtual:nav-manifest'
const CONTENT_VIRTUAL_ID = 'virtual:content-index'
const CONTENT_RESOLVED_ID = '\0virtual:content-index'

const LOCALE_CODES = ['en', 'fr', 'de', 'es', 'pt', 'zh']

function parseFrontMatter(text: string): Record<string, any> {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
  if (!match) return {}
  try {
    return (yamlLoad(match[1]!) as Record<string, any>) || {}
  } catch {
    return {}
  }
}

function normalizeSection(section: string): string {
  if (!section) return ''
  if (section === 'use-cases' || section === 'use_cases' || section === 'usecases') return 'useCases'
  return section
}

function normalizeTags(tags: unknown): string[] {
  if (!tags) return []
  if (Array.isArray(tags)) {
    return tags
      .map((tag) => String(tag).trim())
      .filter(Boolean)
  }
  if (typeof tags === 'string') {
    return tags
      .split(',')
      .map((tag) => String(tag).trim())
      .filter(Boolean)
  }
  return []
}

function slugToKey(slug: string): string {
  const bare = slug
    .replace(/^\/(en|fr|de|es|pt|zh)(?=\/|$)/, '')
    .replace(/^\//, '')
    .replace(/\/$/, '') || 'home'

  return bare
    .split('/')
    .map((segment, index) => {
      const camel = segment.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
      return index === 0 ? camel : camel.replace(/^([a-z])/, (m) => m.toUpperCase())
    })
    .join('')
}

function inferSectionFromSlug(slug: string): string {
  const base = slug
    .replace(/^\/(en|fr|de|es|pt|zh)(?=\/|$)/, '')
    .replace(/^\//, '')
    .replace(/\/$/, '')
  const firstSegment = base.split('/')[0] || ''
  return normalizeSection(firstSegment)
}

function normalizeTagKey(tag: string): string {
  const trimmed = tag.trim()
  const cleaned = trimmed
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
  const parts = cleaned.split(/\s+/).filter(Boolean)
  return parts
    .map((part, index) => index === 0 ? part.toLowerCase() : part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

function sectionTranslationKey(section: string): string {
  if (section === 'useCases') return 'nav.useCases.label'
  if (section.startsWith('useCases')) {
    const suffix = section.slice('useCases'.length)
    const key = suffix ? suffix.charAt(0).toLowerCase() + suffix.slice(1) : 'label'
    return `nav.useCases.${key}`
  }
  return `nav.${section}`
}

function tagTranslationKey(tag: string): string {
  return `tags.${normalizeTagKey(tag)}`
}

function keyExists(obj: any, keyPath: string): boolean {
  const steps = keyPath.split('.')
  let current = obj
  for (const step of steps) {
    if (current && Object.prototype.hasOwnProperty.call(current, step)) {
      current = current[step]
    } else {
      return false
    }
  }
  return true
}

function validateTranslations(contentIndex: ContentIndex, rootDir: string): void {
  const localeDir = path.join(rootDir, 'i18n', 'locales')
  if (!fs.existsSync(localeDir)) return

  const localeFiles = fs.readdirSync(localeDir).filter((name) => name.endsWith('.json'))
  const sectionKeys = new Set<string>()
  const tagKeys = new Set<string>()

  for (const navPage of contentIndex.nav) {
    if (navPage.section) sectionKeys.add(sectionTranslationKey(navPage.section))
  }
  for (const tag of Object.keys(contentIndex.tags)) {
    if (tag) tagKeys.add(tagTranslationKey(tag))
  }

  const failures: string[] = []

  for (const localeFile of localeFiles) {
    const localeCode = path.basename(localeFile, '.json')
    const localeJson = fs.readFileSync(path.join(localeDir, localeFile), 'utf-8')
    let localeData: any = {}
    try {
      localeData = JSON.parse(localeJson)
    } catch (error) {
      failures.push(`Failed to parse locale file ${localeFile}: ${String(error)}`)
      continue
    }

    for (const sectionKey of sectionKeys) {
      if (!keyExists(localeData, sectionKey)) {
        failures.push(`${localeCode}: missing translation key ${sectionKey}`)
      }
    }
    for (const tagKey of tagKeys) {
      if (!keyExists(localeData, tagKey)) {
        failures.push(`${localeCode}: missing translation key ${tagKey}`)
      }
    }
  }

  if (failures.length > 0) {
    throw new Error(`Content i18n validation failed:\n${failures.join('\n')}`)
  }
}

function buildContentIndex(contentDir: string): ContentIndex {
  const pages: ContentPage[] = []
  const nav: NavPage[] = []

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(full)
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        try {
          const raw = fs.readFileSync(full, 'utf-8')
          const meta = parseFrontMatter(raw)

          const rel = path.relative(contentDir, full)
            .replace(/\\/g, '/')
            .replace(/\.md$/, '')
          const routeSlug = `/${rel}`
          const localeMatch = routeSlug.match(/^\/(en|fr|de|es|pt|zh)/)
          const locale = localeMatch ? localeMatch[1]! : 'en'
          if (!LOCALE_CODES.includes(locale)) return

          const basePath = routeSlug.replace(/^\/(en|fr|de|es|pt|zh)(?=\/|$)/, '') || '/'
          const section = normalizeSection(
            String(meta.navigation?.section ?? meta.section ?? inferSectionFromSlug(routeSlug) ?? '')
          )

          const navLabel = String(meta.navigation?.label ?? meta.title ?? '')

          const page: ContentPage = {
            locale,
            section,
            title: String(meta.title ?? ''),
            description: String(meta.description ?? ''),
            tags: normalizeTags(meta.tags ?? meta.tag),
            key: slugToKey(routeSlug),
            to: basePath,
            order: Number(meta.navigation?.order ?? 0),
            navLabel: navLabel || undefined
          }

          pages.push(page)

          const navigationEnabled = meta.navigation?.enabled !== false
          if (navigationEnabled && meta.navigation?.section && navLabel) {
            nav.push({
              locale,
              section: normalizeSection(String(meta.navigation.section)),
              label: navLabel,
              key: page.key,
              order: page.order,
              to: page.to,
            })
          }
        } catch {
          // skip unparseable files
        }
      }
    }
  }

  walk(contentDir)

  pages.sort((a, b) =>
    a.section !== b.section
      ? a.section.localeCompare(b.section)
      : a.order - b.order || a.title.localeCompare(b.title)
  )

  nav.sort((a, b) =>
    a.section !== b.section
      ? a.section.localeCompare(b.section)
      : a.order - b.order
  )

  const sections: Record<string, ContentPage[]> = {}
  const tags: Record<string, ContentPage[]> = {}

  for (const page of pages) {
    if (!sections[page.section]) sections[page.section] = []
    sections[page.section].push(page)

    for (const tag of page.tags) {
      if (!tags[tag]) tags[tag] = []
      tags[tag].push(page)
    }
  }

  Object.values(sections).forEach((items) =>
    items.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
  )

  Object.values(tags).forEach((items) =>
    items.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
  )

  return { pages, sections, tags, nav }
}

export function navManifestPlugin(): Plugin {
  let contentDir: string

  return {
    name: 'quadra-nav-manifest',

    configResolved(config) {
      contentDir = path.resolve(config.root, 'content')
    },

    resolveId(id) {
      if (id === NAV_VIRTUAL_ID) return NAV_RESOLVED_ID
      if (id === CONTENT_VIRTUAL_ID) return CONTENT_RESOLVED_ID
    },

    load(id) {
      if (id === NAV_RESOLVED_ID) {
        const manifest = buildContentIndex(contentDir).nav
        return `export default ${JSON.stringify(manifest, null, 2)}`
      }
      if (id === CONTENT_RESOLVED_ID) {
        const index = buildContentIndex(contentDir)
        validateTranslations(index, path.resolve(contentDir, '..'))
        return `export default ${JSON.stringify(index, null, 2)}`
      }
    },

    // Re-generate when any content file changes in dev
    handleHotUpdate({ file, server }) {
      if (file.includes('/content/') && file.endsWith('.md')) {
        const navModule = server.moduleGraph.getModuleById(NAV_RESOLVED_ID)
        if (navModule) server.moduleGraph.invalidateModule(navModule)
        const contentModule = server.moduleGraph.getModuleById(CONTENT_RESOLVED_ID)
        if (contentModule) server.moduleGraph.invalidateModule(contentModule)
        server.hot.send({ type: 'full-reload' })
      }
    },
  }
}
