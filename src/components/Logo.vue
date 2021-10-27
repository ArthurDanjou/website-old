<template>
  <nuxt-link data-blobity-magnetic="false" class="z-index-3 profile ml-4 flex items-center" to="/">
    <img class="h-12 w-12 duration-500" src="@/assets/images/photo-rounded.png" alt="Photo of me" />
    <h1 class="ml-4 font-bold text-lg">Arthur Danjou</h1>
  </nuxt-link>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<style scoped lang="scss">
.profile:hover img {
  @apply transform rotate-360;
}
</style>
