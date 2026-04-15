<script setup lang="ts">
import { computed } from 'vue'
import { useAsyncData, useHead } from 'nuxt/app'
import { useI18n } from 'vue-i18n'
import { parseFrontMatter } from '@/utils/content'

const { locale, t } = useI18n()
const currentLocale = computed(() => String(locale.value || 'en'))

const pageContent = async () => {
  try {
    const module = await import(`~/content/${currentLocale.value}/articles.md?raw`)
    return module.default
  } catch {
    try {
      const fallback = await import('~/content/en/articles.md?raw')
      return fallback.default
    } catch {
      return null
    }
  }
}

const { data: rawMarkdown } = await useAsyncData(
  () => `articles-page-${currentLocale.value}`,
  pageContent,
  { watch: [locale] }
)

const pageData = computed(() => {
  if (!rawMarkdown.value) return {} as Record<string, any>
  return parseFrontMatter(rawMarkdown.value).meta as Record<string, any>
})

useHead(() => ({
  title: pageData.value.title || t('articlesPage.title'),
  meta: [
    { name: 'description', content: pageData.value.description || t('articlesPage.description') }
  ]
}))
</script>

<template>
  <SectionBrowsePage
    section="articles"
    landingPath="/articles"
    :title="pageData.title || t('articlesPage.title')"
    :description="pageData.description || t('articlesPage.description')"
    itemLabel="Article"
    searchPlaceholder="Search by topic, keyword, or tag"
    noResultsText="No articles match your search or selected tag. Try a broader term or clear the tag filter."
  />
</template>
