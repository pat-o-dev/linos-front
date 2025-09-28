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

const categoryNews = computed(() => categories.value?.find((category) => category.slug === "news-products"));
const categoriesOther = computed(() => categories.value?.filter((category) => category.slug !== "news-products"));
</script>
<template>
  <div>
    
  <section class="mb-4">

      <div class="rounded-lg border-primary border-2 mb-4 mx-autow-[1200px] bg-nuxt-gradient">
        <img src="/slides/home-slide.svg" class="w-full my-5" alt="Demo e-commerce headless Nuxt et Symfony by Patrick Genitrini" />
      </div>


      <h1>Linos Store : démo d’un e-commerce headless avec Nuxt et Symfony.</h1>

  </section>

    <div v-if="pending">Loading categories...</div>
    <div v-if="error">Error loading categories: {{ error.message }}</div>

   <div v-if="categories && categories.length">

 <div
  v-if="categoryNews"
  class="bg-white dark:bg-gray-800 rounded-lg shadow border-primary border-2 hover:shadow-lg transition-shadow flex flex-col mb-6"
>
  <header class="p-6 bg-nuxt-gradient items-center">
    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
      <NuxtLink
        :to="`/categories/${categoryNews?.slug}`"
        class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100 hover:text-blue-500"
      >
        {{ categoryNews?.title }}
      </NuxtLink>
    </h3>
  </header>

  <CategoriesProductsGrid
    v-if="categoryNews?.products?.length"
    :products="categoryNews?.products"
    :quantity="4"
  />

</div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div
      v-for="category in categoriesOther"
      :key="category.id"
      class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col"
    >
      <header class="p-6 rounded-t-lg bg-nuxt-gradient items-center mb-4">

        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
          <NuxtLink
        :to="`/categories/${category.slug}`"
        class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100 hover:text-blue-500"
      >{{ category.title }} </NuxtLink>
        </h3>
      </header>
      
      

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

<style>
.bg-nuxt-gradient {
   background: linear-gradient(90deg,
    #00DC82 0%,    /* vert vif */
    #108775 30%,   /* fonce rapidement */
    #3A5468 100%   /* moins sombre à la fin */
  );

}</style>
