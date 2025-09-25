import type { Category } from "@/types";
interface CategoridesResponse {
  categories: Category[]
}

export const useCategories = () => {
  const config = useRuntimeConfig()

  const { data, pending, error } = useAsyncData<CategoridesResponse>(
    'categories',
    () => $fetch(`${config.public.apiUri}api/categories`),
  )

  const categories = computed(() => data.value?.categories || [])

  return { 
    categories,
    pending, 
    error 
  }
}
