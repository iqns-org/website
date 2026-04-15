<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useAsyncData, queryCollection } from '#imports'
import { useI18n } from 'vue-i18n'
import contentIndex from 'virtual:content-index'

const props = defineProps({
  section: { type: String, required: true },
  landingPath: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  itemLabel: { type: String, default: 'Item' },
  searchPlaceholder: { type: String, default: 'Search by topic, keyword, or tag' },
  noResultsText: { type: String, default: 'No items match your search or selected filter. Try a broader term or clear the filter.' }
})

const { locale } = useI18n()
const currentLocale = computed(() => String(locale.value || 'en'))
const searchQuery = ref('')
const selectedTag = ref('')
const searchInput = ref<HTMLInputElement | null>(null)

const normalizePath = (path: string) =>
  path.replace(/^\/(en|fr|de|es|pt|zh)(?=\/|$)/, '') || '/'

const sectionPages = computed(() =>
  contentIndex.pages
    .filter((page) => page.locale === currentLocale.value && page.section === props.section && page.to !== props.landingPath)
    .sort((a, b) => a.title.localeCompare(b.title))
)

const availableTags = computed(() => {
  const tags = new Set<string>()
  sectionPages.value.forEach((page) => (page.tags || []).forEach((tag) => tags.add(tag)))
  return Array.from(tags).sort((a, b) => a.localeCompare(b))
})

const { data: searchResults } = await useAsyncData(
  () => `section-search-${props.section}-${currentLocale.value}-${searchQuery.value}`,
  async () => {
    const query = searchQuery.value.trim()
    if (!query) return []

    const like = `%${query.replace(/[%_]/g, '\\$&')}%`
    const results = await queryCollection('content')
      .where('extension', '=', 'md')
      .andWhere((group) =>
        group
          .where('title', 'LIKE', like)
          .orWhere('description', 'LIKE', like)
      )
      .all()

    return results
      .map((item: any) => normalizePath(String(item.path || item._path || '')))
      .filter((path) => path.startsWith(props.landingPath))
  },
  { watch: [searchQuery, currentLocale] }
)

const searchPathSet = computed(() => new Set(searchResults.value || []))

const filteredPages = computed(() => {
  let list = sectionPages.value
  const query = searchQuery.value.trim()

  if (query) {
    list = list.filter((page) => searchPathSet.value.has(page.to))
  }
  if (selectedTag.value) {
    list = list.filter((page) => (page.tags || []).includes(selectedTag.value))
  }

  return list
})

onMounted(() => {
  searchInput.value?.focus()
})
</script>

<template>
  <section class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto text-center mb-12">
      <h1 class="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">{{ title }}</h1>
      <p class="mt-4 text-base leading-7 text-semantic-text-secondary">{{ description }}</p>
    </div>

    <div class="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
      <input
        ref="searchInput"
        v-model="searchQuery"
        type="search"
        :placeholder="searchPlaceholder"
        class="w-full rounded-3xl border border-semantic-border-primary bg-semantic-surface px-5 py-3 text-sm text-semantic-text-primary focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/15"
      />

      <div class="flex items-center gap-3" v-if="availableTags.length">
        <label class="text-sm font-medium text-semantic-text-secondary">Filter by tag</label>
        <select
          v-model="selectedTag"
          class="rounded-full border border-semantic-border-primary bg-semantic-surface px-4 py-2 text-sm text-semantic-text-primary focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/15"
        >
          <option value="">All tags</option>
          <option v-for="tag in availableTags" :key="tag" :value="tag">{{ tag }}</option>
        </select>
      </div>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="page in filteredPages"
        :key="page.to"
        class="group rounded-3xl border border-semantic-border-primary bg-semantic-surface-hover p-6 transition hover:-translate-y-0.5 hover:border-violet-500/40"
      >
        <NuxtLink :to="page.to" class="block h-full">
          <div class="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">{{ itemLabel }}</div>
          <h2 class="text-xl font-semibold text-white transition group-hover:text-violet-300">{{ page.title }}</h2>
          <p class="mt-3 text-sm leading-6 text-semantic-text-secondary">{{ page.description }}</p>
          <div v-if="page.tags?.length" class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tag in page.tags"
              :key="tag"
              class="rounded-full border border-semantic-border-primary bg-semantic-background-primary px-3 py-1 text-xs text-semantic-text-secondary"
            >
              {{ tag }}
            </span>
          </div>
        </NuxtLink>
      </article>
    </div>

    <div v-if="filteredPages.length === 0" class="mt-12 rounded-3xl border border-semantic-border-primary bg-semantic-surface p-8 text-center text-sm text-semantic-text-secondary">
      {{ noResultsText }}
    </div>
  </section>
</template>
