<template>
  <header class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <span class="text-xl font-bold">Linos.store</span>
      </NuxtLink>

      <!-- Menu principal (desktop) -->
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
        <!-- Bouton burger (mobile) -->
        <button class="md:hidden" @click="isOpen = !isOpen">
          <svg class="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Menu mobile (toggle) -->
  <nav v-if="isOpen" class="md:hidden border-t border-gray-200 dark:border-gray-700 p-4">
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
  @click="isOpen = false"
>
  {{ item.label }}
</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const route = useRoute();

const isOpen = ref(false);

const items = computed(() => [
  { label: "Home", to: "/", active: route.path === "/" },
  { label: "Categories", to: "/categories", active: route.path.startsWith("/categories") },
  { label: "About", to: "/about", active: route.path === "/about" },
  { label: "Contact", to: "/contact", active: route.path === "/contact" }
]);
</script>
