<script setup lang="ts">
defineProps<{
  category: Object<[]>;
}>();
</script>
<template>
  <NuxtLink
    :to="{ name: 'category', params: { slug: category.slug } }"
    class="block mb-4 border p-4 rounded-lg shadow-lg h-full bg-default hover:bg-default/80 dark:bg-default/80 dark:hover:bg-gray-700"
  >
    <div class="w-full h-32 overflow-hidden rounded-md mb-2">
      <img
        v-if="category.products?.length"
        :src="category.products[0].image"
        class="h-32 w-32 mx-auto object-cover mb-2"
      />
      <img
        v-else
        src="/placeholders/categories.svg"
        class="h-32 w-32 mx-auto object-cover mb-2"
      />
    </div>
    <h3 class="text-lg font-semibold">{{ category.title }}</h3>
  </NuxtLink>
</template>
