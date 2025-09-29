<script lang="ts" setup>
defineProps({
  tree: {
    type: Array,
    required: true
  },
  level: {
    type: Number,
    default: 0
  },
  maxDepth: {
    type: Number,
    default: 2
  }
})
const openIds = ref<number[]>([])

const toggle = (id: number) => {
  if (openIds.value.includes(id)) {
    openIds.value = openIds.value.filter(i => i !== id)
  } else {
    openIds.value.push(id)
  }
}
</script>

<template>
  <ul v-if="tree && tree.length" class="space-y-2">
    <li v-for="category in tree" :key="category.id">
      <div class="flex items-center gap-2">
       <button
          v-if="category.children && category.children.length && level < maxDepth"
          @click="toggle(category.id)"
          class="w-5 h-8 flex items-center justify-center text-xs"
        >
          {{ openIds.includes(category.id) ? "−" : "+" }}
        </button>

        <NuxtLink :to="`/categories/${category.slug}`">
          {{ category.title }}
        </NuxtLink>
         
      </div>

      <!-- sous-catégories -->
      <CategoriesTree
        v-if="openIds.includes(category.id)"
        :tree="category.children"
        :level="level+1"
        :maxDepth="maxDepth"
        class="ml-8 mt-1"
      />
    </li>
  </ul>
</template>