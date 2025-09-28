<script setup>

</script>
<template>
  <div class="min-h-screen flex flex-col bg-gray-200 text-default dark:bg-gray-700 dark:text-gray-100">

    <UBanner icon="i-lucide-info" to="/about" class="bg-nuxt-gradient text-center" title="Demo E-commerce headless Nuxt Symfony." :close="false"/>

    <AppsHeader />

    <div class="flex flex-1 container mx-auto">

      <aside class="hidden md:block w-64 shadow-sm">
        <AppsSidebar />
      </aside>


      <main class="flex-1 p-2 md:p-6 overflow-y-auto">
        <NuxtPage />
      </main>
    </div>


    <AppsFooter />
  </div>
</template>
