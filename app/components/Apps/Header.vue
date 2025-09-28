<template>

  <UHeader>
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="/linos.svg" alt="Linos Store" class="w-12 h-12" />
        <span class="text-xl font-bold !text-gray-900 dark:!text-gray-100"
          >Linos.store</span
        >
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" />
    <template #right>
      <CartsSmallCart />
      <UColorModeButton />
    </template>
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();
const isHome = computed(() => route.path === "/");

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
    active: isHome.value,
  },
  {
    label: "Categories",
    to: "/categories",
    active: route.path.startsWith("/categories"),
  },
  {
    label: "About",
    to: "/about",
    active: route.path === "/about",
  },
  {
    label: "Contact",
    to: "/contact",
    active: route.path === "/contact",
  },
]);
</script>
