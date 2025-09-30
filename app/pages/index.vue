<script setup lang="ts">
const { tree:categories, error, pending } = useTreeCategories();

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
    
  <section class="mb-4 prose dark:prose-invert">

      <div class="rounded-lg border-primary border-2 mb-4 mx-autow-[1200px] bg-nuxt-gradient">
        <img src="/slides/home-slide-v2.svg" class="w-full my-5" alt="Demo e-commerce headless Nuxt et Symfony by Patrick Genitrini" />
      </div>


      <div class="max-w-3xl mx-auto px-6 py-8 text-center">
        <h1 class="text-2xl md:text-3xl font-bold mb-4">
          Linos Store
        </h1>
        <p class="text-lg">
          Démo d’un e-commerce headless moderne : 
          <span class="font-semibold">Nuxt 4</span> pour le front, 
          <span class="font-semibold">Symfony 7</span> comme gateway
          et un catalogue <span class="font-semibold">PrestaShop 8</span> connecté via API.
        </p>
      </div>

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
        class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100 hover:bg-primary/50 hover:underline"
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

  <div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
    <div
      v-for="category in categoriesOther"
      :key="category.id"
      class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col"
    >
      <header class="p-6 rounded-t-lg bg-nuxt-gradient items-center mb-4">

        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
          <NuxtLink
        :to="`/categories/${category.slug}`"
        class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100 hover:bg-primary/50 hover:underline"
      >{{ category.title }} </NuxtLink>
        </h3>
      </header>
      
      

      <CategoriesProductsGrid
        v-if="category.products?.length"
        :products="category.products"
        :quantity="4"
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

}


</style>
