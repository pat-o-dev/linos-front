import { ref } from "vue";
import { useFuncs } from "@/composables/useFuncs";
import { useProducts } from "@/composables/useProducts";
import axios from "axios";
import type { Category } from "@/types/shop";

export function useCategories() {

    const state = ref<"loading" | "ready" | "error">("loading")
    const categories = ref<Category[]>([])
    const category = ref<Category | null>(null)
    const { state: productState, products, loadProducts } = useProducts()
    const { randomInt, capitalize } = useFuncs()

    const loadCagegories = async (): Promise<Category[]|[]> => {
        state.value = "loading";
        try {
            const res = await axios.get<Category[]|[]>("http://127.0.0.1:8000/api/categories");
            categories.value = res.data;
            state.value = "ready";
        } catch(error) {
            state.value = "error";
            window.log('error');
        }
    }
    const loadCategory = async (slug: string): Promise<Category|null> => {
        state.value = "loading"
        try {
            window.log('slug', slug)
            const res = await axios.get<Category[]|[]>(`http://127.0.0.1:8000/api/categories/slug/${slug}`);
            category.value = res.data.categories
            state.value = "ready";
            return category
        } catch(error) {
            state.value = "error"
            return null
        }     
    }
    
    const loadCategoryWithProducts = async (slug: string): Promise<Category|null> => {
        try {
            loadCategory(slug);
            const data = await loadProducts(slug, 10);
            if(category.value && productState.value == "ready") {
                category.value.products = data;
            }
            return category;
        } catch(error) {
            state.value = "error";
            return null;
        }
    }

    return {
        state,
        categories,
        category,
        loadCategory,
        loadCagegories,
        loadCategoryWithProducts,
    }
}