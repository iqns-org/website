export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/_nuxt') || to.path.startsWith('/assets') || to.path.startsWith('/api')) {
    return
  }

  // With prefix_except_default, English has no prefix.
  // Redirect stale /en/... URLs to their unprefixed canonical form.
  const enMatch = to.path.match(/^\/en(\/.*)?$/)
  if (enMatch) {
    return navigateTo(enMatch[1] || '/', { redirectCode: 301 })
  }
})
