<script lang="ts" setup>
import type { Category } from "@/types";

defineProps<{
  category: Category;
}>();
</script>
<template>
  <div>
    <h3 class="text-xl font-bold mb-1">Les sous-catégories <strong>{{ category.title }}</strong></h3>
        <ul  class="grid grid-cols-4 ml-8 mt-3 space-y-3">
          <li v-for="sub in category.children || []" :key="sub?.id">
            <div class="flex flex-col items-start">
              <CategoriesGrid :category="sub" />
             
            </div>
          </li>
        </ul>
  </div>
</template>
