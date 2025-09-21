<script lang="ts" setup>
import { onMounted, computed } from "vue";
import type { Category } from '@/types/shop'
import { useProducts } from '@/composables/useProducts'
import Card from "./Card.vue";

const props = withDefaults(
  defineProps<{
    quantity: number;
    category: Category;
  }>(),
  {
    quantity: 2,
    category: { id: 0, title: "Men's clothing", slug: "men's clothing" },
  }
);

const { state, products, loadProducts } = useProducts()

const gridClass = computed(() => {
  const classes = ['grid', 'gap-4']

  if (props.quantity > 1) classes.push('grid-cols-2')
  if (props.quantity > 2) classes.push('lg:grid-cols-3')
  if (props.quantity > 3) classes.push('xl:grid-cols-4')

  return classes
})

onMounted(() => {
    loadProducts(props.category.slug, props.quantity)
});
</script>

<template>
  <div class="w-full max-w-full bg-base-300 rounded-4xl p-6 lg:mb-6">
    <h2 class="text-5xl font-bold mb-3">{{ category.title }}</h2>
    <div v-if="state === 'loading'">Loading</div>
    <div
      v-else-if="state === 'ready'"
      :class="gridClass"
    >
      <template v-for="product in products" :key="product.id">
        <Card :product="product" />
      </template>
    </div>
    <div v-else role="alert" class="alert alert-error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Error! Task failed successfully.</span>
    </div>
  </div>
</template>
