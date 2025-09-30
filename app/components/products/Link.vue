<template>
  <NuxtLink
        :to="{ name: 'product', params: { slug: product.slug }}"
        class="text-primary-500 hover:underline"
      >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
    product: Object<any>
}>()
</script>

<style>

</style>