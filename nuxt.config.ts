import fs from 'fs'
import path from 'path'
import { defineNuxtConfig } from 'nuxt/config'
import { navManifestPlugin } from './build/nav-manifest-plugin'
import pkg from './package.json'

const i18nLocales = ['en', 'fr', 'es', 'de', 'pt', 'zh']

const contentRoutes = (): string[] => {
  const contentDir = path.resolve(__dirname, 'content')
  const routes = new Set<string>()

  for (const locale of i18nLocales) {
    const localeDir = path.join(contentDir, locale)
    if (!fs.existsSync(localeDir)) continue

    for (const file of fs.readdirSync(localeDir)) {
      if (!file.endsWith('.md')) continue
      if (file === 'index.md') {
        routes.add(locale === 'en' ? '/' : `/${locale}`)
      } else {
        const segment = file.replace(/\.md$/, '')
        routes.add(locale === 'en' ? `/${segment}` : `/${locale}/${segment}`)
      }
    }
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
      buildTime: process.env.NUXT_PUBLIC_BUILD_TIME || new Date().toISOString()
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
      fallbackLocale: 'en'
    },
    bundle: { optimizeTranslationDirective: false },
    vueI18n: 'i18n.config.ts'
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
          innerHTML: `(function(){var t=localStorage.getItem('iqnsTheme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t;if(t==='dark')document.documentElement.classList.add('dark');else if(t==='light')document.documentElement.classList.add('light');else if(t==='sepia')document.documentElement.classList.add('sepia')})()`
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
