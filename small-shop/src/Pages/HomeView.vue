<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import ProductCars from '@/components/products/Cards.vue'
import Loading from "@/components/layouts/Loading.vue";
import Error from "@/components/layouts/Error.vue";
import { useCategories } from "@/composables/useCategories";
import type { Category } from "@/types/shop";
import { useFuncs } from "@/composables/useFuncs";

const homeCategory = ref<Category[]>([])

const { state, categories, loadCagegories } = useCategories();
loadCagegories();

const countCategories = computed(() => {
    return categories.value.categories.length
})

const { randomItems } = useFuncs();
watch(categories, () => {
    if(state.value === "ready" && categories.value) {
        window.log(categories.value)
        homeCategory.value = randomItems(categories.value.categories, 4)
    }
})

</script>

<template>
    <Loading v-if="state === 'loading'" />
    <Error v-else-if="state === 'error'" />
    <div v-else-if="state === 'ready' && categories" class="p-6">
        <div class="grid lg:grid-cols-2 gap-4">
            <ProductCars v-if="homeCategory[0]" :category="homeCategory[0]" :quantity="2" />
            <ProductCars v-if="homeCategory[1]" :category="homeCategory[1]" :quantity="2" />
        </div>

        <ProductCars v-if="homeCategory[2]" :category="homeCategory[2]" :quantity="4" />
        <ProductCars v-if="homeCategory[3]" :category="homeCategory[3]" :quantity="4" />
    </div>

</template>