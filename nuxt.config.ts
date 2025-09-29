// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
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
      title: 'Demo Technique Nuxt', // default fallback title
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
      apiUri: process.env.API_BASE,
    }
  },
  nitro: process.env.NODE_ENV === 'production'
    ? {
        prerender: {
          routes: ['/about'], // pages vraiment statiques
        },
        routeRules: {
          '/': { swr: 120 },
          '/categories': { swr: 60 },
          '/categories/**': { swr: 60 },
          '/products/**': { swr: 30 },
        },
      }
    : {
        // En dev → pas de prerender, pas de cache
        routeRules: {
          '/**': { swr: false },
        },
      },
})