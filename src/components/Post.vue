<template>
  <nuxt-link :to="`/blog/${slug}`">
    <div class="rounded-lg shadow-lg h-116 w-full md:w-100 text-left dark:bg-gray-800 transform hover:scale-103 duration-300 mb-8 md:mb-0">
      <div class="h-2/5 post rounded-t-lg"
           :style="{ backgroundImage: `url(${getBackgroundCover})` }">
      </div>
      <div class="h-3/5 p-4 flex flex-col justify-between">
        <div>
          <div class="flex space-x-2 mb-2">
            <div v-for="tag in tags">
              <TagPreview :content="tag" :pill="true"/>
            </div>
          </div>
          <h1 class="text-2xl font-bold">{{ title }}</h1>
          <p class="text-base mt-3 text-gray-700 dark:text-gray-400 text-justify">{{ description }}</p>
        </div>
        <div class="flex justify-between">
          <h5 class="text-base text-gray-700 dark:text-gray-400">{{ formatDate }}</h5>
          <h5 class="text-base text-gray-700 dark:text-gray-400">{{ reading_time }} min.</h5>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import {computed, useContext} from "@nuxtjs/composition-api";

interface PostHomeProps {
  title: string,
  description: string,
  date: string,
  cover: string,
  slug: string,
  tags: Array<string>,
  reading_time: number
}

export default {
  name: "PostHome",
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
    cover: {
      type: String,
      default: "string"
    },
    slug: {
      type: String,
      default: "slug"
    },
    tags: {
      type: Array,
      default: () => ["Tag1", "Tag2", "Tag3"],
    },
    reading_time: {
      type: Number,
      default: 0
    },
  },
  setup(props: PostHomeProps) {
    const getBackgroundCover = computed(() => require(`@/assets/images/posts/${props.cover}`))

    const { i18n } = useContext()
    const formatDate = computed(() => {
      const [first, second, third]: any = props.date.split('-')
      return `${first} ${i18n.t(`month.${second}`)} ${third}`
    })

    return {
      getBackgroundCover,
      formatDate
    }
  }
}
</script>

<style scoped lang="scss">
.post {
  background-position: center;
  background-size: cover;
  @apply bg-opacity-50;
}
</style>
