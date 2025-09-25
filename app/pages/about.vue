<template>
  <div class="container mx-auto p-4">
    <h1 class="text-xl font-bold mb-3">About Linos Store</h1>
    <p>Linos Store est un projet de démonstration combinant Nuxt, Vue.js, TailwindCSS. Il inclut un catalogue de produits avec pages produits et catégories, à venir un panier et la gestion de comptes utilisateurs.</p>
    <p>Ce projet sert à tester l'intégration front-end avec Vue et à préparer une API back-end avec Symfony ou Laravel. L'objectif est de pouvoir déployer plusieurs petites boutiques indépendantes à partir d'un même code.</p>
    <p>
      Pour plus de détails et pour explorer le code, consultez le dépôt GitHub :
      <a href="https://github.com/pat-o-dev/linos-front" class="text-blue-500 hover:underline">github.com/pat-o-dev/linos-front</a>
    </p>
    <p class="mt-4">Patrick Genitrini - Linos Store Front</p>
  </div>
</template>

<script setup>
useHead({
  title: 'About'
})

</script>