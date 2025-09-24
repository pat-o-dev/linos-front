<script setup lang="ts">
defineProps<{
    products: Object<[]>
}>()
</script>
<template>
    <div v-if="products.length">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <template v-for="product in products" :key="product.id">
                <ProductsGrid :product="product" />
            </template>
        </div>
    </div>
    <div v-else>
        No products
    </div>    

</template>