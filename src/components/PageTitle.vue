<template>
  <h1
    class="mt-16 md:mt-32 font-bold text-2xl md:text-4xl mr-2 inline mb-4 border-b-2 border-solid border-gray-200 dark:border-gray-800"
  >
    {{ this.$t(title) }}
    <slot />
  </h1>
</template>

<script lang="ts">
export default {
  name: "PageTitle",
  props: {
    title: {
      default: 'Title',
      type: String
    }
  }
}
</script>

<style scoped>

</style>
