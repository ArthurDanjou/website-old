<template>
  <main v-if="posts" class="blog flex flex-col items-center w-full">
    <PageTitle
      title="part.blog"
      color="green"
    >
      <svg class="inline-block icon" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    </PageTitle>
    <p class="text-gray-700 dark:text-gray-400 text-xl mt-4">
      Je redige des articles concernant ma vie, le developpement et mes passions.
    </p>
    <h1 v-if="posts.length === 0" class="text-xl font-bold text-center my-8 w-full">{{ $t('blog.no_posts') }}</h1>
    <div class="w-full" v-else>
      <div class="flex py-8 w-full flex-wrap" >
        <div class="mx-3 my-2" v-for="post in posts">
          <Post
            :title="post.title"
            :cover="post.cover"
            :description="post.description"
            :date="post.date"
            :slug="post.slug"
            :tags="post.tags"
          />
        </div>
      </div>
      <div class="flex w-full justify-center mb-8">
        <Button
          content="Voir les anciens posts"
          to="/blog/page/2"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {useAsync, useContext} from "@nuxtjs/composition-api";
import {Post} from "../../../@types/types";

export default {
  name: "blog",
  head() {
    return {
      title: 'Blog - Arthur Danjou'
    }
  },
  setup() {
    const { $content, i18n } = useContext()

    const posts = useAsync(() => {
      return $content(`articles/${i18n.locale}`)
        .sortBy('date', 'asc')
        .limit(10)
        .fetch<Post>()
    })

    return {
      posts,
    }
  }
}
</script>

<style scoped lang="scss">

</style>
