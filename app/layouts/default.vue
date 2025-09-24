<script setup>
const showSidebar = useState("showSidebar", () => true)
</script>
<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Header -->
    <AppsHeader />
    <!-- Contenu principal -->
    <div class="flex flex-1 container mx-auto">
      <!-- Sidebar -->
      <aside v-if="showSidebar" class="hidden md:block w-64 shadow-sm">
        <AppsSidebar />
      </aside>

      <!-- Page -->
      <main class="flex-1 p-6 overflow-y-auto">
        <NuxtPage />
      </main>
    </div>

    <!-- Footer -->
    <AppsFooter />
  </div>
</template>
