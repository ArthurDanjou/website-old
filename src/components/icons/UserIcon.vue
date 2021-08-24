<template>
  <svg v-if="active" class="inline" width="2.5em" height="2.5em" viewBox="0 0 24 24" focusable="false">
    <path
      d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12z"
      fill="currentColor"
    />
  </svg>
  <svg v-else class="inline" width="2.5em" height="2.5em" viewBox="0 0 24 24" focusable="false">
    <path
      d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8z"
      fill="currentColor"
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
