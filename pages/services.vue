<script setup lang="ts">
import { useAsyncData, useHead } from 'nuxt/app'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { parseFrontMatter } from '@/utils/content'
import { CheckCircle, Bell, Layers, Users, ShieldCheck, ArrowRight } from '@lucide/vue'

const isExternalLink = (href: unknown) => typeof href === 'string' && /^https?:\/\//.test(href)

const iconMap: Record<string, any> = { Bell, Layers, Users, ShieldCheck }

const { locale } = useI18n()

const contentModules = import.meta.glob('/content/**/*.md', { query: '?raw', import: 'default' })

const { data: rawMarkdown } = await useAsyncData(
  `services-content-${locale.value}`,
  async () => {
    const currentLocale = locale.value || 'en'
    const loader = contentModules[`/content/${currentLocale}/services.md`] || contentModules['/content/en/services.md']
    if (loader) return (await loader()) as string
    return null
  },
  { watch: [locale] }
)

const pageData = computed(() => {
  const source = rawMarkdown.value ? (parseFrontMatter(rawMarkdown.value).meta as Record<string, any>) : {}
  return source
})

useHead(() => ({
  title: pageData.value.title ? `${pageData.value.title}` : '',
  meta: [{ name: 'description', content: pageData.value.description || '' }]
}))

