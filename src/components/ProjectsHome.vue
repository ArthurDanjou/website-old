<template>
  <section v-if="projects" class="w-full flex items-center justify-center my-20">
    <div class="flex flex-col items-center text-center">
      <div class="flex flex-col items-center">
        <h2 class="font-bold text-3xl">
          {{ $t('projects.latest') }}
        </h2>
        <p class="text-gray-700 dark:text-gray-400 text-xl lg:w-2/3 mt-4">
          {{ $t('projects.description') }}
        </p>
      </div>
      <div class="my-8 lg:flex w-full lg:space-x-8 flex flex-wrap justify-center">
        <div v-for="project in projects">
          <Project
            :title="project.title"
            :cover="project.cover"
            :description="project.description"
            :tags="project.tags"
            :url="project.url"
          />
        </div>
      </div>
      <div class="flex">
        <Button content="projects.see_more" link="projects"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "ProjectsHome",
  props: {
    projects: {
      default: () => [],
    }
  }
})
</script>
