<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDesignTokens } from '@/utils/useDesignTokens'

const { app } = useDesignTokens()
const { t } = useI18n()
const localePath = useLocalePath()

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
        {{ t(`nav.${(item as any).key}`) }}
      </NuxtLink>
    </div>
  </nav>
</template>
