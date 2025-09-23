import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { PiniaSharedState } from 'pinia-shared-state'

import App from './App.vue'
import router from './router'
import './style.css' 

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
pinia.use(
  PiniaSharedState({
    enable: true,
    initialize: false,
    type: 'localstorage',
  }),
)
const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount('#app')
