<template>
  <main v-if="posts" class="blog flex flex-col items-center w-full px-4 xl:px-16">
    <PageTitle title="part.blog" />
    <p class="text-gray-700 dark:text-gray-400 text-xl mt-4 mb-8">
      {{ $t('blog.description') }}
    </p>
    <h1 v-if="posts.length === 0" class="text-xl font-bold text-center my-8 w-full">{{ $t('blog.no_posts') }}</h1>
    <div class="flex justify-center" v-else>
      <div class="w-full lg:w-1/2 mt-20 grid grid-cols-1 gap-y-24 mb-8 sm:mb-24 text-left">
        <Post
          v-for="post in posts"
          :key="post.slug"
          :color="post.color.name"
          :title="post.title.code"
          :description="post.description.code"
          :date="post.date"
          :slug="post.slug"
          :reading_time="post.reading_time"
        />
      </div>
      <!--<div class="flex w-full justify-center mb-8">
        <Button
          content="Voir les anciens posts"
          link="/blog/page/2"
        />
      </div>-->
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "blog",
  head() {
    return {
      title: 'Blog - Arthur Danjou'
    }
  },
  setup() {
    const { $sentry, $axios, app } = useContext()

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
    }, 'posts')

    return {
      posts
    }
  }
})
</script>
