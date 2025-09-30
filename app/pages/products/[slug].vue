<script lang="ts" setup>
definePageMeta({
  name: "product", // Nom de la route
});

const route = useRoute();
const slug = route.params.slug as string;

const { product, error, pending } = useProduct(slug);

const metaTitle = computed(() => {
  return product.value?.title ?? "Product"
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
  <div v-if="pending" class="p-6">
    <p>Loading ...</p>
  </div>
  <div v-else-if="error" class="p-6">
    <p class="text-red-500">Error loading : {{ error.message }}</p>
  </div>
  <div v-else-if="!product">
    <p class="p-6">Product not found.</p>
  </div>
<div v-else-if="product" class="min-h-screen py-10">
  <CategoriesBreadcrumb  :current="product.categories[0]" :product="product" />

  <UCard class="max-w-5xl mx-auto shadow-lg rounded-2xl overflow-hidden">
    <div class="grid md:grid-cols-2 gap-10">
      <!-- Image produit -->
      <div>
        <img
          :src="product.image"
          alt="product"
          class="w-full h-96 object-cover rounded-lg"
        />
      </div>

      <!-- Infos produit -->
      <div class="flex flex-col space-y-6">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ product.title }}
        </h1>

        <div class="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
          <ProductsPrice :price="product.price" /> 
          <ProductsBtnAddCart :product="product" />
        </div>

        <!-- Infos techniques -->
        <div class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
          <p>
            <span class="font-semibold text-gray-700 dark:text-gray-200">Référence :</span>
            {{ product.sku }}
          </p>
          <p>
            <span class="font-semibold text-gray-700 dark:text-gray-200">Fabricant :</span>
            {{ product.manufacturerName }}
          </p>
        </div>
        <!-- Description -->
        <div
          v-if="product.shortDescription"
          class="text-gray-700 dark:text-gray-300 text-base leading-relaxed border-t pt-4"
          v-html="product.shortDescription"
        ></div>
        <div
          v-if="product.description"
          class="prose prose-gray dark:prose-invert max-w-none text-base leading-relaxed"
          v-html="product.description"
        ></div>
      </div>
    </div>
  </UCard>
</div>



</template>
