<script setup>
import { useCartStore } from "@/stores/cartStore";
import CartItemRow from "@/components/carts/Row.vue";
import Price from "@/components/products/Price.vue";

const cart = useCartStore();
</script>

<template>
  <section class="w-full bg-base p-1 md:p-4">
    <h1 class="the-big-heading-for-the-page-title">
     Panier
    </h1>

    <div v-if="cart.items.length" class="mt-2 gap-6">
      <!-- Version desktop -->
      <div class="hidden md:block w-full bg-base rounded-xl">
        <table class="bg-base rounded-xl w-full">
          <thead>
            <tr
              class="text-center border-b border-gray-400 text-base-content text-sm font-medium uppercase leading-[14px] tracking-wide"
            >
              <th class="text-left px-2 py-2">Produit</th>
              <th class="px-2 py-2">Prix</th>
              <th class="px-2 py-2">Quantité</th>
              <th class="px-2 py-2">Sous-Total</th>
              <th class="w-7 px-2 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <CartItemRow />
          </tbody>
        </table>
      </div>

      <!-- Version mobile -->
      <div class="md:hidden w-full bg-base rounded-xl">
        <div
          v-for="item in cart.items"
          :key="item.id"
          class="p-4 border rounded-lg shadow bg-white dark:bg-gray-800 flex flex-col gap-2 mb-2"
        >
          <div class="flex gap-3">
            <img :src="item.image" class="w-16 h-16 object-cover rounded" />
            <div class="flex-1">
              <h3 class="font-semibold text-sm">{{ item.title }}</h3>
              <Price :price="item.price" class="text-primary font-medium" />
            </div>
          </div>

          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center gap-2">
              <button @click="cart.add(item, -1)" class="w-10 h-10 border rounded-full">−</button>
              <span>{{ item.q }}</span>
              <button @click="cart.add(item, 1)" class="w-10 h-10 border rounded-full">+</button>
            </div>
            <Price :price="item.price * item.q" class="font-bold" />
          </div>

          <button
            @click="cart.del(item.id)"
            class="mt-2 text-red-500 text-sm self-start"
          >
            Supprimer
          </button>
        </div>
      </div>

      <!-- Résumé -->
      <div class="w-full lg:w-[400px] bg-base rounded-lg p-6">
        <div class="flex justify-between py-2">
          <span>Total produits :</span>
          <Price :price="cart.totalItems" />
        </div>
        <div class="flex justify-between py-2 border-t">
          <span>Frais de port :</span>
          <Price v-if="cart.fees > 0" :price="cart.fees" />
          <span v-else>Gratuit</span>
        </div>
        <div class="flex justify-between py-2 border-t font-bold">
          <span>Total :</span>
          <Price :price="cart.total" />
        </div>
      </div>
    </div>

    <div v-else>Empty Cart</div>
  </section>
</template>