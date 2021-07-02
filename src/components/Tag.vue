<template>
  <div
    class="px-2 py-0.5 rounded-full bg-gray-200 text-sm text-gray-800 dark:(bg-gray-700 text-gray-300)"
    :class="pill === true ? 'px-2 py-0.5 rounded-full' : 'px-2 py-1 rounded-md'"
  >
    {{ $t(content) }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "TagPreview",
  props: {
    content: {
      type: String,
      default: "Content"
    },
    pill: {
      type: Boolean,
      default: true
    }
  },
})
</script>
