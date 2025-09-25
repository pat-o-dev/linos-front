<script lang="ts" setup>
definePageMeta({
  name: "product", // Nom de la route
});

const route = useRoute();
const slug = route.params.slug as string;

const { product, error, pending } = useProduct(slug);

useHead({
  title: product.value?.title || "Produit",
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
  <div v-else-if="product" class="min-h-screen">
    <UCard class="max-w-2xl mx-auto">
      <template #header>
        <img
          :src="product.image"
          class="w-full h-64 object-cover"
          alt="product"
        />
      </template>
      <h1 class="text-xl font-bold">{{ product.title }}</h1>
      <p class="text-sm line-clamp-3">{{ product.description }}</p>

      <ProductsPrice :price="product.price" />
      <ProductsBtnAddCart :product="product" />

      <ProductsRating
        v-if="product.rating"
        :rate="product.rating.rate"
        :count="product.rating.count"
        :id="product.id"
      />
    </UCard>

    {{  product.categories  }}
    
  </div>
</template>
