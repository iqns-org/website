<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDesignTokens } from '@/utils/useDesignTokens'
import { useRuntimeConfig } from 'nuxt/app'

const { styles, space } = useDesignTokens()
const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const appVersion = config.public.appVersion || 'dev'
const buildTime = config.public.buildTime || new Date().toISOString()
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
  </footer>
</template>
