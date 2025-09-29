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
    class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-3 rounded-lg shadow-md transition md:w-auto"
    >Ajouter au panier</UButton
  >
</template>
