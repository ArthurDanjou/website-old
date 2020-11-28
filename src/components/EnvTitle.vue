<template>
  <h3 class="font-bold text-2xl md:text-4xl mb-2">
    {{ title }}
    <slot />
  </h3>
</template>

<script>
export default {
  name: "EnvTitle",
  props:{
    title: {
      default: 'Title',
      type: String
    }
  }
}
</script>

<style scoped>

</style>
