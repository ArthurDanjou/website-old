<template>
  <main class="about flex flex-col items-center px-5 xl:px-64">
    <PageTitle
      title="A propos"
      color="orange"
    >
      <svg class="inline-block icon" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </PageTitle>
    <div class="flex flex-col md:flex-row justify-around items-center py-8">
      <div>
        <img class="logo-img rounded-full my-5" src="@/assets/img/Logo.jpg" alt="It's me !" />
      </div>
      <div class="text-lg leading-6 md:w-2/3 text-justify">
        <p>
          Bonjour, je suis <span class="text-orange-400 font-bold">Arthur DANJOU</span> 👋.
        </p> <br/>
        <p>
          Je suis un jeune développeur créatif qui aime bricoler et toucher à tout ! Je m'intéresse beaucoup aux nouvelles technologies, au développement et à l'informatique.
        </p> <br/>
        <p>
          J'adore partager mes connaissances et aider les autres à travers des lives sur Twitchs, des articles techniques sur mon blog, des projets open-sources ou encore en relisant du code de la communauté.
          Tant que je partage mes passions, je continuerai à faire ça.
        </p> <br/>
        <p>
          Je suis capable d'apprendre rapidement des nouvelles technologies pour répondre aux besoins des différents projets.
          J'identifie souvent le besoin de nouveaux systèmes ou outils pour améliorer l'efficacité du flux de travail.
          Je suis toujours motivé par un défi et j'aime être bien organisé pour produire des résultats cohérents.
        </p>
      </div>
    </div>
    <div class="w-full mb-10 mt-4">
      <h3 class="font-bold text-2xl md:text-4xl mb-3">
        Compétences Techniques
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </h3>
      <div class="flex flex-row w-full overflow-x-auto md:overflow-x-hidden space-x-4">
        <div v-for="skill in skills">
          <Skill
            :skill="skill.title.code"
            :color="skill.color"
            :cover="skill.cover.file_name"
          />
        </div>
      </div>
    </div>
    <div class="w-full mb-10">
      <h3 class="font-bold text-2xl md:text-4xl">
        Intérêts
        <svg height="32" width="32" class="inline icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      </h3>
      <div>
        <ul class="text-xl">
          <li class="my-2">
            Technologies
            <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </li>
          <li class="my-2">
            Développement
            <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </li>
          <li class="my-2">
            DevOps
            <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </li>
          <li class="my-2">
            Startups & Entreprises innovantes
            <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
          </li>
          <li class="my-2">
            Administration système
            <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </li>
          <li class="my-2">
            Voyage
            <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </li>
          <li class="my-2">
            Moto
            <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full mb-10">
      <h3 class="font-bold text-2xl md:text-4xl">
        Langues
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </h3>
      <div>
        <table class="text-base text-xl">
          <tr>
            <td class="font-bold py-2 pr-4">Français 🇫🇷</td>
            <td class="py-2 px-4">Natal</td>
          </tr>
          <tr>
            <td class="font-bold py-2 pr-4">Anglais 🇬🇧</td>
            <td class="py-2 px-4">Fluent</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="w-full mb-10">
      <h3 class="font-bold text-2xl md:text-4xl mb-3">
        Formation
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      </h3>
      <div v-for="formation in formations">
        <Formation
          :title="formation.title.code"
          :description="formation.description.code"
          :location="formation.location"
          :begin="formation.begin_date"
          :end="formation.end_date" />
      </div>
    </div>
    <div class="w-full mb-10">
      <h3 class="font-bold text-2xl md:text-4xl mb-3">
        Expériences
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      </h3>
      <div v-for="experience in experiences">
        <Experience
          :title="experience.title.code"
          :company="experience.company"
          :description="experience.description.code"
          :location="experience.location"
          :begin="experience.begin_date"
          :end="experience.end_date" />
      </div>
    </div>
    <nuxt-link to="/cv">
      <div class="flex justify-center items-center font-bold py-4 px-6 bg-orange-400 hover:bg-orange-600 cursor-pointer duration-500 rounded-full dark:text-black">
        Télécharger mon CV
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      </div>
    </nuxt-link>
    <div class="mt-10 border-t-2 border-black dark:border-white border-solid w-full" />
    <PageTitle
      title="Environnement"
      color="orange"
    >
      <svg class="inline icon" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    </PageTitle>
    <p class="text-lg leading-6 text-justify pb-8">
      Mon environnement de développement permet de gagner en productivité.
      En effet, je m'organise de la sorte à toujours optimiser mon temps de réflexion et de développement.
      Voici donc une liste de tous mes logiciels que j'utilise au quotidien et de mon setup.
    </p>
    <EnvGroup>
      <EnvTitle title="Editeurs de texte">
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </EnvTitle>
      <EnvList>
        <EnvListItem title="Editeur Java" content="Intellij Idea Ultimate" link="https://www.jetbrains.com/fr-fr/idea/"/>
        <EnvListItem title="Editeur Python" content="PyCharm Ultimate" link="https://www.jetbrains.com/fr-fr/pycharm/"/>
        <EnvListItem title="Editeur Web" content="WebStorm" link="https://www.jetbrains.com/fr-fr/webstorm/"/>
        <EnvListItem title="Editeur Go" content="GoLand" link="https://www.jetbrains.com/fr-fr/go/"/>
        <EnvListItem title="Editeur de bases de données" content="DataGrip" link="https://www.jetbrains.com/fr-fr/datagrip/"/>
        <EnvListItem title="All-In-One" content="Jetbrains Toolbox" link="https://www.jetbrains.com/toolbox-app/"/>
        <EnvListItem title="Police" content="Jetbrains Mono" link="https://www.jetbrains.com/lp/mono/"/>
        <EnvListItem title="Console" content="HyperJs" link="https://hyper.is/"/>
        <EnvListItem title="WSL 2" content="Ubuntu 20.04" link="https://www.microsoft.com/en-us/p/ubuntu-2004-lts/9n6svws3rx71?activetab=pivot:overviewtab"/>
      </EnvList>
    </EnvGroup>
    <EnvGroup>
      <EnvTitle title="Apps & Logiciels">
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </EnvTitle>
      <EnvList>
        <EnvListItem title="Email" content="Courrier by Microsoft" link="https://www.microsoft.com/fr-fr/p/courrier-et-calendrier/9wzdncrfhvqm?activetab=pivot:overviewtab"/>
        <EnvListItem title="Client VPN" content="Pritunl" link="https://pritunl.com/"/>
        <EnvListItem title="Client FTP" content="WinSCP" link="https://winscp.net/eng/download.php"/>
        <EnvListItem title="Navigateur Web" content="FireFox Developer Edition" link="https://www.mozilla.org/fr/firefox/developer/"/>
        <EnvListItem title="Organisation" content="Notion" link="https://www.notion.so/"/>
        <EnvListItem title="Organisation" content="Trello" link="https://www.trello.com/"/>
        <EnvListItem title="Création / graphisme" content="Affinity Designer" link="https://affinity.serif.com/fr/designer/"/>
        <EnvListItem title="Communication" content="Slack" link="https://slack.com/intl/fr-fr/"/>
        <EnvListItem title="Communication" content="Discord" link="https://www.discord.com/"/>
        <EnvListItem title="Communication" content="Mattermost" link="https://mattermost.com/"/>
      </EnvList>
    </EnvGroup>
    <EnvGroup>
      <EnvTitle title="Hébergement">
        <svg class="inline icon"  height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      </EnvTitle>
      <EnvList>
        <EnvListItem title="Hébergeur VPS" content="PulseHeberg" link="https://pulseheberg.com/"/>
        <EnvListItem title="Nom de domaine" content="OVH" link="https://ovh.com/"/>
      </EnvList>
    </EnvGroup>
    <EnvGroup>
      <EnvTitle title="Setup bureautique">
        <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      </EnvTitle>
      <EnvList>
        <EnvListItem title="Bureau" content="Ikea en bois"/>
        <EnvListItem title="Téléphone" content="Samsung Galaxy Note 8" link="https://www.samsung.com/smartphones/galaxy-note8/"/>
        <EnvListItem title="Ordinateur fixe" content="Asus i5, 8Go Ram, GTX 950, 1To HDD"/>
        <EnvListItem title="Ecran" content="iiyama ProLite E2283HS" link="https://iiyama.com/fr_fr/produits/prolite-e2283hs-b3/"/>
        <EnvListItem title="Clavier" content="Microsoft"/>
        <EnvListItem title="Souris" content="Roccat Kova" link="https://fr.roccat.org/Mice/Kova-AIMO"/>
        <EnvListItem title="Ecouteurs" content="Apple Airpods" link="https://www.apple.com/fr/airpods/"/>
        <EnvListItem title="Casque/Micro" content="Turtle Beach px22" link="https://www.amazon.fr/Turtle-Beach-PX22-casque-gaming/dp/B00BDS415I"/>
      </EnvList>
    </EnvGroup>
  </main>
</template>

<script>
import EnvGroup from "~/components/EnvGroup.vue";
import EnvTitle from "~/components/EnvTitle.vue";
import EnvListItem from "~/components/EnvListItem.vue";
import EnvList from "~/components/EnvList.vue";
import Skill from "~/components/Skill.vue";
import Formation from "~/components/Formation.vue";
import Experience from "~/components/Experience.vue";
import PageTitle from "~/components/PageTitle";
export default {
  name: "about",
  components: {PageTitle, EnvList, EnvListItem, EnvTitle, EnvGroup, Skill, Formation, Experience},
  head() {
    return {
      title: 'About me - Arthur Danjou'
    }
  },
  data() {
    return {
      skills: [],
      experiences: [],
      formations: []
    }
  },
  async asyncData({ $axios }) {
    const {data: skills} = await $axios.get('/skills')
    const {data: experiences} = await $axios.get('experiences')
    const {data: formations} = await $axios.get('/formations')
    return {
      skills,
      experiences,
      formations
    }
  }
}
</script>

<style scoped lang="scss">
.about {
  .logo-img {
    height: 20rem;
  }
}
</style>
