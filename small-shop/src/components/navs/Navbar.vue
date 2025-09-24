<script setup>
import ThemeController from "@/components/layouts/ThemeController.vue";
import Navlink from "@/components/navs/Navlink.vue";

import { useCartStore } from "@/stores/cartStore";

const cart = useCartStore();

</script>

<template>
  <div class="navbar bg-base-100 shadow-sm px-6">
    <div class="flex-1">
      <div class="flex space-x-6 items-center">
        <a class="btn btn-ghost normal-case text-xl" href="/" >SmallShop</a>
        <Navlink :to="{ name: 'homepage' }">Home</Navlink>
        <Navlink :to="{ name: 'categories.index' }">Categories</Navlink>
        <Navlink :to="{ name: 'about' }">About</Navlink>
      </div>
    </div>
    <div class="flex-none">
      <RouterLink to="/cart" class="mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>{{ cart.count }}
      </RouterLink>
      <ThemeController />
    </div>
  </div>
</template>
