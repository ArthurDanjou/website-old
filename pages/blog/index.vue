<template>
  <main class="blog flex flex-col items-center px-5 xl:px-64">
    <PageTitle
      title="part.blog"
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
      >{{ $t('blog.tags.search') }}</h1>
      <div
        @click="resetPosts"
        v-if="current_tag !== ''"
        class="w-full"
      >
        <div class="w-full home-arrow flex cursor-pointer font-bold mb-3">
          <div class="arrow duration-300 mr-2">
            <svg height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          {{ $t('blog.tags.back') }}
        </div>
        <div class="w-full">
          {{ $t('blog.tags.current', { tag: $t(current_tag)}) }}
        </div>
      </div>
      <div v-else class="flex flex-row w-full overflow-x-scroll md:overflow-x-hidden md:flex-wrap space-x-3 md:space-x-0">
        <div v-for="tag in tags">
          <div
            class="mb-3 md:mr-4 border-b-2 border-opacity-0 hover:border-opacity-100 border-green-400 border-solid duration-300 cursor-pointer font-black"
            @click="fetchPostsByTag(tag.slug)"
          >
            {{ $t(tag.slug) }}
          </div>
        </div>
      </div>
    </div>
    <h1 v-if="posts.length === 0" class="text-xl font-bold text-center my-8 w-full">{{ $t('blog.no_posts') }}</h1>
    <div class="w-full xl:w-1/2" v-else>
      <div class="flex flex-col justify-around items-center py-8 w-full">
        <div class="w-full" v-for="post in posts">
          <nuxt-link :to="'/blog/' + post.slug">
            <Post
              :title="post.title"
              :reading_time="post.reading_time"
              :description="post.description"
              :tags="displayTags(post.tags)"
              :cover="post.cover"
              :date="post.date"
              :lightBg="post.background"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="relative flex flex-row justify-between w-full mb-4" v-if="(next || prev) && this.postsCount > 5">
        <div
          class="duration-300 flex w-1/2 px-5 py-4 justify-center items-center"
          :class="prev === null ? 'opacity-0': 'opacity-100'"
        >
          <div class="flex items-center duration-300 prev-arrow" @click="prevPage">
            <div class="arrow duration-300">
              <svg class="inline icon" height="30" width="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>
            </div>
            <div class="inline ml-4 font-bold">{{ $t('blog.pagination.prev') }}</div>
          </div>
        </div>
        <div
          class="duration-300 flex w-1/2 px-5 py-4 justify-center items-center"
          :class="next === null ? 'opacity-0': 'opacity-100'"
        >
          <div class="flex items-center duration-300 suiv-arrow" @click="nextPage">
            <div class="mr-4 font-bold">{{ $t('blog.pagination.next') }}</div>
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
      postsCount: 0,
      page: 0,
      current_tag: '',
      posts: []
    }
  },
  methods: {
    displayTags(tags) {
      const tags_label = []
      if (tags.length > 0) {
        tags.map(tag => {
          tags_label.push(tag)
        })
      }
      return tags_label
    },
    async fetchPostsByTag(tag) {
      this.current_tag = tag
      this.page = 0
      await this.fetchPosts()
      if (this.posts.length !== 0) {
        await this.fetchPrevAndNext()
      } else {
        this.next = null
        this.prev = null
      }
    },
    async resetPosts() {
      this.current_tag = ''
      this.posts = await this.$content(`articles/${this.$i18n.locale}`)
        .sortBy('date', 'asc')
        .limit(5)
        .fetch()
    },
    async nextPage() {
      this.page++
      await this.fetchPosts()
      await this.fetchPrevAndNext()

      window.scrollTo({
        top: 100,
        behavior: "smooth"
      })
    },
    async prevPage() {
      this.page--
      await this.fetchPosts()
      await this.fetchPrevAndNext()
      window.scrollTo({
        top: 100,
        behavior: "smooth"
      })
    },
    async fetchPosts() {
      let postsTemp = []
      if (this.current_tag === "") {
        postsTemp = await this.$content(`articles/${this.$i18n.locale}`)
          .sortBy('date', 'asc')
          .limit(5)
          .skip(this.page * 5)
          .fetch()
      } else {
        postsTemp = await this.$content(`articles/${this.$i18n.locale}`)
          .sortBy('date', 'asc')
          .limit(5)
          .skip(this.page * 5)
          .where({
            tags: {
              $contains: this.current_tag
            }
          })
          .fetch()
      }

      const posts = []
      postsTemp.map(post => {
        posts.push(post)
      })
      this.posts = posts
    },
    async fetchPrevAndNext() {
      const [_, next] = await this.$content(`articles/${this.$i18n.locale}`)
        .surround(this.posts[this.posts.length - 1].slug, {
          before: 1,
          after: 1
        })
        .fetch()
      const [prev, __] = await this.$content(`articles/${this.$i18n.locale}`)
        .skip(this.page)
        .surround(this.posts[0].slug, {
          before: 1,
          after: 1
        })
        .fetch()

      this.prev = null
      this.next = null
      if (this.posts.length === 5) {
        this.next = next
      }
      if (this.page > 0) {
        this.prev = prev
      }
    }
  },
  async asyncData ({ $content, app }) {
    const tags = await $content('tags').fetch()
    const locale = await app.i18n.locale

    const postsTemp = await $content(`articles/${locale}`)
      .sortBy('date', 'asc')
      .limit(5)
      .fetch()

    const posts = []
    postsTemp.map(post => {
      posts.push(post)
    })

    let prev = null
    let next = null

    if (posts.length > 0) {
      const [_, nextTemp] = await $content(`articles/${locale}`)
        .surround(posts[posts.length - 1].slug, {
          before: 1,
          after: 1
        })
        .fetch()

      const [prevTemp, __] = await $content(`articles/${locale}`)
        .surround(posts[0].slug, {
          before: 1,
          after: 1
        })
        .fetch()

      next = nextTemp
      prev = prevTemp
    }

    return {
      posts,
      postsCount: posts.length,
      tags,
      prev,
      next
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
