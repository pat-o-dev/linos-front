<script lang="ts" setup>
const { tree, error, pending } = useTreeCategories();
</script>

<template>
    <aside class="w-64 p-4 hidden md:block">
        <ul class="space-y-2">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li v-if="pending"><NuxtLink to="/categories">Categories</NuxtLink></li>
            <li v-else-if="error" class="text-red-500"><NuxtLink to="/categories">Categories</NuxtLink></li>
            <li>            
                <CategoriesTree :tree="tree" />
            
            </li>


            <!-- <li><NuxtLink to="/contact">Contact</NuxtLink></li> -->
            <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
    </aside>
</template>