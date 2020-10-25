<template>
  <footer class="footer w-full border-t border-gray-200 border-solid">
    <div class="footer-top flex flex-col items-center justify-center">
      <div>
        <ul class="flex text-lg flex-row">
          <nuxt-link to="/">
            <li class="hover:bg-red-400 py-1 px-3 mx-4 cursor-pointer duration-500">
              Accueil
            </li>
          </nuxt-link>
          <nuxt-link to="/about">
            <li class="hover:bg-orange-400 py-1 px-3 mx-4 cursor-pointer duration-500">
              A Propos
            </li>
          </nuxt-link>
          <nuxt-link to="/blog">
            <li class="hover:bg-green-400 py-1 px-3 mx-4 cursor-pointer duration-500">
              Blog
            </li>
          </nuxt-link>
          <nuxt-link to="/work">
            <li class="hover:bg-blue-400 py-1 px-3 mx-4 cursor-pointer duration-500">
              Travail
            </li>
          </nuxt-link>
          <nuxt-link to="/contact">
            <li class="hover:bg-purple-400 py-1 px-3 mx-4 cursor-pointer duration-500">
              Contact
            </li>
          </nuxt-link>
        </ul>
      </div>
      <div class="flex flex-col justify-center my-4">
        <div class="text-center">
          <p class="text-lg">
            Contactez moi par mail : <span class="text-red-400 hover:text-red-700 duration-300 cursor-pointer">contact@arthurdanjou.fr</span>
          </p>
          <div class="text-gray-600 text-xs text-right">
            (Clique c'est gratuit ❤)
          </div>
        </div>
        <p class="text-mg text-center">
          Retrouvez moi sur : <span>Twitter</span>, <span>Github</span> et <span>Twitch</span>
        </p>
      </div>
    </div>
    <div class="flex flex-col items-center border-t border-solid border-gray-400 py-4 bg-gray-200">
      <p>
        Développé et conçu avec ❤ en utilisant <span>NuxtJs</span> & <span>AdonisJs</span> par <span>Arthur DANJOU</span>
      </p>
      <p>© Copyright {{date}} - Tous droits réservés</p>
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
