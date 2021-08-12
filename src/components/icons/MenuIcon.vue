<template>
  <div>
    <svg v-if="type === 0" class="inline" width="2.5em" height="2.5em" viewBox="0 0 24 24" focusable="false">
      <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12h18"/>
        <path d="M3 6h18"/>
        <path d="M3 18h18/"/>
      </g>
    </svg>
    <svg v-else-if="type === 1" class="inline" width="2.5em" height="2.5em" viewBox="0 0 48 48" focusable="false">
      <g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path
          clip-rule="evenodd"
          d="M44 22c0-9.941-8.954-18-20-18S4 12.059 4 22h40z" />
        <path d="M4 38h40v6H4z" />
        <path d="M4 28l5.455 4l7.272-4L24 32l7.273-4l7.272 4L44 28" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "MenuIcon",
  props: {
    type: {
      type: Number,
      default: 0
    }
  }
}
</script>
