<template>
  <h1
    class="mt-16 md:mt-32 font-bold text-3xl md:text-5xl mr-2 inline mb-4 border-b-3 border-solid border-indigo-600"
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
