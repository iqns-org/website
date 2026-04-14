import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'
import styles from './config/styles.json'

const config: Config = {
  darkMode: 'class',
  content: ['./components/**/*.{vue,js,ts}', './layouts/**/*.{vue,js,ts}', './pages/**/*.{vue,js,ts}', './app.vue', './content/**/*.md'],
  theme: {
    extend: {
      colors: {
        semantic: styles.colors.semantic,
        brand: styles.colors.brand
      },
      spacing: styles.spacing,
      fontSize: styles.typography.fontSize,
      fontWeight: styles.typography.fontWeight,
      borderRadius: styles.borders.radius,
      borderWidth: styles.borders.width,
      boxShadow: styles.shadows,
      backdropBlur: styles.effects.backdropBlur,
      animation: {
        blob: 'blob 7s infinite',
        fadeIn: 'fadeIn 0.6s ease-out',
        fadeInUp: 'fadeInUp 0.6s ease-out'
      },
      keyframes: styles.animations.keyframes
    }
  },
  plugins: [
    typography,
    plugin(function({ addUtilities, theme }) {
      const borderBottomUtilities: Record<string, any> = {}
      const borderBottomWidths = styles.borders.bottom || {}
      
      Object.entries(borderBottomWidths).forEach(([key, value]) => {
        borderBottomUtilities[`.border-b-${key}`] = {
          borderBottomWidth: value as string,
          borderBottomColor: theme('colors.semantic.border.primary')
        }
      })

      addUtilities(borderBottomUtilities)
    })
  ]
}

export default config
