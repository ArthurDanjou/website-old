<template>
  <main class="about flex flex-col items-center mt-16 md:mt-32 px-5 xl:px-64">
    <h1 class="title font-bold text-4xl mr-2 inline mb-4">
      A Propos
      <img class="inline about-img" src="@/assets/img/sections/profile.svg" height="40" width="40" alt="Blog Logo" />
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
      <h3 class="font-bold text-2xl md:text-4xl">
        Compétences Techniques
        <img class="inline skill-img" src="@/assets/img/about/wrench.svg" alt="Skills logo" height="32" width="32"/>
      </h3>
      <div>
        <!-- TODO -->
        TODO Insert Skills
      </div>
    </div>
    <div class="w-full mb-10">
      <h3 class="font-bold text-2xl md:text-4xl">
        Intérêts
        <img class="inline interest-img" src="@/assets/img/about/fire.svg" alt="Interests logo" height="32" width="32"/>
      </h3>
      <div>
        <!-- TODO -->
        <ul class="text-xl">
          <li class="my-2">
            Technologies
            <img class="inline" src="@/assets/img/about/cpu.svg" alt="Dev icon" height="25" width="25" />
          </li>
          <li class="my-2">
            Développement
            <img class="inline" src="@/assets/img/about/code.svg" alt="Dev icon" height="25" width="25" />
          </li>
          <li class="my-2">
            DevOps
            <img class="inline" src="@/assets/img/about/infinite.svg" alt="Dev icon" height="25" width="25" />
          </li>
          <li class="my-2">
            Startups & Entreprises innovantes
            <img class="inline" src="@/assets/img/about/rocket.svg" alt="Dev icon" height="25" width="25" />
          </li>
          <li class="my-2">
            Voyage
            <img class="inline" src="@/assets/img/about/airplane.svg" alt="Dev icon" height="25" width="25" />
          </li>
          <li class="my-2">
            Moto
            <img class="inline" src="@/assets/img/about/motorbike.svg" alt="Dev icon" height="25" width="25" />
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full mb-10">
      <h3 class="font-bold text-2xl md:text-4xl">
        Langues
        <img class="inline interest-img" src="@/assets/img/about/translation.svg" alt="Languages logo" height="32" width="32"/>
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
      <h3 class="font-bold text-2xl md:text-4xl">
        Formation
        <img class="inline formation-img" src="@/assets/img/about/formation.svg" alt="Formations logo" height="32" width="32"/>
      </h3>
      <div>
        <!-- TODO -->
        TODO Insert Formations
      </div>
    </div>
    <div class="w-full mb-10">
      <h3 class="font-bold text-2xl md:text-4xl">
        Expériences
        <img class="inline experience-img" src="@/assets/img/about/experience.svg" alt="Experience logo" height="32" width="32"/>
      </h3>
      <div>
        <!-- TODO -->
        TODO Insert Experiences
      </div>
    </div>
    <nuxt-link to="/cv">
      <div class="flex justify-center items-center font-bold py-4 px-6 bg-orange-300 hover:bg-orange-500 cursor-pointer duration-500 rounded-full">
        Télécharger mon CV
        <img class="inline experience-img" src="@/assets/img/about/cv.svg" alt="Experience logo" height="32" width="32"/>
      </div>
    </nuxt-link>
    <div class="my-10 border-t-2 border-black border-solid w-full" />
    <h1 class="mb-10 title font-bold text-4xl mr-2 inline mb-4">
      Environnement
      <img class="inline about-img" src="@/assets/img/about/tree.svg" height="40" width="40" alt="Environment Logo" />
    </h1>
    <p class="text-lg leading-6 text-justify pb-8">
      Mon environnement de développement permet de gagner en productivité.
      En effet, je m'organise de la sorte à toujours optimiser mon temps de réflexion et de développement.
      Voici donc une liste de tous mes logiciels que j'utilise au quotidien et de mon setup.
    </p>
    <div class="w-full mb-10">
      <h3 class="font-bold text-2xl md:text-4xl mb-2">
        Editeurs de texte
        <img class="inline experience-img" src="@/assets/img/about/code.svg" alt="Editor logo" height="32" width="32"/>
      </h3>
      <ul class="list-disc ml-10 text-gray-800">
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
        <img class="inline experience-img" src="@/assets/img/about/software.svg" alt="Software logo" height="32" width="32"/>
      </h3>
      <ul class="list-disc ml-10 text-gray-800">
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
          Création / graphimde: <span>Affinity Designer</span>
        </li>
        <li>
          Communication: <span>Discord</span>, <span>Slack</span> & <span>Mattermost</span>
        </li>
      </ul>
    </div>
    <div class="w-full mb-10">
      <h3 class="font-bold text-2xl md:text-4xl mb-2">
        Hébergement
        <img class="inline-block experience-img" src="@/assets/img/about/server.svg" alt="Server logo" height="32" width="32"/>
      </h3>
      <ul class="list-disc ml-10 text-gray-800">
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
        <img class="inline experience-img" src="@/assets/img/about/lamp.svg" alt="Desktop logo" height="32" width="32"/>
      </h3>
      <ul class="list-disc ml-10 text-gray-800">
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
name: "about"
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

  .skill-img {
    transform: translate(3px, -5px);
  }

  .interest-img {
    transform: translate(3px, -5px);
  }

  .formation-img {
    transform: translate(3px, 0);
  }

  .experience-img {
    transform: translate(3px, -3px);
  }

}
</style>
