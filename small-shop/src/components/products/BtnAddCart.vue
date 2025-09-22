<script lang="ts" setup>
import type { Product } from '@/types/shop'

interface Props {
    product?: Product,
}    

const props = withDefaults(defineProps<Props>(), {
    product: null,
});

</script>

<template>
    <button @click="console.log('add to cart')" class="btn btn-primary">Buy Now</button>
</template>