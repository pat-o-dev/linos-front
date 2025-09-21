<script setup>
import Card from "@/components/products/Card.vue";

const props = defineProps({
    title: String,
    products: Object
})

</script>

<template>
  <div class="w-full max-w-full  bg-base-300 rounded-4xl p-6">
    <h2 class="text-5xl font-bold mb-3">{{ title }}</h2>
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  </div>
</template>
