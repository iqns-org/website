import styles from '../config/styles.json'

/**
 * Preset style collections for common components and patterns.
 * These are exported as constants and composable helpers.
 */

export const semanticColors = styles.colors.semantic
export const spacing = styles.spacing
export const typography = styles.typography
export const borders = styles.borders
export const shadows = styles.shadows
export const animations = styles.animations

/**
 * Header preset styles
 */
export const headerPreset = {
  backgroundColor: styles.colors.semantic.surface.base,
  borderColor: styles.colors.semantic.border.primary,
  backdropFilter: 'blur(12px)',
  zIndex: 50
}

/**
 * Footer preset styles
 */
export const footerPreset = {
  backgroundColor: styles.colors.semantic.surface.base,
  color: styles.colors.semantic.text.secondary,
  fontSize: styles.typography.fontSize.sm[0],
  padding: `${styles.spacing.lg}`
}

/**
 * Button primary variant
 */
export const buttonPrimaryStyle = {
  backgroundColor: styles.colors.semantic.accent.primary,
  color: styles.colors.semantic.text.inverted,
  padding: `${styles.spacing.sm} ${styles.spacing.md}`,
  borderRadius: styles.borders.radius.base,
  fontSize: styles.typography.fontSize.sm[0],
  fontWeight: styles.typography.fontWeight.medium,
  cursor: 'pointer',
  border: 'none',
  transition: `background-color ${styles.animations.duration.fast}`,
  '&:hover': {
    backgroundColor: styles.colors.semantic.accent.secondary
  }
}

/**
 * Button secondary variant
 */
export const buttonSecondaryStyle = {
  backgroundColor: styles.colors.semantic.surface.hover,
  color: styles.colors.semantic.text.primary,
  padding: `${styles.spacing.sm} ${styles.spacing.md}`,
  borderRadius: styles.borders.radius.base,
  border: `${styles.borders.width.sm} solid ${styles.colors.semantic.border.secondary}`,
  fontSize: styles.typography.fontSize.sm[0],
  fontWeight: styles.typography.fontWeight.medium,
  cursor: 'pointer',
  transition: `background-color ${styles.animations.duration.fast}`,
  '&:hover': {
    backgroundColor: styles.colors.semantic.surface.active
  }
}

/**
 * Dropdown preset
 */
export const dropdownPreset = {
  backgroundColor: 'rgba(15, 23, 42, 0.95)',
  borderColor: styles.colors.semantic.border.primary,
  borderRadius: styles.borders.radius.md,
  boxShadow: styles.shadows.lg,
  backdropFilter: 'blur(4px)',
  zIndex: 200
}

/**
 * Navigation link hover state
 */
export const navLinkHoverStyle = {
  backgroundColor: styles.colors.semantic.surface.hover,
  transitionDuration: styles.animations.duration.fast
}

/**
 * Navigation active state
 */
export const navActiveStyle = {
  backgroundColor: 'rgba(79, 102, 255, 0.2)',
  color: styles.colors.semantic.accent.light
}

/**
 * Settings panel preset
 */
export const settingsPanelPreset = {
  backgroundColor: styles.colors.semantic.surface.base,
  padding: styles.spacing.lg,
  borderColor: styles.colors.semantic.border.primary
}

/**
 * Container preset
 */
export const containerPreset = {
  maxWidth: styles.layout.container.maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: styles.spacing.md,
  paddingRight: styles.spacing.md
}

/**
 * Section padding preset
 */
export const sectionPreset = {
  paddingTop: styles.spacing['3xl'],
  paddingBottom: styles.spacing['3xl'],
  paddingLeft: styles.spacing.md,
  paddingRight: styles.spacing.md
}

/**
 * Link styles
 */
export const linkStyle = {
  color: styles.colors.semantic.text.secondary,
  textDecoration: 'none',
  transition: `color ${styles.animations.duration.fast}`,
  '&:hover': {
    color: styles.colors.semantic.text.primary
  }
}

/**
 * Text utility classes mapped to semantic tokens
 */
export const textStyles = {
  primary: { color: styles.colors.semantic.text.primary },
  secondary: { color: styles.colors.semantic.text.secondary },
  tertiary: { color: styles.colors.semantic.text.tertiary },
  inverted: { color: styles.colors.semantic.text.inverted },
  accent: { color: styles.colors.semantic.accent.primary },
  success: { color: styles.colors.semantic.feedback.success },
  warning: { color: styles.colors.semantic.feedback.warning },
  error: { color: styles.colors.semantic.feedback.error }
}

/**
 * Background utility classes
 */
export const bgStyles = {
  primary: { backgroundColor: styles.colors.semantic.background.primary },
  secondary: { backgroundColor: styles.colors.semantic.background.secondary },
  tertiary: { backgroundColor: styles.colors.semantic.background.tertiary },
  interactive: { backgroundColor: styles.colors.semantic.background.interactive },
  surfaceBase: { backgroundColor: styles.colors.semantic.surface.base },
  surfaceHover: { backgroundColor: styles.colors.semantic.surface.hover },
  surfaceActive: { backgroundColor: styles.colors.semantic.surface.active }
}

/**
 * Border utility classes
 */
export const borderStyles = {
  primary: { borderColor: styles.colors.semantic.border.primary },
  secondary: { borderColor: styles.colors.semantic.border.secondary },
  accent: { borderColor: styles.colors.semantic.border.accent }
}
