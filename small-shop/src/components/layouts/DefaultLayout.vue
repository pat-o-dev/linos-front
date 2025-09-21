<script setup>
import Navbar from '@/components/layouts/Navbar.vue'
import Footer from '@/components/layouts/Footer.vue'

</script>

<template>
    <div class="min-h-screen container mx-auto flex flex-col">
        <div class="container mx-auto">
            <Navbar />
        </div>
        
        <main class="container mx-auto my-6">
            <slot />
        </main>

        <div class="container mx-auto">
            <Footer />
        </div>
        
  </div>
</template>

<style scoped>

</style>