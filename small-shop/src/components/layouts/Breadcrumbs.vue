<script lang="ts" setup>
import type { Product, Category} from "@/types/shop";
import CategoryLink from "@/components/categories/NavLink.vue";

const props = defineProps<{
    categories?: Any[] | null,
    product?: Product | null
}>()
</script>

<template>
  <div class="breadcrumbs text-sm">
    <ul>
      <li><a href="/">Home</a></li>
      <template v-if="categories">
      <li v-for="category in categories" :key="index">
        <CategoryLink :title="category.title" :slug="category.slug" />
      </li>
      </template>
      <li v-if="product">{{ product.title }}</li>
    </ul>
  </div>
</template>
