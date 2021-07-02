<template>
  <section v-if="posts" class="w-full flex items-center justify-center my-20">
    <div class="flex flex-col items-center text-center">
      <div class="flex flex-col items-center">
        <h2 class="font-bold text-3xl">
          {{ $t('blog.latest') }}
        </h2>
        <p class="text-gray-700 dark:text-gray-400 text-xl lg:w-2/3 mt-4">
          {{ $t('blog.description') }}
        </p>
      </div>
      <div class="my-8 lg:flex w-full lg:space-x-6">
        <div v-for="post in posts">
          <Post
            :title="post.title"
            :cover="post.cover"
            :description="post.description"
            :date="post.date"
            :slug="post.slug"
            :tags="post.tags"
            :reading_time="post.reading_time"
          />
        </div>
      </div>
      <div class="flex">
        <Button content="blog.see_more" link="blog"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from "@nuxtjs/composition-api";
import {Post} from "../../types/types";

export default defineComponent({
  name: "PostsHome",
  setup() {
    const { $content, i18n, $sentry } = useContext()

    const posts = useAsync(() => {
      return $content(`articles/${i18n.locale}`)
        .sortBy('date', 'asc')
        .limit(3)
        .fetch<Post>()
        .catch((error) => {
          $sentry.captureEvent(error)
        })
    }, 'posts')

    return {
      posts
    }
  }
})
</script>
