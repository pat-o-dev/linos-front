<script lang="ts" setup>
import { useCartStore } from "@/stores/cartStore";
import Price from "@/components/products/Price.vue";

const cart = useCartStore();
</script>

<template>
  <tr v-for="item in cart.items" :key="item.id" class="text-center">
    <td class="px-2 py-2 text-left align-top">
      <img :src="item.image" :alt="item.title" class="w-16 h-16 inline-block mr-2" />
      <span>{{ item.title }}</span>
    </td>
    <td class="px-2 py-2"><Price :price="item.price" /></td>
    <td class="px-2 py-2">
      <div class="flex justify-center items-center gap-2">
        <button @click="cart.add(item, -1)" class="px-2 py-1 border rounded">-</button>
        <span>{{ item.q }}</span>
        <button @click="cart.add(item, 1)" class="px-2 py-1 border rounded">+</button>
      </div>
    </td>
    <td class="px-2 py-2"><Price :price="item.price * item.q" /></td>
    <td class="px-2 py-2">
      <button @click="cart.del(item.id)" class="text-red-500">✕</button>
    </td>
  </tr>
</template>