<template>
  <main class="index mt-10 md:mt-32 dark:bg-gray-900 dark:text-white px-5 xl:px-64">
    <section class="banner w-full flex justify-between flex-col lg:flex-row-reverse items-center mb-16">
      <div class="hidden lg:block flex justify-center items-center lg:w-1/2">
        <img src="@/assets/img/computer.png" alt="It's me !" class="me-img" />
      </div>
      <div class="title flex justify-center flex-col lg:w-1/2 pr-3">
        <div class="mb-4 md:mb-10">
          <h1 class="text-4xl md:text-5xl text-left font-bold md:w-3/4">
            Bonjour, je suis <br />
            <span class="text-red-700 font-black">Arthur Danjou</span> 👋
          </h1>
          <p class="dark:text-white dark:bg-black text-2xl md:text-3xl my-5 font-semibold">
            Développeur & étudiant
          </p>
          <p class="text-lg md:text-2xl text-justify mb-8 leading-7 text-gray-700">
            Je suis un jeune développeur autodidacte de 17 ans. J'habite à Paris 🇫🇷. J'adore créer des applications et des logiciels plus ou moins utiles.
            J'utilise des technologies modernes pour obtenir le meilleur résultat possible ✨
          </p>
        </div>
        <div class="flex flex-col md:flex-row justify-around items-center">
          <nuxt-link class="mb-3 w-full text-center md:mb-0 md:w-auto" to="about">
            <p class="about-btn rounded-full bg-red-400 hover:bg-red-700 duration-300 px-3 md:px-10 py-1 cursor-pointer">
              En savoir plus
              <img class="inline arrow-img" src="@/assets/img/icons/arrow-down.svg" alt="Go Down" height="32" width="32" />
            </p>
          </nuxt-link>
          <nuxt-link class="mb-3 w-full text-center md:mb-0 md:w-auto" to="contact">
            <p class="rounded-full hover:bg-gray-400 duration-300 px-12 py-1 bg-gray-300 cursor-pointer">
              Me contacter
            </p>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="my-16 border-t border-solid border-black pt-16">
      <h1 class="font-bold text-3xl mr-2 inline">
        Mes Articles
        <img class="inline blog-img" src="@/assets/img/icons/quill.svg" height="40" width="40" alt="Blog Logo" />
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
          <nuxt-link to="/blog" class="px-3 py-3 border-2 border-solid border-black rounded-full font-semibold hover:bg-black hover:text-white duration-300">
            Retrouvez mes autres articles
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="my-16 border-t border-solid border-black pt-16">
      <h1 class="font-bold text-3xl mr-2 inline">
        Mon Travail
        <img class="inline work-img" src="@/assets/img/icons/case.svg" width="32" height="32" alt="Work Logo" />
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
        <img class="inline services-img" src="@/assets/img/icons/clipboard.svg" height="32" width="32" alt="Services Logo" />
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
})
</script>

<style lang="scss" scoped>
.index {

  .title {
    line-height: 3rem;
  }

  .me-img {
    height: 30rem;
  }

  .about-btn:hover .arrow-img {
    transform: translate(3px, 0);
  }

  .arrow-img {
    transform: translate(3px, -3px);
    transition: .4s;
  }

  .blog-img {
    transform: translate(5px, -10px);
  }

  .work-img {
    transform: translate(5px, -6px);
  }

  .pin-img {
    transform: translate(5px, -8px);
  }

  .services-img {
    transform: translate(5px, -7px);
  }
}
</style>
