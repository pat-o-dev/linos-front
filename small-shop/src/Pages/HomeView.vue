<script setup>
import ProductCars from '@/components/products/Cards.vue'

const category = [{
    id: 3,
    title: "Men's clothing",
    slug: "men's clothing"
},
{
    id: 2,
    title: "Women's clothing",
    slug: "women's clothing"
},
{
    id: 5,
    title: "Electronics",
    slug: "electronics"
},]


</script>

<template>
    <div class="grid lg:grid-cols-2 gap-4">
        <ProductCars :category="category[0]" :quantity="2" />
        <ProductCars :category="category[1]" :quantity="2" />
    </div>

    <ProductCars :category="category[2]" :quantity="4" />


</template>