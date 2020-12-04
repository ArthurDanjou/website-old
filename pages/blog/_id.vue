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
              {{ $t('blog_read_back') }}
            </div>
          </nuxt-link>
        </div>
      </div>
      <h1 class="text-3xl md:text-5xl font-bold">
        {{ $t(title) }}
      </h1>
      <h3 class="text-xl text-gray-800 dark:text-dark-900 my-4 md:mt-8">
        {{ $t(description) }}
      </h3>
      <div class="flex flex-row justify-between w-full md:w-2/3 mb-12">
        <div>
          <p class="uppercase text-sm font-bold text-gray-800 dark:text-dark-900">Date</p>
          <p>{{ formatDate }}</p>
        </div>
        <div>
          <p class="uppercase text-sm font-bold text-gray-800 dark:text-dark-900">{{ $t('blog_read_time') }}</p>
          <p>{{ reading_time }} min</p>
        </div>
        <div>
          <p :class="tags.length === 0 ? 'opacity-0': 'opacity-100'" class="uppercase text-sm font-bold text-gray-800 dark:text-dark-900">Tags</p>
          <p>{{ formatTags }}</p>
        </div>
      </div>
      <div class="w-full">
        <div class="flex justify-center w-full h-auto">
          <img class="w-full h-auto" :src="'http://localhost:5555/files/'+cover.file_name" alt="Cover Img" />
        </div>
      </div>
      <p class="my-6 md:my-12 text-gray-800 dark:text-dark-900">
        {{ $t(content) }}
      </p>
      <p class="mb-3">
        {{ $t('blog_read_thanks') }}
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
          :href="'https://twitter.com/intent/tweet?url=https%3A%2F%2Farthurdanjou.fr%2Fblog%2F' + id + '&text=' + $t('blog_tweet') + ' ' + $t(title) +'&via=ArthurDanj'"
          class="h-16 end-blog cursor-pointer duration-300 text-3xl p-3 border-solid border border-gray-400 dark:border-dark-800 mr-2 hover:border-cyan-500 dark:hover:border-cyan-500"
        >
          <img class="inline img icon-hover" src="@/assets/img/socials/twitter.svg" alt="Twitter logo" height="40" width="40" />
        </a>

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
      title: 'Blog - Arthur Danjou'
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      title: '',
      description: '',
      content: '',
      tags: [],
      likes: 0,
      date: '',
      cover: '',
      reading_time: 0,

      isCopied: false,
      liked: false
    }
  },
  async asyncData({ params, $axios }) {
    const {data: post} = await $axios.get('/posts/' + params.id)
    const {data: liked} = await $axios.get('/post/' + params.id + '/isLiked')
    return {
      title: post.title.code,
      description: post.description.code,
      content: post.content.code,
      tags: post.tags,
      likes: post.likes,
      date: post.created_at,
      reading_time: post.reading_time,
      cover: post.cover,
      liked: liked !== 0
    }
  },
  methods: {
    copyToClipBoard() {
      navigator.clipboard.writeText('https://arthurdanjou.fr/blog/' + this.id)
      this.isCopied = true
      setTimeout(() => {
        this.isCopied = false
      }, 7000)
    },
    async handleLike() {
      if (this.liked) {
        const {data} = await this.$axios.get('/post/' + this.id  + '/unlike')
        if (data.code === 200) {
          this.liked = false
          this.likes = data.post.likes
        }
      } else {
        const {data} = await this.$axios.get('/post/' + this.id  + '/like')
        if (data.code === 200) {
          this.liked = true
          this.likes = data.post.likes
        }
      }
    }
  },
  computed: {
    formatDate() {
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
      ];
      const date = new Date(this.date)
      return date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear()
    },
    formatTags() {
      let tags = ""
      this.tags.map(tag => {
        tags += this.$t(tag.label.code) + ", "
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
