<script setup lang="ts">
const { categories, error, pending } = useCategories();
const selectedCategory = ref(null);
useHead({
  title: "Categories",
  meta: [
    {
      name: "description",
      content: "Browse our product categories",
    },
  ],
});
</script>

<template>
  <div v-if="pending" class="p-1 md:p-6">
    <p>Loading categories...</p>
  </div>
  <div v-else-if="error" class="p-1 md:p-6">
    <p class="text-red-500">Error loading categories: {{ error.message }}</p>
  </div>
  <div v-else-if="!categories || !categories.length" class="p-1 md:p-6">
    <p>No categories available.</p>
  </div>

  <div v-else class="p-1 md:p-6">
    <div v-if="categories.length" class="min-w-1/5">
      <h1 class="text-xl font-bold mb-3">Categories :</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-4">
        <div
          v-for="category in categories"
          :key="category.id"
          class="link text-default text-center hover:text-primary cursor-pointer mb-2"
        >
          <CategoriesGrid :category="category" @mouseover="selectedCategory = category"/>
        </div>
      </div>
    </div>

    <div v-if="selectedCategory">
      <h2 class="text-xl font-bold mb-3">Produit phare de la catégorie {{ selectedCategory.title }}</h2>
      <CategoriesProductsSmallGrid :products="selectedCategory.products" />
    </div>
  </div>
</template>
