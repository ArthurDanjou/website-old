<template>
  <nuxt-link :to="`/blog/${slug}`" rel="noreferrer noopener">
    <div class="rounded-lg dark:shadow-white shadow-xl h-116 w-full lg:w-100 text-left bg-gray-100 dark:bg-gray-800 transform hover:scale-103 duration-300 mb-8 lg:mb-0">
      <div class="h-2/5 post rounded-t-lg"
           :style="{ backgroundImage: `url(${getCover})` }">
      </div>
      <div class="h-3/5 p-4 flex flex-col justify-between">
        <div>
          <div class="flex space-x-2 mb-2">
            <div v-for="tag in tags">
              <Tag :content="tag" :pill="true"/>
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
import {computed, defineComponent, useContext} from "@nuxtjs/composition-api";

interface PostProps {
  title: string,
  description: string,
  date: string,
  cover: string,
  slug: string,
  tags: Array<string>,
  reading_time: number
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
    }
  },
  setup(props: PostProps) {
    const getCover = computed(() => require(`~/assets/images/posts/${props.cover}`))

    const { i18n } = useContext()
    const formatDate = computed(() => {
      const [first, second, third]: any = props.date.split('-')
      return `${first} ${i18n.t(`month.${second}`)} ${third}`
    })

    return {
      getCover,
      formatDate
    }
  }
})
</script>

<style scoped lang="scss">
.post {
  background-position: center;
  background-size: cover;
  @apply bg-opacity-50;
}
</style>
