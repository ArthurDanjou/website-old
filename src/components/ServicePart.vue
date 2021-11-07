<template>
  <div>
    <div>
      <slot name="icon" />
    </div>
    <div class="sm:mt-8">
      <h1 class="font-bold tracking-wider text-3xl mb-4">
        {{ $t(props.title) }}
      </h1>
      <slot name="content"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'services.1.title'
  }
})
</script>
