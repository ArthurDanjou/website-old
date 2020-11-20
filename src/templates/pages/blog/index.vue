<template>
  <main class="blog flex flex-col items-center mt-16 md:mt-32 px-5 xl:px-64">
    <h1 class="title font-bold text-4xl mr-2 inline mb-4">
      Blog
      <img class="inline blog-img" src="@/assets/img/sections/quill.svg" height="40" width="40" alt="Blog Logo" />
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
