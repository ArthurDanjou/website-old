<template>
  <main class="blog flex flex-col items-center px-5 xl:px-64">
    <h1 class="mt-16 md:mt-32 title font-bold text-4xl mr-2 inline mb-4">
      Blog
      <svg class="inline-block blog-img" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    </h1>
    <div class="flex flex-col justify-around items-center py-8 w-full md:w-1/2">
      <!-- TODO
      Insert research by tags
      Insert see more
      -->
      <div v-if="posts.size !== 0" class="w-full" v-for="post in posts">
        <nuxt-link :to="'/blog/' + post.id">
          <Post
            :title="post.title.code"
            :reading_time="post.reading_time"
            :description="post.description.code"
            :tags="displayTags(post.tags)"
            :cover="post.cover"
            :date="post.created_at"
            :likes="post.likes"
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
export default {
  name: "blog",
  components: {Post},
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
.blog {
  .blog-img {
    transform: translate(3px, -10px);
  }

  .title:after {
    margin-top: 0.1rem;
    content: '';
    height: 2px;
    width: 100%;
    display: block;
    @apply bg-green-400;
  }
}
</style>
