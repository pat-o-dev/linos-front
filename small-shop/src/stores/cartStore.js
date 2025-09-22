import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    // init
    const items = ref([]);
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
            items.value.push({ id: product.id, q: quantity});
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

    return { 
        items,
        count,
        add,
        del,
        clear,
    };
},
{
    persist: {
        storage: localStorage,
    },
})