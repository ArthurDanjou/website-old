<template>
  <li>
    {{ $t(title) }}:
    <div class="z-index-3 inline">
      <a data-blobity-magnetic="false" class="text-red-500 dark:text-purple-400 font-medium" v-if="link" :href="link" target="_blank">{{ content }}</a>
      <span v-else>{{ content }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "EnvListItem",
  props:{
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
  }
}
</script>
