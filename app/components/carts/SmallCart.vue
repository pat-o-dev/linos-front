<template>
  <client-only>
    <NuxtLink id="header-cart" to="/cart" class="relative flex items-center">
     <UIcon name="i-lucide-shopping-cart" class="size-8">
        shopping_cart
        </UIcon>
      <span
        v-if="cart.count > 0"
        class="absolute -top-1 left-2 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-600 rounded-full">
        {{ cart.count }}
      </span>
    </NuxtLink>
  </client-only>
</template>

<script lang="ts" setup>
import { useCartStore } from '@/stores/cartStore'
const cart = useCartStore()
</script>
