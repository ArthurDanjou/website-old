<template>
  <section v-if="projects" class="w-full flex items-center justify-center my-20">
    <div class="flex flex-col items-center text-center">
      <div class="flex flex-col items-center">
        <h2 class="font-bold text-3xl">
          Derniers projets
        </h2>
        <p class="text-gray-700 dark:text-gray-400 text-xl lg:w-2/3 mt-4">
          Quelques projets que j'ai realise dans ma vie de developpeur.
        </p>
      </div>
      <div class="my-8 lg:flex w-full lg:space-x-8">
        <div v-for="project in projects">
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
      <div class="flex">
        <Button content="Voir plus de projets" link="projects"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {useAsync, useContext} from "@nuxtjs/composition-api";
import {Project} from "../../@types/types";

export default {
  name: "ProjectsPreview",
  setup() {
    const { $content } = useContext()

    const projects = useAsync(() => {
      return $content(`projects`)
        .limit(3)
        .fetch<Project>()
    })

    return {
      projects
    }
  }
}
</script>

<style scoped lang="scss">

</style>
