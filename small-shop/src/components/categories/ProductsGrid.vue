<script lang="ts" setup>
import type { Product } from "@/types/shop"
import Productlink from "@/components/navs/Productlink.vue";
import ProductCard from "@/components/products/Card.vue";

interface Props {
  products: Product[]
}

const props = withDefaults(defineProps<Props>(), {
  products: () => []
})
</script>

<template>
    <div v-if="products.length">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <template v-for="product in products" :key="product.id">
                <ProductCard :product="product" />
            </template>
        </div>
    </div>
    <div v-else>
        No products
    </div>    
</template>