<script setup>
import { ref } from 'vue'
import { useCartStore } from "@/stores/cartStore";
import CartItemRow from "@/components/carts/Row.vue";
import Price from "@/components/products/Price.vue";

const cart = useCartStore();
</script>

<template>
  <section class="w-full bg-base p-1 md:p-4">
    <h1 class="the-big-heading-for-the-page-title">
      My Small Shopping Cart
    </h1>
    <div v-if="cart.items.length" class="flex items-start mt-2 gap-6">
      <div class="bg-base  rounded-xl">
        <table class="bg-base rounded-xl">
          <thead>
            <tr
              class="text-center border-b border-gray-400 w-full text-base-content text-sm font-medium uppercase leading-[14px] tracking-wide"
            >
              <th class="text-left px-2 py-2">Product</th>
              <th class="px-2 py-2">price</th>
              <th class="px-2 py-2">Quantity</th>
              <th class="px-2 py-2">Subtotal</th>
              <th class="w-7 px-2 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <CartItemRow />
          </tbody>
          <tfoot>
            <tr class="border-t border-gray-400">
              <td class="px-2 py-2" colspan="2">
                <button
                  class="px-8 cursor-pointer py-3.5 bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold className leading-[16px]"
                >
                  Return to shop
                </button>
              </td>
              <td class="px-2 py-2" colspan="1">
                <button
                  @click="cart.clear()"
                  class="px-8 cursor-pointer py-3.5 bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold className leading-[16px]"
                >
                  Clear Cart
                </button>
              </td>

              <td class="px-2 py-2" colspan="2">
                <button
                  class="px-8 py-3.5 cursor-pointer bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold className leading-[16px]"
                >
                  Update Cart
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="w-[424px] bg-base rounded-lg p-6">
        <h2 class="mb-2 text-xl font-medium leading-[30px]">Cart Total</h2>
        <div class="w-[376px] py-3 justify-between items-center flex">
          <span class="text-[#4c4c4c] text-base font-normal leading-normal"
            >Total:</span
          >
          <Price :price="cart.totalItems" />
        </div>
        <div
          class="w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex"
        >
          <span class="text-[#4c4c4c] text-sm font-normal leading-[21px]"
            >Shipping:</span
          >
            <Price v-if="cart.fees > 0" :price="cart.fees" />
          <span v-else class="text-sm font-medium leading-[21px]">Free</span>
        </div>
        <template v-if="cart.fees > 0">  
            <div class="block bg-base-500 text-end">More <Price :price="(cart.shippingFree - cart.totalItems)" /> for free shipping</div>
          </template>
        <div
          class="w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex"
        >
          <span class="text-[#4c4c4c] text-sm font-normal leading-[21px]"
            >Subtotal:</span
          >
          <Price :price="cart.total" />
        </div>
        <button
          class="w-[376px] text-base-content mt-5 px-10 py-4 bg-[#00b206] rounded-[44px] gap-4 text-base font-semibold leading-tight"
        >
          Proceed to checkout
        </button>
      </div>
    </div>

    <div v-else>Empty Cart</div>
  
  </section>
</template>
