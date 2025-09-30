<script setup>
import { useCartStore } from "@/stores/cartStore";
import CartItemRow from "@/components/carts/Row.vue";
import Price from "@/components/products/Price.vue";

const cart = useCartStore();
</script>

<template>
  <section class="w-full bg-base p-2 md:p-4">
    <h1 class="text-2xl font-bold mb-4">My Small Shopping Cart</h1>

    <div v-if="cart.items.length" class="flex flex-col lg:flex-row gap-6">
      <!-- Tableau Desktop -->
      <div class="hidden md:block flex-1 bg-base rounded-xl overflow-x-auto">
        <table class="w-full bg-base rounded-xl">
          <thead>
            <tr class="text-center border-b border-gray-400 text-sm font-medium uppercase">
              <th class="text-left px-2 py-2">Product</th>
              <th class="px-2 py-2">Price</th>
              <th class="px-2 py-2">Quantity</th>
              <th class="px-2 py-2">Subtotal</th>
              <th class="w-7 px-2 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <CartItemRow />
          </tbody>
        </table>
      </div>

      <!-- Version mobile -->
      <div class="md:hidden space-y-4">
        <div
          v-for="item in cart.items"
          :key="item.id"
          class="p-3 border rounded-lg shadow bg-white dark:bg-gray-800"
        >
          <div class="flex items-center gap-3">
            <img :src="item.image" :alt="item.title" class="w-16 h-16 object-cover rounded" />
            <div class="flex-1">
              <h3 class="font-semibold text-sm">{{ item.title }}</h3>
              <Price :price="item.price" class="text-primary font-medium" />
            </div>
            <button @click="cart.del(item.id)" class="text-red-500">✕</button>
          </div>
          <div class="flex justify-between items-center mt-2">
            <div class="flex items-center gap-2">
              <button @click="cart.add(item, -1)" class="px-2 py-1 border rounded">-</button>
              <span>{{ item.q }}</span>
              <button @click="cart.add(item, 1)" class="px-2 py-1 border rounded">+</button>
            </div>
            <Price :price="item.price * item.q" class="font-bold" />
          </div>
        </div>
      </div>

      <!-- Totaux -->
      <div class="w-full lg:w-[400px] bg-base rounded-lg p-6">
        <h2 class="mb-4 text-xl font-semibold">Cart Total</h2>
        <div class="flex justify-between py-2">
          <span>Total Items:</span>
          <Price :price="cart.totalItems" />
        </div>
        <div class="flex justify-between py-2 border-t">
          <span>Shipping:</span>
          <Price v-if="cart.fees > 0" :price="cart.fees" />
          <span v-else>Free</span>
        </div>
        <div class="flex justify-between py-2 border-t">
          <span>Subtotal:</span>
          <Price :price="cart.total" />
        </div>
        <button
          class="w-full mt-4 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
        >
          Proceed to checkout
        </button>
      </div>
    </div>

    <div v-else class="text-center py-10">Empty Cart</div>
  </section>
</template>