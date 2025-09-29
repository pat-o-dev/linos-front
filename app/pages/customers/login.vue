<script lang="ts" setup>
import { useAuthStore } from "@/stores/authStore";
const auth = useAuthStore();

const email = ref("patrick@gmail.com");
const password = ref("prestashop");

const errorMsg = ref("");
const loading = ref(false);

async function onSubmit() {
  loading.value = true;
  errorMsg.value = "";
  auth.login(email.value, password.value);
  loading.value = false;
}
</script>

<template>
  <ClientOnly>
    <div v-if="auth.customer" class="p-4 bg-green-100 my-4">
      Connecté : {{ auth.customer.firstname }} {{ auth.customer.lastname }}

      <button @click="auth.logout" class="text-sm text-red-600 hover:underline">
            Déconnexion
          </button>
    </div>
    <div v-else class="max-w-md mx-auto py-10">
      <h1 class="text-2xl font-semibold mb-4">Connexion</h1>
      <form @submit.prevent="onSubmit" class="space-y-4">
        <div>
          <label class="block mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label class="block mb-1">Mot de passe</label>
          <input
            v-model="password"
            type="password"
            class="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          :disabled="loading || customer"
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {{ loading ? "Connexion..." : "Se connecter" }}
        </button>
        <p v-if="errorMsg" class="text-red-600 mt-2">{{ errorMsg }}</p>
      </form>
    </div>
  </ClientOnly>
</template>
