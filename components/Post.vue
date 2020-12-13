<template>
  <article
    class="border-2 border-black border-solid rounded-xl w-full h-blog p-2 flex flex-col justify-between my-5 duration-200 transform hover:scale-95"
    :style="{ backgroundImage: 'url(http://localhost:5555/files/' + cover + ')' }"
  >
    <div>
      <p
        class="text-2xl md:text-3xl font-bold md:text-justify leading-7 mb-3"
        :class="lightBg ? 'text-black':'text-white'"
      >{{ title }}</p>
      <p
        class="text-lg italic text-justify leading-5"
        :class="lightBg ? 'text-gray-900':'text-dark-100'"
      >{{ description }}</p>
    </div>
    <div
      class="flex justify-between mt-8 items-end"
      :class="lightBg ? 'text-gray-900':'text-dark-100'"
    >
      <div>
        <div>{{formatDate}}</div>
        <div>{{reading_time}} min</div>
      </div>
      <div class="self-end flex flex-wrap flex-col md:flex-row">
        <div v-for="tag in tags"
             class="my-1 md:my-0 ml-2 py-1 px-2 rounded font-semibold"
             :class="lightBg ? 'bg-black text-white':'bg-white text-black'"
        >
          #{{ $t(tag) }}
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
    tags: {
      type: Array,
      default: () => ["Tag1", "Tag2", "Tag3"],
    },
    cover: {
      type: String,
      default: "default.png"
    },
    lightBg: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formatDate() {
      const dateFormat = this.date.split('-')
      return dateFormat[0] + " " + this.$t('month.' + dateFormat[1]) + " " + dateFormat[2]
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
