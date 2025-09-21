<script lang="ts" setup>
import NavLink from "@/components/layouts/NavLink.vue";

const props = withDefaults(
  defineProps<{
    title?: number,
    slug?: string,
  }>(),
  {
    title: 0,
    slug: "",
  }
);
</script>

<template>
  <NavLink :to="{ name: 'categories.view', params: { slug: props.slug }}" class="!px-0 capitalize">
   {{ title }}
  </NavLink>
</template>
