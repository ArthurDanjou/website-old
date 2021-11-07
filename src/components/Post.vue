<template>
  <nuxt-link
    class="z-index-3"
    data-blobity-magnetic="false"
    data-blobity-offset-x="4"
    data-blobity-offset-y="4"
    :to="`/blog/${props.slug}`"
  >
    <div class="group post w-full text-justify bg-white p-2 rounded-md dark:bg-black">
      <h1 class="font-black text-3xl duration-300" :class="getHoverColor">{{ $t(props.title) }}</h1>
      <h2 class="my-4 text-2xl text-gray-600 dark:text-gray-400">{{ $t(props.description) }}</h2>
      <div class="text-gray-700 dark:text-gray-300">
        <span>{{ formatDate }}</span>, <span>{{ props.reading_time }}</span> min.
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">

import {useNuxtApp} from "nuxt3";
import {computed} from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Title"
  },
  description: {
    type: String,
    default: "Description"
  },
  date: {
    type: String,
    default: "Date"
  },
  slug: {
    type: String,
    default: "slug"
  },
  reading_time: {
    type: Number,
    default: 0
  },
  color: {
    type: String,
    default: 'blue'
  }
})

const { i18n } = useNuxtApp()
const formatDate = computed(() => {
  const [first, second, third]: any = props.date.split('-')
  return `${first} ${i18n.t(`month.${second}`)} ${third}`
})

const getHoverColor = computed(() => {
  switch (props.color) {
    case 'blue':
      return 'group-hover:text-blue-400'
    case 'red':
      return 'group-hover:text-red-400'
    case 'green':
      return 'group-hover:text-green-400'
    case 'yellow':
      return 'group-hover:text-yellow-400'
    case 'purple':
      return 'group-hover:text-purple-400'
    default:
      return 'group-hover:text-blue-400'
  }
})
</script>
