import { defineNuxtPlugin, useNuxtApp } from '#app'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { PiniaSharedState } from 'pinia-shared-state'

export default defineNuxtPlugin((nuxtApp) => {
  if (!nuxtApp.$pinia) return

  if (process.client) {
    nuxtApp.$pinia.use(piniaPluginPersistedstate)
    nuxtApp.$pinia.use(PiniaSharedState)
  }
})