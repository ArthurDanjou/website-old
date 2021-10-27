<template>
  <footer class="footer w-full mt-20">
    <div class="p-8 pb-0">
      <div class="lg:flex justify-evenly items-center">
        <div class="lg:w-1/3">
          <div class="flex">
            <Logo />
          </div>
          <div class="my-8">
            <p class="text-justify">
              {{ $t('footer.description') }}
            </p>
            <div class="mt-4 flex">
              <nuxt-link data-blobity-magnetic="false" to="/contact" class="z-index-3 text-red-400">
                {{ $t(hiring_message) }}
              </nuxt-link>
            </div>
          </div>
          <SocialList class="flex space-x-4 mb-8" />
        </div>
        <div class="lg:ml-32 lg:w-1/3">
          <h1 class="font-bold mb-4 text-lg underline">
              {{ $t('footer.links') }}
            </h1>
          <div class="flex flex-col lg:flex-row mb-8 font-medium">
            <div class="space-y-2 lg:space-y-4 mr-16 flex flex-col">
              <div class="link">
                <nuxt-link class="z-index-3" to="/" :class="{'link-active': isWindow('')}">
                  {{ $t('header.home') }}
                </nuxt-link>
              </div>
              <div class="link">
                <nuxt-link class="z-index-3" to="/about" :class="{'link-active': isWindow('about')}">
                  {{ $t('header.about') }}
                </nuxt-link>
              </div>
              <div class="link">
                <nuxt-link class="z-index-3" to="/blog" :class="{'link-active': isWindow('blog')}">
                  {{ $t('header.blog') }}
                </nuxt-link>
              </div>
              <div class="link">
                <nuxt-link class="z-index-3" to="/projects" :class="{'link-active': isWindow('projects')}">
                  {{ $t('header.projects') }}
                </nuxt-link>
              </div>
            </div>
            <div class="mt-2 lg:mt-0 space-y-2 lg:space-y-4 flex flex-col">
              <div class="link">
                <nuxt-link class="z-index-3" to="/services" :class="{'link-active': isWindow('services')}">
                  {{ $t('header.services') }}
                </nuxt-link>
              </div>
              <div class="link">
                <nuxt-link class="z-index-3" to="/env" :class="{'link-active': isWindow('env')}">
                  {{ $t('header.env') }}
                </nuxt-link>
              </div>
              <div class="link">
                <nuxt-link class="z-index-3" to="/newsletter" :class="{'link-active': isWindow('newsletter')}">
                  {{ $t('header.newsletter') }}
                </nuxt-link>
              </div>
              <div class="link">
                <nuxt-link class="z-index-3" to="/contact" :class="{'link-active': isWindow('contact')}">
                  {{ $t('header.contact') }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center border-t-2 border-gray-200 dark:border-gray-800 py-8 lg:flex lg:flex-row-reverse justify-between">
        <div class="flex">
          {{ $t('footer.credits') }}
          <a data-blobity-magnetic="false" class="z-index-3 mx-2 social font-semibold" target="_blank" href="https://nuxtjs.org" rel="noopener noreferrer">
            <NuxtIcon />
            <span>NuxtJS</span>
          </a>
          {{ $t('footer.credits_separator') }}
          <a data-blobity-magnetic="false" class="z-index-3 mx-2 social font-semibold" target="_blank" href="https://adonisjs.com" rel="noopener noreferrer">
            <AdonisIcon />
            <span>AdonisJS</span>
          </a>
        </div>
        <p class="mt-4 lg:mt-0">{{ $t('footer.copyrights', { date: getDate }) }}</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {computed, defineComponent, ref, useAsync, useContext, useStore} from "@nuxtjs/composition-api";
import {State} from "~/types/types";

export default defineComponent({
  name: "Footer",
  setup() {
    const {$axios, $sentry, app} = useContext()

    const getDate = ref(new Date().getFullYear())

    const hiring_message = useAsync(async () => {
      const request = await $axios.get('/api/informations', {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
      })
      if (request.status === 200) {
        return request.data.informations.translation.code
      } else {
        app.error({statusCode: 500})
        $sentry.captureEvent(request.data)
      }
    }, 'hiring_message')

    const store = useStore<State>()
    const route = computed(() => store.state.route)
    const isWindow = (loc: string) => {
      if (loc === '') return route.value === "/"
      else return route.value.includes(loc)
    }

    return {
      getDate,
      hiring_message,
      isWindow
    }
  }
})
</script>

<style scoped lang="scss">
.footer {
  .link-active a {
    @apply text-red-500 dark:text-amber-400;
  }

  .link {
    @apply z-index-3;
  }

  .link-active {
    @apply text-red-500 dark:text-amber-400
  }
}
</style>
