<script lang="ts" setup>
import type { Category } from "@/types";

defineProps<{
  category: Category;
}>();
</script>

<template>
  <div>
    <h3 class="text-xl font-bold mb-1">
      Les sous-catégories <strong>{{ category.title }}</strong>
    </h3>

    <ul
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-4 mt-3"
    >
      <li v-for="sub in category.children || []" :key="sub?.id">
        <CategoriesGrid :category="sub" />
      </li>
    </ul>
  </div>
</template>
