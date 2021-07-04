<template>
  <main class="flex flex-col items-center mb-8 px-4 xl:px-32">
    <Banner />
    <AboutHome />
    <PostsHome />
    <ProjectsHome />
    <AdHome />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: 'Arthur Danjou - FullStack Web & Software Developer'
    }
  }
})
</script>
