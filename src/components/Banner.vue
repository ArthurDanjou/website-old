<template>
  <section class="my-16 w-full flex items-center justify-center">
    <div class="text-center flex flex-col items-center">
      <h1 class="text-5xl md:text-6xl xl:flex font-bold text-gray-600 dark:text-gray-400">
        {{ $t('home.banner.hello') }} <span class="flex z-index-3 text-black dark:text-white mx-2">Arthur Danjou</span> <span class="hey">👋</span>,
      </h1>
      <h2 class="my-6 text-3xl md:text-4xl text-black dark:text-white">
        <strong>{{ $t('home.banner.role') }}</strong>. <br />
        <span class="text-gray-600 dark:text-gray-400">{{ $t('home.banner.student.main') }}</span> <strong>{{ $t('home.banner.student.strong') }} 🎓</strong>.
      </h2>
      <div class="flex flex-col md:flex-row select-none mt-4 text-4xl md:text-5xl text-gray-800 mb-10 dark:text-gray-300">
        <span id="develop" class="color blue">{{ $t('home.banner.color.develop') }}</span>
        <span id="publish" class="color">{{ $t('home.banner.color.publish') }}</span>
        <span id="improve" class="color">{{ $t('home.banner.color.improve') }}</span>
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
      }, 2000)
    })

    onUnmounted(() => clearInterval(task))
  }
})
</script>

<style scoped lang="scss">
.color {
  @apply duration-500 text-white dark:text-black font-black font-color;

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

.hey {
  animation: hi 2.5s infinite ease-in-out;
}

@keyframes hi {
  0% {
    transform: rotate(0)
  }
  10% {
    transform: rotate(14deg)
  }
  20% {
    transform: rotate(-8deg)
  }
  30% {
    transform: rotate(14deg)
  }
  40% {
    transform: rotate(-4deg)
  }
  50% {
    transform: rotate(10deg)
  }
  60% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(0)
  }
}
</style>
