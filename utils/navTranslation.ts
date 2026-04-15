export const navTranslationKey = (navKey: string): string => {
  if (navKey === 'useCases') return 'nav.useCases.label'
  if (navKey.startsWith('useCases')) {
    const suffix = navKey.slice('useCases'.length)
    const key = suffix ? suffix.charAt(0).toLowerCase() + suffix.slice(1) : 'label'
    return `nav.useCases.${key}`
  }
  return `nav.${navKey}`
}
