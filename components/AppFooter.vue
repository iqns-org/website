<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDesignTokens } from '@/utils/useDesignTokens'
import { useRuntimeConfig } from 'nuxt/app'

const { styles, space } = useDesignTokens()
const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const appVersion = config.public.appVersion || 'dev'
const buildTime = config.public.buildTime || new Date().toISOString()

const runtimePublic = config.public as {
  consent?: {
    marketing?: { enabled?: boolean }
    analytics?: {
      pageSense?: { enabled?: boolean; projectId?: string; baseUrl?: string }
    }
  }
}

const marketingEnabled = runtimePublic.consent?.marketing?.enabled ?? false
const pageSenseConfig = runtimePublic.consent?.analytics?.pageSense ?? {}
const pageSenseEnabled = marketingEnabled && pageSenseConfig.enabled
const consentKey = 'iqnsTrackingConsent'
const consentVisible = ref(false)
const consentAccepted = ref(false)

const loadPageSense = () => {
  if (!pageSenseEnabled) return
  if (typeof document === 'undefined') return
  if (!pageSenseConfig.projectId || !pageSenseConfig.baseUrl) return
  if (document.querySelector(`script[src*="${pageSenseConfig.baseUrl}/"]`)) return

  const e = document.createElement('script')
  e.type = 'text/javascript'
  e.async = true
  e.src = `${pageSenseConfig.baseUrl}/${pageSenseConfig.projectId}.js`
  const x = document.getElementsByTagName('script')[0]
  x?.parentNode?.insertBefore(e, x)
}

const updateConsent = (value: boolean) => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(consentKey, value ? 'accepted' : 'declined')
  consentAccepted.value = value
  consentVisible.value = false
}

onMounted(() => {
  const stored = window.localStorage.getItem(consentKey)
  if (stored === 'accepted') {
    consentAccepted.value = true
  } else if (stored === 'declined') {
    consentAccepted.value = false
  } else {
    consentVisible.value = true
  }

  if (pageSenseEnabled) {
    loadPageSense()
  }
})
</script>

<template>
  <footer 
    class="bg-semantic-surface-base text-semantic-text-secondary"
    :style="{ 
      paddingTop: space('lg'), 
      paddingBottom: space('lg'), 
      zIndex: 10, 
      position: 'relative' 
    }"
  >
    <div :style="{ maxWidth: styles.layout.container.maxWidth, margin: '0 auto', padding: '0 ' + space('lg'), fontSize: styles.typography.fontSize.sm[0] }">
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: space('lg'), flexWrap: 'wrap' }">
        <p :style="{ margin: 0 }">© {{ new Date().getFullYear() }} IQNS.org - All rights reserved.</p>
        <div :style="{ display: 'flex', alignItems: 'center', gap: space('lg') }">
          <NuxtLink 
            :to="localePath('/privacy')" 
            :style="{ 
              color: styles.colors.semantic.text.secondary, 
              textDecoration: 'none', 
              transition: 'color ' + styles.animations.duration.fast, 
              cursor: 'pointer' 
            }"
          >
            {{ t('privacy') }}
          </NuxtLink>
          <NuxtLink 
            :to="localePath('/terms')" 
            :style="{ 
              color: styles.colors.semantic.text.secondary, 
              textDecoration: 'none', 
              transition: 'color ' + styles.animations.duration.fast, 
              cursor: 'pointer' 
            }"
          >
            {{ t('terms') }}
          </NuxtLink>
        </div>
        <p :style="{ margin: 0, fontSize: styles.typography.fontSize.xs[0], opacity: '0.25' }">v: {{ appVersion }} @ {{ buildTime }}</p>
      </div>
    </div>

    <div
      v-if="consentVisible"
      class="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl border border-slate-700 bg-slate-950/95 p-4 shadow-xl shadow-slate-950/50 backdrop-blur-md text-slate-100"
      style="box-shadow: 0 24px 60px rgba(15, 23, 42, 0.3);"
    >
      <div class="mb-3">
        <p class="text-sm font-semibold text-white">Cookie consent</p>
        <p class="mt-2 text-sm leading-6 text-slate-300">
          This site may use optional analytics and marketing tracking. Pagesense handles its own consent flow, and these controls manage additional tracking options.
        </p>
      </div>
      <div class="flex flex-wrap gap-2">
        <button
          class="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500"
          type="button"
          @click="updateConsent(true)"
        >
          Accept
        </button>
        <button
          class="rounded-full border border-slate-600 bg-transparent px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
          type="button"
          @click="updateConsent(false)"
        >
          Decline
        </button>
        <NuxtLink
          :to="localePath('/privacy')"
          class="ml-auto self-center text-xs uppercase tracking-[0.18em] text-slate-400 transition hover:text-slate-100"
        >
          Privacy details
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
