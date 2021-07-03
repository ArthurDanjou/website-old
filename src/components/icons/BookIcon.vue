<template>
  <svg v-if="active" class="inline" width="2.5em" height="2.5em" viewBox="0 0 24 24" focusable="false">
    <path
      d="M21 4H7a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1v1zm-1 3H7a1 1 0 1 1 0-2h13v2z"
      fill="currentColor"
    />
  </svg>
  <svg v-else class="inline" width="2.5em" height="2.5em" viewBox="0 0 24 24" focusable="false">
    <path
      d="M21 4H7a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1v1zM5 18a2 2 0 0 0 2 2h12V10H7a3.982 3.982 0 0 1-2-.535V18zM20 7H7a1 1 0 1 1 0-2h13v2z"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: "BookIcon",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
