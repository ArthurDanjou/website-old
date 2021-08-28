<template>
  <section v-if="posts" class="w-full flex items-center justify-center my-12">
    <div class="flex flex-col items-center text-center">
      <div class="flex flex-col items-center">
        <h2 class="font-bold text-3xl">
          {{ $t('blog.latest') }}
        </h2>
        <p class="text-gray-700 dark:text-gray-400 text-xl lg:w-2/3 mt-4 mb-8">
          {{ $t('blog.description') }}
        </p>
      </div>
      <div class="w-full lg:w-1/2 mt-20 grid grid-cols-1 gap-y-24 mb-8 sm:mb-24 text-left">
        <Post
          v-for="(post, index) in posts"
          :key="post.slug"
          :id="index"
          :title="post.title.code"
          :cover="post.cover.file_name"
          :description="post.description.code"
          :date="post.date"
          :slug="post.slug"
          :tags="post.tags"
          :reading_time="post.reading_time"
        />
      </div>
      <div class="flex">
        <Button content="blog.see_more" link="blog"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "PostsHome",
  setup() {
    const { $axios, app, $sentry } = useContext()

    const posts = useAsync(async () => {
      const response = await $axios.get('/api/posts', {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
      })
      if (response.status === 200) {
        return response.data.posts
      } else {
        app.error({statusCode: 500})
        $sentry.captureEvent(response.data)
      }
    }, 'posts_home')

    return {
      posts
    }
  }
})
</script>
