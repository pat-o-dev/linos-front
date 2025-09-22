<script lang="ts" setup>
import type { Product } from "@/types/shop"

import Productlink from "@/components/navs/ProductLink.vue"
import Price from "@/components/products/Price.vue"
import BtnAddCart from "@/components/products/BtnAddCart.vue"

interface Props {
    product: Product
}

const props = withDefaults(defineProps<Props>(), {
    product: null
})

</script>

<template>
 <tr v-if="product">
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
          <td  class="hidden lg:table-cell">{{ product.description }}</td>
          <td>
              <Price :price="product.price" />   
          </td>
          <th>
             <BtnAddCart :product="product" />
          </th>
        </tr>


</template>