<script lang="ts" setup>
import type { Product } from "@/types/shop";
import Row from "@/components/products/Row.vue";

interface Props {
  products: Product[];
}

const props = withDefaults(defineProps<Props>(), {
  products: () => [],
});
</script>

<template>
  <table v-if="products.length" class="table">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th class="hidden lg:table-cell">Description</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="product in products" :key="product.id">
        <Row :product="product" />
      </template>
    </tbody>
  </table>
  <div v-else>No products</div>
</template>
