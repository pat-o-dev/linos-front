<template>
<div
  class="card bg-white dark:bg-gray-800 w-full shadow-sm hover:shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg transition-shadow overflow-hidden"
>
  <figure class="p-1 md:p-4 flex justify-center items-center bg-gray-50 dark:bg-gray-600">
    <img
      :src="product.image"
      class="w-48 h-32 object-cover rounded-md"
      :alt="product.title"
    />
  </figure>
  <div class="card-body p-4 flex flex-col">
    <h2 class="card-title text-md font-semibold h-[3rem] line-clamp-2 overflow-hidden mb-2">
      <ProductsLink :product="product">
        {{ product.title }}
      </ProductsLink>
    </h2>

    <p class="text-gray-600 dark:text-gray-300 line-clamp-4 overflow-hidden mb-4">
      {{ product.description }}
    </p>

    <div class="card-actions mt-auto flex justify-between items-center">
      <ProductsPrice :price="product.price" />
      <ProductsBtnAddCart :product="product" />
    </div>
  </div>
</div>

</template>

<script lang="ts" setup>
defineProps<{
    product: Object<any>
}>()
</script>

<style>

</style>