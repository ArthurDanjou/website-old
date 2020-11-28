<template>
  <h1
    class="mt-16 md:mt-32 font-bold text-4xl mr-2 inline mb-4 border-b-2 border-solid"
    :class="' border-'+ color +'-400'"
  >
    {{ title }}
    <slot />
  </h1>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    title: {
      default: 'Title',
      type: String
    },
    color: {
      default: 'red',
      type: String
    }
  }
}
</script>

<style scoped>

</style>
