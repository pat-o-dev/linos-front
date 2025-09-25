export const useProduct = (slug: string) => {
  const config = useRuntimeConfig()

  const { data, pending, error } = useAsyncData<Product>(
    `product-${slug}`,
    () => $fetch(`${config.public.apiUri}api/products/slug/${slug}`),
  )

  const product = computed(() => data.value?.products)

  return { product, error, pending }
}
