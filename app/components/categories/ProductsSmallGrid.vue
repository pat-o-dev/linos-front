<script setup lang="ts">

defineProps<{
    products: Object<[]>
}>()
</script>
<template>
    <div v-if="products.length">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <template v-for="product in products.slice(0, 8)" :key="product.id">
                <div
    class="card bg-base-100 w-full shadow-sm hover:shadow-2xl border border-base-200"
  >
    <figure class="p-4">
      <img
        :src="product.image" class="w-48 aspect-square" :alt="product.title"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title h-[3rem] line-clamp-2 overflow-hidden">
        <ProductsLink :product="product">
          {{ product.title }}
        </ProductsLink>
      </h2>
        <ProductsPrice :price="product.price" />
    </div>
  </div>
            </template>
        </div>
    </div>
    <div v-else>
        No products
    </div>    

</template>