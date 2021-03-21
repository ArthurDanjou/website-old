<template>
  <div class="mb-3 mr-3 p-1 md:p-2 h-64 w-64 border-gray-900 dark:border-dark-200 border-2 duration-300 rounded-3xl hover:bg-opacity-25 hover:scale-105 transform cursor-pointer"
       :class="getColor">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="text-center">
        <img alt="Project Img" class="rounded-md" width="150" :src="getCoverLink">
      </div>
      <div class="text-center">
        <h1 class="md:text-2xl text-lg font-bold">{{ title }}</h1>
        <a :href="url" :class="'text-' + color + '-500'">{{ formatLink }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from '@nuxtjs/composition-api'

interface WorkProp {
  title: string,
  url: string,
  cover: string,
  color: string
}

export default {
  name: "Work",
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    url: {
      type: String,
      default: 'https://arthurdanjou.fr'
    },
    cover: {
      type: String,
      default: 'default.png'
    },
    color: {
      type: String,
      default: 'white'
    }
  },
  setup(props: WorkProp) {
    const formatLink = computed(() => props.url.replace('https://', '').replace('http://', ''))
    const getColor = computed(() => `hover:bg-${props.color}-600`)
    const getCoverLink = computed(() => `@/assets/images/works/${props.cover}.png`)

    return {
      formatLink,
      getColor,
      getCoverLink
    }
  }
}
</script>

<style scoped>

</style>
