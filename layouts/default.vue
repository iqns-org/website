<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { useMatrixRain } from '@/composables/useMatrixRain'
import { useDesignTokens } from '@/utils/useDesignTokens'

const { app } = useDesignTokens()

const { theme, initTheme, applyTheme } = useTheme()
const { matrixEffects, startMatrixRain, stopMatrixRain, initMatrixEffects } = useMatrixRain()

onMounted(() => {
  // Initialize theme and matrix effects from localStorage
  initTheme()
  initMatrixEffects()
  if (matrixEffects.value) {
    startMatrixRain()
  }
})

onUnmounted(() => {
  stopMatrixRain()
})

const handleThemeChange = (newTheme: string) => {
  theme.value = newTheme
  applyTheme(newTheme)
  // Restart matrix animation with new theme colors
  if (matrixEffects.value) {
    stopMatrixRain()
    startMatrixRain()
  }
}
</script>

<template>
  <MatrixRain :matrix-effects="matrixEffects">
    <AppHeader 
      :theme="theme"
      :matrix-effects="matrixEffects"
      @update:theme="handleThemeChange"
      @update:matrix-effects="matrixEffects = $event"
    />

    <main id="main-content" :class="app.mainContent" tabindex="-1">
      <NuxtPage />
    </main>

    <AppFooter />
  </MatrixRain>
</template>
