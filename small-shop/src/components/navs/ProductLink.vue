<script lang="ts" setup>
import NavLink from "@/components/navs/Navlink.vue";

const props = withDefaults(
  defineProps<{
    id?: number;
    slug?: string;
  }>(),
  {
    id: 0,
    slug: "",
  }
);
</script>

<template>
  <RouterLink
    :to="{ name: 'products.view', params: { id: props.id } }"
    class="py-2 rounded hover:text-primary"
  >
    <slot />
  </RouterLink>
</template>
