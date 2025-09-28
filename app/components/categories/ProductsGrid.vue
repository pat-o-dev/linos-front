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
  return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
})
</script>
<template>
    <div v-if="products.length">
        <div :class="`grid gap-2 md:gap-4 ${gridColsClass}`">
            <template v-for="product in productsReduce" :key="product.id">
                <ProductsGrid :product="product" />
            </template>
        </div>
    </div>
    <div v-else>
        No products
    </div>    

</template>