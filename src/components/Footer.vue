<template>
  <footer class="footer w-full border-t border-gray-400 border-solid mb-20 md:mb-0">
    <div>
      <div class="flex flex-col items-center border-t border-solid border-gray-400 py-4 bg-gray-200 text-center ">
        <div class="mb-3">
          <p class="inline">Retrouvez moi sur :
            <br class="md:hidden"/>
            <a class="font-semibold" href="https://twitch.com/ArthurDanjou" target="_blank">
              <img class="inline img" src="@/assets/img/socials/twitch.svg" alt="Twitch logo" height="18" width="18" />
              Twitch
            </a>,
            <a class="font-semibold" href="https://github.com/ArthurDanjou" target="_blank">
              <img class="inline img" src="@/assets/img/socials/github.svg" alt="Github logo" height="20" width="20" />
              Github
            </a> &
            <a class="font-semibold" href="https://twitter.com/ArthurDanj" target="_blank">
              <img class="inline img" src="@/assets/img/socials/twitter.svg" alt="Twitter logo" height="20" width="20" />
              Twitter
            </a> et par
            <a class="font-semibold" href="mailto:contact@arthurdanjou.fr" target="_blank">
              <img class="inline img" src="@/assets/img/socials/twitter.svg" alt="Mail logo" height="20" width="20" />
              Mail
              </a>
          </p>
          <span class="inline text-gray-600 text-xs">
            (Clique c'est gratuit 🔗)
          </span>
        </div>
        <p>
          Développé et conçu avec ❤ en utilisant

          <a class="font-semibold" target="_blank" href="https://nuxtjs.org">
            <img class="inline img" src="@/assets/img/socials/nuxtjs.svg" alt="NuxtJs logo" height="20" width="20" />
            NuxtJs
          </a>
          &
          <a class="font-semibold" target="_blank" href="https://preview.adonisjs.com/">
            <img class="inline img" src="@/assets/img/socials/adonisjs.svg" alt="AdonisJs logo" height="20" width="20" />
            AdonisJs
          </a>
          par <span>Arthur DANJOU</span>
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
  .img {
    transform: translateY(-3px);
  }
}
</style>
