<template>
  <nuxt-link data-blobity-radius="16" :to="props.link" class="z-index-3">
    <div class="text-lg px-8 py-4 rounded-xl bg-white dark:bg-black border-2 border-red-500 dark:border-amber-400 text-red-500 dark:text-amber-400 duration-300">
      {{ $t(props.content) }}
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  content: {
    type: String,
    default: 'Content'
  },
  link: {
    type: String,
    default: '/'
  }
})

</script>
