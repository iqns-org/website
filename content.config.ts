import { defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  documentDriven: false,
  sources: {
    content: {
      driver: 'fs',
      base: './content'
    }
  },
  highlight: {
    theme: 'github-light'
  }
})
