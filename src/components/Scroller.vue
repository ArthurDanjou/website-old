<template>
  <transition name="fade" mode="in-out">
    <div
      @click.prevent="scrollToTop"
      data-blobity
      data-blobity-radius="24"
      data-blobity-magnetic="false"
      class="z-index-5 fixed bottom-4 right-4 duration-300 hidden md:block"
      v-show="scrollPosition > 150"
    >
      <ArrowUpIcon />
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted, ref, useRouter} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Scroller",
  setup() {
    const scrollPosition = ref(0)

    const scrollToTop = () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const updateScroll = () => {
      scrollPosition.value = window.scrollY
    }

    onMounted(() => {
      window.addEventListener('scroll', updateScroll);
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', updateScroll)
    })

    return {
      scrollPosition,
      scrollToTop
    }
  }
})
</script>

<style lang="scss">
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
