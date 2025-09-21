<script setup>
import ThemeController from './ThemeController.vue';
</script>


<template>
  <div class="navbar bg-base-100 shadow-sm px-6">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">SmallShop</a>
    </div>
    <div class="flex-none">
        <ThemeController />
    </div>
  </div>
</template>
