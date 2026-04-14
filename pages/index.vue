<script setup lang="ts">
import { useAsyncData, useHead } from 'nuxt/app'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { parseFrontMatter } from '@/utils/content'
import {
  ShieldCheck, Globe, Users, Zap, Network, BarChart,
  Link, Target, Building, FlaskConical, Scale,
  ArrowRight, CheckCircle
} from '@lucide/vue'

const iconMap: Record<string, any> = {
  ShieldCheck, Globe, Users, Zap, Network, BarChart,
  Link, Target, Building, FlaskConical, Scale,
  ArrowRight, CheckCircle
}

const { locale } = useI18n()
const isExternalLink = (href: unknown) => typeof href === 'string' && /^https?:\/\//.test(href)

const getRawMarkdown = async () => {
  try {
    const currentLocale = locale.value || 'en'
    const module = await import(`~/content/${currentLocale}/index.md?raw`)
    return module.default
  } catch (e) {
    console.warn('Home page markdown load failed for locale', locale.value, 'falling back to en', e)
    try {
      const module = await import('~/content/en/index.md?raw')
      return module.default
    } catch (e2) {
      return null
    }
  }
}

const { data: rawMarkdown } = await useAsyncData(
  `home-content-${locale.value}`,
  getRawMarkdown,
  { watch: [locale] }
)

const pageData = computed(() => {
  if (!rawMarkdown.value) return {} as Record<string, any>
  return parseFrontMatter(rawMarkdown.value).meta as Record<string, any>
})

useHead(() => ({
  title: pageData.value.title,
  meta: [
    { name: 'description', content: pageData.value.description },
    { property: 'og:title', content: pageData.value.title },
    { property: 'og:description', content: pageData.value.description }
  ]
}))
</script>

