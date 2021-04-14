<template>
  <main v-if="projects" class="work flex flex-col items-center">
    <PageTitle
      title="part.projects"
    >
      <svg class="inline-block icon" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </PageTitle>
    <h1 v-if="projects.length === 0" class="text-xl font-bold text-center my-8 w-full">{{ $t('projects.no_project') }}</h1>
    <div v-else class="flex flex-col justify-around items-center py-10 w-full">
      <h1 class="text-xl font-bold text-center mb-8">{{ $t('projects.description') }}</h1>
      <div class="flex flex-col items-center md:items-start md:flex-row flex-wrap w-full space-y-3 md:space-y-0">
        <div class="flex py-8 w-full flex-wrap" >
          <div class="md:mx-3 my-2" v-for="project in projects">
            <Project
              :title="project.title"
              :cover="project.cover"
              :description="project.description"
              :slug="project.slug"
              :tags="project.tags"
              :company="project.company"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {useAsync, useContext, useMeta} from "@nuxtjs/composition-api";
import {Project} from "../../../@types/types";

export default {
  name: "index",
  head: {},
  setup() {
    const { $content, i18n } = useContext()

    const projects = useAsync(() => {
      return $content('projects').fetch<Project>()
    })

    useMeta({
      title: `${i18n.t('header.projects')} - Arthur Danjou`
    })

    return {
      projects
    }
  }
}
</script>

<style scoped lang="scss">
</style>
