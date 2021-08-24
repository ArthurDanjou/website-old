<template>
  <a :href="url" target="_blank">
    <div class="rounded-lg dark:shadow-white shadow-xl lg:h-92 w-full lg:w-84 text-left bg-gray-100 dark:bg-gray-800 transform hover:scale-103 duration-300 mb-8 lg:mb-0">
      <div class="h-64 lg:h-1/2 w-full project rounded-t-lg"
           :style="{ backgroundImage: `url(https://athena.arthurdanjou.fr/files/${cover})` }">
      </div>
      <div class="lg:h-1/2 py-8 px-4 lg:p-4 flex flex-col justify-between">
        <div>
          <div class="flex space-x-2 mb-2">
            <div v-for="tag in tags">
              <Tag :content="tag.label.code" :pill="false"/>
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
import {defineComponent} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Project",
  props: {
    title: {
      type: String,
      default: "Title"
    },
    cover: {
      type: String,
      default: "athena.png"
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
