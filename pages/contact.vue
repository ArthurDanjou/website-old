<template>
  <main class="contact flex flex-col items-center px-5 xl:px-64">
    <PageTitle
      title="part.contact"
      color="purple"
    >
      <svg class="inline-block icon" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </PageTitle>
    <div class="w-full lg:w-3/4 mb-10 mt-4">
      <h1 class="font-bold text-gray-700 text-xl md:text-3xl my-4 dark:text-dark-200">{{ $t('contact.newsletter.title') }}</h1>
      <h3 class="text-md md:text-lg">
        {{ $t('contact.newsletter.description') }} <br>
        <span class="font-bold self-start">{{ $t('contact.newsletter.unfollow') }}</span>
      </h3>
      <form class="flex flex-col lg:flex-row mt-4 w-full">
        <div class="flex flex-col lg:flex-row">
          <div class="mb-3 lg:mr-4 w-full md:w-auto">
            <input v-model="form.name"
                   class="select-text w-full placeholder-purple-700 dark:focus:bg-dark-800 dark:placeholder-purple-400 focus:bg-white duration-300 px-3 py-2 bg-purple-50 dark:bg-dark-900 border border-solid border-purple-700 rounded-lg"
                   type="text"
                   :placeholder="$t('contact.form.name')"
                   required
                   id="name"/>
          </div>
          <div class="mb-3 lg:mr-4 w-full md:w-auto">
            <input v-model="form.email"
                   class="select-text w-full placeholder-purple-700 dark:focus:bg-dark-800 dark:placeholder-purple-400 focus:bg-white duration-300 px-3 py-2 bg-purple-50 dark:bg-dark-900 border border-solid border-purple-700 rounded-lg"
                   type="email"
                   :placeholder="$t('contact.form.mail')"
                   required
                   id="email"/>
          </div>
        </div>
        <div class="mb-3 self-center">
          <button @click.prevent="handleForm" class="dark:text-black font-bold px-3 py-2 bg-purple-400 hover:bg-purple-500 cursor-pointer duration-300 rounded-lg btn">
            {{ $t('contact.form.submit')}}
            <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </button>
        </div>
      </form>
      <div v-if="error" class="flex">
        <div class="rounded-xl px-3 py-2 bg-red-300 font-bold ">
          {{ $t('contact.form.error') }}
        </div>
      </div>
      <div v-if="success" class="flex">
        <div class="rounded-xl px-3 py-2 bg-green-300 font-bold ">
          {{ $t('contact.form.success', { email: form.email }) }}
        </div>
      </div>
    </div>
    <div class="w-full lg:w-3/4 mb-10 mt-4">
      <h1 class="font-bold text-gray-700 text-xl md:text-3xl my-4 dark:text-dark-100">
        {{ $t('contact.how_to.title') }}
      </h1>
      <h3 class="text-md md:text-lg">
        {{ $t('contact.how_to.description') }}
      </h3>
      <div class="mt-4 email text-lg duration-300 text-purple-500 hover:text-purple-700 cursor-pointer flex">
        <a class="mr-2" href="mailto:contact@arthurdanjou.fr?subject=Please enter here your project name">
          contact@arthurdanjou.fr
        </a>
        <div class="arrow duration-300">
          <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-3/4 mb-10 mt-4">
      <h1 class="font-bold text-gray-700 text-xl md:text-3xl my-4 dark:text-dark-100">
        {{ $t('contact.available.title') }}
      </h1>
      <h3 class="text-lg md:text-lg">
        {{ $t('contact.available.description') }}
      </h3>
      <div class="my-4 text-purple-500">
        {{ $t('contact.available.start') }}
        <span
          class="py-1 px-2 font-bold rounded-xl"
          :class="getColor"
        >
          {{ $t('hiring.status.' + status) }}
        </span>
        {{ $t('contact.available.end') }}
      </div>
    </div>
  </main>
</template>

<script>
import PageTitle from "~/components/PageTitle";
export default {
  name: "contact",
  components: {PageTitle},
  data () {
    return {
      status: '',
      color: '',
      form: {
        name: '',
        email: ''
      },
      success: false,
      error: false
    }
  },
  async asyncData({ $content }) {
    const infos = await $content('infos').fetch()
    return {
      status: infos.hiring.status,
      color: infos.hiring.color
    }
  },
  methods: {
    async handleForm () {
      await this.$axios.post('/subscribers',
        {
          email: this.form.email,
          name: this.form.name
        })
        .then(() => {
          this.success = true
          setTimeout(() => {
            this.success = false
            this.form.email = ''
            this.form.name = ''
          }, 5000)
        }).catch(() => {
          this.error = true
          setTimeout(() => {
            this.error = false
          }, 5000)
        })
    }
  },
  computed: {
    getColor() {
      switch (this.color) {
        case 'red':
          return 'bg-red-200 text-red-500'
        case 'orange':
          return 'bg-orange-200 text-orange-500'
        case 'purple':
          return 'bg-purple-200 text-purple-500'
        case 'blue':
          return 'bg-blue-200 text-blue-500'
        case 'green':
          return 'bg-green-200 text-green-500'
        case 'yellow':
          return 'bg-yellow-200 text-yellow-500'
        case 'cyan':
          return 'bg-cyan-200 text-cyan-500'
        case 'teal':
          return 'bg-teal-200 text-teal-500'
        case 'amber':
          return 'bg-amber-200 text-amber-500'
        case 'blueGray':
          return 'bg-blueGray-200 text-blueGray-500'
        case 'emerald':
          return 'bg-emerald-200 text-emerald-500'
        case 'lightBlue':
          return 'bg-lightBlue-200 text-lightBlue-500'
        case 'lime':
          return 'bg-lime-200 text-lime-500'
        case 'rose':
          return 'bg-rose-200 text-rose-500'
        case 'black':
          return 'bg-black text-black'
        case 'white':
          return 'bg-white text-white'
        case 'pink':
          return 'bg-pink-200 text-pink-500'
        case 'fuchsia':
          return 'bg-fuchsia-200 text-fuchsia-500'
        case 'violet':
          return 'bg-violet-200 text-violet-500'
        case 'indigo':
          return 'bg-indigo-200 text-indigo-500'
        case 'warmGray':
          return 'bg-warmGray-200 text-warmGray-500'
        case 'trueGray':
          return 'bg-trueGray-200 text-trueGray-500'
        case 'gray':
          return 'bg-gray-200 text-gray-500'
        case 'coolGray':
          return 'bg-coolGray-200 text-coolGray-500'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.contact {
  .email:hover .arrow {
    transform: translateX(15px);
  }

  .link {
    @apply mr-5 duration-300;

    &:hover {
      @apply border-b-2 border-opacity-0 dark:border-opacity-0 dark:hover:border-opacity-100 hover:border-opacity-100 border-black dark:border-white border-solid;
    }
  }
}
</style>
