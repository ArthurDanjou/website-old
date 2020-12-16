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
        <img class="w-72 rounded-xl" :src="require(`@/assets/img/works/${work.cover}.png`)" alt="Project Img" />
        <a
          class="mt-4 py-3 px-6 rounded-full cursor-pointer duration-300 mb-10 lg:mb-0"
          :class="getColor"
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
  },
  computed: {
    getColor() {
      switch (this.work.color) {
        case 'red':
          return 'bg-red-400 hover:bg-red-600'
        case 'orange':
          return 'bg-orange-400 hover:bg-orange-600'
        case 'purple':
          return 'bg-purple-400 hover:bg-purple-600'
        case 'blue':
          return 'bg-blue-400 hover:bg-blue-600'
        case 'green':
          return 'bg-green-400 hover:bg-green-600'
        case 'yellow':
          return 'bg-yellow-400 hover:bg-yellow-600'
        case 'cyan':
          return 'bg-cyan-400 hover:bg-cyan-600'
        case 'teal':
          return 'bg-teal-400 hover:bg-teal-600'
        case 'amber':
          return 'bg-amber-400 hover:bg-amber-600'
        case 'blueGray':
          return 'bg-blueGray-400 hover:bg-blueGray-600'
        case 'emerald':
          return 'bg-emerald-400 hover:bg-emerald-600'
        case 'lightBlue':
          return 'bg-lightBlue-400 hover:bg-lightBlue-600'
        case 'lime':
          return 'bg-lime-400 hover:bg-lime-600'
        case 'rose':
          return 'bg-rose-400 hover:bg-rose-600'
        case 'black':
          return 'bg-black hover:bg-black'
        case 'white':
          return 'bg-white hover:bg-white'
        case 'pink':
          return 'bg-pink-400 hover:bg-pink-600'
        case 'fuchsia':
          return 'bg-fuchsia-400 hover:bg-fuchsia-600'
        case 'violet':
          return 'bg-violet-400 hover:bg-violet-600'
        case 'indigo':
          return 'bg-indigo-400 hover:bg-indigo-600'
        case 'warmGray':
          return 'bg-warmGray-400 hover:bg-warmGray-600'
        case 'trueGray':
          return 'bg-trueGray-400 hover:bg-trueGray-600'
        case 'gray':
          return 'bg-gray-400 hover:bg-gray-600'
        case 'coolGray':
          return 'bg-coolGray-400 hover:bg-coolGray-600'
      }
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
