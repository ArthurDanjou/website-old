<template>
  <main class="px-5 xl:px-64 mb-16 md:mb-32">
    <div class="w-full flex flex-col lg:flex-row items-center md:items-start mt-8 md:mt-32">
      <div class="w-full lg:w-1/2 flex flex-col items-center">
        <div class="md:mb-24">
          <div class="mb-4 flex">
            <nuxt-link to="/work" class="back-arrow flex">
              <div class="duration-300 arrow">
                <svg height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              <div class="ml-2">
                {{ $t('work.go_back') }}
              </div>
            </nuxt-link>
          </div>
        </div>
        <img class="w-4/5 rounded-xl" :src="require(`@/assets/img/works/${work.cover}.png`)" alt="Project Img" />
        <a
          class="mt-4 py-3 px-6 rounded-full cursor-pointer duration-300 mb-10 lg:mb-0"
          :class="'bg-' + work.color + '-400 hover:bg-' + work.color + '-600'"
          :href="work.url"
        >{{work.url.replace('https://', '').replace('http://', '')}}</a>
      </div>
      <div class="w-full lg:w-1/2 ml-5 ">
        <h1 class="text-xl lg:text-3xl font-bold">
          {{ $t(work.title) }}
        </h1>
        <p class="mt-5 mb-10 text-md lg:text-lg text-gray-900 dark:text-dark-100">
          {{ $t(work.description) }}
        </p>
        <div>
          <h3 class="text-md lg:text-lg font-bold">
            {{ $t('work.tech_used') }}
          </h3>
          <div class="flex flex-row w-full overflow-x-auto md:overflow-x-hidden md:flex-wrap space-x-4 md:space-x-0 md:justify-start">
            <div v-for="skill in skills">
              <WorkSkill
                :skill="skill.title"
                :color="skill.color"
                :cover="skill.cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import WorkSkill from "~/components/WorkSkill";

export default {
  components: {WorkSkill},
  head() {
    return {
      title: 'Work - Arthur Danjou'
    }
  },
  data() {
    return {
      work: null
    }
  },
  async asyncData({ params, $content, error }) {
    const work = await $content('works', params.slug)
      .fetch()
      .catch(() => {
        error({
          statusCode: 404,
          message: 'Work not found',
        })
      });
    let skills = []
    if (work) {
      skills = await $content('skills').where({ slug: { $in: work.skills } }).fetch()
    }
    return {
      work,
      skills
    }
  }
}
</script>

<style scoped lang="scss">
.back-arrow:hover .arrow {
  transform: translate(-8px, -1px);
}

.arrow {
  transform: translate(3px, -1px);
}
</style>
