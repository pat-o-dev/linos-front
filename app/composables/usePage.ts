export const usePage = (slug: srtring) => {
  const config = useRuntimeConfig()

  const { data, pending, error } = useAsyncData<Page>(
    `page-${slug}`,
    () => $fetch(`${config.public.apiUri}api/pages/slug/${slug}`),
  )

  const page = computed(() => data.value?.pages)

  return { page, error, pending }
}

