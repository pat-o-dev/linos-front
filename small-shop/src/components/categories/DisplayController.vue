<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps<{ modelValue: "ProductsGrid" | "ProductsTable" }>();
const emit = defineEmits(["update:modelValue"]);

const vModel = ref(props.modelValue);

onMounted(() => {
  vModel.value = localStorage.getItem("categoryDisplay");
});

watch(vModel, (newMode) => {
  localStorage.setItem("categoryDisplay", newMode);
  emit("update:modelValue", newMode);
});
</script>

<template>
  <div class="flex flex-row md:flex-col space-y-2 pr-6">
    <label>
      <input
        type="radio"
        name="radio-category-display"
        class="radio"
        v-model="vModel"
        value="ProductsGrid"
        checked="checked"
      />
      <span class="p-2">Grid</span>
    </label>
    <label>
      <input
        type="radio"
        name="radio-category-display"
        class="radio"
        v-model="vModel"
        value="ProductsTable"
      />
      <span class="p-2">Table</span></label
    >
  </div>
</template>
