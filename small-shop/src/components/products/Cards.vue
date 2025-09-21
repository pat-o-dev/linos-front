<script lang="ts" setup>
import { onMounted, computed } from "vue";
import type { Category } from '@/types/shop'
import { useProducts } from '@/composables/useProducts'
import Error from '@/components/layouts/Error.vue'
import Card from "./Card.vue";

const props = withDefaults(
  defineProps<{
    quantity: number,
    category: Category,
    title?: string
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
    <h2 v-if="title" class="text-5xl font-bold mb-3">{{ title }}</h2>
    <h2 v-else class="text-5xl font-bold mb-3">{{ category.title }}</h2>
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
      <Error />
    </div>
  </div>
</template>
