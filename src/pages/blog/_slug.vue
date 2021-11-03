<template>
  <main v-if="post && postData" class="blog flex flex-col items-center px-4 xl:px-72 mb-16 md:mb-32">
    <div class="mt-8 md:mt-32 flex flex-col justify-around py-8 w-full">
      <div>
        <div class="mb-4 flex">
          <nuxt-link to="/blog" data-blobity-magnetic="false" class="z-index-3 flex">
            <div class="duration-300">
              <BackSpaceIcon />
            </div>
            <div class="ml-2">
              {{ $t('blog.read.back') }}
            </div>
          </nuxt-link>
        </div>
      </div>
      <h1 class="text-3xl md:text-5xl font-bold">
        {{ $t(postData.title.code) }}
      </h1>
      <h3 class="text-xl text-gray-800 dark:text-gray-300 my-4 md:mt-8">
        {{ $t(postData.description.code) }}
      </h3>
      <div class="flex flex-row justify-between w-full md:w-2/3 mb-12">
        <div>
          <p class="uppercase text-sm font-bold text-gray-800 dark:text-gray-400">Date</p>
          <p>{{ formatDate }}</p>
        </div>
        <div>
          <p class="uppercase text-sm font-bold text-gray-800 dark:text-gray-400">{{ $t('blog.read.time') }}</p>
          <p>{{ postData.reading_time }} min</p>
        </div>
        <div>
          <p :class="postData.tags.length === 0 ? 'opacity-0': 'opacity-100'" class="uppercase text-sm font-bold text-gray-800 dark:text-gray-400">Tags</p>
          <p>{{ formatTags }}</p>
        </div>
      </div>
      <div class="w-full">
        <div class="flex justify-center w-full">
          <img class="w-full" :src="`https://athena.arthurdanjou.fr/files/${postData.cover.file_name}`" alt="Cover Img" />
        </div>
      </div>
      <nuxt-content
        :document="post"
        class="my-6 md:my-10 w-full text-justify max-w-none
        prose prose-sm lg:prose-lg lg:max-w-none sm:max-w-none
        dark:prose-dark dark:max-w-none z-index-3"
      />
      <p class="mb-3">
        {{ $t('blog.read.thanks') }}
      </p>
      <div class="flex flex-col md:flex-row">
        <div class="flex items-center mb-2 md:mb-0">
          <div
            data-blobity
            data-blobity-magnetic="false"
            @click="handleLike"
            class="flex flex-row z-index-3 justify-center items-center duration-300 text-lg p-2 border-solid border mr-2 bg-white dark:bg-black"
            :class="liked ? 'border-red-500 dark:border-red-500' : 'border-gray-400 dark:border-dark-200'"
          >
            <div class="mr-2 lining-nums leading-3">
              {{ getLikes }}
            </div>
            <div class="inline leading-6" :class="{'animate-pulse heartbeat': liked}">
              <HeartIcon :liked="liked"/>
            </div>
          </div>
          <a
            target="_blank"
            data-blobity-magnetic="false"
            :href="'https://twitter.com/intent/tweet?url=https%3A%2F%2Farthurdanjou.fr%2Fblog%2F' + postData.slug + '&text=' + $t('blog.tweet') + ' ' + $i18n.t('title')"
            class="z-index-3 mr-2 text-2xl p-2 border-solid border border-gray-300 dark:border-dark-200 flex justify-center items-center bg-white dark:bg-black"
          >
            <TwitterBlogIcon />
          </a>
          <div
            data-blobity
            data-blobity-magnetic="false"
            @click="scrollToTop"
            class="z-index-3 mr-2 text-2xl p-2 border-solid border border-gray-300 dark:border-dark-200 flex justify-center items-center bg-white dark:bg-black"
          >
            <ArrowBlogIcon />
          </div>
        </div>
        <div class="flex items-center">
          <nuxt-link
            data-blobity
            data-blobity-magnetic="false"
            to="/contact"
            class="z-index-3 mr-2 text-2xl p-2 border-solid border border-gray-300 dark:border-dark-200 flex justify-center items-center bg-white dark:bg-black"
          >
            <BookmarkIcon />
          </nuxt-link>
          <div
            data-blobity
            data-blobity-magnetic="false"
            @click="copyToClipboard"
            class="z-index-3 text-2xl p-2 border-solid border border-gray-300 dark:border-dark-200 flex justify-center items-center bg-white dark:bg-black"
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
  ref,
  useAsync,
  useContext,
  useMeta,
  useRoute,
  useStatic,
  watch
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
      return $content(i18n.locale, slug)
        .fetch<Post>()
        .catch((error) => {
          app.error({statusCode: 404, message: "Post not found"})
          $sentry.captureEvent(error)
        }) as Promise<Post>
    }, slug, 'post')

    const liked = ref($storage.getCookie(`${slug.value}`) !== undefined)
    const likes = ref(0)
    const getLikes = computed(() => likes.value)

    const postData = useAsync(async () => {
      const response = await $axios.get(`/api/posts/${slug.value}/data`, {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
      })
      if (response.status === 200) {
        likes.value = response.data.post.likes
        title.value = `Blog - Arthur Danjou - ${i18n.t(response.data.post.title.code)}`
        return response.data.post
      } else {
        $sentry.captureEvent(response.data)
        app.error({statusCode: 500})
      }
    }, 'postData')

    watch(postData, () => {
      title.value = `Blog - Arthur Danjou - ${i18n.t(postData.value.title.code)}`
      likes.value = postData.value.likes
    })

    const handleLike = async () => {
      if (liked.value) {
        const response = await $axios.post(`/api/posts/${postData.value.slug}/unlike`, {}, {
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
          app.error({statusCode: 500})
        }
      } else {
        const response = await $axios.post(`/api/posts/${postData.value.slug}/like`, {}, {
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
          app.error({statusCode: 500})
        }
      }
    }

    const isCopied = ref(false)
    const copyToClipboard = () => {
      navigator.clipboard.writeText('https://arthurdanjou.fr/blog/' + postData.value.slug)
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
      const [first, second, third]: any = postData.value.date.split('-')
      return `${first} ${i18n.t(`month.${second}`)} ${third}`
    })

    const formatTags = computed(() => {
      let tags = ""
      postData.value.tags.map(tag => {
        tags += i18n.t(String(tag.label.code)) + ", "
      })
      return tags.substring(0, tags.length - 2)
    })

    return {
      post,
      getLikes,
      liked,
      handleLike,
      isCopied,
      copyToClipboard,
      scrollToTop,
      formatDate,
      formatTags,
      postData
    }
  }
})
</script>
