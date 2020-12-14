<template>
  <main class="error relative">
    <div class="w-full h-screen">
      <img class="w-full h-full" src="~/assets/img/404.png" alt="404 Image" />
    </div>
    <div class="text absolute inset-1/4 w-full h-screen mb-8">
      <div class="flex items-center justify-center h-full">
        <div class="flex flex-col justify-center text-center">
          <h1 class="title dark:text-white font-bold">
            404
          </h1>
          <h2 class="text-4xl dark:text-white">
            {{ $t('404.description') }}
          </h2>
          <p class="text-2xl dark:text-dark-100 mb-4">
            {{ $t('404.no_page') }}
          </p>
          <nuxt-link class="home-btn" to="/">
            <div class="py-3 px-6 font-bold border-2 border-solid border-red-500 hover:bg-red-500 duration-300 rounded">
              {{ $t('404.back') }}
              <svg class="inline arrow-img" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "error",
  layout: "error-2"
}
</script>

<style scoped lang="scss">
.error {

  .text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .title {
    font-size: 14rem;
  }

  .home-btn:hover .arrow-img {
    transform: translate(3px, 0);
  }

  .arrow-img {
    transform: translate(3px, -3px);
    transition: .4s;
  }
}
</style>
