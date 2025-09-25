<template>
    <UFooter class="bg-gray-800 text-white e p-4 mt-auto">
      <template #left>
        <p class="text-white text-sm">
          Copyright © {{ new Date().getFullYear() }} Linos Store. All rights reserved.
        </p>
      </template>

      <UNavigationMenu :items="items" class="text-white" variant="link" />

      <template #right>
        <UButton
          icon="i-simple-icons-github"
          color="white"
          variant="ghost"
          to="https://github.com/pat-o-dev/"
          target="_blank"
          aria-label="GitHub"
        />
        <UButton
          icon="i-simple-icons-linkedin"
          color="white"
          variant="ghost"
          to="https://www.linkedin.com/in/patrickgenitrini/"
          target="_blank"
          aria-label="LinkedIn"
        />
      </template>
    </UFooter>
    <small class="text-gray-400 text-left mt-2">Version: {{ config.public.apiUri }}</small>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'
const config = useRuntimeConfig()

const classNavigationMenu = 'text-white hover:text-secondary'
const items: NavigationMenuItem[] = [
  {
    label: 'Patrick Genitrini',
    class: classNavigationMenu,
    trailingIcon: 'i-lucide-bike',
    to: 'https://patrick.genitrini.me/',
    target: '_blank'
  },
  {
    label: 'Linos Store Front',
    class: classNavigationMenu,
    trailingIcon: 'i-lucide-github',
    to: 'https://github.com/pat-o-dev/linos-front',
    target: '_blank'
  }
]
</script>

<style>

</style>