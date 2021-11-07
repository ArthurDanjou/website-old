<template>
  <svg class="inline" width="1.5em" height="1.5em" viewBox="0 0 24 24" focusable="false">
    <path
      d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10z"
      :fill="isDarkMode ? 'white' : 'black'"
    />
  </svg>
</template>

<script lang="ts">
import {computed, defineComponent, useContext} from "@nuxt/bridge/dist/runtime/capi.legacy";

export default defineComponent({
  name: "GithubIcon",
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
