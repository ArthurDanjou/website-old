<template>
  <nuxt-link :to="`/projects/${slug}`">
    <div class="rounded-lg shadow-xl h-80 w-full lg:w-84 text-left dark:bg-gray-800 transform hover:scale-103 duration-300 mb-8 lg:mb-0">
      <div class="h-2/5 post rounded-t-lg flex justify-center">
        <img :src="getCover" alt="Project Image" class="h-full"/>
      </div>
      <div class="h-3/5 p-4 flex flex-col justify-between">
        <div>
          <div class="flex space-x-2 mb-2">
            <div v-for="tag in tags">
              <Tag :content="tag" :pill="false"/>
            </div>
          </div>
          <h1 class="text-2xl font-bold">{{ title }}</h1>
          <p class="text-base mt-3 text-gray-700 dark:text-gray-400 text-justify">{{ $t(description) }}</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">

import {computed} from "@nuxtjs/composition-api";

interface ProjectProp {
  title: string,
  cover: string,
  slug: string,
  tags: Array<String>,
  description: string,
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
    description: {
      type: String,
      default: "Description"
    },
    tags: {
      type: Array,
      default: () => ['tags.web', 'tags.software']
    }
  },
  setup(props: ProjectProp) {
    const getCover = computed(() => require(`@/assets/images/projects/${props.cover}`))

    return {
      getCover
    }
  }
}
</script>

<style scoped lang="scss">
.project {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @apply bg-opacity-50;
}
</style>
