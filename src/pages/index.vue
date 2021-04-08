<template>
  <main>
    <Banner />
    <AboutHome />
    <PostsHome />
    <ProjectsHome />
    <StrategyHome />
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

<style lang="scss" scoped>
</style>
