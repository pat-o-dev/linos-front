<script setup>

</script>
<template>
  <div class="min-h-screen flex flex-col bg-gray-50">

    <AppsHeader />

    <div class="flex flex-1 container mx-auto">

      <aside class="hidden md:block w-64 shadow-sm">
        <AppsSidebar />
      </aside>


      <main class="flex-1 p-6 overflow-y-auto">
        <NuxtPage />
      </main>
    </div>


    <AppsFooter />
  </div>
</template>
