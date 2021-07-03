<template>
  <main v-if="post" class="blog flex flex-col items-center px-5 xl:px-72 mb-16 md:mb-32">
    <div class="mt-8 md:mt-32 flex flex-col justify-around py-8 w-full">
      <div>
        <div class="mb-4 flex">
          <nuxt-link to="/blog" class="back-arrow flex">
            <div class="duration-300 arrow">
              <BackSpaceIcon />
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
        <div class="flex justify-center w-full">
          <img class="w-full" :src="require(`@/assets/images/posts/${post.cover}`)" alt="Cover Img" />
        </div>
      </div>
      <nuxt-content
        :document="post"
        class="my-6 md:my-10 w-full text-justify max-w-none
        prose prose-sm lg:prose-lg lg:max-w-none sm:max-w-none
        dark:prose-dark dark:max-w-none"
      />
      <p class="mb-3">
        {{ $t('blog.read.thanks') }}
      </p>
      <div class="flex flex-col md:flex-row">
        <div class="flex items-center mb-2 md:mb-0">
          <div
            @click="handleLike"
            class="end-blog flex flex-row justify-center items-center cursor-pointer duration-300 text-lg p-1 border-solid border mr-2"
            :class="liked ? 'border-red-500 dark:border-red-500 hover:border-gray-400 dark:hover:border-dark-200' : 'border-gray-400 dark:border-dark-200 hover:border-red-500 dark:hover:border-red-500'"
          >
            <div class="mr-2 lining-nums leading-3">
              {{ likes }}
            </div>
            <div class="icon-hover inline leading-6" :class="{'heartbeat': liked}">
              <HeartIcon :liked="liked"/>
            </div>
          </div>
          <a
            target="_blank"
            :href="'https://twitter.com/intent/tweet?url=https%3A%2F%2Farthurdanjou.fr%2Fblog%2F' + this.post.slug + '&text=' + $t('blog.tweet') + ' ' + post.title"
            class="mr-2 end-blog cursor-pointer duration-300 text-2xl p-1 border-solid border border-gray-400 dark:border-dark-200 hover:border-cyan-500 dark:hover:border-cyan-400 flex justify-center items-center"
          >
            <TwitterBlogIcon />
          </a>
          <div
            @click="scrollToTop"
            class="mr-2 end-blog cursor-pointer duration-300 text-2xl p-1 border-solid border border-gray-400 dark:border-dark-200 hover:border-dark-800 dark:hover:border-white flex justify-center items-center"
          >
            <ArrowUpIcon />
          </div>
        </div>
        <div class="flex items-center">
          <nuxt-link
            to="/contact"
            class="mr-2 end-blog cursor-pointer duration-300 text-2xl p-1 border-solid border border-gray-400 dark:border-dark-200 hover:border-dark-800 dark:hover:border-white flex justify-center items-center"
          >
            <BookmarkIcon />
          </nuxt-link>
          <div
            @click="copyToClipboard"
            class="nd-blog cursor-pointer duration-300 text-2xl p-1 border-solid border border-gray-400 dark:border-dark-200 hover:border-dark-800 dark:hover:border-white flex justify-center items-center"
          >
            <CopyIcon />
          </div>
          <div v-if="isCopied" class="p-2 relative text-sm flex justify-center items-center text-green-500">
            {{ $t('copied') }}
            <CheckIcon />
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
  ref, useAsync,
  useContext,
  useMeta,
  useRoute, useStatic, watch
} from "@nuxtjs/composition-api";
import {Post} from "~/types/types";

export default defineComponent({
  name: "blog",
  head: {},
  setup() {
    const {$content, i18n, $axios, app, $storage, $sentry} = useContext()
    const route = useRoute()
    const { title } = useMeta()
    const slug = computed(() => route.value.params.slug)

    const post = useStatic((slug) => {
      return $content(`articles/${i18n.locale}`, slug)
        .fetch<Post>()
        .catch((error) => {
          app.error({statusCode: 404, message: "Post not found"})
          $sentry.captureEvent(error)
        }) as Promise<Post>
    }, slug, 'post')

    title.value = post.value?.title ? `Blog - Arthur Danjou - ${post.value!.title}` : 'Loading title...'

    watch(post, () => {
      title.value = post.value?.title ? `Blog - Arthur Danjou - ${post.value!.title}` : 'Loading title...'
    })

    const liked = ref($storage.getCookie(`${slug.value}`) !== undefined)
    const likes = ref(0)

    useAsync(() => {
      $axios.get(`/posts/${slug.value}`, {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
      }).then((response) => {
        likes.value = response.data.likes
      }).catch((error) => {
        $sentry.captureEvent(error)
      })
    })

    const handleLike = async () => {
      if (liked.value) {
        const response = await $axios.post(`/posts/${post.value?.slug}/unlike`, {}, {
          headers: {
            'Authorization': `Bearer ${process.env.API_TOKEN}`
          }
        })
        if (response.status === 200) {
          liked.value = false
          likes.value = response.data.post.likes
          $storage.removeCookie(`${slug.value}`)
        } else {
          $sentry.captureEvent(response.data)
        }
      } else {
        const response = await $axios.post(`/posts/${post.value?.slug}/like`, {}, {
          headers: {
            'Authorization': `Bearer ${process.env.API_TOKEN}`
          }
        })
        if (response.status === 200) {
          liked.value = true
          likes.value = response.data.post.likes
          $storage.setCookie(`${slug.value}`, true, {
            maxAge: 60 * 60 * 5
          })
        } else {
          $sentry.captureEvent(response.data)
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

  .heartbeat {
    animation: 3s ease heartbeat infinite;
  }
}

@keyframes heartbeat {
  0% {
    @apply transform scale-100;
  }
  50% {
    @apply transform scale-75;
  }
  100% {
    @apply transform scale-100;
  }
}
</style>
