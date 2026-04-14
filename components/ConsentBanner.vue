<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRuntimeConfig } from 'nuxt/app'
import { useLocalePath } from '#imports'

const config = useRuntimeConfig()
const runtimePublic = config.public as {
  consent?: {
    banner?: { enabled?: boolean }
  }
}

const bannerEnabled = runtimePublic.consent?.banner?.enabled ?? false
const consentKey = 'iqnsTrackingConsent'
const consentVisible = ref(false)
const consentAccepted = ref(false)
const { t } = useI18n()
const localePath = useLocalePath()

const updateConsent = (value: boolean) => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(consentKey, value ? 'accepted' : 'declined')
  consentAccepted.value = value
  consentVisible.value = false
}

onMounted(() => {
  if (!bannerEnabled) return

  const stored = window.localStorage.getItem(consentKey)
  if (stored === 'accepted') {
    consentAccepted.value = true
  } else if (stored === 'declined') {
    consentAccepted.value = false
  } else {
    consentVisible.value = true
  }
})
</script>

<template>
  <div
    v-if="bannerEnabled && consentVisible"
    class="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl border border-slate-700 bg-slate-950/95 p-4 shadow-xl shadow-slate-950/50 backdrop-blur-md text-slate-100"
    style="box-shadow: 0 24px 60px rgba(15, 23, 42, 0.3);"
  >
    <div class="mb-3">
      <p class="text-sm font-semibold text-white">{{ t('cookieConsentTitle', 'Cookie consent') }}</p>
      <p class="mt-2 text-sm leading-6 text-slate-300">
        {{ t(
          'cookieConsentMessage',
          'This site may use optional analytics and marketing tracking. Pagesense handles its own consent flow, and these controls manage additional tracking options.'
        ) }}
      </p>
    </div>
    <div class="flex flex-wrap gap-2">
      <button
        class="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500"
        type="button"
        @click="updateConsent(true)"
      >
        {{ t('accept', 'Accept') }}
      </button>
      <button
        class="rounded-full border border-slate-600 bg-transparent px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
        type="button"
        @click="updateConsent(false)"
      >
        {{ t('decline', 'Decline') }}
      </button>
      <NuxtLink
        :to="localePath('/privacy')"
        class="ml-auto self-center text-xs uppercase tracking-[0.18em] text-slate-400 transition hover:text-slate-100"
      >
        {{ t('privacyDetails', 'Privacy details') }}
      </NuxtLink>
    </div>
  </div>
</template>