const annualBilling = ref(false)
const billingMode = computed(() => (annualBilling.value ? 'annual' : 'monthly'))
const priceFor = (plan: Record<string, any>) => plan[billingMode.value]?.price || plan.price
const periodFor = (plan: Record<string, any>) => plan[billingMode.value]?.period || plan.period

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="min-h-screen">
    <!-- Header -->
    <section class="py-16 text-center">
      <div class="container mx-auto px-4 max-w-2xl">
        <h1 class="text-4xl font-extrabold text-white mb-4 tracking-tight">{{ pageData.tagline || '' }}</h1>
        <p class="text-slate-400 text-sm leading-relaxed">{{ pageData.subtagline }}</p>
        <p v-if="pageData.trust_signal" class="mt-4 text-slate-500 text-xs uppercase tracking-[0.25em]">{{ pageData.trust_signal }}</p>
      </div>
    </section>

    <!-- Plans -->
    <section class="pb-16">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="flex flex-col items-center gap-4 mb-10 sm:flex-row sm:justify-center">
          <div class="inline-flex rounded-full border border-slate-800 bg-slate-900/80 p-1">
            <button
              @click="annualBilling = false"
              :class="['px-4 py-2 rounded-full text-sm font-semibold transition', annualBilling ? 'text-slate-400 hover:text-slate-200' : 'bg-slate-800 text-white']"
            >Monthly</button>
            <button
              @click="annualBilling = true"
              :class="['px-4 py-2 rounded-full text-sm font-semibold transition', annualBilling ? 'bg-violet-500 text-slate-950' : 'text-slate-400 hover:text-slate-200']"
            >Annual</button>
          </div>
          <p class="text-slate-400 text-xs tracking-wide uppercase">{{ pageData.annual_note }}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6 items-start">
          <div
            v-for="plan in (pageData.plans || [])"
            :key="plan.id"
            :class="[
              'relative rounded-2xl border p-8 flex flex-col',
              plan.highlight
                ? 'border-violet-500 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_0_40px_rgba(192,132,252,0.15)]'
                : 'border-slate-800 bg-slate-900/60'
            ]"
          >
            <!-- Popular badge -->
          <div v-if="plan.highlight" class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-violet-500 text-slate-950 text-xs font-bold rounded-full tracking-wide uppercase">Most Popular</div>

            <div class="mb-6">
              <h2 class="text-lg font-bold text-white mb-1">{{ plan.name }}</h2>
              <p class="text-slate-400 text-xs mb-5">{{ plan.tagline }}</p>
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-extrabold text-white">{{ priceFor(plan) }}</span>
                <span v-if="periodFor(plan)" class="text-slate-400 text-sm">{{ periodFor(plan) }}</span>
              </div>
            </div>

            <ul class="space-y-2.5 mb-8 flex-grow">
              <li v-for="(feat, fi) in (plan.features || [])" :key="fi" class="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle class="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                {{ feat }}
              </li>
            </ul>

            <NuxtLink
              :to="plan.cta_href || '/support'"
              :target="isExternalLink(plan.cta_href) ? '_blank' : null"
              :rel="isExternalLink(plan.cta_href) ? 'noopener noreferrer' : null"
              :class="[
                'block text-center py-3 rounded-lg text-sm font-semibold transition-all duration-200',
                plan.highlight
                  ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5'
                  : 'bg-slate-800 text-slate-200 border border-slate-700 hover:border-violet-500/50 hover:-translate-y-0.5'
              ]"
            >{{ plan.cta }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Guarantee bar -->
    <section class="py-10 bg-slate-900 border-y border-slate-800">
      <div class="container mx-auto px-4 max-w-5xl">
        <p class="text-xs font-bold tracking-widest text-slate-500 uppercase text-center mb-5">{{ pageData.guarantee?.heading }}</p>
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-3">
          <div
            v-for="(item, i) in (pageData.guarantee?.items || [])"
            :key="i"
            class="flex items-center gap-2 text-sm text-slate-300"
          >
            <CheckCircle class="w-4 h-4 text-violet-500 shrink-0" />
            {{ item }}
          </div>
        </div>
      </div>
    </section>

    <!-- Add-ons -->
    <section class="py-16" id="addons">
      <div class="container mx-auto px-4 max-w-5xl">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-bold text-white mb-2">{{ pageData.addons?.heading }}</h2>
          <p class="text-slate-400 text-sm">{{ pageData.addons?.subheading }}</p>
        </div>
        <div class="grid sm:grid-cols-2 gap-5">
          <div
            v-for="(addon, i) in (pageData.addons?.items || [])"
            :key="i"
            class="p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-colors"
          >
            <div class="flex items-start gap-4">
              <div class="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                <component :is="iconMap[addon.icon] || ShieldCheck" class="w-4 h-4 text-indigo-400" />
              </div>
              <div>
                <div class="flex items-baseline gap-2 mb-1">
                  <h3 class="text-sm font-semibold text-white">{{ addon.title }}</h3>
                  <span class="text-xs text-violet-400 font-medium">{{ addon.price }}</span>
                </div>
                <p class="text-slate-400 text-sm leading-relaxed">{{ addon.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 bg-slate-900">
      <div class="container mx-auto px-4 max-w-2xl">
        <h2 class="text-2xl font-bold text-white text-center mb-10">{{ pageData.faq?.heading }}</h2>
        <div class="space-y-3">
          <div
            v-for="(item, i) in (pageData.faq?.items as Array<{ q: string; a: string}> || [])"
            :key="i"
            class="border border-slate-800 rounded-xl overflow-hidden"
          >
            <button
              @click="toggleFaq(i)"
              class="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-slate-200 hover:text-white transition-colors bg-slate-900/50 hover:bg-slate-800/50"
            >
              {{ item.q }}
              <ArrowRight
                :class="['w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-4', openFaq === i ? 'rotate-90' : '']"
              />
            </button>
            <div v-show="openFaq === i" class="px-5 py-4 text-sm text-slate-400 leading-relaxed border-t border-slate-800 bg-slate-900/30">
              {{ item.a }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16">
      <div class="container mx-auto px-4 text-center max-w-xl">
        <h2 class="text-2xl font-bold text-white mb-3">Not sure which plan fits?</h2>
        <p class="text-slate-400 text-sm mb-7">Talk to us. We'll help you figure out the right starting point — no pressure.</p>
        <NuxtLink
          to="/support"
          class="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 transition-all duration-200 text-sm"
        >
          Get in touch <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
