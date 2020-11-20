<template>
  <header class="fixed top-0 left-0 bg-white dark:bg-black header border-b border-gray-200 border-solid tracking-wider w-full h-16 lg:h-24">
    <div class="header-container z-index-50 flex justify-between items-center h-full px-5 xl:px-64">
      <nuxt-link to="/">
        <div class="left text-2xl font-bold cursor-pointer hover:underline duration-500 dark:text-white dark:bg-black">
          Arthur Danjou
        </div>
      </nuxt-link>
      <nav class="right">
        <div class="flex flex-col md:flex-row items-center">
          <ul class="flex text-xl">
            <li class="mx-2 cursor-pointer">
              <nuxt-link to="/dev"> FR </nuxt-link>
            </li>
            <li class="mx-2 cursor-pointer flex items-center">
              <div @click="changeColorMode()" v-if="this.$colorMode.value === 'light'"  class="">
                <img alt="Moon Logo" src="@/assets/img/utilities/moon.svg" height="25" width="25"/>
              </div>
              <div @click="changeColorMode()" v-else class="">
                <img src="@/assets/img/utilities/sun.svg" alt="Sun Logo" height="25" width="25"/>
              </div>
            </li>
            <nuxt-link class="red hidden md:inline-block" to="/">
              <li class="hover:text-red-400 font-bold mx-2 cursor-pointer duration-300">
                Accueil
              </li>
            </nuxt-link>
            <nuxt-link class="orange hidden md:inline-block" to="/about">
              <li class="hover:text-orange-400 font-bold mx-2 cursor-pointer duration-300">
                Moi
              </li>
            </nuxt-link>
            <nuxt-link class="green hidden md:inline-block" to="/blog">
              <li class="hover:text-green-400 font-bold mx-2 cursor-pointer duration-300">
                Blog
              </li>
            </nuxt-link>
            <nuxt-link class="blue hidden md:inline-block" to="/work">
              <li class="hover:text-blue-400 font-bold mx-2 cursor-pointer duration-300">
                Travail
              </li>
            </nuxt-link>
            <nuxt-link class="purple hidden md:inline-block" to="/contact">
              <li class="hover:text-purple-400 font-bold mx-2 cursor-pointer duration-300">
                Contact
              </li>
            </nuxt-link>
          </ul>
        </div>
        <ul class="z-index-50 bg-white md:hidden fixed bottom-0 left-0 z-index-20 w-full flex items-center justify-around h-20 border-t border-gray-200 border-solid navbar-bottom-items">
          <nuxt-link class="red" to="/">
            <li class="font-bold flex flex-col items-center justify-center">
              <img class="inline-block" src="@/assets/img/sections/home.svg" alt="Home icon" height="15" width="15" />
              Accueil
            </li>
          </nuxt-link>
          <nuxt-link to="/about" class="orange">
            <li class="font-bold flex flex-col items-center justify-center">
              <img class="inline-block" src="@/assets/img/sections/profile.svg" alt="About icon" height="15" width="15" />
              Moi
            </li>
          </nuxt-link>
          <nuxt-link to="/blog" class="green">
            <li class="font-bold flex flex-col items-center justify-center">
              <img class="inline-block" src="@/assets/img/sections/quill.svg" alt="Blog icon" height="15" width="15" />
              Blog
            </li>
          </nuxt-link>
          <nuxt-link to="/work" class="blue">
            <li class="font-bold flex flex-col items-center justify-center">
              <img class="inline-block" src="@/assets/img/sections/case.svg" alt="Work icon" height="15" width="15" />
              Travail
            </li>
          </nuxt-link>
          <nuxt-link to="/contact" class="purple">
            <li class="font-bold flex flex-col items-center justify-center">
              <img class="inline-block" src="@/assets/img/sections/pin.svg" alt="Contact icon" height="15" width="15" />
              Contact
            </li>
          </nuxt-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    changeColorMode() {
      this.$colorMode.preference = this.$colorMode.value === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style scoped lang="scss">
.header {

  .header-container {

    .nuxt-link-active {
      &.green {
        @apply text-green-400;
      }
    }

    .nuxt-link-exact-active {
      &.red {
        @apply text-red-400;
      }
      &.orange {
        @apply text-orange-400;
      }
      &.green {
        @apply text-green-400;
      }
      &.blue {
        @apply text-blue-400;
      }
      &.purple {
        @apply text-purple-400;
      }
    }

    .navbar-bottom-items li {
      transition: all .2s ease-in-out;
    }
  }
}
</style>
