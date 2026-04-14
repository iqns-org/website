<script setup lang="ts">
import { useDesignTokens } from '@/utils/useDesignTokens'

const { styles, space } = useDesignTokens()

defineProps({
  isOpen: Boolean,
  position: { type: String as () => 'left' | 'right' | 'center', default: 'left' }
})
</script>

<template>
  <transition name="dropdown-fade">
    <div 
      v-show="isOpen"
      class="dropdown-panel bg-semantic-surface-base border-semantic-border-primary"
      :style="{ position: 'absolute', left: position === 'right' ? 'auto' : 0, right: position === 'right' ? 0 : 'auto', top: '100%', marginTop: space('sm'), minWidth: '14rem', borderRadius: styles.borders.radius.md, borderWidth: '1px', boxShadow: styles.shadows.lg, zIndex: 200, backdropFilter: 'blur(4px)' }"
    >
      <slot />
    </div>
  </transition>
</template>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.15s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
}
</style>
