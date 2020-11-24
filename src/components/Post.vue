<template>
  <article
    class="w-full h-blog p-2 flex flex-col justify-between my-5"
    :style="{ backgroundImage: 'url(http://localhost:5555/files/' + cover.file_name + ')' }"
  >
    <div>
      <p class="text-3xl text-white font-bold text-justify leading-7 mb-3">{{title}}</p>
      <p class="text-dark-900 text-lg italic text-justify leading-5">{{description}}</p>
    </div>
    <div class="flex justify-between mt-8 text-dark-900">
      <div>
        <div>{{formatDate}}</div>
        <div>{{reading_time}} min read</div>
        <div>{{likes}} ❤</div>
      </div>
      <div class="self-end flex flex-wrap flex-col md:flex-row">
        <div v-for="(tag) in tags" class="my-1 md:my-0 ml-2 py-1 px-2 bg-white text-black rounded font-semibold">
          #{{tag}}
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Post",
  props: {
    title: {
      type: String,
      default: "New Post's title "
    },
    description: {
      type: String,
      default: "New Post's description"
    },
    reading_time: {
      type: Number,
      default: 0
    },
    date: {
      type: String,
      default: "Today"
    },
    likes: {
      type: Number,
      default: 0
    },
    tags: {
      type: Array,
      default: () => ["Tag1", "Tag2", "Tag3"],
    },
    cover: {
      type: String,
      default: "https://api.arthurdanjou.fr/pictures/default.png"
    }
  },
  computed: {
    tagsSplit() {
      return this.tags.keys
    },
    formatDate() {
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
      ];
      const date = new Date(this.date)
      return date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear()
    },
  }
}
</script>

<style scoped lang="scss">
.h-blog {
  min-height: 20rem;
  background-position: center;
  background-size: cover;
}
</style>
