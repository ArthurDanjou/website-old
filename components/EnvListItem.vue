<template>
  <li>
    {{ $t(title) }}:
    <a class="duration-300 text-orange-400 font-medium border-b-2 border-opacity-0 hover:border-opacity-100 border-orange-400 border-solid" v-if="link" :href="link" target="_blank">{{ content }}</a>
    <span v-else>{{ content }}</span>
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

<style scoped>

</style>
