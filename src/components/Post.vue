<template>
  <article
    class="border-2 border-black border-solid rounded-xl w-full h-blog p-2 flex flex-col justify-between my-5 duration-200 transform hover:scale-95"
    :style="{ backgroundImage: 'url(http://localhost:5555/files/' + cover + ')' }"
  >
    <div>
      <p
        class="text-3xl  font-bold text-justify leading-7 mb-3"
        :class="lightBg === 1 ? 'text-black':'text-white'"
      >{{title}}</p>
      <p
        class="text-lg italic text-justify leading-5"
        :class="lightBg === 1 ? 'text-gray-900':'text-dark-900'"
      >{{description}}</p>
    </div>
    <div
      class="flex justify-between mt-8"
      :class="lightBg ? 'text-gray-900':'text-dark-900'"
    >
      <div>
        <div>{{formatDate}}</div>
        <div>{{reading_time}} min read</div>
        <div>{{likes}} ❤</div>
      </div>
      <div class="self-end flex flex-wrap flex-col md:flex-row">
        <div v-for="(tag) in tags"
             class="my-1 md:my-0 ml-2 py-1 px-2 rounded font-semibold"
             :class="lightBg ? 'bg-black text-white':'bg-white text-black'"
        >
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
      default: "default.png"
    },
    lightBg: {
      type: Number,
      default: false
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
  @apply bg-opacity-50;
}
</style>
