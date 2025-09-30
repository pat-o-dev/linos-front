<script setup lang="ts">
const { tree: categories, error, pending } = useTreeCategories();
</script>

<template>
  <div v-if="pending" class="p-1 md:p-6">
    <p>Loading categories...</p>
  </div>

  <div v-else-if="error" class="p-1 md:p-6">
    <p class="text-red-500">Error loading categories: {{ error.message }}</p>
  </div>
<div v-else class="p-4">
    <h1 class="text-xl font-bold mb-6">Catégories</h1>

    <!-- Grille parents -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="category in categories"
        :key="category.id"
        class="border rounded-lg p-4 shadow-sm bg-white"
      >
        <!-- Carte parent -->
        <NuxtLink
          :to="{ name: 'category', params: { slug: category.slug } }"
          class="block mb-4 border p-4 rounded-lg shadow-lg bg-default hover:bg-default/80 dark:bg-default/80 dark:hover:bg-gray-700"
        >
          <div class="w-full h-32 overflow-hidden rounded-md mb-2">
            <img
              v-if="category.products?.length"
              :src="category.products[0].image"
              :alt="category.title"
              class="h-32 w-32 mx-auto object-cover mb-2"
            />
            <img
              v-else
              src="/placeholders/categories.svg"
              alt="placeholder"
              class="h-32 w-32 mx-auto object-cover mb-2"
            />
          </div>
          <h2 class="text-lg text-center font-semibold">{{ category.title }}</h2>
        </NuxtLink>

        <!-- Enfants -->
        <div
          v-if="category.children && category.children.length"
          class="bg-gray-50 rounded-lg p-3"
        >
          <h3 class="text-sm font-medium mb-2 text-gray-700">Sous-catégories</h3>
          <div class="grid grid-cols-2 gap-2">
            <NuxtLink
              v-for="sub in category.children"
              :key="sub.id"
              :to="{ name: 'category', params: { slug: sub.slug } }"
              class="p-2 border rounded bg-white text-center text-xs hover:shadow"
            >
              <div class="w-full h-20 overflow-hidden rounded-md mb-1">
                <img
                  v-if="sub.products?.length"
                  :src="sub.products[0].image"
                  :alt="sub.title"
                  class="h-20 w-20 mx-auto object-cover"
                />
                <img
                  v-else
                  src="/placeholders/categories.svg"
                  alt="placeholder"
                  class="h-20 w-20 mx-auto object-cover"
                />
              </div>
              {{ sub.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>