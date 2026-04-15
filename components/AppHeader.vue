<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNavigation } from '@/composables/useNavigation'
import { useDesignTokens } from '@/utils/useDesignTokens'
import { navTranslationKey } from '@/utils/navTranslation'
import logoSrc from '~/assets/images/logo.svg'
import {
  Lightbulb, Zap, CreditCard, Lock, EyeOff, ArrowRight,
  Brain, Scale, AlertTriangle, Library,
  ShieldAlert, FileCheck, Database, BarChart2, Code2, Cpu,
  Building2, Mail, HelpCircle
} from '@lucide/vue'

const { styles, app, space } = useDesignTokens()
const { t } = useI18n()
const localePath = useLocalePath()

const navIconMap: Record<string, any> = {
  about: Building2,
  gettingStarted: ArrowRight,
  why: Lightbulb,
  features: Zap,
  pricing: CreditCard,
  services: CreditCard,
  support: Mail,
  security: Lock,
  privacy: EyeOff,
  contact: Mail,
  aiGovernance: Brain,
  regulations: Scale,
  risk: AlertTriangle,
  risks: AlertTriangle,
  resources: Library,
  securityCiso: ShieldAlert,
  legalCompliance: FileCheck,
  dataAiStewards: Database,
  executive: BarChart2,
  softwareEngineering: Code2,
  tech: Cpu,
  faq: HelpCircle
}

const sectionLabel = (key: string) => {
  try {
    return t(`nav.${key}`)
  } catch {
    return key
  }
}

const { activeMenu, mobileMenuOpen, currentLocale, sectionMap, sectionNav, buildGlobalNav, openDropdown, scheduleClose, cancelClose, toggleDropdown, toggleMobileMenu, closeMobileMenu, handleOutsideClick, setLocale } = useNavigation()

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

onMounted(() => {
  buildGlobalNav()
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
})

defineProps({ theme: String, matrixEffects: Boolean })
const emit = defineEmits(['update:theme', 'update:matrixEffects'])
</script>

<template>
  <header 
    :class="[app.header.header, 'border-semantic-border-primary']"
    :style="{ backgroundColor: theme === 'light' ? styles.colors.semantic.surface.baseOpaqueLight : theme === 'sepia' ? styles.colors.semantic.surface.baseOpaqueSepia : styles.colors.semantic.surface.baseOpaqueDark }"
  >
    <div :style="{ maxWidth: styles.layout.container.maxWidth, margin: '0 auto', padding: styles.spacing.md + ' ' + space('lg'), display: 'flex', alignItems: 'center', justifyContent: 'space-between' }">
      <NuxtLink 
        :to="localePath('/')" 
        @click="scrollToTop"
        :style="{ display: 'flex', alignItems: 'center' }" 
        aria-label="IQ:NS  home"
      >
        <img :src="logoSrc" alt="IQNS.org" :style="{ height: '2.5rem', width: 'auto' }" />
      </NuxtLink>

      <!-- Desktop Navigation (hidden on mobile) -->
      <div class="hidden md:flex" :style="{ alignItems: 'center', gap: space('sm') }">
        <Navigation :section-map="sectionMap" :active-menu="activeMenu" :current-locale="currentLocale" @open-dropdown="openDropdown" @close-dropdown="scheduleClose" @toggle-dropdown="toggleDropdown" />
      </div>

      <!-- Mobile + Settings Controls -->
      <div :style="{ display: 'flex', alignItems: 'center', gap: space('sm') }">
        <!-- Mobile Menu Button (visible on mobile) -->
        <button 
          @click="toggleMobileMenu()"
          class="md:hidden inline-flex items-center p-2 rounded bg-transparent border-none text-semantic-text-primary cursor-pointer transition-colors duration-fast hover:bg-semantic-surface-hover"
          @focus="null"
          aria-label="Toggle menu"
          :aria-expanded="mobileMenuOpen"
        >
            <svg style="width:1.5rem; height:1.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Settings Button -->
        <div 
          :style="{ position: 'relative' }" 
          @mouseenter="openDropdown('settings')" 
          @mouseleave="scheduleClose()"
        >
          <button 
            class="text-semantic-text-primary"
            @click="toggleDropdown('settings')" 
            :style="{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: space('sm'), 
              padding: space('sm') + ' ' + space('md'), 
              borderRadius: styles.borders.radius.base, 
              backgroundColor: 'transparent', 
              border: 'none', 
              cursor: 'pointer', 
              transition: 'background-color ' + styles.animations.duration.fast,
              outline: 'none'
            }" 
            @focus="$el.style.outline = 'none'"
            aria-label="Site Settings"
          >
            <svg :style="{ width: '1rem', height: '1rem' }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          <Dropdown :is-open="activeMenu === 'settings'" position="right" @mouseenter="cancelClose()" @mouseleave="scheduleClose()">
            <SettingsPanel 
              :theme="theme" 
              :matrix-effects="matrixEffects" 
              :current-lang="currentLocale" 
              @update:theme="(v: any) => emit('update:theme', v)" 
              @update:matrix-effects="(v: any) => emit('update:matrixEffects', v)" 
              @set-locale="setLocale" 
            />
          </Dropdown>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu (visible on mobile when open) -->
    <div 
      class="md:hidden bg-semantic-surface-base border-t border-semantic-border-primary transition-all duration-normal"
      :class="mobileMenuOpen ? 'overflow-y-auto' : 'overflow-hidden'"
      :style="{
        maxHeight: mobileMenuOpen ? 'calc(100vh - 4rem)' : '0px',
        WebkitOverflowScrolling: 'touch',
        overscrollBehavior: mobileMenuOpen ? 'contain' : 'auto'
      }"
    >
      <div class="p-md flex flex-col gap-sm">
        <template v-for="(items, section) in (sectionMap as any)" :key="section">
            <div class="pb-md border-b border-semantic-border-primary">
              <div class="text-xs font-semibold uppercase tracking-wider text-semantic-text-tertiary mb-sm" style="letter-spacing:0.05em;">
                {{ t(navTranslationKey(String(section))) }}
              </div>
              <div class="flex flex-col gap-xs">
              <NuxtLink 
                v-for="child in items" 
                :key="child.to" 
                :to="localePath(child.to)"
                @click="closeMobileMenu()"
                class="flex items-center gap-sm px-md py-sm bg-transparent text-semantic-text-secondary transition-colors duration-fast cursor-pointer rounded-base outline-none hover:bg-semantic-surface-hover"
              >
                <component :is="navIconMap[child.key]" v-if="navIconMap[child.key]" class="w-3.5 h-3.5 shrink-0 opacity-70" />
                {{ t(navTranslationKey(child.key)) }}
              </NuxtLink>
            </div>
          </div>
        </template>
        <div class="pt-md">
          <NuxtLink 
            :to="localePath('/')" 
            @click="closeMobileMenu(); scrollToTop()"
            class="block px-md py-sm bg-transparent text-semantic-text-secondary transition-colors duration-fast cursor-pointer rounded-base outline-none hover:bg-semantic-surface-hover"
          >
            {{ t('nav.home') }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <SectionNavigation :section-nav="sectionNav" />
  </header>
</template>
