import { load as yamlLoad } from 'js-yaml'

export interface FrontMatterResult {
  meta: Record<string, any>
  content: string
}

export function parseFrontMatter(text: string): FrontMatterResult {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
  if (!match) {
    return { meta: {}, content: text }
  }

  const raw = match[1]!
  const content = text.slice(match[0]!.length)
  let meta: Record<string, any> = {}
  try {
    meta = (yamlLoad(raw) as Record<string, any>) || {}
  } catch {
    // fallback to naive key:value parsing if YAML fails
    meta = raw.split('\n').reduce((acc: Record<string, any>, line) => {
      const [key, ...rest] = line.split(':')
      if (!key?.trim()) return acc
      acc[key.trim()] = rest.join(':').trim().replace(/^\"|\"$/g, '')
      return acc
    }, {})
  }

  return { meta, content }
}
