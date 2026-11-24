/*
 * Display labels for an article's tags.
 *
 * Editors type tags as search keywords ("san diego mls", "inmannews"). The design shows
 * them as readable chips, so multi word tags are title cased with the usual acronyms kept
 * upper case, and run together hashtag style tags are left out because they cannot be
 * split back into words reliably.
 */

const ACRONYMS = new Map([
  ['ai', 'AI'],
  ['mls', 'MLS'],
  ['sdmls', 'SDMLS'],
  ['crmls', 'CRMLS'],
  ['cmls', 'CMLS'],
  ['sso', 'SSO'],
  ['pr', 'PR'],
])

const SMALL_WORDS = new Set(['a', 'an', 'and', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'with'])

function titleCaseWord(word) {
  return word
    .split('-')
    .map((part) => ACRONYMS.get(part.toLowerCase()) || (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join('-')
}

export function articleTags(post) {
  const seen = new Set()
  const labels = []
  for (const raw of post?.tags || []) {
    const tag = String(raw || '').trim()
    if (!tag.includes(' ')) continue
    const label = tag
      .split(/\s+/)
      .map((word, index) => (index > 0 && SMALL_WORDS.has(word.toLowerCase()) ? word.toLowerCase() : titleCaseWord(word)))
      .join(' ')
    const key = label.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    labels.push(label)
  }
  return labels
}
