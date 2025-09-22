<script lang="ts" setup>
import type { Product } from "@/types/shop"
import Productlink from "@/components/navs/Productlink.vue";

interface Props {
  products: Product[]
}

const props = withDefaults(defineProps<Props>(), {
  products: () => []
})
</script>

<template>

    <table v-if="products.length" class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

        <tr v-for="product in products" :key="product.id">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img
                    @click="$router.push({ name: 'products.view', params: { id: product.id } })"
                    :src="product.image"
                    :alt="product.title"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold"><Productlink :id="product.id">
                    {{ product.title }}
                </Productlink></div>
                <div class="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>
           {{ product.price.toFixed(2) }}€
          </td>
          <td>{{ product.description }}</td>
          <th>
             <button class="btn btn-primary">Buy</button>
          </th>
        </tr>


        </tbody>
    </table>
    <div v-else>No products</div>
</template>