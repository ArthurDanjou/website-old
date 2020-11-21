<template>
  <main class="blog flex flex-col items-center px-5 xl:px-64">
    <h1 class="mt-16 md:mt-32 title font-bold text-4xl mr-2 inline mb-4">
      Blog
      <svg class="inline-block blog-img" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    </h1>
    <div class="flex flex-col justify-around items-center py-8 w-full md:w-1/2">
      <!-- TODO Insert blog's posts -->
      <nuxt-link to="/blog/1">
        <Post
          title="Il était une nouvelle fois la vie"
          reading_time="4"
          description="Un tout nouvel article à propos de je ne sais pas quoi. Un tout nouvel article à propos de je ne sais pas quoi. Un tout nouvel article à propos de je ne sais pas quoi."
          tags="Dev Tech Vie"/>
      </nuxt-link>
      <Post reading_time="12"/>
      <Post />
    </div>
  </main>
</template>

<script>
export default {
  name: "blog"
}
</script>

<style scoped lang="scss">
.blog {
  .blog-img {
    transform: translate(3px, -10px);
  }

  .title:after {
    margin-top: 0.1rem;
    content: '';
    height: 2px;
    width: 100%;
    display: block;
    @apply bg-green-400;
  }
}
</style>
