import { ref } from 'vue'
import axios from 'axios'
import type { Product } from '@/types/shop'

export function useProducts() {

    const state = ref<"loading" | "ready" | "error">("loading")
    const products = ref<Product[]>()
    const product = ref<Product>()

    const loadProducts = async (category: string, limit: number) => {
        state.value = "loading"
        try {
            const res = await axios.get(
                `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
            )
            products.value = res.data
            state.value = "ready"
        } catch {
            state.value = "error"
        }
    }

    const findProduct = async (id: number) => {
        state.value = "loading"
        try {
            const res = await axios.get(
                `https://fakestoreapi.com/products/${id}`
            )
            product.value = res.data
            state.value = "ready"
        } catch {
            state.value = "error"
        }
    }

    return {
        state,
        products,
        product,
        loadProducts,
        findProduct,
    }
}