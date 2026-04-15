import fs from 'fs'
import path from 'path'
import { defineNuxtConfig } from 'nuxt/config'
import { navManifestPlugin } from './scripts/nav-manifest-plugin'
import pkg from './package.json'
import settings from './config/settings.json'
import styles from './config/styles.json'

const i18nLocales = ['en', 'fr', 'es', 'de', 'pt', 'zh']

const contentRoutes = (): string[] => {
  const contentDir = path.resolve(__dirname, 'content')
  const routes = new Set<string>()

  function walk(dir: string, locale: string, basePath: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(full, locale, `${basePath}/${entry.name}`)
        continue
      }
      if (!entry.name.endsWith('.md')) continue
      const relPath = entry.name === 'index.md'
        ? basePath || '/'
        : `${basePath}/${entry.name.replace(/\.md$/, '')}`
      const normalizedRelPath = relPath.replace(/\\/g, '/')
      if (normalizedRelPath === '/' || normalizedRelPath === '') {
        routes.add(locale === 'en' ? '/' : `/${locale}`)
      } else {
        const route = normalizedRelPath.replace(/^\//, '')
        routes.add(locale === 'en' ? `/${route}` : `/${locale}/${route}`)
      }
    }
  }

  for (const locale of i18nLocales) {
    const localeDir = path.join(contentDir, locale)
    if (!fs.existsSync(localeDir)) continue
    walk(localeDir, locale, '')
  }

  return [...routes].sort()
}

export default defineNuxtConfig({
  compatibilityDate: '2026-03-30',
  vite: {
    plugins: [navManifestPlugin()]
  },
  nitro: {
    preset: 'static',
    compatibilityDate: '2026-03-30',
    prerender: {
      crawl: true,
      failOnError: false,
      fallback: '404.html',
      routes: contentRoutes()
    },
    routeRules: {
      '/**': { prerender: true }
    }
  },
  ssr: true,
  runtimeConfig: {
    public: {
      appVersion: process.env.NUXT_PUBLIC_APP_VERSION || pkg.version,
      buildTime: process.env.NUXT_PUBLIC_BUILD_TIME || new Date().toISOString(),
      consent: settings.consent
    }
  },
  ontology: {
    rdfDir: 'rdf',
    rdfFilePattern: '**/*.ttl',
    outDir: 'public/v1'
  },
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['@/assets/css/main.css'],
  components: true,
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json' },
      { code: 'es', iso: 'es-ES', file: 'es.json' },
      { code: 'de', iso: 'de-DE', file: 'de.json' },
      { code: 'pt', iso: 'pt-PT', file: 'pt.json' },
      { code: 'zh', iso: 'zh-CN', file: 'zh.json' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'en',
      redirectOn: 'root'
    },
    bundle: { optimizeTranslationDirective: false },
    vueI18n: '../i18n.config.ts'
  },
  app: {
    head: {
      title: 'IQ:NS  — AI Governance for Enterprise',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'AI governance framework with business-first best practices' },
        { name: 'theme-color', content: '#0c1117' }
      ],
      script: [
        {
          innerHTML: `(function(){var defaultTheme=${JSON.stringify(styles.theme || 'dark')};var t;try{t=localStorage.getItem('iqnsTheme')}catch(e){t=null}var validThemes=['dark','light','sepia'];if(!validThemes.includes(t)){if(defaultTheme==='auto'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}else if(validThemes.includes(defaultTheme)){t=defaultTheme}else{t='dark'}}document.documentElement.dataset.theme=t;var htmlClassList=document.documentElement.classList;htmlClassList.remove('dark','light','sepia');if(t==='dark')htmlClassList.add('dark');else if(t==='light')htmlClassList.add('light');else if(t==='sepia')htmlClassList.add('sepia');var body = document.body; if (body) { var bodyClassList = body.classList; bodyClassList.remove('theme-light','theme-dark','theme-sepia'); if(t==='dark') bodyClassList.add('theme-dark'); else if(t==='light') bodyClassList.add('theme-light'); else if(t==='sepia') bodyClassList.add('theme-sepia'); }})()`
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  content: {
    highlight: {
      theme: 'github-light'
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
