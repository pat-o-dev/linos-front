export default defineEventHandler(async (event) => {
  // Vide tout le cache Nitro
  await $fetch('/__nitro/revalidate', {
    method: 'POST',
    body: {
      // tu peux cibler des routes précises
      urls: ['/', '/categories']
    }
  })

  return { ok: true, message: 'Cache invalidated' }
})