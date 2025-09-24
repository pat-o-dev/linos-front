<script lang="ts" setup>
import { ref, watch } from "vue";
import { useCategories } from "@/composables/useCategories";
import Loading from "@/components/layouts/Loading.vue";
import Error from "@/components/layouts/Error.vue";
import type { Category } from "@/types/shop";
import ProductsGrid from '@/components/categories/ProductsGrid.vue'

const selectedCategory = ref<Category>();
const { state, categories, loadCagegories } = useCategories();

loadCagegories();
watch(categories, () => {
    if(state.value === 'ready' && categories.value) {
        selectedCategory.value = categories.value.categories[0]
    }
})

</script>

<template>
    <Loading v-if="state === 'loading'" />
    <Error v-else-if="state === 'error'" />
    <div class="flex flex-col md:flex-row justify-between" v-else-if="state === 'ready' && categories.meta.totalItems">
        
        <div class="p-6 min-w-1/5">
            <h1 class="text-xl font-bold mb-3">Categories :</h1>
            <ul class="">
                <li v-for="category in categories.categories"
                    @click="selectedCategory = category"
                    class="link text-primary hover:text-secondary">
                {{ category.title }}
                </li>
            </ul>
        </div>
        <div v-if="selectedCategory">
            <h2 class="text-xl font-bold mb-3">{{ selectedCategory.title }}</h2>
            <ProductsGrid :products="selectedCategory.products" />
        </div>
    </div>
</template>
