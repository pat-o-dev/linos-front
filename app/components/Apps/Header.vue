<template>
  <header class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
   <div class="container mx-auto flex items-center justify-between p-4">
    <!-- Logo + titre -->
    <NuxtLink to="/" class="flex items-center gap-2">

      <span class="text-xl font-bold">Linos.store</span>
    </NuxtLink>

    <!-- Menu principal -->
    <nav class="hidden md:flex gap-6">
      <NuxtLink
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        :class="[
          'font-medium transition-colors',
          item.active
            ? 'text-primary-600 dark:text-primary-400'
            : 'text-gray-600 dark:text-gray-300 hover:text-primary-500'
        ]"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>

    <!-- Zone à droite -->
    <div class="flex items-center gap-4">
      <CartsSmallCart />
      <UColorModeButton />
    </div>

      
    </div>>
  </header>

  <!-- Menu mobile -->
  <nav class="md:hidden border-t border-gray-200 dark:border-gray-700 p-4">
    <ul class="flex flex-col gap-3">
      <li v-for="item in items" :key="item.to">
        <NuxtLink
          :to="item.to"
          class="block font-medium"
          :class="[
            item.active
              ? 'text-primary-600 dark:text-primary-400'
              : 'text-gray-600 dark:text-gray-300 hover:text-primary-500'
          ]"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from "vue";
const route = useRoute();

const items = computed(() => [
  { label: "Home", to: "/", active: route.path === "/" },
  { label: "Categories", to: "/categories", active: route.path.startsWith("/categories") },
  { label: "About", to: "/about", active: route.path === "/about" },
  { label: "Contact", to: "/contact", active: route.path === "/contact" }
]);
</script>
