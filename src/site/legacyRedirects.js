// Exact legacy marketing links supplied by Homezai. Article paths are never matched.
export function legacyRedirectFor({ pathname, search = '', hash = '' }) {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/blog') return `/news/${search}`
  if (path === '/' && hash === '#benefits') return `/pricing${search}#features`
  if (path === '/' && hash === '#demo') return `/pricing${search}`
  if (path === '/pricing' && hash === '#quote-form') return `/contact${search}`
  return null
}
