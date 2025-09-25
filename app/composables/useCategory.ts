export const useCategory = (slug: string) => {
  const config = useRuntimeConfig()

  const { data, pending, error } = useAsyncData<Category>(
    `category-${slug}`,
    () => $fetch(`${config.public.apiUri}api/categories/slug/${slug}`),
  )

  const category = computed(() => data.value?.categories)

  return { category, error, pending }
}
