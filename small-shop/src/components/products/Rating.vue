<script lang="ts" setup>
const props = defineProps<{
  rate: number,
  count: number,
  id: number
}>();
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex items-between space-x-4">
      <p class="font-bold">{{ rate }}/5</p>
      <p>{{ count }} avis</p>
    </div>
    <div class="rating rating-lg rating-half">
      <input
        type="radio"
        :name="`rating-${id}`"
        class="rating-hidden"
      />
      <input
        v-for="i in 10"
        :key="i"
        type="radio"
        :name="`rating-${id}`"
        class="mask mask-star-2 bg-green-500"
        :class="i % 2 === 0 ? 'mask-half-2' : 'mask-half-1'"
        :checked="i / 2 < rate"
        :aria-label="`${i / 2} star`"
      />
    </div>
  </div>
</template>
