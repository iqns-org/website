import { ref, watch } from 'vue'

export const useMatrixRain = () => {
  const matrixCanvas = ref<HTMLCanvasElement | null>(null)
  const matrixFrame = ref<number | null>(null)
  const matrixEffects = ref(true)

  const getThemeColors = () => {
    const currentTheme = document.documentElement.dataset.theme || 'dark'
    switch (currentTheme) {
      case 'light':
        return { char: '#64748b', shadow: '#475569', shadowBlur: 4 }
      case 'sepia':
        return { char: '#a68565', shadow: '#8b6f47', shadowBlur: 4 }
      case 'dark':
      default:
        return { char: '#06b6d4', shadow: '#0891b2', shadowBlur: 4 }
    }
  }

  const startMatrixRain = () => {
    if (!matrixCanvas.value || !matrixEffects.value) return
    const canvas = matrixCanvas.value
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(1)
    const chars = '~!@#$%^&*()-_=+[]{}<>?/\\|░▒▓▖▗▘▝▚▞▟▛▜▙▁▂▃▄▅▆▇█'.split('')

    const draw = () => {
      if (!matrixEffects.value) return
      const theme = document.documentElement.dataset.theme || 'dark'
      const fadeMap: Record<string, string> = {
        dark: 'rgba(0, 0, 0, 0.14)',
        light: 'rgba(255, 255, 255, 0.08)',
        sepia: 'rgba(20, 12, 0, 0.10)'
      }
      ctx.fillStyle = fadeMap[theme] || 'rgba(0, 0, 0, 0.14)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const colors = getThemeColors()
      ctx.font = `${fontSize}px monospace`
      ctx.fillStyle = colors.char
      ctx.globalAlpha = theme === 'light' ? 0.04 : 0.08
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] += 0.5
      }

      ctx.globalAlpha = 1.0

      matrixFrame.value = requestAnimationFrame(draw)
    }

    draw()
  }

  const stopMatrixRain = () => {
    if (matrixFrame.value !== null) {
      cancelAnimationFrame(matrixFrame.value)
      matrixFrame.value = null
    }
    if (matrixCanvas.value) {
      const ctx = matrixCanvas.value.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, matrixCanvas.value.width, matrixCanvas.value.height)
      }
    }
  }

  const isReducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isMobile = () => typeof window !== 'undefined' && (window.matchMedia('(max-width: 768px)').matches || /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent))

  const initMatrixEffects = () => {
    if (typeof window !== 'undefined') {
      if (isReducedMotion() || isMobile()) {
        matrixEffects.value = false
        localStorage.setItem('iqnsMatrixEffects', 'false')
        return
      }

      const saved = localStorage.getItem('iqnsMatrixEffects')
      if (saved !== null) {
        matrixEffects.value = saved === 'true'
      } else {
        matrixEffects.value = true
        localStorage.setItem('iqnsMatrixEffects', 'true')
      }
    }
  }

  watch(matrixEffects, (newValue) => {
    localStorage.setItem('iqnsMatrixEffects', String(newValue))
    if (newValue) {
      startMatrixRain()
    } else {
      stopMatrixRain()
    }
  })

  return {
    matrixCanvas,
    matrixEffects,
    startMatrixRain,
    stopMatrixRain,
    initMatrixEffects
  }
}
