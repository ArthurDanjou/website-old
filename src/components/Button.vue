<template>
  <nuxt-link data-blobity-radius="16" :to="link" class="z-index-3">
    <div class="text-lg px-8 py-4 rounded-xl bg-white dark:bg-black border-2 border-red-500 dark:border-amber-400 text-red-500 dark:text-amber-400 duration-300">
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
