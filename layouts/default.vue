<template>
  <div class="dark:bg-dark-900 dark:text-white font-sans">
    <Header />
    <Nuxt class="z-10 pt-16 lg:pt-24 content"/>
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
  min-height: calc(100vh - 118px);
}
</style>
