<template>
  <li>
    {{ $t(props.title) }}:
    <div class="z-index-3 inline">
      <a data-blobity-magnetic="false" class="text-red-500 dark:text-amber-400 font-medium" v-if="props.link" :href="props.link" target="_blank">{{ props.content }}</a>
      <span v-else>{{ props.content }}</span>
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    default: 'Title',
    type: String
  },
  link: {
    type: String
  },
  content: {
    default: 'content',
    type: String
  },
})
</script>
