<template>
  <article class="border border-solid border-gray-300 w-full h-auto h-blog p-2 flex flex-col justify-between my-5">
    <div>
      <p class="text-3xl font-bold text-justify leading-7 mb-3">{{title}}</p>
      <p class="text-gray-900 text-lg italic text-justify leading-5">{{description}}</p>
    </div>
    <div class="flex justify-between mt-8">
      <div>
        <div>{{date}}</div>
        <div>{{reading_time}} min read</div>
      </div>
      <div class="self-end flex flex-wrap">
        <div v-for="tag in tagsSplit" class="ml-2 py-1 px-2 rounded bg-black text-white font-semibold">
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
      type: String,
      default: "0"
    },
    date: {
      type: String,
      default: "Today"
    },
    tags: {
      type: String,
      default: "Tag1 Tag2 Tag3",
    },
    cover: {
      type: String,
      default: "https://api.arthurdanjou.fr/pictures/default.png"
    }
  },
  computed: {
    tagsSplit() {
      return this.tags.split(" ")
    }
  }
}
</script>

<style scoped lang="scss">
.h-blog {
  min-height: 20rem;
}
</style>
