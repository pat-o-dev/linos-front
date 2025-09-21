import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/Pages/HomeView.vue'
import AboutView from '@/Pages/AboutView.vue'
import ProductView from '@/Pages/ProductView.vue'
const routes = [
  { 
    path: '/', 
    name: 'homepage',
    component: HomeView
  },
  { 
    path: '/about', 
    name: 'about',
    component: AboutView 
  },
  { 
    path: '/products/:id(\\d+)',
    name: 'products.index',
    component: ProductView
   },
]


const router = createRouter({
  linkActiveClass: 'border-red-500',
  linkExactActiveClass: 'border-red-700',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
