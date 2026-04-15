import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useSwitchLocalePath } from '#imports'
import contentIndex from 'virtual:content-index'

export type { NavPage } from '@/scripts/nav-manifest-plugin'
import type { NavPage, ContentPage } from '@/scripts/nav-manifest-plugin'

let cachedNavPages: NavPage[] | null = null

export const useNavigation = () => {
  const route = useRoute()
  const router = useRouter()
  const { locale: i18nLocale, t } = useI18n()

  const globalNavPages = ref<NavPage[]>([])
  const activeMenu = ref<string | null>(null)
  const mobileMenuOpen = ref(false)
  let closeTimer: ReturnType<typeof setTimeout> | null = null

  const currentLocale = computed(() => String(i18nLocale.value))

  const excludedKeys = new Set(['terms', 'privacy', 'contact', 'industries'])

  const fallbackSections: Record<string, Array<{ label: string; key: string; to: string }>> = {
    ontologies: [
      { label: 'Features', key: 'features', to: '/features' },
      { label: 'Technology', key: 'tech', to: '/tech' },
      { label: 'Resources', key: 'resources', to: '/resources' }
    ]
  }

  const sectionMap = computed(() => {
    const map: Record<string, Array<{ label: string; key: string; to: string }>> = {}

    contentIndex.nav
      .filter((item) => item.locale === currentLocale.value)
      .forEach((item) => {
        if (excludedKeys.has(item.key)) return
        if (!map[item.section]) map[item.section] = []
        map[item.section].push({ label: item.label, key: item.key, to: item.to })
      })

    Object.keys(map).forEach((section) => {
      map[section].sort((a, b) => {
        const pageA = contentIndex.nav.find((p) => p.to === a.to && p.section === section)
        const pageB = contentIndex.nav.find((p) => p.to === b.to && p.section === section)
        return (pageA?.order ?? 0) - (pageB?.order ?? 0)
      })
    })

    Object.keys(fallbackSections).forEach((section) => {
      if (!map[section] || map[section].length === 0) {
        map[section] = fallbackSections[section]
      }
    })

    return map
  })

  const sectionIndex = computed(() => {
    const index: Record<string, ContentPage[]> = {}
    contentIndex.pages
      .filter((page) => page.locale === currentLocale.value)
      .forEach((page) => {
        if (!index[page.section]) index[page.section] = []
        index[page.section].push(page)
      })
    return index
  })

  const tagIndex = computed(() => {
    const index: Record<string, ContentPage[]> = {}
    contentIndex.pages
      .filter((page) => page.locale === currentLocale.value)
      .forEach((page) => {
        page.tags.forEach((tag) => {
          if (!index[tag]) index[tag] = []
          index[tag].push(page)
        })
      })
    return index
  })

  const currentSection = computed(() => {
    const normalizedPath = route.path.replace(/\/$/, '') || '/' 
    const basePath = normalizedPath.replace(/^\/(en|fr|de|es|pt|zh|ar)(?=\/|$)/, '') || '/'

    const matched = contentIndex.nav.find((item) => item.to === basePath)
    if (matched) return matched.section

    const prefix = Object.keys(sectionMap.value).find((section) => basePath.includes(`/${section}`))
    return prefix || ''
  })

  const sectionNav = computed(() => {
    if (!currentSection.value) return []
    return sectionMap.value[currentSection.value] || []
  })

  const buildGlobalNav = () => {
    if (cachedNavPages) {
      globalNavPages.value = cachedNavPages
      return
    }
    cachedNavPages = contentIndex.nav
    globalNavPages.value = contentIndex.nav
  }

  const translateNavLabel = (label: string): string => {
    const key = `nav.${label}`
    const translated = t(key)
    return translated === key ? label : translated
  }

  const openDropdown = (name: string) => {
    if (closeTimer) { clearTimeout(closeTimer); closeTimer = null }
    activeMenu.value = name
  }

  const scheduleClose = () => {
    closeTimer = setTimeout(() => { activeMenu.value = null }, 350)
  }

  const cancelClose = () => {
    if (closeTimer) { clearTimeout(closeTimer); closeTimer = null }
  }

  const toggleDropdown = (name: string) => {
    if (closeTimer) { clearTimeout(closeTimer); closeTimer = null }
    activeMenu.value = activeMenu.value === name ? null : name
  }

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    mobileMenuOpen.value = false
  }

  const handleOutsideClick = (e: MouseEvent) => {
    const header = document.querySelector('header')
    if (header && !header.contains(e.target as Node)) activeMenu.value = null
  }

  const setLocale = (value: string) => {
    const validLocales = ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar']
    if (!validLocales.includes(value)) return
    const switchLocalePath = useSwitchLocalePath()
    const target = switchLocalePath(value)
    if (target && route.path !== target) router.replace(target)
  }

  watch(route, () => {
    activeMenu.value = null
    mobileMenuOpen.value = false
  })

  return {
    globalNavPages,
    activeMenu,
    mobileMenuOpen,
    currentLocale,
    sectionMap,
    sectionIndex,
    tagIndex,
    buildGlobalNav,
    translateNavLabel,
    openDropdown,
    scheduleClose,
    cancelClose,
    toggleDropdown,
    toggleMobileMenu,
    closeMobileMenu,
    handleOutsideClick,
    setLocale
  }
}
