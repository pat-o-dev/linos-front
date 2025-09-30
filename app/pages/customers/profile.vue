<script lang="ts" setup>
import { useAuthStore } from "@/stores/authStore";
const auth = useAuthStore();
</script>

<template>
  <ClientOnly>
    <div v-if="auth.customer" class="max-w-md mx-auto py-10">
      <h1 class="text-2xl font-semibold mb-4">Mon profil</h1>
      <div class="space-y-2">
        <p><strong>Prénom :</strong> {{ auth.customer.firstname }}</p>
        <p><strong>Nom :</strong> {{ auth.customer.lastname }}</p>
        <p><strong>Email :</strong> {{ auth.customer.email }}</p>
      </div>

      <button @click="auth.logout" class="mt-6 text-sm text-red-600 hover:underline">
        Déconnexion
      </button>
    </div>
    <div v-else class="text-center py-10">
      <p>Vous devez être connecté pour voir cette page.</p>
      <NuxtLink to="/customers/login" class="btn text-primary-600 hover:underline">
        Se connecter
      </NuxtLink>
    </div>
  </ClientOnly>
</template>