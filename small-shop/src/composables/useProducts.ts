import { ref } from 'vue'
import axios from 'axios'
import type { Product } from '@/types/shop'

export function useProducts() {

    const state = ref<"loading" | "ready" | "error">("loading")
    const products = ref<Product[]>([])
    const product = ref<Product | null>(null)

    const loadProducts = async (category: string, limit: number):Promise<Product[]|null> => {
        state.value = "loading"
        try {
            const res = await axios.get<Product[]>(
                `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
            )
            products.value = res.data
            state.value = "ready"
            return res.data
        } catch {
            state.value = "error"
            return []
        }
    }

    const findProduct = async (id: number):Promise<Product|null> => {
        state.value = "loading"
        try {
            const res = await axios.get<Product>(
                `https://fakestoreapi.com/products/${id}`
            )
            product.value = res.data
            state.value = "ready"
            return res.data
        } catch {
            state.value = "error"
            return null
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