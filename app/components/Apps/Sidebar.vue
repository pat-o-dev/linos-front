<script lang="ts" setup>
const { categories, error, pending } = useCategories();
</script>

<template>
    <aside class="w-64 p-4 hidden md:block">
        <ul class="space-y-2">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li v-if="pending"><NuxtLink to="/categories">Categories</NuxtLink></li>
            <li v-else-if="error" class="text-red-500"><NuxtLink to="/categories">Categories</NuxtLink></li>
            <template v-if="categories && categories.length">
            <li v-for="category in categories" :key="category.id">
                <NuxtLink :to="`/categories/${category.slug}`">{{ category.title }}</NuxtLink>
            </li>
            </template>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
    </aside>
</template>