<script lang="ts" setup>
import type { Product } from '@/types/widgets'

const props = defineProps<{ product: Product }>()
</script>

<template>
    <div  class="card bg-base-100 w-full shadow-sm hover:shadow-2xl border border-base-200">
        <figure class="p-4">
            
            <img
            :src="product.image"
            class="w-48 aspect-square"
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title h-[3rem] line-clamp-2 overflow-hidden">{{ product.title }}</h2>
            <p class="line-clamp-4 overflow-hidden">{{ product.description }}</p>
            <div class="card-actions justify-between flex items-center">
                <span class="text-2xl">{{ product.price.toFixed(2) }}€</span>
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
</template>