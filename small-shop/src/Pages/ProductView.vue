<script lang="ts" setup>
import { ref, watch, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Breadcrumbs from '@/components/layouts/Breadcrumbs.vue'
import Error from '@/components/layouts/Error.vue'
import Loading from '@/components/layouts/Loading.vue'
import Rating from '@/components/products/Rating.vue'
import ProductCars from '@/components/products/Cards.vue'
import { useProducts } from "@/composables/useProducts";
import type { Product } from "@/types/shop";

const route = useRoute();
const id = ref(Number(route.params.id));
const category = ref({})
const { state, product, findProduct } = useProducts();

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      id.value = Number(newId)
      findProduct(id.value)
    }
  }
)

watch(product, (newProduct) => {
  if (newProduct) {
    category.value = { id:6, title: newProduct.category, slug: encodeURIComponent(newProduct.category) }
  }
});

onMounted(() => {
  if(id.value) {
    findProduct(id.value);
  }
});
</script>

<template>
  <div v-if="state === 'ready' && product">
    <Breadcrumbs :categories="[category]" :product="product"/>
    <div class="hero bg-base-200 items-start pt-10 min-h-screen">
      <div class="hero-content items-start flex-col lg:flex-row-reverse">
        
        
        <img :src="product.image" class="max-w-sm rounded-lg shadow-2xl" />
        
        <div>
          <h1 class="text-2xl font-bold">{{ product.title }}</h1>
          <p class="py-6">
            {{ product.description }}
          </p>
          <div class="card w-96 bg-base-100 card-sm shadow-sm">
            <div class="card-body">
              <div class="justify-between card-actions">
                <span class="fond-bold text-2xl">{{ product.price.toFixed(2) }}€</span>
                <button class="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>

          <Rating v-if="product.rating" :rate="product.rating.rate" :count="product.rating.count" :id="product.id" />

          <ProductCars title="Dans la même catégorie" :category="category" :quantity="3" />

        </div>
      </div>
    </div>
  </div>
  <Loading v-if="state === 'loading'" />
  <Error v-else-if="state === 'error'" />
</template>
