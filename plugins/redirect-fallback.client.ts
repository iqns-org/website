import { defineNuxtPlugin } from '#app'
import { useRoute, useRouter } from 'vue-router'

export default defineNuxtPlugin(() => {
  const route = useRoute()
  const router = useRouter()
  const redirect = route.query.redirect

  if (redirect && typeof redirect === 'string') {
    const decoded = decodeURIComponent(redirect)
    // avoid infinite loop by only redirecting when not already at target
    if (decoded !== route.path) {
      router.replace(decoded).catch(() => {
        // fallback to home if router fails
        router.replace('/').catch(() => {})
      })
    }
  }
})
