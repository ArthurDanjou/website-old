<template>
  <nuxt-link
    class="z-index-3"
    data-blobity-magnetic="false"
    data-blobity-offset-x="8"
    data-blobity-offset-y="8"
    :to="`/blog/${slug}`"
  >
    <div class="group post w-full text-justify">
      <h1 class="font-black text-3xl duration-300" :class="getHoverColor">{{ $t(title) }}</h1>
      <h2 class="my-4 text-2xl text-gray-600 dark:text-gray-400">{{ $t(description) }}</h2>
      <div class="text-gray-700 dark:text-gray-300">
        <span>{{ formatDate }}</span>, <span>{{ reading_time }}</span> min.
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import {computed, defineComponent, useContext} from "@nuxtjs/composition-api";

interface PostProps {
  title: string,
  description: string,
  date: string,
  cover: string,
  slug: string,
  tags: Array<string>,
  reading_time: number,
  color: string
}

export default defineComponent({
  name: "Post",
  props: {
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
  },
  setup(props: PostProps) {
    const { i18n } = useContext()
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

    return {
      formatDate,
      getHoverColor
    }
  }
})
</script>
