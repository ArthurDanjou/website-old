<template>
  <main v-if="post" class="blog flex flex-col items-center px-5 xl:px-96 mb-16 md:mb-32">
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
      <h3 class="text-xl text-gray-800 dark:text-dark-100 my-4 md:mt-8">
        {{ post.description }}
      </h3>
      <div class="flex flex-row justify-between w-full md:w-2/3 mb-12">
        <div>
          <p class="uppercase text-sm font-bold text-gray-800 dark:text-dark-100">Date</p>
          <p>{{ formatDate }}</p>
        </div>
        <div>
          <p class="uppercase text-sm font-bold text-gray-800 dark:text-dark-100">{{ $t('blog.read.time') }}</p>
          <p>{{ post.reading_time }} min</p>
        </div>
        <div>
          <p :class="post.tags.length === 0 ? 'opacity-0': 'opacity-100'" class="uppercase text-sm font-bold text-gray-800 dark:text-dark-100">Tags</p>
          <p>{{ formatTags }}</p>
        </div>
      </div>
      <div class="w-full">
        <div class="flex justify-center w-full h-auto">
          <img class="w-full h-auto" :src="require(`@/assets/images/posts/${post.cover}`)" alt="Cover Img" />
        </div>
      </div>
      <nuxt-content
        :document="post"
        class="my-6 md:my-10 w-full text-justify max-w-none
        prose prose-sm sm:prose lg:prose-lg lg:max-w-none sm:max-w-none
        dark:prose-dark dark:max-w-none"
      />
      <p class="mb-3">
        {{ $t('blog.read.thanks') }}
      </p>
      <div class="flex flex-col md:flex-row">
        <div class="flex items-center mb-2 md:mb-0">
          <div
            @click="handleLike"
            class="h-16 end-blog flex flex-row justify-center items-center cursor-pointer duration-300 text-3xl p-3 border-solid border mr-2"
            :class="liked ? 'border-red-500 dark:border-red-500 hover:border-gray-400 dark:hover:border-dark-200' : 'border-gray-400 dark:border-dark-200 hover:border-red-500 dark:hover:border-red-500'"
          >
            <div class="mr-2 lining-nums">
              {{ likes }}
            </div>
            <div class="icon-hover inline">❤</div>
          </div>
          <a
            target="_blank"
            :href="'https://twitter.com/intent/tweet?url=https%3A%2F%2Farthurdanjou.fr%2Fblog%2F' + this.post.slug + '&text=' + $t('blog.tweet') + ' ' + post.title"
            class="h-16 mr-2 end-blog cursor-pointer duration-300 text-3xl p-3 border-solid border border-gray-400 dark:border-dark-200 hover:border-cyan-500 dark:hover:border-cyan-400 justify-center items-center"
          >
            <img class="inline img icon-hover" src="@/assets/images/socials/twitter.svg" alt="Twitter logo" height="40" width="40" />
          </a>
          <div @click="scrollToTop"
               class="h-16 mr-2 end-blog cursor-pointer duration-300 text-3xl p-3 border-solid border border-gray-400 dark:border-dark-200 hover:border-dark-800 dark:hover:border-white">
            <svg class="inline icon-hover" width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </div>
        <div class="flex items-center">
          <nuxt-link to="/contact"
                     class="h-16 mr-2 end-blog cursor-pointer duration-300 text-3xl p-3 border-solid border border-gray-400 dark:border-dark-200 hover:border-dark-800 dark:hover:border-white"
          >
            <svg class="inline icon-hover" width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </nuxt-link>
          <div
            @click="copyToClipboard"
            class="h-16 end-blog cursor-pointer duration-300 text-3xl p-3 border-solid border border-gray-400 dark:border-dark-200 hover:border-dark-800 dark:hover:border-white"
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
    </div>
  </main>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  useContext,
  useFetch,
  useMeta,
  useRoute, useStatic
} from "@nuxtjs/composition-api";
import {Post} from "../../../@types/types";

export default defineComponent({
  name: "blog",
  head: {},
  setup() {
    const {$content, i18n, $axios, app, $storage} = useContext()
    const {title} = useMeta()
    const route = useRoute()
    const slug = computed(() => route.value.params.slug)

    const post = useStatic((slug) => {
      return $content(`articles/${i18n.locale}`, slug)
        .fetch<Post>()
        .catch(() => {
          app.error({statusCode: 404, message: "Post not found"});
        }) as Promise<Post>
    }, slug, 'post')

    title.value = `Blog - Arthur Danjou - ${post.value?.title}`

    const likes = ref(0)
    const liked = ref(false)
    const {fetch} = useFetch(async () => {
      await $axios.get(`https://api.arthurdanjou.fr/posts/${slug}`).then((response) => likes.value = response.data)
    })

    fetch()

    //todo rework
    liked.value = $storage.getLocalStorage(`blog:${slug}`) === null
    const handleLike = async () => {
      console.log("tentative")
      if (liked.value) {
        console.log("true")
        liked.value = false
        likes.value = likes.value - 1 <= 0 ? likes.value - 1 : 0
        $storage.removeLocalStorage(`blog:${slug}`)
        console.log("unliked")
      } else {
        const {data} = await $axios.post(`https://api.arthurdanjou.fr/posts/${post.value?.slug}/like`)
        if (data.code === 200) {
          liked.value = true
          likes.value = data.post.likes
          $storage.setLocalStorage(`blog:${slug}`, true)
          console.log('liked')
        }
      }
    }

    const isCopied = ref(false)
    const copyToClipboard = () => {
      navigator.clipboard.writeText('https://arthurdanjou.fr/blog/' + post.value?.slug)
      isCopied.value = true
      setTimeout(() => {
        isCopied.value = false
      }, 7000)
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

    const formatDate = computed(() => {
      const [first, second, third]: any = post.value?.date.split('-')
      return `${first} ${i18n.t(`month.${second}`)} ${third}`
    })

    const formatTags = computed(() => {
      let tags = ""
      post.value?.tags.map(tag => {
        tags += i18n.t(String(tag)) + ", "
      })
      return tags.substring(0, tags.length - 2)
    })

    return {
      post,
      likes,
      liked,
      handleLike,
      isCopied,
      copyToClipboard,
      scrollToTop,
      formatDate,
      formatTags
    }
  }
})
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
