<template>
  <svg class="inline" width="2.5em" height="2.5em" viewBox="0 0 24 24" focusable="false">
    <path
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v9c0 .55-.45 1-1 1zm-7-7L4 6h16l-8 5z"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: "ContactIcon",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
