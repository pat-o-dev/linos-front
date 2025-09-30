<script lang="ts" setup>
import { useCartStore } from "@/stores/cartStore";
import Price from "@/components/products/Price.vue";

const cart = useCartStore();
</script>

<template>
  <tr
    v-for="item in cart.items"
    :key="item.id"
    class="border-b text-center hidden md:table-row"
  >
    <!-- ✅ Desktop -->
    <td class="px-2 py-2 text-left align-top">
      <img
        :src="item.image"
        :alt="item.title"
        class="w-[80px] h-[80px] inline-block mr-2 object-cover rounded"
      />
      <span class="font-medium">{{ item.title }}</span>
    </td>
    <td class="px-2 py-2"><Price :price="item.price" /></td>
    <td class="px-2 py-2">
      <div class="flex items-center justify-center gap-2">
        <button
          @click="cart.add(item, -1)"
          class="w-8 h-8 md:w-8 md:h-8 flex items-center justify-center text-lg font-bold bg-gray-200 rounded-full hover:bg-gray-300"
        >
          −
        </button>
        <span class="w-8 text-center font-semibold">{{ item.q }}</span>
        <button
          @click="cart.add(item, 1)"
          class="w-8 h-8 md:w-8 md:h-8 flex items-center justify-center text-lg font-bold bg-gray-200 rounded-full hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </td>
    <td class="px-2 py-2 font-semibold">
      <Price :price="item.price * item.q" />
    </td>
    <td class="px-2 py-2">
      <button
        @click="cart.del(item.id)"
        class="text-red-500 hover:text-red-700 text-xl"
      >
        ✕
      </button>
    </td>
  </tr>

  <!-- ✅ Mobile (carte) -->
  <div
    v-for="item in cart.items"
    :key="item.id"
    class="block md:hidden p-3 border rounded-lg shadow bg-white dark:bg-gray-800 mb-3"
  >
    <div class="flex items-center gap-3">
      <img
        :src="item.image"
        :alt="item.title"
        class="w-16 h-16 object-cover rounded"
      />
      <div class="flex-1">
        <h3 class="font-semibold text-sm">{{ item.title }}</h3>
        <Price :price="item.price" class="text-primary font-medium" />
      </div>
      <button
        @click="cart.del(item.id)"
        class="text-red-500 text-2xl px-3 py-1 rounded-full hover:bg-red-100"
      >
        ✕
      </button>
    </div>
    <div class="flex justify-between items-center mt-3">
      <div class="flex items-center gap-3">
        <button
          @click="cart.add(item, -1)"
          class="w-12 h-12 flex items-center justify-center text-2xl font-bold bg-gray-200 rounded-full hover:bg-gray-300"
        >
          −
        </button>
        <span class="min-w-[2rem] text-center font-semibold">{{ item.q }}</span>
        <button
          @click="cart.add(item, 1)"
          class="w-12 h-12 flex items-center justify-center text-2xl font-bold bg-gray-200 rounded-full hover:bg-gray-300"
        >
          +
        </button>
      </div>
      <Price :price="item.price * item.q" class="font-bold text-lg" />
    </div>
  </div>
</template>