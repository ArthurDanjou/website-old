<template>
  <main class="blog flex flex-col items-center px-5 xl:px-64 mb-16 md:mb-32">
    <!-- TODO Titre en blanc et desc en gris lien autre couleur + Définir un autre padding sur les cotés-->
    <div class="mt-8 md:mt-32 flex flex-col justify-around py-8 w-full">
      <h1 class="text-3xl md:text-5xl font-bold">
        {{ title }}
      </h1>
      <h3 class="text-xl text-gray-800 dark:text-dark-900 my-4 md:mt-8">
        {{ description }}
      </h3>
      <div class="flex flex-row justify-between w-full md:w-2/3 mb-12">
        <div>
          <p class="uppercase text-sm font-bold text-gray-800 dark:text-dark-900">Date</p>
          <p>{{ formatDate }}</p>
        </div>
        <div>
          <p class="uppercase text-sm font-bold text-gray-800 dark:text-dark-900">Time</p>
          <p>{{ reading_time }} min</p>
        </div>
        <div>
          <p class="uppercase text-sm font-bold text-gray-800 dark:text-dark-900">Tags</p>
          <p>{{formatTags}}</p>
        </div>
      </div>
      <div class="w-full">
        <div class="flex justify-center w-full h-auto">
          <img class="w-full h-auto" :src="'http://localhost:5555/files/'+cover.file_name" alt="Cover Img" />
        </div>
      </div>
      <p class="my-6 md:my-12 text-gray-800 dark:text-dark-900">
        {{ content }}
      </p>
      <p class="text-center">
        Merci d'avoir lu jusqu'au bout ! 😊<br class="md:hidden"/>
        Hésite surtout pas à partager l'article sur Twitter
        Todo : replace par des buttons : - Likes, - Twitter (proposition de tweet), - partage (lien)
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {
      id: this.$route.params.id,
      title: '',
      description: '',
      content: '',
      tags: [],
      likes: 0,
      date: '',
      cover: '',
      reading_time: 0
    }
  },
  async asyncData({ params, $axios }) {
    const {data: post} = await $axios.get('/posts/' + params.id)
    return {
      title: post.title.code,
      description: post.description.code,
      content: post.content.code,
      tags: post.tags,
      likes: post.likes,
      date: post.created_at,
      reading_time: post.reading_time,
      cover: post.cover
    }
  },
  computed: {
    formatDate() {
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
      ];
      const date = new Date(this.date)
      return date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear()
    },
    formatTags() {
      let tags = ""
      this.tags.map(tag => {
        tags += tag.label.code + ", "
      })
      return tags.substring(0, tags.length - 2)
    },
  }
}
</script>

<style scoped lang="scss">
</style>
