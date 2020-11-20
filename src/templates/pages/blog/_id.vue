<template>
  <main class="blog flex flex-col items-center mt-16 md:mt-32 px-5 xl:px-64">
    <h1 class="title font-bold text-4xl mr-2 inline mb-4">
      Blog
      <img class="inline blog-img" src="@/assets/img/sections/quill.svg" height="40" width="40" alt="Blog Logo" />
    </h1>
    <div class="flex flex-col justify-around items-center py-8 w-full bg-red-100">
      <!-- TODO Insert blog's posts -->
      <h1>
        TITLE
      </h1>
      <div class="w-1/2">
        <div class="flex flex-row justify-between">
          <div>
            4 min. read
          </div>
          <div>
            14 aout 2020
          </div>
        </div>
        <div class="flex justify-center">
          COVER
        </div>
      </div>
      <h3>
        DESCRIPTION
      </h3>
      <p>
        CONTENT
      </p>
      <div class="my-10 border-t border-black border-solid w-full" />
      <p class="text-center">
        Merci d'avoir lu jusqu'au bout ! 😊<br class="md:hidden"/>
        Hésite surtout pas à partager l'article sur Twitter
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {
      id: this.$route.params.id
    }
  },
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
