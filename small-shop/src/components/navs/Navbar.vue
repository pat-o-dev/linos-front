<script setup>
import ThemeController from "@/components/layouts/ThemeController.vue";
import Navlink from "@/components/navs/Navlink.vue";
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm px-6">
    <div class="flex-1">
      <div class="flex space-x-6 items-center">
        <a class="btn btn-ghost normal-case text-xl" href="/" >SmallShop</a>
        <Navlink :to="{ name: 'homepage' }">Home</Navlink>
        <Navlink :to="{ name: 'about' }">About</Navlink>
      </div>
    </div>
    <div class="flex-none">
      <ThemeController />
    </div>
  </div>
</template>
