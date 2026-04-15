<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDesignTokens } from '@/utils/useDesignTokens'
import { navTranslationKey } from '@/utils/navTranslation'

const { app } = useDesignTokens()
const { t, te } = useI18n()
const localePath = useLocalePath()

const translateNav = (key: string, fallback: string) => te(key) ? t(key) : fallback

defineProps({
  sectionNav: Array
})
</script>

<template>
  <nav 
    :class="app.sectionNav.nav"
    role="menubar"
    aria-label="Section navigation"
  >
    <div :class="app.sectionNav.container">
      <NuxtLink 
        v-for="item in sectionNav" 
        :key="(item as any).to" 
        :to="localePath((item as any).to)"
        :class="app.sectionNav.link"
        active-class="active-section-link"
      >
        {{ translateNav(navTranslationKey((item as any).key), (item as any).label) }}
      </NuxtLink>
    </div>
  </nav>
</template>
