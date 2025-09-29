<script setup lang="ts">
interface Props {
    products: Product[]
    quantity?: number
}
const props = withDefaults(defineProps<Props>(), {
    products: [],
    quantity: undefined,  
});

const productsReduce = computed(() => { return props.quantity ? props.products.slice(0, props.quantity) : props.products; })
const gridColsClass = computed(() => {
  if (props.quantity && props.quantity < 4) return 'grid-cols-2'
  return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
})
</script>
<template>
    <div v-if="products.length" :class="`grid gap-1 py-1 px-1 md:py-4 md:gap-2 ${gridColsClass}`">
        <template v-for="product in productsReduce" :key="product.id">
            <ProductsGrid :product="product" />
        </template>
    </div>
</template>