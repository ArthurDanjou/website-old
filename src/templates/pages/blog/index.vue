<template>
  <main class="blog flex flex-col items-center px-5 xl:px-64">
    <PageTitle
      title="Blog"
      color="green"
    >
      <svg class="inline-block icon" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    </PageTitle>
    <div>
      <!-- TODO
      Insert research by tags
      Insert see more
      -->
    </div>
    <div class="flex flex-col justify-around items-center py-8 w-full md:w-1/2">
      <div v-if="posts.size !== 0" class="w-full" v-for="post in posts">
        <nuxt-link :to="'/blog/' + post.id">
          <Post
            :title="post.title.code"
            :reading_time="post.reading_time"
            :description="post.description.code"
            :tags="displayTags(post.tags)"
            :cover="post.cover.file_name"
            :date="post.created_at"
            :likes="post.likes"
            :lightBg="post.light_back_ground"
          />
        </nuxt-link>
      </div>
      <div v-else class="w-full">
        Pas de blogs !
      </div>
    </div>
  </main>
</template>

<script>
import Post from "~/components/Post";
import PageTitle from "~/components/PageTitle";
export default {
  name: "blog",
  components: {PageTitle, Post},
  head() {
    return {
      title: 'Blog - Arthur Danjou'
    }
  },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    displayTags(tags) {
      const tags_label = []
      tags.map(tag => {
        tags_label.push(tag.label.code)
      })
      return tags_label
    }
  },
  async asyncData ({ $axios }) {
    const {data: posts} = await $axios.get('/posts')
    return {
      posts
    }
  }
}
</script>

<style scoped lang="scss">
</style>
