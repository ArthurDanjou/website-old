<template>
  <svg class="inline" width="2.5em" height="2.5em" viewBox="0 0 24 24" focusable="false">
    <path
      d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19zM12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4z"
      stroke="currentColor"
      :class="{active: 'fill-black dark:fill-white'}"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: "UserIcon",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
