import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export const useTheme = () => {
  const route = useRoute()
  const theme = ref('auto')

  const applyTheme = (value: string) => {
    const root = document.documentElement
    root.dataset.theme = value
    localStorage.setItem('iqnsTheme', value)

    root.classList.remove('dark', 'light', 'sepia')
    if (value === 'dark') {
      root.classList.add('dark')
    } else if (value === 'light') {
      root.classList.add('light')
    } else if (value === 'sepia') {
      root.classList.add('sepia')
    }

    document.body.classList.remove('theme-light', 'theme-dark', 'theme-sepia')
    if (value === 'light') document.body.classList.add('theme-light')
    else if (value === 'dark') document.body.classList.add('theme-dark')
    else if (value === 'sepia') document.body.classList.add('theme-sepia')
  }

  const initTheme = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('iqnsTheme')
      if (saved === 'light' || saved === 'dark' || saved === 'sepia') {
        theme.value = saved
        applyTheme(saved)
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const fallback = prefersDark ? 'dark' : 'light'
        theme.value = 'auto'
        applyTheme(fallback)
      }
    }
  }

  watch(theme, (value) => {
    applyTheme(value)
  })

  return {
    theme,
    applyTheme,
    initTheme
  }
}
