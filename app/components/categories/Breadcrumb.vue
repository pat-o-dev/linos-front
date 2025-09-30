<script setup lang="ts">
import type { Category } from "@/types";
const { tree } = useTreeCategories();
const props = defineProps<{
  current: Category;
  product?: Product;
}>();

// Fonction récursive simple pour retrouver le chemin
function findPath(categories: Category[], targetId: number): Category[] {
  for (const cat of categories) {
    if (cat.id === targetId) return [cat];
    if (cat.children && cat.children.length) {
      const path = findPath(cat.children, targetId);
      if (path.length) return [cat, ...path];
    }
  }
  return [];
}

const breadcrumb = computed(() => findPath(tree.value, props.current.id));

</script>


<template>
  <nav v-if="breadcrumb.length" class="text-sm flex flex-wrap gap-1 mb-4">
   <NuxtLink :to="`/categories`" class="text-primary hover:underline">
         Catégories
        </NuxtLink> <span>›</span>
    <span v-for="(cat, index) in breadcrumb" :key="cat.id">
      <template v-if="index < breadcrumb.length - 1 || product">
        <NuxtLink :to="`/categories/${cat.slug}`" class="text-primary hover:underline">
          {{ cat.title }}
        </NuxtLink>
        <span>›</span>
      </template>
      <template v-else>
        <span class="font-semibold">{{ cat.title }}</span>
      </template>
    </span>
    <template v-if="product">
    
      <span class="font-semibold">{{ product.title }}</span>
    </template>
  </nav>
</template>