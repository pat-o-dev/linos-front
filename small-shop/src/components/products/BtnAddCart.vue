<script lang="ts" setup>
import type { Product } from '@/types/shop'
import { useCartStore } from "@/stores/cartStore";

const cart = useCartStore();

interface Props {
    product?: Product,
}    

const props = withDefaults(defineProps<Props>(), {
    product: null,
});

const addToCart = (event) => {
    cart.add(props.product, 1)
}

</script>

<template>
    <button @click="addToCart" class="btn btn-primary">Buy Now</button>
</template>