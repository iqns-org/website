<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDesignTokens } from '@/utils/useDesignTokens'
import {
  Home, Building2, Workflow, Layers, ShieldCheck, Users, Mail,
  Lightbulb, Zap, CreditCard, Lock, EyeOff, ArrowRight,
  Brain, Scale, AlertTriangle, Library,
  ShieldAlert, FileCheck, Database, BarChart2, Code2, Cpu
} from '@lucide/vue'

const { styles, space } = useDesignTokens()
const { t } = useI18n()
const localePath = useLocalePath()

defineProps({ 
  sectionMap: Object, 
  activeMenu: [String, null], 
  currentLocale: String 
})
const emit = defineEmits(['openDropdown', 'closeDropdown', 'toggleDropdown', 'cancelClose'])

const iconMap: Record<string, any> = {
  Home, Building2, Workflow, Layers, ShieldCheck, Users, Mail,
  Lightbulb, Zap, CreditCard, Lock, EyeOff,
  Brain, Scale, AlertTriangle, Library,
  ShieldAlert, FileCheck, Database, BarChart2, Code2, Cpu
}

// Icons for dropdown child items, keyed by nav key
const navIconMap: Record<string, any> = {
  // platform
  why: Lightbulb,
  features: Zap,
  howItWorks: Workflow,
  pricing: CreditCard,
  security: Lock,
  privacy: EyeOff,
  // governance
  aiGovernance: Brain,
  regulations: Scale,
  risk: AlertTriangle,
  risks: AlertTriangle,
  resources: Library,
  about: Building2,
  gettingStarted: ArrowRight,
  // use cases
  securityCiso: ShieldAlert,
  legalCompliance: FileCheck,
  dataAiStewards: Database,
  executive: BarChart2,
  softwareEngineering: Code2,
  tech: Cpu
}

const topNav = [
  { label: 'home', to: '/', icon: 'Home' },
  { label: 'about', to: '/about', icon: 'Building2' },
  { label: 'platform', icon: 'Layers', section: 'platform' },
  { label: 'ontologies', icon: 'ShieldCheck', section: 'ontologies' },
  { label: 'useCases', icon: 'Users', section: 'useCases' },
  { label: 'contact', to: '/contact', icon: 'Mail' }
]
</script>

<template>
  <nav 
    class="text-semantic-text-secondary"
    :style="{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      alignItems: 'center', 
      gap: space('sm'), 
      fontSize: styles.typography.fontSize.sm[0], 
      fontWeight: styles.typography.fontWeight.medium 
    }" 
    role="menubar" 
    aria-label="Main navigation"
  >
    <template v-for="item in topNav" :key="item.label">
      <template v-if="item.section">
        <div 
          :style="{ position: 'relative' }" 
          @mouseenter="emit('openDropdown', item.label)" 
          @mouseleave="emit('closeDropdown')"
        >
          <button 
            class="text-semantic-text-secondary hover:text-semantic-text-primary"
            @click="emit('toggleDropdown', item.label)" 
            @keydown.enter.prevent="emit('toggleDropdown', item.label)" 
            @keydown.space.prevent="emit('toggleDropdown', item.label)" 
            @keydown.arrowdown.prevent="emit('openDropdown', item.label)" 
            @keydown.escape.prevent="emit('closeDropdown')" 
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
            role="menuitem" 
            aria-haspopup="true" 
            :aria-expanded="activeMenu === item.label"
          >
            <component :is="iconMap[item.icon] || Layers" :style="{ width: '1rem', height: '1rem' }" />
            {{ t(`nav.${item.label}`) }}
          </button>
          <div 
            v-show="activeMenu === item.label" 
            @mouseenter="emit('cancelClose')" 
            @mouseleave="emit('closeDropdown')"
            class="nav-menu-panel"
            :style="{ 
              position: 'absolute', 
              left: 0, 
              top: '100%', 
              minWidth: '12rem', 
              borderRadius: styles.borders.radius.md, 
              fontSize: styles.typography.fontSize.sm[0], 
              zIndex: 200, 
              backdropFilter: 'blur(4px)',
              pointerEvents: activeMenu === item.label ? 'auto' : 'none'
            }" 
            role="menu"
          >
            <NuxtLink 
              v-for="child in (sectionMap as any)?.[item.section] || []" 
              :key="child.to" 
              :to="localePath(child.to)"
              @mouseenter="emit('cancelClose')"
              @click="emit('closeDropdown')"
              :style="{ 
                display: 'flex',
                alignItems: 'center',
                gap: space('sm'),
                padding: space('sm') + ' ' + space('md'), 
                backgroundColor: 'transparent', 
                textDecoration: 'none', 
                color: 'inherit', 
                transition: 'background-color ' + styles.animations.duration.fast, 
                cursor: 'pointer' 
              }" 
              role="menuitem"
            >
              <component :is="navIconMap[child.key]" v-if="navIconMap[child.key]" :style="{ width: '0.875rem', height: '0.875rem', flexShrink: '0', opacity: '0.7' }" />
              {{ t(`nav.${child.key}`) }}
            </NuxtLink>
          </div>
        </div>
      </template>
      <template v-else>
        <NuxtLink 
          class="text-semantic-text-secondary hover:text-semantic-text-primary"
          :to="localePath(item.to!)" 
          :style="{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: space('sm'), 
            padding: space('sm') + ' ' + space('md'), 
            borderRadius: styles.borders.radius.base, 
            backgroundColor: 'transparent', 
            textDecoration: 'none', 
            transition: 'background-color ' + styles.animations.duration.fast, 
            cursor: 'pointer' 
          }" 
          active-class="active-nav-link" 
          role="menuitem"
        >
          <component v-if="item.icon" :is="iconMap[item.icon] || Home" :style="{ width: '1rem', height: '1rem' }" />
          {{ t(`nav.${item.label}`) }}
        </NuxtLink>
      </template>
    </template>
  </nav>
</template>
