<template>
  <footer class="footer w-full border-t border-gray-400 border-solid mb-20 md:mb-0">
    <div>
      <div class="flex flex-col items-center border-t border-solid border-gray-400 py-4 bg-gray-200 text-center ">
        <div class="mb-3">
          <p class="inline">Retrouvez moi sur :
            <span><a href="https://twitch.com/ArthurDanjou" target="_blank">Twitch</a></span>,
            <span><a href="https://github.com/ArthurDanjou" target="_blank">Github</a></span> &
            <span><a href="https://twitter.com/ArthurDanj" target="_blank">Twitter</a></span> et par
            <span><a href="mailto:contact@arthurdanjou.fr" target="_blank">Mail</a></span></p>
          <span class="inline text-gray-600 text-xs">
            (Clique c'est gratuit 🔗)
          </span>
        </div>
        <p>
          Développé et conçu avec ❤ en utilisant <span>NuxtJs</span> & <span>AdonisJs</span> par <span>Arthur DANJOU</span>
        </p>
        <p>© Copyright {{date}} - Tous droits réservés</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data () {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  .footer-top {
    padding: 1rem 15%;
  }
}
</style>
