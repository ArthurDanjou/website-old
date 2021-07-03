<template>
  <svg v-if="active" class="inline" width="2.5em" height="2.5em" viewBox="0 0 24 24" focusable="false">
    <path
      d="M15 22.065v-5a3 3 0 0 0-6 0v5H4a2 2 0 0 1-2-2V9.197a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 22 9.197v10.868a2 2 0 0 1-2 2h-5z"
      fill="currentColor"
    />
  </svg>
  <svg v-else class="inline" width="2.5em" height="2.5em" viewBox="0 0 24 24" focusable="false">
    <path
      d="M20 20V9.132l-8-4.8l-8 4.8V20h4v-2.75a4 4 0 1 1 8 0V20h4zm-6 2v-4.75a2 2 0 1 0-4 0V22H4a2 2 0 0 1-2-2V9.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 22 9.132V20a2 2 0 0 1-2 2h-6z"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: "HomeIcon",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
