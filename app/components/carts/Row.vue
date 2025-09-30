<script lang="ts" setup>
import { useCartStore } from "@/stores/cartStore";
import Price from "@/components/products/Price.vue";

const cart = useCartStore();
</script>

<template>
  <tr v-for="item in cart.items" :key="item.id" class="text-center">
    <!-- Image + titre -->
     <td class="px-2 py-3 text-left align-top">
      <div class="flex items-start gap-3 min-w-0">
        <img
          :src="item.image"
          :alt="item.title"
          class="w-16 h-16 flex-shrink-0 object-cover rounded"
        />
        <span
          class="block font-medium text-sm md:text-base leading-snug text-left break-words whitespace-normal min-w-0 line-clamp-2 md:line-clamp-3"
          :title="item.title"
        >
          {{ item.title }}
        </span>
      </div>
    </td>

    <!-- Prix unitaire -->
    <td class="px-2 py-2">
      <Price :price="item.price" class="text-lg" />
    </td>

    <!-- Quantité -->
    <td class="px-2 py-2">
      <div class="flex items-center justify-center gap-2">
        <button
          @click="cart.add(item, -1)"
          class="w-8 h-8 border rounded-full text-lg font-bold"
        >
          −
        </button>
        <span class="w-8 text-center">{{ item.q }}</span>
        <button
          @click="cart.add(item, 1)"
          class="w-8 h-8 border rounded-full text-lg font-bold"
        >
          +
        </button>
      </div>
    </td>

    <!-- Total ligne -->
    <td class="px-2 py-2">
      <Price :price="item.price * item.q" class="text-lg" />
    </td>

    <!-- Supprimer -->
    <td class="px-2 py-2">
      <button
        @click="cart.del(item.id)"
        class="text-red-500 hover:underline text-sm"
      ><UIcon name="i-lucide-trash-2" class="size-8"> X </UIcon>
   
      </button>
    </td>
  </tr>
</template>