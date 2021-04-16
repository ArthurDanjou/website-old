<template>
  <nuxt-link :to="link" class="duration-150 transform hover:scale-105">
    <div class="text-lg cursor-pointer px-8 py-4 rounded-xl border-2 border-indigo-600 hover:(bg-indigo-600 text-white) dark:hover:text-black text-indigo-600 duration-300">
      {{ $t(content) }}
    </div>
  </nuxt-link>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    content: {
      type: String,
      default: 'Content'
    },
    link: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped lang="scss">
</style>
