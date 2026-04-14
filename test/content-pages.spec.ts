import { readdirSync, readFileSync } from 'fs'
import { join, parse } from 'path'
import { describe, expect, it } from 'vitest'
import MarkdownIt from 'markdown-it'
import matter from 'gray-matter'

const contentDir = join(process.cwd(), 'content', 'en')
const md = new MarkdownIt({ html: true, linkify: true, typographer: true })

const deriveRoute = (fileName: string) => {
  const { name } = parse(fileName)
  if (name === 'index') return '/' 
  return `/${name}`
}

const pages = readdirSync(contentDir).filter((file) => file.endsWith('.md'))

describe('Content pages', () => {
  it('has at least one page', () => {
    expect(pages.length).toBeGreaterThan(0)
  })

  pages.forEach((fileName) => {
    it(`renders ${fileName} without errors`, () => {
      const contentPath = join(contentDir, fileName)
      const raw = readFileSync(contentPath, 'utf-8')
      expect(raw.length).toBeGreaterThan(10)

      const parsed = matter(raw)
      expect(parsed.data).toBeTruthy()
      expect(parsed.data.title).toBeTruthy()

      const html = md.render(parsed.content || '')
      expect(html).toBeDefined()

      const route = deriveRoute(fileName)
      expect(route).toBeDefined()

      // sanity check the route is not an empty string and begins with '/'
      expect(route).toMatch(/^\//)
    })
  })
})
