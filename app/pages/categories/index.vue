<script setup lang="ts">
const selectedCategory = ref<[]>();
const { data: categories, error } = await useFetch('https://ssb.kwansook.com/api/categories',{
  server: true,
  // facultatif: cache la réponse côté Nuxt pendant 60 secondes
  key: 'categories',
  default: () => [],
})

if (error.value) {
  console.error('Error fetching categories:', error.value)
} else {
  selectedCategory.value = categories.value.categories[0] ?? null
}
</script>

<template>
  <section>
    <AppsHideSidebar />
    <div v-if="categories.categories.length" class="p-6 min-w-1/5">
            <h1 class="text-xl font-bold mb-3">Categories :</h1>
            <ul class="">
                <li v-for="category in categories.categories"
                    :key="category.id"
                    @click="selectedCategory = category"
                    class="link text-primary hover:text-secondary cursor-pointer mb-2">
                {{ category.title }}
                </li>
            </ul>
        </div>
        <div v-if="selectedCategory">
            <h2 class="text-xl font-bold mb-3">{{ selectedCategory.title }}</h2>
            <CategoriesProductsGrid :products="selectedCategory.products" />
        </div>
  </section>
</template>