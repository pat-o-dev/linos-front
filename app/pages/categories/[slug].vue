<script lang="ts" setup>
definePageMeta({
  name: "category",
});

const route = useRoute();
const slug = route.params.slug as string;
const { category, error, pending } = useCategory(slug);

useHead({
  title: category ? category.title : "Category",
});
</script>

<template>
  <div class="min-h-screen">
    Categories / {{ slug }}
    <div v-if="pending" class="p-6">
      <p>Loading category...</p>
    </div>
    <div v-else-if="error" class="p-6">
      <p class="text-red-500">Error loading category: {{ error.message }}</p>
    </div>
    <div v-else-if="!category">
      <p class="p-6">Category not found.</p>
    </div>
    <div v-else class="p-6">
      <h1 class="text-2xl font-bold mb-4">{{ category.title }}</h1>

      <CategoriesProductsGrid :products="category.products" />

    </div>
  </div>
</template>
