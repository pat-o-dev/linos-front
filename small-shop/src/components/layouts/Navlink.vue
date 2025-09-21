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
    class="px-4 py-2 rounded hover:bg-gray-200/25"
    active-class="bg-blue-500 text-white"
  >
    <slot />
  </RouterLink>
</template>
