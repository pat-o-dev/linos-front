<template>
  <section class="prose dark:prose-invert max-w-3xl mx-auto p-8">
   
    <div v-if="page">
      <h1 class="text-3xl font-bold mb-6">{{ page.title }}</h1>
      <div v-html="page.content"></div>
    </div>
   
  </section>
</template>

<script lang="ts" setup>

const slug = "about"
const { page, error, pending } = usePage(slug);

</script>