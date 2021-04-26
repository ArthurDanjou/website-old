<template>
  <main>
    <Banner />
    <AboutHome />
    <PostsHome />
    <ProjectsHome />
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
  }
})
</script>
