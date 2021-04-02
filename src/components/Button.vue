<template>
  <nuxt-link :to="link">
    <div class="text-lg cursor-pointer px-8 py-4 rounded-xl border-2 border-gray-600 hover:(bg-gray-700 text-white) text-gray-700 duration-300 dark:(border-gray-400 text-gray-400) dark:hover:bg-gray-400 dark:hover:text-black">
      {{ content }}
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
