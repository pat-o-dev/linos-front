<script setup lang="ts">
const fields = ref([
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
])
</script>

<template>
  <FormsRegisterForm
    class="max-w-md"
    title="Register"
    description="Create your account to start shopping."
    icon="i-lucide-user-plus"
    :fields="fields"
  />
</template>
