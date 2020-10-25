<template>
  <header class="header border-b border-gray-200 border-solid tracking-wider">
    <div class="header-container flex justify-between items-center h-full">
      <div class="left text-2xl font-bold cursor-pointer hover:underline duration-500">
        Arthur Danjou
      </div>
      <div class="right">
        <ul class="flex text-xl">
          <nuxt-link to="/">
            <li class="hover:bg-red-400 py-1 px-3 mx-2 cursor-pointer duration-500">
              Accueil
            </li>
          </nuxt-link>
          <nuxt-link to="/about">
            <li class="hover:bg-orange-400 py-1 px-3 mx-2 cursor-pointer duration-500">
              A Propos
            </li>
          </nuxt-link>
          <nuxt-link to="/blog">
            <li class="hover:bg-green-400 py-1 px-3 mx-2 cursor-pointer duration-500">
              Blog
            </li>
          </nuxt-link>
          <nuxt-link to="/work">
            <li class="hover:bg-blue-400 py-1 px-3 mx-2 cursor-pointer duration-500">
              Travail
            </li>
          </nuxt-link>
          <nuxt-link to="/contact">
            <li class="hover:bg-purple-400 py-1 px-3 mx-2 cursor-pointer duration-500">
              Contact
            </li>
          </nuxt-link>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
.header {
  height: 80px;

  .header-container {
    padding: 0 15%;
  }
}
</style>
