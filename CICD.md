# IQ:NS Website (Nuxt + Tailwind + Content)

This app is a static SPA using Nuxt 3, @nuxt/content, and Tailwind CSS.

## Build for production

- `npm run build`
- `npm run generate`
- `npm run preview`

## Notes

- Content markdown is in `content/` and is rendered via `NuxtContent`
- `pages/index.vue` loads `content/index.md`
- `pages/[...slug].vue` resolves any markdown page by slug
- `ssr: true` in `nuxt.config.ts` for SPA behavior
