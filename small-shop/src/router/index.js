import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/Pages/HomeView.vue";
import AboutView from "@/Pages/AboutView.vue";
import CartView from "@/Pages/CartView.vue";
import ProductView from "@/Pages/ProductView.vue";
import CategoryView from "@/Pages/CategoryView.vue";
import CategoryIndex from "@/Pages/CategoryIndex.vue";
const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/products/:id(\\d+)",
    name: "products.view",
    component: ProductView,
  },
  {
    path: "/categories/",
    name: "categories.index",
    component: CategoryIndex,
  },
  {
    path: "/categories/:slug",
    name: "categories.view",
    component: CategoryView,
  },
  {
    path: "/cart",
    name: "cart.view",
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
