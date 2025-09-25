// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@pinia/nuxt',
  ],
  app: {
    head: {
      title: 'Linos Store', // default fallback title
      titleTemplate: '%s - Linos Store',
      htmlAttrs: {
        lang: 'fr',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiUri: '',
    }
  },
  nitro: {
    routeRules: {
      '/categories': { swr: true },   // Stale-while-revalidate
      '/products/**': { swr: true },
    }
  },
})