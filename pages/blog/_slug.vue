<template>
  <main class="blog flex flex-col items-center px-5 xl:px-96 mb-16 md:mb-32">
    <div class="mt-8 md:mt-32 flex flex-col justify-around py-8 w-full">
      <div>
        <div class="mb-4 flex">
          <nuxt-link to="/blog" class="back-arrow flex">
            <div class="duration-300 arrow">
              <svg height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <div class="ml-2">
              {{ $t('blog.read.back') }}
            </div>
          </nuxt-link>
        </div>
      </div>
      <h1 class="text-3xl md:text-5xl font-bold">
        {{ post.title }}
      </h1>
      <h3 class="text-xl text-gray-800 dark:text-dark-900 my-4 md:mt-8">
        {{ post.description }}
      </h3>
      <div class="flex flex-row justify-between w-full md:w-2/3 mb-12">
        <div>
          <p class="uppercase text-sm font-bold text-gray-800 dark:text-dark-900">Date</p>
          <p>{{ formatDate }}</p>
        </div>
        <div>
          <p class="uppercase text-sm font-bold text-gray-800 dark:text-dark-900">{{ $t('blog.read.time') }}</p>
          <p>{{ post.reading_time }} min</p>
        </div>
        <div>
          <p :class="post.tags.length === 0 ? 'opacity-0': 'opacity-100'" class="uppercase text-sm font-bold text-gray-800 dark:text-dark-900">Tags</p>
          <p>{{ formatTags }}</p>
        </div>
      </div>
      <div class="w-full">
        <div class="flex justify-center w-full h-auto">
          <img class="w-full h-auto" :src="'http://localhost:5555/files/'+post.cover" alt="Cover Img" />
        </div>
      </div>
      <nuxt-content
        :document="post"
        class="my-6 md:my-12 max-w-none w-full text-justify prose prose-sm sm:prose sm:max-w-none lg:prose-lg lg:max-w-none dark:prose-dark dark:max-w-none"
      />
      <p class="mb-3">
        {{ $t('blog.read.thanks') }}
      </p>
      <div class="flex items-center">
        <div
          @click="handleLike"
          class="h-16 end-blog flex flex-row justify-center items-center cursor-pointer duration-300 text-3xl p-3 border-solid border mr-2"
          :class="liked ? 'border-red-500 dark:border-red-500 hover:border-gray-400 dark:hover:border-dark-800' : 'border-gray-400 dark:border-dark-800 hover:border-red-500 dark:hover:border-red-500'"
        >
          <div class="mr-2">
            {{ likes }}
          </div>
          <div class="icon-hover inline">❤</div>
        </div>
        <a
          target="_blank"
          :href="'https://twitter.com/intent/tweet?url=https%3A%2F%2Farthurdanjou.fr%2Fblog%2F' + this.post.slug + '&text=' + $t('blog.tweet') + ' ' + post.title"
          class="h-16 mr-2 end-blog cursor-pointer duration-300 text-3xl p-3 border-solid border border-gray-400 dark:border-dark-800 hover:border-cyan-500 dark:hover:border-cyan-400 justify-center items-center"
        >
          <img class="inline img icon-hover" src="@/assets/img/socials/twitter.svg" alt="Twitter logo" height="40" width="40" />
        </a>
        <nuxt-link to="/contact"
          class="h-16 mr-2 end-blog cursor-pointer duration-300 text-3xl p-3 border-solid border border-gray-400 dark:border-dark-800 hover:border-dark-200 dark:hover:border-white"
        >
          <svg class="inline icon-hover" width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </nuxt-link>
        <div
          @click="copyToClipBoard"
          class="h-16 end-blog cursor-pointer duration-300 text-3xl p-3 border-solid border border-gray-400 dark:border-dark-800 hover:border-dark-200 dark:hover:border-white"
        >
          <svg class="inline icon-hover" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
          </svg>
        </div>
        <div v-if="isCopied" class="p-3 relative text-sm flex justify-center items-center text-green-500">
          {{ $t('copied') }}
          <svg class="inline icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "blog",
  head() {
    return {
      title: 'Blog - Arthur Danjou - ' + this.post.title
    }
  },
  data() {
    return {
      likes: 0,
      post: null,

      isCopied: false,
      liked: false
    }
  },
  async asyncData({ params, $content, app, $axios }) {
    const post = await $content(`articles/${app.i18n.locale}/`, params.slug).fetch()
    const {data: likes} = await $axios.get(`posts/${params.slug}`)
    const liked = await $axios.get(`posts/is/${params.slug}`)
    return {
      post,
      likes,
      liked: liked.data !== 0
    }
  },
  methods: {
    copyToClipBoard() {
      navigator.clipboard.writeText('https://arthurdanjou.fr/blog/' + this.post.slug)
      this.isCopied = true
      setTimeout(() => {
        this.isCopied = false
      }, 7000)
    },
    async handleLike() {
      if (this.liked) {
        const {data} = await this.$axios.post(`posts/${this.post.slug}/unlike`)
        if (data.code === 200) {
          this.liked = false
          this.likes = data.post.likes
        }
      } else {
        const {data} = await this.$axios.post(`posts/${this.post.slug}/like`)
        if (data.code === 200) {
          this.liked = true
          this.likes = data.post.likes
        }
      }
    }
  },
  computed: {
    formatDate() {
      const dateFormat = this.post.date.split('-')
      return dateFormat[0] + " " + this.$t('month.' + dateFormat[1]) + " " + dateFormat[2]
    },
    formatTags() {
      let tags = ""
      this.post.tags.map(tag => {
        tags += this.$t(tag) + ", "
      })
      return tags.substring(0, tags.length - 2)
    },
  },
}
</script>

<style scoped lang="scss">
.blog {
  .back-arrow:hover .arrow {
    transform: translate(-8px, -1px);
  }

  .arrow {
    transform: translate(3px, -1px);
  }

  .end-blog .icon-hover {
    @apply duration-300
  }

  .end-blog:hover .icon-hover {
    @apply transform scale-105;
  }
}
</style>
