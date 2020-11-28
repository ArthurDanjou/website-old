<template>
  <div class="w-72 h-80 border-2 border-black border-solid rounded-xl">
    <div class="flex flex-col items-center my-3 border-b-2 border-black border-solid">
      <img width="85" :src="'http://localhost:5555/files/' + cover" alt="Service Img"/>
      <h1 class="items-center flex h-16 text-xl font-bold mx-4">
        {{ title }}
      </h1>
    </div>
    <div class="h-auto">
      {{description }}
    </div>
    <div class="h-auto">
      {{ price }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: {
    title: {
      default: 'Title',
      type: String
    },
    description: {
      default: 'Description',
      type: String
    },
    cover: {
      default: 'default.png',
      type: String
    },
    price: {
      default: 0,
      type: String
    }
  },
  computed: {
    hasPrice() {
      return this.price !== '0'
    }
  }
}
</script>

<style scoped>

</style>
