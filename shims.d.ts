// Allow TypeScript to resolve Vite asset imports for SVG, PNG, etc.
declare module '*.svg' {
  const src: string
  export default src
}
declare module '*.png' {
  const src: string
  export default src
}
declare module '*.jpg' {
  const src: string
  export default src
}

// Allow TypeScript to resolve JSON imports
declare module '*.json' {
  const data: any
  export default data
}

// Virtual module generated at build time by nav-manifest-plugin
declare module 'virtual:nav-manifest' {
  import type { NavPage } from '@/scripts/nav-manifest-plugin'
  const manifest: NavPage[]
  export default manifest
}

declare module 'virtual:content-index' {
  import type { ContentIndex } from '@/scripts/nav-manifest-plugin'
  const contentIndex: ContentIndex
  export default contentIndex
}

declare function useLocalePath(): (route: any) => string
