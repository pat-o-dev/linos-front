import type { Category } from "@/types";
interface CategoridesResponse {
  categories: Category[];
}

export const useCategories = () => {
  const config = useRuntimeConfig();

  const { data, pending, error } = useAsyncData<CategoridesResponse>(
    "categories",
    () => $fetch(`${config.public.apiUri}api/categories`)
  );

  const categories = computed(() => data.value?.categories || []);

  return {
    categories,
    pending,
    error,
  };
};

export const useTreeCategories = () => {
  const config = useRuntimeConfig();

  const { data, pending, error } = useAsyncData<CategoridesResponse>(
    "categories-tree",
    () => $fetch(`${config.public.apiUri}api/categories/tree`)
  );

  const tree = computed(() => data.value?.categories || []);

  return {
    tree,
    pending,
    error,
  };
};

export const useCategory = (slug: string) => {
  const config = useRuntimeConfig();

  const { data, pending, error } = useAsyncData<Category>(
    `category-${slug}`,
    () => $fetch(`${config.public.apiUri}api/categories/slug/${slug}`)
  );

  const category = computed(() => data.value?.categories);

  return { category, error, pending };
};
