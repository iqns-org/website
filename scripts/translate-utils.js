export function extractJson(text) {
  if (typeof text !== 'string') return null

  const codeFenceMatch = text.match(/```(?:json)?\n([\s\S]*?)```/i)
  const candidateText = codeFenceMatch ? codeFenceMatch[1] : text

  const firstBrace = candidateText.indexOf('{')
  if (firstBrace < 0) return null

  let depth = 0
  let inString = false
  let escaped = false
  let jsonEnd = -1

  for (let i = firstBrace; i < candidateText.length; i++) {
    const char = candidateText[i]

    if (inString) {
      if (escaped) {
        escaped = false
      } else if (char === '\\') {
        escaped = true
      } else if (char === '"') {
        inString = false
      }
      continue
    }

    if (char === '"') {
      inString = true
      continue
    }

    if (char === '{') {
      depth += 1
    } else if (char === '}') {
      depth -= 1
      if (depth === 0) {
        jsonEnd = i
        break
      }
    }
  }

  if (jsonEnd < 0) return null

  const jsonText = candidateText.slice(firstBrace, jsonEnd + 1)
  try {
    return JSON.parse(jsonText)
  } catch {
    return null
  }
}
