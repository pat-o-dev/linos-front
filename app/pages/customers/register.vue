<script lang="ts" setup>
import { useAuthStore } from "@/stores/authStore";
const auth = useAuthStore();

const email = ref("");
const password = ref("");
const firstname = ref("");
const lastname = ref("");

const errorMsg = ref("");
const loading = ref(false);

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function onSubmit() {
  if (!isValidEmail(email.value)) {
    errorMsg.value = "Veuillez entrer un email valide.";
    return;
  }
  if (password.value.length < 8) {
    errorMsg.value = "Le mot de passe doit contenir au moins 8 caractères.";
    return;
  }
  loading.value = true;
  errorMsg.value = "";

 try {
    await auth.register(email.value, password.value, firstname.value, lastname.value);
    loading.value = false;
    if(auth.customer)
      navigateTo("/customers/profile");
  } catch (err) {
    errorMsg.value = err;
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  if (auth.customer) {
    navigateTo("/customers/profile");
  }
});
</script>

<template>
  <ClientOnly>
    <div v-if="auth.customer" class="p-4 bg-green-100 my-4">
      Connecté : {{ auth.customer.email }}  {{ auth.customer.firstname }} {{ auth.customer.lastname }}

      <button @click="auth.logout" class="text-sm text-red-600 hover:underline">
            Déconnexion
          </button>
    </div>
    <div v-else class="max-w-md mx-auto py-10">
      <h1 class="text-2xl font-semibold mb-4">Créer un compte</h1>
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
        <div>
          <label class="block mb-1">Prénom</label>
          <input
            v-model="firstname"
            type="text"
            class="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label class="block mb-1">Nom</label>
          <input
            v-model="lastname"
            type="text"
            class="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          :disabled="loading || auth.customer"
          class="w-full bg-primary-600 text-white py-2 rounded hover:bg-primary-700"
        >
          {{ loading ? "Connexion..." : "Créer le compte" }}
        </button>
        <p v-if="errorMsg" class="text-red-600 mt-2">{{ errorMsg }}</p>
      </form>
      <NuxtLink to="/customers/login" class="block text-center text-sm text-primary-600 hover:underline mt-2">
  Déjà inscrit ? Connectez-vous
</NuxtLink>
    </div>
  </ClientOnly>
</template>
