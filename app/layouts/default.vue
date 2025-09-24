<template>
  <UApp>
    <div class="min-h-screen flex flex-col">
      <AppsHeader />
      <div class="flex flex-1">
        <AppsSidebar />
        <main class="flex-1 p-6 bg-gray-50">
          <NuxtPage />
        </main>
      </div>
      <AppsFooter />
    </div>
  </UApp>
</template>
