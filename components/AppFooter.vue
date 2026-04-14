<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDesignTokens } from '@/utils/useDesignTokens'
import { useRuntimeConfig } from 'nuxt/app'
import ConsentBanner from '@/components/ConsentBanner.vue'

const { styles, space } = useDesignTokens()
const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const appVersion = config.public.appVersion || 'dev'
const buildTime = config.public.buildTime || new Date().toISOString()

const runtimePublic = config.public as {
  consent?: {
    banner?: { enabled?: boolean }
    marketing?: { enabled?: boolean }
    analytics?: {
      pageSense?: { enabled?: boolean; projectId?: string; baseUrl?: string }
    }
  }
}

const marketingEnabled = runtimePublic.consent?.marketing?.enabled ?? false
const pageSenseConfig = runtimePublic.consent?.analytics?.pageSense ?? {}
const pageSenseEnabled = marketingEnabled && pageSenseConfig.enabled
const bannerEnabled = runtimePublic.consent?.banner?.enabled ?? false

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

      <ConsentBanner v-if="bannerEnabled" />
  </footer>
</template>
