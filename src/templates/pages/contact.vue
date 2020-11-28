<template>
  <main class="contact flex flex-col items-center px-5 xl:px-64">
    <PageTitle
      title="Contact"
      color="purple"
    >
      <svg class="inline-block icon" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </PageTitle>
    <div class="flex flex-col items-center text-center py-10 w-full">
      <h1 class="text-gray-700 text-xl md:text-3xl my-4 dark:text-dark-900 mb-8">
        Vous voulez collaborer avec moi ? Voici mes différentes offres !
      </h1>
      <div class="flex flex-row w-full overflow-x-auto space-x-4 mb-6">
        <!-- Todo Insert Services -->
        <Service
          title="Développement d'application"
          cover="Logo.jpg"
          price="0"
        />
        <Service
          title="Maintenance Linux"
          cover="Logo.jpg"
          price="120"
        />
        <Service
          title="Conseil en développement"
          cover="Logo.jpg"
          price="0"
        />
      </div>
      <div class="flex flex-col items-center w-full md:w-2/3">
        <h1 class="text-gray-700 text-xl md:text-3xl my-4 dark:text-dark-900">
          Software & Tech Newsletter
        </h1>
        <h3 class="text-lg md:text-xl">
          Abonnez vous pour ne pas louper mes prochaines offres, mes prochains articles et mes nouveaux projets.
          <span class="font-bold self-start">Pas de spam. Désabonnement quand vous voulez</span>
        </h3>
        <form class="flex flex-col lg:flex-row my-4 w-full">
          <div class="mb-3 mr-4 w-full md:w-auto">
            <input class="select-text w-full placeholder-purple-700 dark:focus:bg-dark-100 dark:placeholder-purple-400 focus:bg-white duration-300 px-3 py-2 bg-purple-50 dark:bg-dark-200 border border-solid border-purple-700 rounded-lg" type="text" placeholder="Prénom" required id="name"/>
          </div>
          <div class="mb-3 mr-4 w-full md:w-auto">
            <input class="select-text w-full placeholder-purple-700 dark:focus:bg-dark-100 dark:placeholder-purple-400 focus:bg-white duration-300 px-3 py-2 bg-purple-50 dark:bg-dark-200 border border-solid border-purple-700 rounded-lg" type="email" placeholder="Adresse Mail" required id="email"/>
          </div>
          <div class="mb-3 self-center">
            <button class="dark:text-black font-bold px-3 py-2 bg-purple-400 hover:bg-purple-500 cursor-pointer duration-300 rounded-lg btn">
              S'abonner
              <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div class="flex flex-col items-start w-full md:w-2/3">
        <h1 class="self-center text-gray-700 text-xl md:text-3xl my-4 dark:text-dark-900">
          Comment me contacter ?
        </h1>
        <h3 class="text-lg md:text-xl">
          N'hésitez pas à nous contacter si vous avez des questions, pensez que nous pourrions travailler ensemble ou si vous souhaitez simplement vous connecter ✌️
        </h3>
        <div>
          <div class="my-4 email text-lg duration-300 text-purple-500 hover:text-purple-700 cursor-pointer flex">
            <a class="mr-2" href="mailto:contact@arthurdanjou.fr?subject=Please enter here your project name">
              contact@arthurdanjou.fr
            </a>
            <div class="arrow duration-300">
              <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
          <div>
            Statut Freelance : <span class="py-1 px-2 font-bold rounded-full" :class="'bg-' +hiringColor+ '-300 text-' +hiringColor+ '-500'">{{$t(hiringStatus.code)}}</span>
          </div>
        </div>
        <!-- Insert Form -->
      </div>
    </div>
    <!--
    TODO Newsletter + Services + Formulaire de contact
    -->
  </main>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import Service from "~/components/Service";
export default {
  name: "contact",
  components: {Service, PageTitle},
  data () {
    return {
      services: [],
      hiringStatus: '',
      hiringColor: ''
    }
  },
  async asyncData({ $axios }) {
    const {data: services} = await $axios.get('/services')
    const {data: me} = await $axios.get('/me')
    return {
      services,
      hiringStatus: me.hiringStatus,
      hiringColor: me.hiring_color
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
