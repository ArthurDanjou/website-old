<template>
  <section class="my-16 w-full flex items-center justify-center">
    <div class="text-center flex flex-col items-center">
      <h1 class="text-6xl font-bold text-gray-700 dark:text-gray-400">
        {{ $t('home.banner.hello') }} <span class="text-black dark:text-white">Arthur Danjou</span> 👋,
      </h1>
      <h2 class="my-6 text-4xl text-black dark:text-white">
        <strong>{{ $t('home.banner.role') }}</strong>. <br />
        {{ $t('home.banner.student.main') }} <strong>{{ $t('home.banner.student.strong') }}</strong>.
      </h2>
      <div class="select-none mt-4 text-5xl text-gray-800 mb-10 dark:text-gray-300">
        <span id="develop" class="color blue">Develop.</span>
        <span id="publish" class="color">Publish.</span>
        <span id="improve" class="color">Improve.</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted} from "@nuxtjs/composition-api";

interface Color {
  name: string,
  color: string
}

const COLORS: Color[] = [
  { name: 'develop', color: 'blue' },
  { name: 'publish', color: 'red' },
  { name: 'improve', color: 'green' }
]

export default defineComponent({
  name: "Banner",
  setup() {
    let task

    onMounted(() => {
      let CURRENT = 0
      task = setInterval(() => {
        const color = COLORS[CURRENT]
        const new_color = COLORS[CURRENT === COLORS.length -1 ? 0 : CURRENT + 1]
        document.getElementById(new_color.name)!.classList.toggle(new_color.color)
        setTimeout(() => document.getElementById(color.name)!.classList.toggle(color.color), 0)
        CURRENT === COLORS.length - 1 ? CURRENT = 0 : CURRENT++
      }, 3000)
    })

    onUnmounted(() => clearInterval(task))
  }
})
</script>

<style scoped lang="scss">
.link {
  @apply font-medium cursor-pointer border-b-2 border-gray-200 text-indigo-600 hover:border-indigo-600 duration-200 dark:(font-white border-gray-700) hover:dark:border-indigo-600
}

.color {
  @apply duration-500 text-white dark:text-black font-color;

  &.red {
    @apply select-text bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-300
  }
  &.blue {
    @apply select-text bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400
  }
  &.green {
    @apply select-text bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-lime-500
  }
}
</style>
