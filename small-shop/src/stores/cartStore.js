import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    // init
    const items = ref([]);
    const shippingFree = ref(300);
    const shippingFees = ref(4.99);
    // total of quantity item
    const count = computed(() => items.value.reduce((total, item) => total + item.q, 0));
    // add, edit quantity product
    const add = (product, quantity = 1) => {
        const i = items.value.findIndex((item) => item.id === product.id);
        if(i > -1) {
            if(items.value[i].q + quantity > 0) {
                items.value[i].q += quantity;
            } else { 
                del(product.id);
            }
        }
        else if(quantity > 0) {
            items.value.push({ 
                id: product.id, 
                title: product.title,
                image: product.image,
                price: product.price,
                q: quantity});
        }
    };
    // remove item
    const del = (id) => {
        items.value = items.value.filter((item) => item.id !== id);
    };
    // clear cart items
    const clear = () => {
        items.value = []
    };
    const totalItems = computed(() => {
        return items.value.reduce((total, item) => total + item.price * item.q, 0)
    });
    const fees = computed(() => {
        if(totalItems.value > shippingFree.value) {
            return 0;
        }
        return shippingFees.value;
    });
    const total = computed(() => {
        return totalItems.value + fees.value;
    });     

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
    };
},
{
   persist: {
    storage: localStorage,
    key: 'pinia_state_cart', // Clé personnalisée pour correspondre à 'cart' dans localStorage
    paths: ['items'], // Persister uniquement items
  },
})