<template>
  <div v-if="pageData.hero && pageData.value_props && pageData.iqns && pageData.frameworks && pageData.industries && pageData.cta_final">
    <!-- ── Hero ── -->
    <section class="relative min-h-[92vh] flex items-center justify-center overflow-visible pb-2">
      <div class="absolute inset-0 pointer-events-none overflow-hidden bg-hero-gradient"></div>
      <div class="relative z-10 container mx-auto px-4 py-12 text-center max-w-4xl">
        <h1 class="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent mb-8 p-1">
          {{ pageData.hero?.title }}
        </h1>
        <p class="text-2xl text-semantic-text-secondary mb-8 font-medium">
          {{ pageData.hero?.subtitle }}
        </p>
        <p class="text-base text-semantic-text-tertiary mb-10 max-w-2xl mx-auto leading-relaxed">
          {{ pageData.hero?.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="pageData.hero?.cta_primary_href"
            :target="isExternalLink(pageData.hero?.cta_primary_href) ? '_blank' : null"
            :rel="isExternalLink(pageData.hero?.cta_primary_href) ? 'noopener noreferrer' : null"
            class="px-7 py-3.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 transition-all duration-200 text-sm"
          >
            {{ pageData.hero?.cta_primary }}
          </NuxtLink>
          <NuxtLink
            :to="pageData.hero?.cta_secondary_href"
            :target="isExternalLink(pageData.hero?.cta_secondary_href) ? '_blank' : null"
            :rel="isExternalLink(pageData.hero?.cta_secondary_href) ? 'noopener noreferrer' : null"
            class="px-7 py-3.5 bg-semantic-surface-hover text-semantic-text-primary font-semibold rounded-lg border border-semantic-border-primary hover:border-violet-500/50 hover:-translate-y-0.5 transition-all duration-200 text-sm"
          >
            {{ pageData.hero?.cta_secondary }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── Why IQ:NS ── -->
    <section class="py-20 bg-semantic-background-secondary">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-3">{{ pageData.value_props?.heading }}</h2>
          <p class="text-semantic-text-secondary max-w-xl mx-auto text-sm leading-relaxed">{{ pageData.value_props?.subheading }}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(item, i) in (pageData.value_props?.items || []).filter(Boolean)"
            :key="i"
            class="p-6 rounded-xl border border-semantic-border-primary bg-semantic-surface-hover hover:border-violet-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div class="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
              <component :is="iconMap[item?.icon]" class="w-5 h-5 text-violet-400" />
            </div>
            <h3 class="text-base font-semibold text-white mb-2">{{ item?.title }}</h3>
            <p class="text-semantic-text-secondary text-sm leading-relaxed">{{ item?.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── IQNS Pillars ── -->
    <section class="py-20 bg-semantic-background-primary">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <span class="text-xs font-bold tracking-widest text-violet-400 uppercase">{{ pageData.iqns?.badge }}</span>
          <h2 class="text-3xl font-bold text-white mt-3 mb-3">{{ pageData.iqns?.heading }}</h2>
          <p class="text-semantic-text-secondary max-w-xl mx-auto text-sm leading-relaxed">{{ pageData.iqns?.description }}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(pillar, i) in (pageData.iqns?.pillars || []).filter(Boolean)"
            :key="i"
            class="p-6 rounded-xl border border-semantic-border-primary bg-semantic-surface-hover hover:border-violet-400/40 transition-all duration-200"
          >
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center group-hover:from-violet-500/30 group-hover:to-indigo-500/30 transition-all">
                <component :is="iconMap[pillar?.icon]" class="w-5 h-5 text-violet-300" />
              </div>
              <h3 class="text-base font-semibold text-white mb-0">{{ pillar?.title }}</h3>
            </div>
            <p class="text-semantic-text-secondary text-sm leading-relaxed">{{ pillar?.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Frameworks ── -->
    <section class="py-10 bg-semantic-background-secondary">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-white mb-3">{{ pageData.frameworks?.heading }}</h2>
          <p class="text-semantic-text-secondary max-w-xl mx-auto text-sm leading-relaxed">{{ pageData.frameworks?.description }}</p>
        </div>
        <div class="flex flex-wrap gap-2 justify-center">
          <span
            v-for="(fw, i) in (pageData.frameworks?.items || [])"
            :key="i"
            class="px-3 py-1.5 rounded-full border border-semantic-border-primary bg-semantic-surface-hover text-semantic-text-secondary text-xs font-medium hover:border-violet-500/50 hover:text-violet-300 transition-colors"
          >{{ fw }}</span>
        </div>
        <div class="text-center mt-8">
          <NuxtLink to="/regulations" class="inline-flex items-center gap-1.5 text-violet-400 text-sm hover:text-violet-300 transition-colors">
            Browse all frameworks <ArrowRight class="w-3.5 h-3.5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── Industries ── -->
    <section class="py-20 bg-semantic-background-primary">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-3">{{ pageData.industries?.heading }}</h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(item, i) in (pageData.industries?.items || []).filter(Boolean)"
            :key="i"
            class="p-6 rounded-xl border border-semantic-border-primary bg-semantic-surface-hover hover:border-violet-500/40 transition-all duration-200"
          >
            <div class="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
              <component :is="iconMap[item?.icon]" class="w-5 h-5 text-indigo-400" />
            </div>
            <h3 class="text-base font-semibold text-white mb-2">{{ item?.title }}</h3>
            <p class="text-semantic-text-secondary text-sm leading-relaxed">{{ item?.description }}</p>
          </div>
        </div>
        <div class="text-center mt-8">
          <NuxtLink to="/industries" class="inline-flex items-center gap-1.5 text-violet-400 text-sm hover:text-violet-300 transition-colors">
            See all use cases <ArrowRight class="w-3.5 h-3.5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="py-20 bg-semantic-background-primary">
      <div class="container mx-auto px-4 text-center max-w-2xl">
        <h2 class="text-3xl font-bold text-white mb-4">{{ pageData.cta_final?.heading }}</h2>
        <p class="text-semantic-text-tertiary text-sm mb-8 leading-relaxed">{{ pageData.cta_final?.subheading }}</p>
        <NuxtLink
          :to="pageData.cta_final?.cta_href"
          :target="isExternalLink(pageData.cta_final?.cta_href) ? '_blank' : null"
          :rel="isExternalLink(pageData.cta_final?.cta_href) ? 'noopener noreferrer' : null"
          class="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 transition-all duration-200"
        >
          {{ pageData.cta_final?.cta_text }}
          <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-hero-gradient {
  background: radial-gradient(ellipse 600px 300px at center 30%, rgba(192, 132, 252, 0.18), transparent 70%);
  pointer-events: none;
}
</style>
