<script setup>
import Navbar from '@/components/layouts/Navbar.vue'
import Footer from '@/components/layouts/Footer.vue'

</script>

<template>
    <div class="min-h-screen container mx-auto flex flex-col">
        <div class="container mx-auto">
            <Navbar />
        </div>
        
        <main class="flex-1 mx-auto p-4">
            <slot />
        </main>

        <div class="container mx-auto">
            <Footer />
        </div>
        
  </div>
</template>

<style scoped>
    main {
        padding: 20px;
    }
</style>