import styles from '../config/styles.json'

/**
 * Composable to access and resolve design tokens from the centralized design system.
 * Provides utilities to work with semantic colors, spacing, typography, and animations.
 */
export function useDesignTokens() {
  /**
   * Resolve a nested token path to its actual value
   * @example resolveToken('colors.semantic.accent.primary') → '#4f66ff'
   */
  const resolveToken = (path: string): string | object => {
    const keys = path.split('.')
    let value: any = styles
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key]
      } else {
        console.warn(`Token not found: ${path}`)
        return ''
      }
    }
    
    return value
  }

  /**
   * Get a color token by semantic name
   * @example color('accent.primary') → '#4f66ff'
   */
  const color = (path: string): string => {
    return String(resolveToken(`colors.semantic.${path}`))
  }

  /**
   * Get a spacing token
   * @example space('md') → '1rem'
   */
  const space = (key: keyof typeof styles.spacing): string => {
    return styles.spacing[key]
  }

  /**
   * Get a font size with line height
   * @example fontSize('lg') → ['1.125rem', '1.75rem']
   */
  const fontSize = (key: keyof typeof styles.typography.fontSize) => {
    return styles.typography.fontSize[key]
  }

  /**
   * Get component preset styles
   * @example buttonPrimary() → { background, color, hoverBackground, ... }
   */
  const getComponentPreset = (component: string, variant?: string): Record<string, any> => {
    const comp = (styles.components as any)[component]
    if (!comp) {
      console.warn(`Component preset not found: ${component}`)
      return {}
    }
    return variant ? (comp[variant] || {}) : comp
  }

  /**
   * Merge multiple style objects with token resolution
   */
  const mergeStyles = (...styleObjects: Record<string, any>[]): Record<string, string> => {
    const merged: Record<string, string> = {}
    
    for (const styleObj of styleObjects) {
      for (const [key, value] of Object.entries(styleObj)) {
        if (typeof value === 'string' && value.includes('semantic.')) {
          merged[key] = color(value.replace('semantic.', ''))
        } else if (typeof value === 'string' && value.startsWith('spacing.')) {
          merged[key] = space(value.replace('spacing.', '') as any)
        } else {
          merged[key] = String(value)
        }
      }
    }
    
    return merged
  }

  return {
    // Direct access to styles object
    styles,
    
    // App-level class presets
    app: styles.app,
    
    // Utility functions
    resolveToken,
    color,
    space,
    fontSize,
    getComponentPreset,
    mergeStyles,
    
    // Commonly used semantic colors
    colors: {
      primary: styles.colors.semantic.accent.primary,
      primaryHover: styles.colors.semantic.accent.secondary,
      bgPrimary: styles.colors.semantic.background.primary,
      bgSecondary: styles.colors.semantic.background.secondary,
      textPrimary: styles.colors.semantic.text.primary,
      textSecondary: styles.colors.semantic.text.secondary,
      textTertiary: styles.colors.semantic.text.tertiary,
      borderPrimary: styles.colors.semantic.border.primary,
      borderSecondary: styles.colors.semantic.border.secondary,
      borderAccent: styles.colors.semantic.border.accent,
      surfaceBase: styles.colors.semantic.surface.base,
      surfaceHover: styles.colors.semantic.surface.hover,
      surfaceActive: styles.colors.semantic.surface.active,
      success: styles.colors.semantic.feedback.success,
      warning: styles.colors.semantic.feedback.warning,
      error: styles.colors.semantic.feedback.error,
      info: styles.colors.semantic.feedback.info
    }
  }
}
