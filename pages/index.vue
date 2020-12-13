<template>
  <main class="index px-5 xl:px-64">
    <section class="mt-16 md:mt-32 banner w-full mb-16">
      <div class="flex flex-col lg:flex-row-reverse mb-4">
        <div class="hidden lg:block flex justify-center items-center lg:w-1/2">
          <img src="@/assets/img/computer.png" alt="It's me !" class="icon"/>
        </div>
        <div class="mb-4 md:mb-10 lg:w-1/2 self-center">
          <h1 class="text-4xl md:text-5xl text-left font-bold md:w-3/4">
            {{ $t('home.banner.hello') }} <br/>
            <span class="text-red-700 font-black">Arthur Danjou</span> 👋
          </h1>
          <p class="text-2xl md:text-3xl my-5 font-semibold">
            {{ $t('home.banner.role') }}
          </p>
          <p class="text-lg md:text-2xl text-justify mb-8 leading-7 text-gray-700 dark:text-dark-200">
            {{ $t('home.banner.description', {age: age}) }}
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center w-full">
        <div class="flex flex-col md:flex-row justify-around w-full md:mb-8">
          <HomeLink
            title="part.about"
            description="part.about_description"
            color="orange"
            link="/about"
          >
            <svg class="inline" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </HomeLink>
          <HomeLink
            title="part.blog"
            description="part.blog_description"
            color="green"
            link="/blog"
          >
            <svg class="inline" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
            </svg>
          </HomeLink>
        </div>
        <div class="flex flex-col md:flex-row justify-around w-full">
          <HomeLink
            title="part.work"
            description="part.work_description"
            color="blue"
            link="/work"
          >
            <svg class="inline-block" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </HomeLink>
          <HomeLink
            title="part.contact"
            description="part.contact_description"
            color="purple"
            link="/contact"
          >
            <svg class="inline-block" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </HomeLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Vue from 'vue'
import HomeLink from "~/components/HomeLink";

export default Vue.extend({
  components: {HomeLink},
  head() {
    return {
      title: 'Arthur Danjou - Web & Software Developer'
    }
  },
  async asyncData({$content}) {
    const infos = await $content('infos').fetch()
    return {
      age: infos.age
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
