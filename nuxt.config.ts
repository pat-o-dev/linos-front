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
      ],
      script: [
        {
          hid: 'gtm-script',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MWF5JZF3');`,
          type: 'text/javascript'
        }
      ],
      noscript: [
        {
          hid: 'gtm-noscript',
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MWF5JZF3"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }
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
          crawlLinks: true
        },
        vue: { compilerOptions: { whitespace: 'condense' } },
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