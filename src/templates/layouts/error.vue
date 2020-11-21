<template>
  <main class="error">
    <div v-if="error.statusCode === 404">
      <div class="mt-16 flex flex-col items-center justify-center">
        <img src="@/assets/img/404.svg" alt="404 Icon" height="768" width="768" />
        <nuxt-link to="/" class="home-btn">
          <div class="py-3 px-6 mb-16 font-bold border-2 border-solid border-red-500 hover:bg-red-500 duration-300 rounded">
            Revenir à l'accueil
            <svg class="inline arrow-img" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div v-else>

    </div>
  </main>
</template>

<script>
export default {
  name: "error",
  props: ['error']
}
</script>

<style scoped lang="scss">
.error {
  .home-btn:hover .arrow-img {
    transform: translate(3px, 0);
  }

  .arrow-img {
    transform: translate(3px, -3px);
    transition: .4s;
  }
}
</style>
