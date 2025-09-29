<template>
  <UHeader title="Linos.store">
    <UNavigationMenu :items="items" />
    <template #right>
      <client-only>
        <template v-if="auth.customer">
          <NuxtLink
            id="header-user"
            to="/customers/login"
            class="relative flex items-center"
          >
            <UIcon name="i-lucide-user-check" class="size-8"> Account </UIcon>
          </NuxtLink>
          <span class="">Bonjour {{ auth.customer.firstname }}</span>
        </template>
        <template v-else>
          <NuxtLink
            id="header-user"
            to="/customers/login"
            class="relative flex items-center"
          >
            <UIcon name="i-lucide-user" class="size-8"> Account </UIcon>
          </NuxtLink>
        </template>
      </client-only>
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
import { useAuthStore } from "@/stores/authStore";

const auth = useAuthStore();
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
]);
</script>
