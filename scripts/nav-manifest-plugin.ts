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

const VIRTUAL_ID = 'virtual:nav-manifest'
const RESOLVED_ID = '\0virtual:nav-manifest'

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
  if (section === 'use-cases' || section === 'use_cases' || section === 'usecases') return 'useCases'
  return section
}

function slugToKey(slug: string): string {
  // slug is e.g. /en/how-it-works — strip locale prefix then convert to camelCase
  const bare = slug
    .replace(/^\/(en|fr|de|es|pt|zh)/, '')
    .replace(/^\//, '')
    .replace(/\/$/, '') || 'home'
  // kebab-case → camelCase
  return bare.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}

function buildManifest(contentDir: string): NavPage[] {
  const pages: NavPage[] = []

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(full)
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        try {
          const raw = fs.readFileSync(full, 'utf-8')
          const meta = parseFrontMatter(raw)
          if (meta.navigation?.section && meta.navigation?.label) {
            // Build route slug from file path relative to contentDir
            const rel = path.relative(contentDir, full)
              .replace(/\\/g, '/')  // Windows paths
              .replace(/\.md$/, '')
            const routeSlug = `/${rel}`
            const localeMatch = routeSlug.match(/^\/(en|fr|de|es|pt|zh)/)
            const locale = localeMatch ? localeMatch[1]! : 'en'

            if (!LOCALE_CODES.includes(locale)) continue

            // Store locale-agnostic base path (strip locale prefix).
            // useLocalePath() in templates generates the correct locale-prefixed URL.
            const basePath = routeSlug.replace(/^\/(en|fr|de|es|pt|zh)(?=\/|$)/, '') || '/'

            pages.push({
              locale,
              section: normalizeSection(String(meta.navigation.section)),
              label: String(meta.navigation.label),
              key: slugToKey(routeSlug),
              order: Number(meta.navigation.order ?? 0),
              to: basePath,
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
      : a.order - b.order
  )

  return pages
}

export function navManifestPlugin(): Plugin {
  let contentDir: string

  return {
    name: 'quadra-nav-manifest',

    configResolved(config) {
      contentDir = path.resolve(config.root, 'content')
    },

    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },

    load(id) {
      if (id !== RESOLVED_ID) return
      const manifest = buildManifest(contentDir)
      return `export default ${JSON.stringify(manifest, null, 2)}`
    },

    // Re-generate when any content file changes in dev
    handleHotUpdate({ file, server }) {
      if (file.includes('/content/') && file.endsWith('.md')) {
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
        if (mod) server.moduleGraph.invalidateModule(mod)
        server.hot.send({ type: 'full-reload' })
      }
    },
  }
}
