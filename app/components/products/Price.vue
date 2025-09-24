<template>
    <span class="font-bold text-2xl">{{ price.toFixed(2) }}{{ money }}</span>
</template>

<<script lang="ts" setup>
interface Props {
    price?: number,
    money?: string,
}    

const props = withDefaults(defineProps<Props>(), {
    price: 0,
    money: "€",
});

</script>