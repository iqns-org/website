<script setup lang="ts">
import { useRouter, useRoute, useHead } from 'nuxt/app'

const router = useRouter()
const route = useRoute()
const locale = route.path.split('/')[1]
const hasLocale = ['fr', 'de', 'es', 'pt', 'zh'].includes(locale)

const target = hasLocale ? `/${locale}/support` : '/support'

useHead({
  title: 'Redirecting…',
  meta: [{ name: 'robots', content: 'noindex' }]
})

router.replace(target)
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-6 py-16 text-center">
    <div>
      <p class="text-sm text-slate-400">Redirecting to support…</p>
    </div>
  </div>
</template>
