// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Linos Store - Patrick G - Nuxt eCommerce Demo',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: `Linos Store - A seasoned web developer's training experience with a headless Nuxt eCommerce platform` }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:8000'
    }
  },
  nitro: {
    routeRules: {
      '/categories': { swr: true },   // Stale-while-revalidate
      '/products/**': { swr: true },
    }
  }
})