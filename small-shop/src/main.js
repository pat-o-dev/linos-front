import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { PiniaSharedState } from 'pinia-shared-state'
/* swiper */
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
});

import App from './App.vue'
import router from './router'
import './style.css' 

// dont forgot console.log 
// use window.log('selectedCategory', selectedCategory.value) 
const debug = true;
window.log = (...params) => {
  if(!debug) return
  const stack = new Error().stack;
  const lines = stack.split('\n');
  // Trouver 'at setup'
  const callerLine = lines.find(line => line.includes('at setup')) || lines[2];
  const match = callerLine.match(/at\s+.*\s+\((.*):(\d+):(\d+)\)/) || callerLine.match(/at\s+(.*?):(\d+):(\d+)/);
  // supprimer ?t=...
  const origin = match ? `${match[1].split('/').pop().split('?')[0]}:${match[2]}` : 'unknown';
  console.log(`%c[DEBUG ${origin}]`, 'color: #ff007b', ...params);
};

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
