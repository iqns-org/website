import { describe, expect, it } from 'vitest'
import { extractJson } from '../scripts/translate-utils.js'

describe('extractJson', () => {
  it('parses plain JSON from a response string', () => {
    const input = 'Here is the result: {"hello":"Bonjour","world":"Monde"}'
    expect(extractJson(input)).toEqual({ hello: 'Bonjour', world: 'Monde' })
  })

  it('parses JSON inside markdown code fences', () => {
    const input = '```json\n{"hello":"Bonjour","world":"Monde"}\n```'
    expect(extractJson(input)).toEqual({ hello: 'Bonjour', world: 'Monde' })
  })

  it('parses nested JSON object with braces inside strings', () => {
    const input = 'Result:\n{"message":"Hello {user}","nested":{"value":"42"}}\nThanks.'
    expect(extractJson(input)).toEqual({ message: 'Hello {user}', nested: { value: '42' } })
  })

  it('returns null for invalid JSON responses', () => {
    const input = 'Invalid response without a JSON object'
    expect(extractJson(input)).toBeNull()
  })
})
