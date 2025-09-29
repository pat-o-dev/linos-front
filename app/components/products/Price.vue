<template>
    <p class="text-3xl font-extrabold text-primary-600 text-right">
            {{ price.toFixed(2) }}{{ currency }}
          </p>
</template>

<<script lang="ts" setup>
interface Props {
    price?: number,
    currency?: string,
}    

const props = withDefaults(defineProps<Props>(), {
    price: 0,
    currency: "€",
});

</script>