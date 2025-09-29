<script lang="ts" setup>
import type { Product } from "@/types";
import { useCartStore } from "@/stores/cartStore";
import { ref } from "vue";

const cart = useCartStore();

interface Props {
  product?: Product;
}
const props = withDefaults(defineProps<Props>(), {
  product: null,
});

const animItem = ref<{ x: number; y: number } | null>(null);

const addToCart = (event: MouseEvent) => {
  if (props.product) {
    cart.add(props.product, 1);
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    animItem.value = { x: rect.left, y: rect.top };
    setTimeout(() => (animItem.value = null), 800);
  }
};
</script>

<template>
  <div class="relative">
    <UButton
      @click="addToCart"
      icon="i-lucide-shopping-cart"
      size="xl"
      color="primary"
      variant="solid"
      class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-3 rounded-lg shadow-md transition md:w-auto"
    >
      Ajouter au panier
    </UButton>

    <!-- Animation -->
    <transition name="fly">
      <div
        v-if="animItem"
        class="fixed w-8 h-8 bg-primary-500 rounded-full z-50"
        :style="{ left: animItem.x + 'px', top: animItem.y + 'px' }"
      ></div>
    </transition>
  </div>
</template>

<style scoped>
.fly-enter-active {
  transition: transform 0.8s ease, opacity 0.8s ease;
}
.fly-enter-from {
  transform: translate(0, 0) scale(1);
  opacity: 1;
}
.fly-enter-to {
  transform: translate(50px, -300px) scale(0.2); /* vers panier */
  opacity: 0;
}
</style>