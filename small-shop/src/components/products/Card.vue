<script lang="ts" setup>
import type { Product } from "@/types/shop";
import Productlink from "@/components/navs/Productlink.vue";
const props = defineProps<{ product: Product }>();
</script>

<template>
  <div
    class="card bg-base-100 w-full shadow-sm hover:shadow-2xl border border-base-200"
  >
    <figure class="p-4">
      <img
        @click="
          $router.push({ name: 'products.view', params: { id: product.id } })
        "
        :src="product.image"
        class="w-48 aspect-square"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title h-[3rem] line-clamp-2 overflow-hidden">
        <Productlink :id="product.id">
          {{ product.title }}
        </Productlink>
      </h2>
      <p class="line-clamp-4 overflow-hidden">{{ product.description }}</p>
      <div class="card-actions justify-between flex items-center">
        <span class="text-2xl">{{ product.price.toFixed(2) }}€</span>
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>
