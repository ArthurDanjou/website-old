<template>
  <main class="about flex flex-col items-center px-5 xl:px-64">
    <h1 class="mt-16 md:mt-32 title font-bold text-4xl mr-2 inline mb-4">
      A Propos
      <svg class="inline-block about-img" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </h1>
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
      <div class="flex flex-col items-center md:items-start md:justify-between md:flex-row flex-wrap">
        <!-- TODO Insert Skills -->
        <Skill
          skill="Java"
          color="white" />
        <Skill
          skill="JavaScript"
          color="white" />
        <Skill
          skill="Java"
          color="white" />
        <Skill
          skill="Java"
          color="white" />
        <Skill
          skill="Java"
          color="white" />
        <Skill
          skill="Java"
          color="white" />
        <Skill
          skill="Java"
          color="white" />
        <Skill
          skill="Java"
          color="white" />
        <Skill
          skill="Java"
          color="white" />
        <Skill
          skill="Java"
          color="white" />
        <Skill
          skill="Java"
          color="white" />
        <Skill
          skill="Java"
          color="white" />
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
        <!-- TODO -->
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
      <div>
        <!-- TODO Insert Formations-->
        <Formation
          title="Autodidacte"
          description="Apprentissage en autodidacte et en pratiquant"
          location="At Home 🏠"
          begin="2015"
          end="Today" />
        <Formation
          title="Baccalauréat"
          description="Examen spécialités maths & Pc"
          location="At Passy"
          begin="2020"
          end="2021" />
      </div>
    </div>
    <div class="w-full mb-10">
      <h3 class="font-bold text-2xl md:text-4xl mb-3">
        Expériences
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      </h3>
      <div>
        <!-- TODO Insert Experiences-->
        <Experience
          title="Junior Developer"
          company="Erisium"
          description="Chargé des mini-jeux et de l'infrastructure"
          location="At Home 🏠"
          begin="2019"
          end="Today" />
        <Experience
          title="FullStack Software & Web Developer"
          company="ArtDanjProduction"
          description="Création d'applications web et développement de l'infrastructure"
          location="At Home 🏠"
          begin="2019"
          end="2020" />
      </div>
    </div>
    <nuxt-link to="/cv">
      <div class="flex justify-center items-center font-bold py-4 px-6 bg-orange-300 hover:bg-orange-500 cursor-pointer duration-500 rounded-full dark:text-black">
        Télécharger mon CV
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      </div>
    </nuxt-link>
    <div class="my-10 border-t-2 border-black dark:border-white border-solid w-full" />
    <h1 class="mb-10 title font-bold text-4xl mr-2 inline mb-4">
      Environnement
      <svg class="inline icon" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    </h1>
    <p class="text-lg leading-6 text-justify pb-8">
      Mon environnement de développement permet de gagner en productivité.
      En effet, je m'organise de la sorte à toujours optimiser mon temps de réflexion et de développement.
      Voici donc une liste de tous mes logiciels que j'utilise au quotidien et de mon setup.
    </p>
    <div class="w-full mb-10">
      <h3 class="font-bold text-2xl md:text-4xl mb-2">
        Editeurs de texte
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </h3>
      <ul class="list-disc ml-10 dark:text-dark-900 text-gray-800 text-xl">
        <li>
          Editeur Java: <span>Intellij Idea Ultimate</span>
        </li>
        <li>
          Editeur Python: <span>Pycharm Ultimate</span>
        </li>
        <li>
          Editeur Web: <span>Webstorm</span>
        </li>
        <li>
          Editeur Go: <span>Goland</span>
        </li>
        <li>
          Editeur de bases de données: <span>DataGrip</span>
        </li>
        <li>
          All-In-One: <span>Jetbrains Toolbox</span>
        </li>
        <li>
          Police d'écriture: <span>Jetbrains Mono</span>
        </li>
        <li>
          Console: <span>GitBash</span>
        </li>
        <li>
          WSL 2: <span>Ubuntu 20.04</span>
        </li>
      </ul>
    </div>
    <div class="w-full mb-10">
      <h3 class="font-bold text-2xl md:text-4xl mb-2">
        Apps & Logiciels
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </h3>
      <ul class="list-disc ml-10 text-gray-800 dark:text-dark-900 text-xl">
        <li>
          Email: <span>Courrier by Microsoft</span>
        </li>
        <li>
          Client VPN: <span>Pritunl</span>
        </li>
        <li>
          Client FTP: <span>WinSCP</span>
        </li>
        <li>
          Navigateur web: <span>Intellij Idea Ultimate</span>
        </li>
        <li>
          Organisation: <span>Trello</span> & <span>Notion</span>
        </li>
        <li>
          Création / graphisme: <span>Affinity Designer</span>
        </li>
        <li>
          Communication: <span>Discord</span>, <span>Slack</span> & <span>Mattermost</span>
        </li>
      </ul>
    </div>
    <div class="w-full mb-10">
      <h3 class="font-bold text-2xl md:text-4xl mb-2">
        Hébergement
        <svg class="inline icon"  height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      </h3>
      <ul class="list-disc ml-10 text-gray-800 dark:text-dark-900 text-xl">
        <li>
          Hébergeur VPS: <span>PulseHeberg</span>
        </li>
        <li>
          Hébergeur nom de domaine: <span>OVH</span>
        </li>
      </ul>
    </div>
    <div class="w-full mb-10">
      <h3 class="font-bold text-2xl md:text-4xl mb-2">
        Setup bureautique
        <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      </h3>
      <ul class="list-disc ml-10 text-gray-800 dark:text-dark-900 text-xl">
        <li>
          Bureau: <span>Ikea en bois</span>
        </li>
        <li>
          Téléphone: <span>Samsung Galaxy Note 8</span>
        </li>
        <li>
          Ordinateur fixe: <span>Asus i5, 8Go Ram, GTX 950, 1To HDD</span>
        </li>
        <li>
          Ecran: <span>iiyama ProLite E2283HS</span>
        </li>
        <li>
          Clavier : <span>Microsoft</span>
        </li>
        <li>
          Souris: <span>Roccat Kova</span>
        </li>
        <li>
          Ecouteurs: <span>Apple Airpods</span>
        </li>
        <li>
          Casque/Micro: <span>Turtle Beach px22</span>
        </li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: "about",
}
</script>

<style scoped lang="scss">
.about {
  .about-img {
    transform: translate(3px, -10px);
  }

  .title:after {
    margin-top: 0.1rem;
    content: '';
    height: 2px;
    width: 100%;
    display: block;
    @apply bg-orange-400;
  }

  .logo-img {
    height: 20rem;
  }

}
</style>
