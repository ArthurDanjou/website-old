<template>
  <div class="m-4 md:w-48 h-32 w-2/3 p-1 md:p-2 skill border-gray-900 border-2 bg-gray-300 duration-300 rounded-3xl" :class="'hover:bg-'+color">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div>
        COVER
      </div>
      <h1 class="md:text-2xl text-lg font-bold">{{skill}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    skill: {
      type: String,
      default: "Rien"
    },
    color: {
      type: String,
      default: "red-100"
    },
    cover: {
      type: String,
      default: "https://api.arthurdanjou.fr/files/default.png"
    }
  }
}
</script>

<style scoped lang="scss">
.skill {

}
</style>
