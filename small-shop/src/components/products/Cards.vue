<script lang="ts" setup>
import { onMounted, computed } from "vue";
import type { Category } from "@/types/shop";
import Card from "@/components/products/Card.vue";
import CategoryLink from "@/components/navs/CategoryLink.vue";

const props = withDefaults(
  defineProps<{
    quantity: number,
    category: Category,
    title?: string
  }>(),
  {
    quantity: 2,
    category: { id: 0, title: "Men's clothing", slug: encodeURIComponent("men's clothing") },
  }
);

const gridClass = computed(() => {
  const classes = ['grid', 'gap-4']
  if (props.quantity > 1) classes.push('grid-cols-2')
  if (props.quantity > 2) classes.push('lg:grid-cols-3')
  if (props.quantity > 3) classes.push('xl:grid-cols-4')
  return classes
})

</script>

<template>
  <div class="w-full max-w-full bg-base-300 rounded-4xl p-6 lg:mb-6">
    <h2 v-if="title" class="text-2xl font-bold mb-3">{{ title }}</h2>
    <h2 v-else class="text-5xl font-bold mb-3">
      <CategoryLink :title="category.title" :slug="category.slug" />
    </h2>
    <div
      :class="gridClass"
    >
      <template v-for="product in category.products.slice(0, quantity)" :key="product.id">
        <Card :product="product" />
      </template>
    </div>
  </div>
</template>
