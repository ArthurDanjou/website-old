<template>
  <div
    class="m-2 p-1 md:p-2 h-48 w-48 border-gray-900 dark:border-dark-200 border-2 duration-300 rounded-3xl hover:bg-opacity-25"
    :class="getColor"
  >
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div>
        <img class="rounded-sm" alt="Skill Img" :src="require(`@/assets/img/skills/${cover}.png`)">
      </div>
      <h1 class="md:text-xl text-lg font-bold text-center">{{ skill }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkSkill",
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
      default: "logo.jpg"
    }
  },
  computed: {
    getColor() {
      switch (this.color) {
        case 'red':
          return 'hover:bg-red-600'
        case 'orange':
          return 'hover:bg-orange-600'
        case 'purple':
          return 'hover:bg-purple-600'
        case 'blue':
          return 'hover:bg-blue-600'
        case 'green':
          return 'hover:bg-green-600'
        case 'yellow':
          return 'hover:bg-yellow-600'
        case 'cyan':
          return 'hover:bg-cyan-600'
        case 'teal':
          return 'hover:bg-teal-600'
        case 'amber':
          return 'hover:bg-amber-600'
        case 'blueGray':
          return 'hover:bg-blueGray-600'
        case 'emerald':
          return 'hover:bg-emerald-600'
        case 'lightBlue':
          return 'hover:bg-lightBlue-600'
        case 'lime':
          return 'hover:bg-lime-600'
        case 'rose':
          return 'hover:bg-rose-600'
        case 'black':
          return 'hover:bg-black'
        case 'white':
          return 'hover:bg-white'
        case 'pink':
          return 'hover:bg-pink-600'
        case 'fuchsia':
          return 'hover:bg-fuchsia-600'
        case 'violet':
          return 'hover:bg-violet-600'
        case 'indigo':
          return 'hover:bg-indigo-600'
        case 'warmGray':
          return 'hover:bg-warmGray-600'
        case 'trueGray':
          return 'hover:bg-trueGray-600'
        case 'gray':
          return 'hover:bg-gray-600'
        case 'coolGray':
          return 'hover:bg-coolGray-600'
      }
    }
  }
}
</script>

<style scoped>

</style>
