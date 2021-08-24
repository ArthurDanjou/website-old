<template>
  <main v-if="posts" class="blog flex flex-col items-center w-full px-4 xl:px-16">
    <PageTitle title="part.blog" />
    <p class="text-gray-700 dark:text-gray-400 text-xl mt-4">
      {{ $t('blog.description') }}
    </p>
    <h1 v-if="posts.length === 0" class="text-xl font-bold text-center my-8 w-full">{{ $t('blog.no_posts') }}</h1>
    <div class="w-full" v-else>
      <div class="flex py-8 w-full flex-wrap">
        <div class="md:mx-8 my-4 w-full lg:w-auto" v-for="post in posts">
          <Post
            :title="post.title.code"
            :cover="post.cover.file_name"
            :description="post.description.code"
            :date="post.date"
            :slug="post.slug"
            :tags="post.tags"
            :reading_time="post.reading_time"
          />
        </div>
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
import {Post} from "~/types/types";

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
        console.log(response.data.posts)
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
