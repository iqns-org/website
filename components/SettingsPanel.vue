<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDesignTokens } from '@/utils/useDesignTokens'
import { Sun, Moon, Coffee, Sparkles } from '@lucide/vue'

const { styles, space } = useDesignTokens()
const { t } = useI18n()

const { theme, matrixEffects, currentLang } = defineProps({ 
  theme: String, 
  matrixEffects: Boolean, 
  currentLang: String 
})
const emit = defineEmits(['update:theme', 'update:matrixEffects', 'setLocale'])

const locales = ['en', 'es', 'fr', 'de', 'pt', 'zh']
const localeLabels: Record<string, string> = { en: 'English', es: 'Español', fr: 'Français', de: 'Deutsch', pt: 'Português', zh: '中文' }
const localeFlags: Record<string, string> = { en: '🇺🇸', es: '🇪🇸', fr: '🇫🇷', de: '🇩🇪', pt: '🇵🇹', zh: '🇨🇳' }

const getToggleButtonClasses = (activeTheme: string) => [
  'flex-1 inline-flex justify-center items-center rounded-base border-none cursor-pointer transition-colors duration-fast',
  theme === activeTheme
    ? 'bg-semantic-accent-primary text-semantic-text-inverted hover:bg-semantic-accent-secondary'
    : 'bg-semantic-surface-hover text-semantic-text-primary hover:bg-semantic-accent-primary'
]

const getLocaleButtonClasses = (locale: string) => [
  'flex-1 min-w-[90px] inline-flex items-center justify-center gap-1 rounded-base border-none cursor-pointer transition-colors duration-fast',
  currentLang === locale
    ? 'bg-semantic-accent-primary text-semantic-text-inverted hover:bg-semantic-accent-secondary'
    : 'bg-semantic-surface-hover text-semantic-text-secondary hover:bg-semantic-accent-primary'
]
</script>

<template>
  <div>
    <div :style="{ padding: space('sm'), borderBottomWidth: '1px', borderBottomColor: styles.colors.semantic.border.primary }">
      <p :style="{ fontSize: styles.typography.fontSize.xs[0], fontWeight: styles.typography.fontWeight.semibold, textTransform: 'uppercase', letterSpacing: '0.05em', color: styles.colors.semantic.text.tertiary, margin: '0 0 ' + space('sm') + ' 0' }">{{ t('theme') }}</p>
      <div :style="{ display: 'flex', gap: space('xs') }">
        <button 
          @click="emit('update:theme', 'light')" 
          :class="getToggleButtonClasses('light')"
          :style="{ padding: space('sm') + ' ' + space('xs'), borderRadius: styles.borders.radius.base }"
          aria-label="Light theme"
        >
          <Sun :style="{ width: '1rem', height: '1rem' }" />
        </button>
        <button 
          @click="emit('update:theme', 'dark')" 
          :class="getToggleButtonClasses('dark')"
          :style="{ padding: space('sm') + ' ' + space('xs'), borderRadius: styles.borders.radius.base }"
          aria-label="Dark theme"
        >
          <Moon :style="{ width: '1rem', height: '1rem' }" />
        </button>
        <button 
          @click="emit('update:theme', 'sepia')" 
          :class="getToggleButtonClasses('sepia')"
          :style="{ padding: space('sm') + ' ' + space('xs'), borderRadius: styles.borders.radius.base }"
          aria-label="Sepia theme"
        >
          <Coffee :style="{ width: '1rem', height: '1rem' }" />
        </button>
      </div>
    </div>

    <div :style="{ padding: space('sm') }">
      <p :style="{ fontSize: styles.typography.fontSize.xs[0], fontWeight: styles.typography.fontWeight.semibold, textTransform: 'uppercase', letterSpacing: '0.05em', color: styles.colors.semantic.text.tertiary, margin: '0 0 ' + space('sm') + ' 0' }">{{ t('language') }}</p>
      <div :style="{ display: 'flex', flexWrap: 'wrap', gap: space('xs') }">
        <button 
          v-for="locale in locales" 
          :key="locale" 
          @click="emit('setLocale', locale)" 
          :class="getLocaleButtonClasses(locale)"
          :style="{ padding: space('sm') + ' ' + space('xs'), minWidth: '90px', fontSize: styles.typography.fontSize.xs[0], fontWeight: styles.typography.fontWeight.medium }"
          :title="localeLabels[locale]"
        >
          <span aria-hidden="true">{{ localeFlags[locale] }}</span>
          <span>{{ locale.toUpperCase() }}</span>
        </button>
      </div>
    </div>

    <div :style="{ padding: space('sm'), borderTopWidth: '1px', borderTopColor: styles.colors.semantic.border.primary }">
      <div :style="{ display: 'flex', alignItems: 'center', gap: space('sm') }">
        <button 
          @click="emit('update:matrixEffects', !matrixEffects)" 
          :class="['p-2 rounded-base transition-colors duration-fast', 'hover:bg-semantic-surface-hover']"
          :style="{ border: 'none', backgroundColor: 'transparent' }" 
          :title="matrixEffects ? 'Disable matrix effect' : 'Enable matrix effect'" 
          :aria-label="matrixEffects ? 'Disable matrix effect' : 'Enable matrix effect'"
        >
          <Sparkles :style="{ width: '1rem', height: '1rem', color: matrixEffects ? styles.colors.semantic.accent.primary : styles.colors.semantic.text.tertiary }" />
        </button>
      </div>
    </div>
  </div>
</template>
