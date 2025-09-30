<template>
  <UHeader title="Linos.store">
    <UNavigationMenu :items="items" />
    <template #right>
      <client-only>
        <template v-if="auth.customer">
          <NuxtLink
            id="header-user"
            to="/customers/profile"
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
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5 text-xl md:text-base" />
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { NavigationMenuItem } from "@nuxt/ui";
import { useAuthStore } from "@/stores/authStore";

const { tree, error, pending } = useTreeCategories();
const auth = useAuthStore();
const route = useRoute();
const isHome = computed(() => route.path === "/");

const items = computed<NavigationMenuItem[]>(() => {
    const baseItems = [
    {
      label: "Home",
      to: "/",
      active: isHome.value,
      class: "text-xl md:text-base",
    },
    {
      label: "About",
      to: "/about",
      active: route.path === "/about",
      class: "text-xl md:text-base",
    },
  ]

  if (tree.value && tree.value.length > 0) {
    baseItems.splice(1, 0, {
      label: "Categories",
      to: "/categories",
      active: route.path.startsWith("/categories"),
      class: "text-xl md:text-base",
      children: tree.value.map((cat) => ({
        label: cat.title,
        to: `/categories/${cat.slug}`,
        active: route.path === `/categories/${cat.slug}`,
        class: "text-xl md:text-base",
        // ✅ un niveau de profondeur
        children: cat.children?.map((sub) => ({
          label: sub.title,
          to: `/categories/${sub.slug}`,
          active: route.path === `/categories/${sub.slug}`,
          class: "text-xl md:text-base",
        })) || [],
      })),
    });
  }
  return baseItems;
});



</script>
