<template>
  <main v-if="projects" class="flex flex-col items-center px-4 xl:px-32">
    <PageTitle title="part.projects" />
    <h1 v-if="projects.length === 0" class="text-xl font-bold text-center my-8 w-full">{{ $t('projects.no_project') }}</h1>
    <div v-else class="flex flex-col justify-around items-center py-10 w-full">
      <h1 class="text-gray-700 dark:text-gray-400 text-xl mt-4">{{ $t('projects.description') }}</h1>
      <div class="flex flex-col items-center md:items-start md:flex-row flex-wrap w-full space-y-3 md:space-y-0">
        <div class="flex py-4 w-full flex-wrap justify-center">
          <div class="md:mx-4 my-4 w-full lg:w-auto" v-for="project in projects">
            <Project
              :title="project.title"
              :cover="project.cover"
              :description="project.description"
              :tags="project.tags"
              :url="project.url"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from "@nuxtjs/composition-api";
import {Project} from "~/types/types";

export default defineComponent({
  name: "index",
  head() {
    return {
      title: `${this.$i18n.t('header.projects')} - Arthur Danjou`
    }
  },
  setup() {
    const { $content, $sentry } = useContext()

    const projects = useAsync(() => {
      return $content('projects')
        .fetch<Project>()
        .catch((error) => {
          $sentry.captureEvent(error)
        })
    }, 'projects')

    return {
      projects
    }
  }
})
</script>
