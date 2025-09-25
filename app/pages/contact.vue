<template>
  <div class="container mx-auto p-4">
    <h1 class="text-xl font-bold mb-3">Contactez-nous</h1>
    <UForm :state="form" @submit="submitContact" class="space-y-4">
      <UFormGroup label="Nom" name="name">
        <UInput v-model="form.name" required />
      </UFormGroup>
      <UFormGroup label="Email" name="email">
        <UInput v-model="form.email" type="email" required />
      </UFormGroup>
      <UFormGroup label="Message" name="message">
        <UTextarea v-model="form.message" rows="5" required />
      </UFormGroup>
      <UButton type="submit" color="primary">Envoyer</UButton>
      <p v-if="success" class="text-green-500">Message envoyé !</p>
      <p v-if="error" class="text-red-500">Erreur : {{ error }}</p>
    </UForm>
  </div>
</template>

<script setup>
const form = ref({ name: '', email: '', message: '' });
const success = ref(false);
const error = ref(null);

const submitContact = async () => {
  try {
    const { data, error: apiError } = await useFetch('/api/contact', {
      method: 'POST',
      body: form.value
    });
    if (apiError.value) {
      error.value = apiError.value.message;
    } else {
      success.value = true;
      form.value = { name: '', email: '', message: '' };
    }
  } catch (err) {
    error.value = 'Une erreur est survenue.';
  }
};

useHead({ title: 'Contact' });
</script>