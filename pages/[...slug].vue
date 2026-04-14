<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { useAsyncData, useRoute, useHead } from 'nuxt/app'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { parseFrontMatter } from '@/utils/content'

const md = new MarkdownIt({ html: true, linkify: true, typographer: true })
const defaultLinkRenderer = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))
md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const hrefIndex = tokens[idx].attrIndex('href')
  if (hrefIndex >= 0) {
    const href = tokens[idx].attrs?.[hrefIndex]?.[1]
    if (href && /^https?:\/\//.test(href)) {
      const targetIndex = tokens[idx].attrIndex('target')
      if (targetIndex < 0) tokens[idx].attrPush(['target', '_blank'])
      else tokens[idx].attrs![targetIndex][1] = '_blank'

      const relIndex = tokens[idx].attrIndex('rel')
      if (relIndex < 0) tokens[idx].attrPush(['rel', 'noopener noreferrer'])
      else tokens[idx].attrs![relIndex][1] = 'noopener noreferrer'
    }
  }
  return defaultLinkRenderer(tokens, idx, options, env, self)
}

// Pre-register all markdown files at build time — Vite resolves these statically
const contentModules = import.meta.glob('/content/**/*.md', { query: '?raw', import: 'default' })

const route = useRoute()
const { locale } = useI18n()

// @nuxtjs/i18n with prefix_except_default strips the locale prefix from route params,
// so route.params.slug for /fr/about is ['about'], not ['fr', 'about'].
// Use the i18n module's locale instead of parsing it from the slug.
const pageKey = computed(() => {
  const slugParts = route.params.slug
  const slug = Array.isArray(slugParts) ? slugParts.join('/') : String(slugParts || '')
  return slug || 'index'
})

const contentRef = computed(() => ({ locale: locale.value, pageKey: pageKey.value }))

const { data: rawMarkdown } = await useAsyncData(
  `raw-${locale.value}-${pageKey.value}`,
  async () => {
    const loc = locale.value
    const key = pageKey.value
    const candidates = [
      `/content/${loc}/${key}.md`,
      `/content/en/${key}.md`
    ]
    for (const path of candidates) {
      const loader = contentModules[path]
      if (loader) {
        try { return (await loader()) as string } catch { /* try next */ }
      }
    }
    console.warn('Markdown load failed for', loc, key)
    return null
  },
  { watch: [contentRef] }
)

const parsedData = computed(() => {
  if (!rawMarkdown.value) return null
  const parsed = parseFrontMatter(rawMarkdown.value)
  return { frontmatter: parsed.meta, content: md.render(parsed.content) }
})

const page = computed(() => parsedData.value?.frontmatter || {})
const renderedMarkdown = computed(() => parsedData.value?.content || null)

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  title: page.value.title ? `${page.value.title} — IQNS.org` : 'IQNS.org',
  meta: [
    { name: 'description', content: page.value.description || '' },
    { property: 'og:title', content: page.value.title || 'IQNS.org' },
    { property: 'og:description', content: page.value.description || '' }
  ]
}))
</script>

<template>
  <div class="max-w-4xl mx-auto py-4 prose-container">
    <article class="prose prose-invert prose-lg max-w-none prose-a:text-violet-300 prose-a:hover:text-violet-100">
      <div v-if="renderedMarkdown" v-html="renderedMarkdown" />
      <div v-else class="text-center text-violet-300">Page content missing or path invalid.</div>
    </article>
  </div>
</template>
