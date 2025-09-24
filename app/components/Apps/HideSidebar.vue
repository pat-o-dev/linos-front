<script lang="ts" setup>
  const showSidebar = useState("showSidebar")
  onMounted(() => {
    showSidebar.value = false
  })
  onUnmounted(() => {
    showSidebar.value = true
  })
</script>