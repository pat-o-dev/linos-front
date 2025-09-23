<script setup>
defineProps({
  to: Object,
  exact: String,
});
</script>

<template>
  <RouterLink
    :to="to"
    :exact="exact"
    class="px-4 py-2 rounded hover:border hover:border-primary"
    active-class="bg-primary text-white"
  >
    <slot />
  </RouterLink>
</template>
