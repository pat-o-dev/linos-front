<template>
  <div class="container mx-auto p-4">
    <h1 class="text-xl font-bold mb-3">Inscription</h1>
    <form @submit.prevent="register">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium">Email</label>
        <input id="email" v-model="email" type="email" class="input input-bordered w-full" />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium">Mot de passe</label>
        <input id="password" v-model="password" type="password" class="input input-bordered w-full" />
      </div>
      <button type="submit" class="btn btn-primary">S'inscrire</button>
    </form>
  </div>
</template>

<script setup>
const email = ref('');
const password = ref('');

const register = async () => {
  const { data, error } = await useFetch('/api/users/register', {
    method: 'POST',
    body: { email: email.value, password: password.value }
  });
  if (error.value) {
    console.error('Erreur d’inscription:', error.value);
  } else {
    console.log('Inscription réussie:', data.value);
  }
};

useHead({ title: 'Inscription' });
</script>