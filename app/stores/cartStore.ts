import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  // état
  const items = ref<{id:number, title:string, image:string, price:number, q:number}[]>([])
  const shippingFree = ref(300)
  const shippingFees = ref(4.99)

  // quantité totale d'articles
  const count = computed(() => items.value.reduce((total, item) => total + item.q, 0))

  // ajout / modification d'un produit
  const add = (product: any, quantity = 1) => {
    const i = items.value.findIndex(item => item.id === product.id)
    if (i > -1) {
      if (items.value[i].q + quantity > 0) {
        items.value[i].q += quantity
      } else {
        del(product.id)
      }
    } else if (quantity > 0) {
      items.value.push({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        q: quantity,
      })
    }
  }

  // suppression d'un produit
  const del = (id: number) => {
    items.value = items.value.filter(item => item.id !== id)
  }

  // vider le panier
  const clear = () => {
    items.value = []
  }

  const totalItems = computed(() => items.value.reduce((total, item) => total + item.price * item.q, 0))

  const fees = computed(() => (totalItems.value > shippingFree.value ? 0 : shippingFees.value))

  const total = computed(() => totalItems.value + fees.value)

  return {
    items,
    shippingFees,
    shippingFree,
    count,
    add,
    del,
    clear,
    totalItems,
    fees,
    total,
  }
}, {
  persist: {
    key: 'pinia_state_cart',
    paths: ['items'],
  },
})