<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useCategories } from "@/composables/useCategories";
import Loading from "@/components/layouts/Loading.vue";
import Error from "@/components/layouts/Error.vue";
import ProductsTable from "@/components/categories/ProductsTable.vue";
import ProductsGrid from "@/components/categories/ProductsGrid.vue";

const router = useRoute();
const slug = ref(String(router.params.slug));
const displaView = ref<"ProductsTable" | "ProductsGrid">("ProductsGrid");
const components = { ProductsGrid, ProductsTable };
const { state, category, loadCategoryWithProducts } = useCategories();

loadCategoryWithProducts(slug.value);
</script>

<template>
  <Loading v-if="state === 'loading'" />
  <Error v-else-if="state === 'error'" />
  <div v-else-if="state === 'ready'" class="p-6">
    <h1 class="text-5xl font-bold mb-3">{{ category.title }}</h1>

    <div>
      <label>
        <input
          type="radio"
          name="radio-1"
          class="radio"
          v-model="displaView"
          value="ProductsGrid"
          checked="checked"
        />Grid
      </label>
      <label>
        <input
          type="radio"
          name="radio-1"
          class="radio"
          v-model="displaView"
          value="ProductsTable"
        />
        Table</label
      >
    </div>

    <div class="overflow-x-auto" v-if="category.products">
      <component :is="components[displaView]" :products="category.products" />

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
