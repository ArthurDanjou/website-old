<template>
  <nuxt-link :to="link" class="duration-150 transform hover:scale-105">
    <div class="text-lg cursor-pointer px-8 py-4 rounded-xl border-2 border-red-500 dark:border-amber-400 hover:(bg-red-500 dark:bg-amber-400 text-white) dark:hover:text-black text-red-500 dark:text-amber-400 duration-300">
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
