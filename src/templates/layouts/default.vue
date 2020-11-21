<template>
  <div class="dark:bg-dark-200 dark:text-white">
    <Header />
    <Nuxt class="content pt-16 lg:pt-24"/>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
export default {
  components: {Footer, Header}
}
</script>

<style scoped>
.content {
  min-height: calc(100vh - (118px + 96px));
}
</style>
