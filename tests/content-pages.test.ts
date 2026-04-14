import { describe, expect, it } from 'vitest'
import fs from 'fs'
import path from 'path'

const contentDir = path.join(__dirname, '..', 'content')
const locales = ['en', 'fr', 'es', 'de', 'pt', 'zh']

const getRouteFromFile = (fileName: string): string => {
  if (fileName === 'index.md') return '/'
  return '/' + fileName.replace(/\.md$/, '')
}

const getFilesForLocale = (locale: string): string[] => {
  const dir = path.join(contentDir, locale)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md'))
}

describe('Content pages', () => {
  for (const locale of locales) {
    it(`should have a non-empty folder for ${locale}`, () => {
      const dir = path.join(contentDir, locale)
      expect(fs.existsSync(dir)).toBe(true)
      const files = getFilesForLocale(locale)
      expect(files.length).toBeGreaterThan(0)
    })

    it(`should have no frontmatter-less pages in ${locale}`, () => {
      const files = getFilesForLocale(locale)
      files.forEach((fileName) => {
        const filePath = path.join(contentDir, locale, fileName)
        const raw = fs.readFileSync(filePath, 'utf-8')
        expect(raw.trim().length).toBeGreaterThan(0)
        expect(raw.startsWith('---')).toBe(true)
        expect(raw).toContain('title:')
        expect(raw).toContain('lang:')
      })
    })

    it(`should expose valid route path mapping for ${locale}`, () => {
      const files = getFilesForLocale(locale)
      files.forEach((fileName) => {
        const route = getRouteFromFile(fileName)
        expect(route).toBeDefined()
        expect(route.length).toBeGreaterThan(0)
      })
    })
  }

  it('should have all english pages mirrored in all locales', () => {
    const enFiles = getFilesForLocale('en')
    locales.forEach((locale) => {
      if (locale === 'en') return
      const localeFiles = getFilesForLocale(locale)
      const localeSet = new Set(localeFiles)
      enFiles.forEach((fileName) => {
        expect(localeSet.has(fileName)).toBe(true)
      })
    })
  })

  it('zh should contain Chinese characters', () => {
    const zhFiles = getFilesForLocale('zh')
    expect(zhFiles.length).toBeGreaterThan(0)
    zhFiles.forEach((fileName) => {
      const filePath = path.join(contentDir, 'zh', fileName)
      const raw = fs.readFileSync(filePath, 'utf-8')
      expect(/[\u4e00-\u9fff]/.test(raw)).toBe(true)
    })
  })
})
