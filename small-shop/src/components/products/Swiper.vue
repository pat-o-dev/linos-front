<script setup>
import Card from "@/components/products/Card.vue";
import CategoryLink from "@/components/navs/CategoryLink.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const props = defineProps({
    category: Object
})
const modules = [Autoplay, Pagination, Navigation];

</script>
<template>
    <h2 class="text-5xl font-bold mb-3">
      <CategoryLink :title="category.title" :slug="category.slug" />
    </h2>
  <swiper
    :slidesPerView="4"
    :spaceBetween="8"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    :breakpoints="{
      640: { slidesPerView: 2, spaceBetween: 12 },
      768: { slidesPerView: 3, spaceBetween: 16 },
      1024: { slidesPerView: 4, spaceBetween: 16 },
    }"
    class="mySwiper"
  >
   <swiper-slide v-for="product in category.products.slice(0, quantity)" :key="product.id">
        <Card :product="product" />
      </swiper-slide>
  </swiper>

</template>

<style scoped>
/* Styles pour Swiper */
.mySwiper {
  padding-bottom: 40px; /* Espace pour la pagination */
}
.swiper-pagination-bullet {
  background: #007bff; /* Couleur primaire Tailwind */
}
</style>