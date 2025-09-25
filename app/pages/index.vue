<script setup lang="ts">
const { categories, error, pending } = useCategories();

useHead({
  title: "Demo Nuxt - Patrick Genitrini",
  meta: [
    {
      name: "description",
      content: "Demo Nuxt 4 e-commerce application",
    },
  ],
});
</script>
<template>
  <div>
    <h1>Linos Store : démo d’un e-commerce headless avec Nuxt et Symfony.</h1>
    <div v-if="pending">Loading categories...</div>
    <div v-if="error">Error loading categories: {{ error.message }}</div>

   <div v-if="categories && categories.length">
  <h2 class="text-2xl font-bold mb-6 text-center md:text-left">
    Product Categories
  </h2>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div
      v-for="category in categories"
      :key="category.id"
      class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow p-4 flex flex-col"
    >
      <NuxtLink
        :to="`/categories/${category.slug}`"
        class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100 hover:text-blue-500"
      >
        {{ category.title }}
      </NuxtLink>

      <CategoriesProductsGrid
        v-if="category.products?.length"
        :products="category.products"
        :quantity="2"
      />
      <div v-else class="text-gray-400 dark:text-gray-500 text-sm mt-auto">
        No products available
      </div>
    </div>
  </div>
</div>

  </div>
</template>
