<template>
  <main class="blog flex flex-col items-center px-5 xl:px-64">
    <PageTitle
      title="home_link_blog"
      color="green"
    >
      <svg class="inline-block icon" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    </PageTitle>
    <div class="flex flex-col mt-8 w-full md:w-1/2">
      <h1
        v-if="current_tag === ''"
        class="text-lg mb-2"
      >{{ $t('blog_tags_search') }}</h1>
      <div
        @click="resetPosts"
        v-if="current_tag !== ''"
        class="w-full home-arrow flex cursor-pointer font-bold"
      >
        <div class="arrow duration-300 mr-2">
          <svg height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
        {{ $t('blog_tags_search_back') }}
      </div>
      <div v-else class="flex flex-row w-full overflow-x-scroll md:overflow-x-hidden md:flex-wrap space-x-3 md:space-x-0">
        <div v-for="tag in tags">
          <div
            class="mb-3 md:mr-4 border-b-2 border-opacity-0 hover:border-opacity-100 border-green-400 border-solid duration-300 cursor-pointer font-black"
            @click="fetchPostsByTag(tag.label.code)"
          >
            {{ $t(tag.label.code) }}
          </div>
        </div>
      </div>
    </div>
    <h1 v-if="posts.length === 0" class="text-xl font-bold text-center my-8 w-full">{{ $t('blog_no_posts') }}</h1>
    <div class="w-full md:w-1/2" v-else>
      <div class="flex flex-col justify-around items-center py-8 w-full">
        <div class="w-full" v-for="post in posts">
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
      </div>
      <div class="relative flex flex-row justify-between w-full mb-4" v-if="postsCount > 5">
        <div
          class="duration-500 flex w-1/2 px-5 py-4 justify-center items-center"
          :class="page > 1 ? 'opacity-100' : 'opacity-0'"
        >
          <div class="flex items-center duration-300 prev-arrow" @click="prevPage">
            <div class="arrow duration-300">
              <svg class="inline icon" height="30" width="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>
            </div>
            <div class="inline ml-4 font-bold">{{ $t('blog_pagination_prev') }}</div>
          </div>
        </div>
        <div
          class="duration-500 flex w-1/2 px-5 py-4 justify-center items-center"
          :class="hasNextPage ? 'opacity-100' : 'opacity-0'"
        >
          <div class="flex items-center duration-300 suiv-arrow" @click="nextPage">
            <div class="ml-4 font-bold">{{ $t('blog_pagination_next') }}</div>
            <div class="inline arrow duration-300">
              <svg class="inline icon" height="30" width="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
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
      posts: [],
      postsCount: 0,
      page: 1,
      current_tag: '',
      tags: [],
      hasNextPage: false,
    }
  },
  methods: {
    displayTags(tags) {
      const tags_label = []
      tags.map(tag => {
        tags_label.push(tag.label.code)
      })
      return tags_label
    },
    async fetchPostsByTag(tag) {
      this.current_tag = tag
      const {data} = await this.$axios.get('/post/' + tag + '?page=1')
      this.posts = data.data
      this.hasNextPage = data.meta.next_page_url !== null
    },
    async resetPosts() {
      this.current_tag = ''
      const {data} = await this.$axios.get('/posts?page=1')
      this.posts = data.data
      this.hasNextPage = data.meta.next_page_url !== null
    },
    nextPage() {
      this.page++
    },
    prevPage() {
      this.page--
    }
  },
  async asyncData ({ $axios }) {
    const {data: count} = await $axios.get('/posts/size')
    const {data} = await $axios.get('/posts?page=1')
    const {data: tags} = await $axios.get('/tags')
    return {
      posts: data.data,
      postsCount: count,
      tags,
      hasNextPage: data.meta.next_page_url !== null
    }
  }
}
</script>

<style scoped lang="scss">
.blog {
  .home-arrow:hover .arrow {
    transform: translateX(-15px);
  }

  .prev-arrow:hover .arrow {
    transform: translateX(-10px);
  }

  .suiv-arrow:hover .arrow {
    transform: translateX(15px);
  }

  .arrow {
    transform: translateX(-3px);
  }
}
</style>
