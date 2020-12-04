<template>
  <main class="work flex flex-col items-center px-5 xl:px-64">
    <PageTitle
      title="home_link_work"
      color="blue"
    >
      <svg class="inline-block icon" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </PageTitle>
    <h1 v-if="works.length === 0" class="text-xl font-bold text-center my-8 w-full">{{ $t('work_no_work') }}</h1>
    <div v-else class="flex flex-col justify-around items-center py-10 w-full">
      <h1 class="text-xl font-bold text-center mb-8">{{ $t('work_description') }}</h1>
      <div class="flex flex-col items-center md:items-start md:flex-row flex-wrap w-full space-x-4">
        <div v-for="work in works">
          <nuxt-link :to="'/work/' + work.id">
            <Work
              :title="work.title.code"
              :url="work.url"
              :color="work.color"
              :cover="work.cover.file_name"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import Work from "~/components/Work";
export default {
  name: "index",
  components: {Work, PageTitle},
  head() {
    return {
      title: 'Work - Arthur Danjou'
    }
  },
  data () {
    return {
      works: []
    }
  },
  async asyncData({ $axios }) {
    const {data: works} = await $axios.get('/projects')
    return {
      works
    }
  }
}
</script>

<style scoped lang="scss">
</style>
