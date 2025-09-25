<script lang="ts" setup>
import type { Product } from "@/types";
import { useCartStore } from "@/stores/cartStore";

 const cart = useCartStore();

interface Props {
  product?: Product;
}

const props = withDefaults(defineProps<Props>(), {
  product: null,
});

const addToCart = () => {
  console.log("Adding to cart:", props.product);
  if (props.product)
    cart.add(props.product, 1);
};
</script>

<template>
  <UButton
    @click="addToCart"
    icon="i-lucide-shopping-cart"
    size="xl"
    color="primary"
    variant="solid"
    >Buy</UButton
  >
</template>
