<script lang="ts" setup>
import NavLink from "@/components/layouts/NavLink.vue";

const props = withDefaults(
  defineProps<{
    id?: number,
    slug?: string,
  }>(),
  {
    id: 0,
    slug: "",
  }
);
</script>

<template>
  <NavLink :to="{ name: 'products.index', params: { id: props.id } }">
    <slot />
  </NavLink>
</template>
