<template>
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
        <ProductsLink :id="product.id">
          {{ product.title }}
        </ProductsLink>
      </h2>
      <p class="line-clamp-4 overflow-hidden">{{ product.description }}</p>
      <div class="card-actions justify-between flex items-center">
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