<!-- /pages/[...all].vue -->
<script setup lang="ts">
definePageMeta({
  layout: "default", // forcer ton layout
});
</script>

<template>
  <div class="p-12 text-center">
    <h1 class="text-5xl font-bold text-primary-600 mb-6">404</h1>
    <p class="text-lg mb-8">La page demandée est introuvable.</p>

    <NuxtLink
      to="/"
      class="px-6 py-3 bg-primary-600 text-white rounded-lg shadow hover:bg-primary-700 transition"
    >
      Retour à l’accueil
    </NuxtLink>
  </div>
</template>