<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useCategories } from "@/composables/useCategories";
import Loading from "@/components/layouts/Loading.vue";
import Error from "@/components/layouts/Error.vue";
import DisplayController from "@/components/categories/DisplayController.vue";
import ProductsTable from "@/components/categories/ProductsTable.vue";
import ProductsGrid from "@/components/categories/ProductsGrid.vue";


const router = useRoute();
const slug = ref(String(router.params.slug));
const displayView = ref<"ProductsTable" | "ProductsGrid">("ProductsGrid");
const components = { ProductsGrid, ProductsTable };
const { state, category, loadCategoryWithProducts } = useCategories();

loadCategoryWithProducts(slug.value);

</script>

<template>
  <Loading v-if="state === 'loading'" />
  <Error v-else-if="state === 'error'" />
  <div v-else-if="state === 'ready'" class="p-6">
    <div class="flex flex-col md:flex-row justify-between">
      <h1 class="text-5xl font-bold mb-3">{{ category.title }}</h1>

      <DisplayController v-model="displayView" />
    </div>
    <div class="overflow-x-auto" v-if="category.products">
      <component :is="components[displayView]" :products="category.products" />

      <div class="join">
        <button class="join-item btn">1</button>
        <button class="join-item btn">2</button>
        <button class="join-item btn btn-disabled">...</button>
        <button class="join-item btn">99</button>
        <button class="join-item btn">100</button>
      </div>
    </div>
  </div>
</template>
