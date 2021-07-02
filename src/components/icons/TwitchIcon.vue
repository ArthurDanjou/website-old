<template>
  <svg class="inline" width="1.5em" height="1.5em" viewBox="0 0 256 256" focusable="false">
    <path
      d="M71.998 252A12 12 0 0 1 60 240v-28H48a20.022 20.022 0 0 1-20-20V48a20.022 20.022 0 0 1 20-20h160a20.022 20.022 0 0 1 20 20v108.253a19.946 19.946 0 0 1-7.197 15.365l-42.896 35.746A20.036 20.036 0 0 1 165.104 212h-40.759l-44.663 37.219A11.994 11.994 0 0 1 71.998 252zM52 188h20a12 12 0 0 1 12 12v14.38l26.093-21.744A20.036 20.036 0 0 1 122.896 188h40.759L204 154.379V52H52z"
      :fill="isDarkMode ? 'white' : 'black'"
    />
    <path
      d="M168 148a12 12 0 0 1-12-12V88a12 12 0 0 1 24 0v48a12 12 0 0 1-12 12z"
      :fill="isDarkMode ? 'white' : 'black'"
    />
    <path
      d="M120 148a12 12 0 0 1-12-12V88a12 12 0 0 1 24 0v48a12 12 0 0 1-12 12z"
      :fill="isDarkMode ? 'white' : 'black'"
    />
  </svg>
</template>

<script lang="ts">
import {computed, defineComponent, useContext} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "TwitterIcon",
  setup() {
    const {$colorMode} = useContext()
    const isDarkMode = computed(() => {
      return $colorMode.preference === 'dark'
    })

    return {
      isDarkMode
    }
  }
})
</script>
