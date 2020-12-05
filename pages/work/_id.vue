<template>
  <main class="px-5 xl:px-64 mb-16 md:mb-32">
    <div class="w-full flex flex-col lg:flex-row items-center mt-8 md:mt-32">
      <div class="w-full lg:w-1/2 flex flex-col items-center">
        <img class="w-4/5 rounded-xl" :src="'http://localhost:5555/files/' + cover" alt="Project Img" />
        <a
          class="mt-4 py-3 px-6 rounded-full cursor-pointer duration-300 mb-10 lg:mb-0"
          :class="'bg-' + color + '-400 hover:bg-' + color + '-600'"
          :href="url"
        >{{formatLink}}</a>
      </div>
      <div class="w-full lg:w-1/2 ml-5 ">
        <h1 class="text-xl lg:text-3xl font-bold">
          {{ $t(title) }}
        </h1>
        <p class="mt-5 mb-10 text-md lg:text-lg text-gray-900 dark:text-dark-900">
          {{ $t(description) }}
        </p>
        <div>
          <h3 class="text-md lg:text-lg font-bold">
            {{ $t('work_tech_used') }}
          </h3>
          <div class="flex flex-row w-full overflow-x-auto md:overflow-x-hidden md:flex-wrap space-x-4 md:space-x-0 md:justify-start">
            <div v-for="skill in skills">
              <WorkSkill
                :skill="skill.title.code"
                :color="skill.color"
                :cover="skill.cover.file_name"
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
  name: "_id",
  components: {WorkSkill},
  head() {
    return {
      title: 'Work - Arthur Danjou'
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      title: '',
      description: '',
      skills: [],
      color: '',
      cover: '',
      url: ''
    }
  },
  async asyncData({ params, $axios }) {
    const {data: project} = await $axios.get('/projects/' + params.id)
    return {
      title: project.title.code,
      description: project.description.code,
      skills: project.skills,
      color: project.color,
      cover: project.cover.file_name,
      url: project.url
    }
  },
  computed: {
    formatLink() {
      return this.url.replace('https://', '').replace('http://', '')
    }
  }
}
</script>

<style scoped>

</style>
