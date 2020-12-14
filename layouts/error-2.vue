<template>
  <div class="dark:bg-dark-900 dark:text-white font-sans">
    <Nuxt class="content"/>
  </div>
</template>

<script>
export default {
  name: "error-2"
}
</script>

<style scoped>
.content {
  min-height: calc(100vh - 118px);
}
</style>
