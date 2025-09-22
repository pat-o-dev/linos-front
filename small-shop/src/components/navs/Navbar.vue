<script setup>
import ThemeController from "@/components/layouts/ThemeController.vue";
import Navlink from "@/components/navs/Navlink.vue";

import { useCartStore } from "@/stores/cartStore";

const cart = useCartStore();

</script>

<template>
  <div class="navbar bg-base-100 shadow-sm px-6">
    <div class="flex-1">
      <div class="flex space-x-6 items-center">
        <a class="btn btn-ghost normal-case text-xl" href="/" >SmallShop</a>
        <Navlink :to="{ name: 'homepage' }">Home</Navlink>
        <Navlink :to="{ name: 'about' }">About</Navlink>
      </div>
    </div>
    <div class="flex-none">
      <div class="border border-blue-300 bg-blue-200/50 rounded w-full inline-block p-6 float-end">Panier {{ cart.count }}
        <ul class="flex flex-col space-x-2">
          <li v-for="item in cart.items" :key="item.id">{{ item }}

             <button @click="cart.add(item, -1)">-</button>
              <button @click="cart.del(item.id)">X</button>

          </li>
        </ul>
       
        <button @click="cart.clear()">Vider</button>
      </div>

      <ThemeController />
    </div>
  </div>
</template>
