<template>
  <div
    v-if="product"
    class="card bg-white dark:bg-gray-800 w-full shadow-sm hover:shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg transition-shadow overflow-hidden flex flex-col"
  >
    <!-- Image -->
    <figure
      v-if="product.image"
      class="p-1 md:p-2 flex justify-center items-center bg-gray-50 dark:bg-gray-600"
    >
      <img
        :src="product.image"
        class="w-48 h-32 object-cover rounded-md"
        :alt="product.title"
      />
    </figure>

    <!-- Contenu -->
    <div class="card-body p-4 flex flex-col flex-1">
      <!-- Titre -->
      <h2
        class="card-title text-md font-semibold h-[3rem] line-clamp-2 overflow-hidden mb-2"
      >
        <ProductsLink :product="product">
          {{ product.title }}
        </ProductsLink>
      </h2>

      <!-- Description -->
      <div
        v-if="product.shortDescription"
        v-html="product.shortDescription"
        class="text-gray-600 dark:text-gray-300 line-clamp-4 overflow-hidden mb-4 flex-1"
      ></div>

      <!-- Prix + bouton -->
      <div
        class="card-actions mt-auto flex flex-col md:flex-row md:items-center md:justify-between md:space-x-4 space-y-3 md:space-y-0"
      >
        <ProductsPrice :price="product.price" />
        <ProductsBtnAddCart :product="product" class="w-full md:w-auto" />
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