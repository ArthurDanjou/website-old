<template>
  <nuxt-link :to="`/projects/${slug}`">
    <div class="rounded-lg shadow-lg w-full md:w-72 text-left dark:bg-gray-800 transform hover:scale-103 duration-300 mb-4 md:mb-0">
      <div class="h-40 post rounded-t-lg"
           :style="{ backgroundImage: `url(${getBackgroundCover})` }">
      </div>
      <div class="p-4 flex flex-col justify-between">
        <h1 class="text-xl font-bold">
          {{ title }}
        </h1>
        <div class="flex space-x-2 mt-2">
          <div v-for="tag in tags">
            <TagPreview :content="tag" :pill="false"/>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">

import {computed} from "@nuxtjs/composition-api";

interface ProjectProp {
  title: string,
  description: string,
  cover: string,
  slug: string,
  color: string,
  url: string
}

export default {
  name: "Project",
  props: {
    title: {
      type: String,
      default: "Title"
    },
    cover: {
      type: String,
      default: "artapi.png"
    },
    slug: {
      type: String,
      default: "slug"
    },
    color: {
      type: String,
      default: "red"
    },
    tags: {
      type: Array,
      default: () => ['tags.web', 'tags.software']
    }
  },
  setup(props: ProjectProp) {
    const getBackgroundCover = computed(() => require(`@/assets/images/works/artapi.png`))

    return {
      getBackgroundCover
    }
  }
}
</script>

<style scoped lang="scss">
.project {
  background-position: center;
  background-size: cover;
  @apply bg-opacity-50;
}
</style>
