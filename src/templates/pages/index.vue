<template>
  <main class="index px-5 xl:px-64">
    <section class="mt-16 md:mt-32 banner w-full flex justify-between flex-col lg:flex-row-reverse items-center mb-16">
      <div class="hidden lg:block flex justify-center items-center lg:w-1/2">
        <img src="@/assets/img/computer.png" alt="It's me !" class="icon" />
      </div>
      <div class="title flex justify-center flex-col lg:w-1/2 pr-3">
        <div class="mb-4 md:mb-10">
          <h1 class="text-4xl md:text-5xl text-left font-bold md:w-3/4">
            Bonjour, je suis <br />
            <span class="text-red-700 font-black">Arthur Danjou</span> 👋
          </h1>
          <p class="text-2xl md:text-3xl my-5 font-semibold">
            Développeur & étudiant
          </p>
          <p class="text-lg md:text-2xl text-justify mb-8 leading-7 text-gray-700 dark:text-dark-900">
            Je suis un jeune développeur autodidacte de 17 ans. J'habite à Paris 🇫🇷. J'adore créer des applications et des logiciels plus ou moins utiles.
            J'utilise des technologies modernes pour obtenir le meilleur résultat possible ✨
          </p>
        </div>
        <div class="dark:text-black flex flex-col md:flex-row justify-around items-center">
          <nuxt-link class="mb-3 w-full text-center md:mb-0 md:w-auto" to="about">
            <p class="arrow-btn font-semibold rounded-full bg-red-400 hover:bg-red-700 duration-300 px-3 md:px-10 py-1 cursor-pointer">
              En savoir plus
              <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </p>
          </nuxt-link>
          <nuxt-link class="mb-3 w-full text-center md:mb-0 md:w-auto" to="contact">
            <p class="rounded-full font-semibold border-2 border-solid dark:hover:bg-white border-black dark:border-white hover:bg-black dark:hover:border-white hover:text-white dark:hover:text-black dark:text-white duration-300 px-12 py-1 cursor-pointer">
              Me contacter
            </p>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="my-16 border-t border-solid border-black pt-16">
      <h1 class="font-bold text-3xl mr-2 inline">
        Mes Articles
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </h1>
      <p class="mt-2 mb-8">
        Parfois, je rédige des articles concernant le développement, ma vie, le design ou bien encore l'apprentissage !
      </p>
      <div class="flex flex-col">
        <!-- TODO Max 3 articles -->
        <div class="flex flex-col lg:flex-row justify-space-evenly mb-10">
          <HomePost
            title="Il était une nouvelle fois la vie"
            reading_time="4"
            description="Un tout nouvel article à propos de je ne sais pas quoi. Un tout nouvel article à propos de je ne sais pas quoi. Un tout nouvel article à propos de je ne sais pas quoi."
            tags="Dev Tech"/>
          <HomePost />
          <HomePost />
        </div>
        <div class="text-center">
          <nuxt-link to="/blog" class="arrow-btn px-3 py-3 border-2 border-solid border-red-500 rounded-full font-semibold hover:bg-red-500 duration-300 dark:text-red-500 dark:hover:text-black">
            Voir plus d'articles
            <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="my-16 border-t border-solid border-black pt-16">
      <h1 class="font-bold text-3xl mr-2 inline">
        Mon Travail
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </h1>
      <p class="mt-2 mb-8">
        Ayez une vision de mon travail, de mes projets personnels et professionnels ou de mes expérimentations !
      </p>
      <div>
        <!-- TODO -->
        TODO Insert Works request
      </div>
    </section>
    <section class="my-16 border-t border-solid border-black pt-16">
      <h1 class="font-bold text-3xl mr-2 inline">
        Mes Services
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      </h1>
      <p class="mt-2 mb-8">
        Vous avez une idée révolutionnaire ?
      </p>
      <div>
        <!-- TODO -->
        TODO Services
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      posts: [],
      works: [],
      services: []
    }
  }
})
</script>

<style lang="scss" scoped>
.index {

  .title {
    line-height: 3rem;
  }

  .arrow-btn .icon {
    transform: translate(3px, -5px);
    transition-duration: .3s;
  }

  .arrow-btn:hover .icon {
    transform: translate(3px, 0);
  }
}
</style>
