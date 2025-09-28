<template>

  <UHeader>
    <template #title>
         Linos.store
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
