<template>
  <main>
    <Banner />
    <AboutHome />
    <PostsHome :posts="posts"/>
    <ProjectsHome :projects="projects"/>
    <AdHome />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import {useAsync, useContext} from "@nuxtjs/composition-api";
import {Post, Project} from "../../@types/types";

export default Vue.extend({
  head() {
    return {
      title: 'Arthur Danjou - FullStack Web & Software Developer'
    }
  },
  setup() {
    const { $content, i18n } = useContext()

    const projects = useAsync(() => {
      return $content(`projects`)
        .limit(3)
        .fetch<Project>()
    })

    const posts = useAsync(() => {
      return $content(`articles/${i18n.locale}`)
        .sortBy('date', 'asc')
        .limit(3)
        .fetch<Post>()
    })

    return {
      posts,
      projects
    }
  }
})
</script>
