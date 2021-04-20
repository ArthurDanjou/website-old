<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">
    <div class="rounded-lg shadow-xl h-92 w-full lg:w-84 text-left bg-gray-100 dark:bg-gray-800 transform hover:scale-103 duration-300 mb-8 lg:mb-0">
      <div class="h-1/2 w-full h-2/5 project rounded-t-lg"
           :style="{ backgroundImage: `url(${getCover})` }">
      </div>
      <div class="h-1/2 p-4 flex flex-col justify-between">
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
  </a>
</template>

<script lang="ts">
import {computed, defineComponent} from "@nuxtjs/composition-api";

interface ProjectProp {
  title: string,
  cover: string,
  tags: Array<String>,
  description: string,
  url: string,
}

export default defineComponent({
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
    description: {
      type: String,
      default: "Description"
    },
    tags: {
      type: Array,
      default: () => ['tags.web', 'tags.software']
    },
    url: {
      type: String,
      default: 'https://arthurdanjou.fr'
    }
  },
  setup(props: ProjectProp) {
    const getCover = computed(() => require(`@/assets/images/projects/${props.cover}`))

    return {
      getCover
    }
  }
})
</script>

<style scoped lang="scss">
.project {
  background-position: center;
  background-size: cover;
  @apply bg-opacity-50;
}
</style>
