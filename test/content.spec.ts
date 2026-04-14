import { describe, it, expect } from 'vitest'
import { parseFrontMatter } from '../utils/content'

describe('parseFrontMatter', () => {
  it('parses front-matter and content correctly', () => {
    const markdown = `---\ntitle: \"Hello\"\ndescription: \"Test desc\"\n---\n# Hello`;
    const result = parseFrontMatter(markdown)

    expect(result.meta.title).toBe('Hello')
    expect(result.meta.description).toBe('Test desc')
    expect(result.content.trim()).toBe('# Hello')
  })

  it('returns empty meta if no front-matter', () => {
    const markdown = '# No frontmatter'
    const result = parseFrontMatter(markdown)

    expect(result.meta).toEqual({})
    expect(result.content).toBe(markdown)
  })
})
