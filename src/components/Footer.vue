<template>
  <footer class="footer w-full border-t-2 border-solid border-black dark:border-white mb-20 md:mb-0">
    <div>
      <div class="flex flex-col items-center py-4 text-center ">
        <div class="mb-3">
          <p class="inline">Retrouvez moi sur :
            <br class="md:hidden"/>
            <a class="font-semibold" href="https://twitch.com/ArthurDanjou" target="_blank">
              <img class="inline img" src="@/assets/img/socials/twitch.svg" alt="Twitch logo" height="18" width="18" />
              <span class="link">Twitch</span>
            </a>,
            <a class="font-semibold" href="https://github.com/ArthurDanjou" target="_blank">
              <img class="inline img" src="@/assets/img/socials/github.svg" alt="Github logo" height="20" width="20" />
              <span class="link">Github</span>
            </a> &
            <a class="font-semibold" href="https://twitter.com/ArthurDanj" target="_blank">
              <img class="inline img" src="@/assets/img/socials/twitter.svg" alt="Twitter logo" height="20" width="20" />
              <span class="link">Twitter</span>
            </a> et par
            <a class="font-semibold" href="mailto:contact@arthurdanjou.fr" target="_blank">
              <svg class="inline img" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="link">Mail</span>
              </a>
          </p>
          <span class="inline dark:text-dark-900 text-gray-600 text-xs">
            (Clique c'est gratuit 🔗)
          </span>
        </div>
        <p>
          Développé et conçu avec ❤ en utilisant

          <a class="font-semibold" target="_blank" href="https://nuxtjs.org">
            <img class="inline img" src="@/assets/img/socials/nuxtjs.svg" alt="NuxtJs logo" height="20" width="20" />
            <span class="link">NuxtJs</span>
          </a>
          &
          <a class="font-semibold" target="_blank" href="https://preview.adonisjs.com/">
            <img class="inline img" src="@/assets/img/socials/adonisjs.svg" alt="AdonisJs logo" height="20" width="20" />
            <span class="link">AdonisJs</span>
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

  .link {
    transition-duration: .3s;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
