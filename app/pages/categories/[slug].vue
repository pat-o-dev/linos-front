<script lang="ts" setup>
definePageMeta({
  name: "category",
});

const route = useRoute();
const slug = route.params.slug as string;
const { category, error, pending } = useCategory(slug);
const { tree: categories } = useTreeCategories();

const metaTitle = computed(() => {
  return category.value?.title ?? "Category"
})

useHead({
  title: metaTitle,
  meta: [
    {
      name: "description",
      content: "Demo Nuxt 4 e-commerce application",
    },
  ],
});
</script>

<template>
  <div class="min-h-screen">



    <div v-if="pending" class="p-0 md:p-6">
      <p>Loading category...</p>
    </div>
    <div v-else-if="error" class="p-0 md:p-6">
      <p class="text-red-500">Error loading category: {{ error.message }}</p>
    </div>
    <div v-else-if="!category">
      <p class="p-0 md:p-6">Category not found.</p>
    </div>
    <div v-else class="p-0 md:p-6">
        <CategoriesBreadcrumb  :current="category" :tree="categories"/>


      <h1 class="text-2xl font-bold mb-1 md:mb-4">{{ category.title }}</h1>
         <div class="text-sm line-clamp-3 md:mb-4" v-html="category.description"></div>
      
        <template v-if="category?.children && category.children.length">
          <CategoriesSubCategories :category="category" />
        </template> 

        <template v-if="category?.products && category.products.length">
        <h3 class="text-xl font-bold mb-1">Les produits phares de <strong>{{ category.title }}</strong></h3>
        <CategoriesProductsGrid :products="category.products" />
         </template> 
    </div>
  </div>
</template>
