<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useMatrixRain } from '@/composables/useMatrixRain'
import { useDesignTokens } from '@/utils/useDesignTokens'

const props = defineProps({ matrixEffects: Boolean })
const { matrixCanvas, matrixEffects, startMatrixRain, stopMatrixRain } = useMatrixRain()
const { app } = useDesignTokens()

const mouseX = ref(0.5)
const mouseY = ref(0.5)

const onMouseMove = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  mouseX.value = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1)
  mouseY.value = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1)
  document.documentElement.style.setProperty('--mouse-x', String(mouseX.value))
  document.documentElement.style.setProperty('--mouse-y', String(mouseY.value))
}

onMounted(() => {
  if (props.matrixEffects) {
    matrixEffects.value = true
    startMatrixRain()
  }
})

watch(
  () => props.matrixEffects,
  (enabled) => {
    matrixEffects.value = enabled
  },
  { immediate: true }
)

watch(matrixEffects, () => {
  if (matrixEffects.value) {
    startMatrixRain()
  } else {
    stopMatrixRain()
  }
})
</script>

<template>
  <div @mousemove="onMouseMove" :class="app.matrixRain.container">
    <canvas ref="matrixCanvas" :class="app.matrixRain.canvas" style="z-index: 1;" />
    <slot />
  </div>
</template>
