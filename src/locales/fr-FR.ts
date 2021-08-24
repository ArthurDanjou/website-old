import axios from "axios";

const translations = {
  header: {
    home: 'Accueil',
    about: 'A Propos',
    blog: 'Blog',
    contact: 'Contact',
    projects: 'Projets',
    env: 'Outils',
    newsletter: 'Newsletter',
    services: 'Services'
  },

  sidebar: {
    close: 'Fermer le menu'
  },

  part: {
    about: 'A propos',
    contact: 'Me contacter',
    projects: 'Mes projets',
    blog: 'Mon blog',
    env: 'Mon environnement',
    newsletter: 'Ma newsletter',
    services: 'Mes services'
  },

  services: {
    description: 'Je fourni tout ce dont vous avez besoin pour créer votre site internet parfait',
    1: {
      title: "Développement d'application",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate quam vel maximus pulvinar. Aliquam vitae risus at sem varius pulvinar. Vivamus pulvinar tortor sit amet condimentum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse finibus, metus eu dictum aliquet, tellus libero aliquam libero, eu lacinia dui mauris congue dolor. Nunc a lacinia ligula. Mauris bibendum orci eget pretium consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus porttitor finibus odio.'
    },
    2: {
      title: "Installation d'infrastructure",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate quam vel maximus pulvinar. Aliquam vitae risus at sem varius pulvinar. Vivamus pulvinar tortor sit amet condimentum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse finibus, metus eu dictum aliquet, tellus libero aliquam libero, eu lacinia dui mauris congue dolor. Nunc a lacinia ligula. Mauris bibendum orci eget pretium consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus porttitor finibus odio.'
    },
    3: {
      title: "Conseil dans l'informatique",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate quam vel maximus pulvinar. Aliquam vitae risus at sem varius pulvinar. Vivamus pulvinar tortor sit amet condimentum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse finibus, metus eu dictum aliquet, tellus libero aliquam libero, eu lacinia dui mauris congue dolor. Nunc a lacinia ligula. Mauris bibendum orci eget pretium consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus porttitor finibus odio.'
    },
    4: {
      title: "Revue de vos applications",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate quam vel maximus pulvinar. Aliquam vitae risus at sem varius pulvinar. Vivamus pulvinar tortor sit amet condimentum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse finibus, metus eu dictum aliquet, tellus libero aliquam libero, eu lacinia dui mauris congue dolor. Nunc a lacinia ligula. Mauris bibendum orci eget pretium consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus porttitor finibus odio.'
    },
  },

  footer: {
    description: "Développeur Web et Logiciel, mais aussi étudiant en Mathématiques et Physique 🎓. J'habite à Paris 🇫🇷. J'adore créer des applications et des logiciels plus ou moins utiles 🛍. J'utilise les technologies modernes pour obtenir le meilleur résultat possible ✨ J'adore également contribuer à tous types de projets Open-Source 🧪",
    links: 'Liens rapides',
    credits: 'Développé avec',
    credits_separator: 'et',
    copyrights: '© {date} Arthur Danjou - Tous droits réservés'
  },

  error: {
    back: 'Revenir en arriere',
    no_page: "La page demandée n'existe pas",
    internal: 'Erreur interne',
    error: 'Erreur'
  },

  home: {
    about: {
      title: 'Qui suis-je ?',
      about: 'Découvrir mon profil',
      description: "Je suis un jeune développeur autodidacte de {age} ans. J'habite à Paris 🇫🇷. J'adore créer des applications et des logiciels plus ou moins utiles. J'utilise des technologies modernes pour obtenir le meilleur résultat possible ✨",
    },
    banner: {
      role: 'Développeur Web et Logiciel',
      hello: 'Bonjour, je suis',
      student: {
        main: 'Mais également',
        strong: 'étudiant'
      },
      color: {
        develop: 'Développer.',
        publish: 'Publier.',
        improve: 'Améliorer.'
      }
    },
    ad: {
      env: {
        title: 'Comment je travaille ?',
        description: 'Venez découvrir mon environnement de développement.'
      },
      contact: {
        title: 'Vous avez un projet ?',
        description: 'Contactez moi en détaillant votre projet pour débuter notre collaboration.'
      }
    }
  },

  blog: {
    latest: 'Derniers articles',
    read: {
      back: 'Retour en arrière',
      thanks: "Merci d'avoir lu jusqu'au bout !",
      time: 'Lecture'
    },
    description: 'Je rédige des articles concernant ma vie, le développement et mes passions.',
    tweet: "J'aime un nouvel article d'@ArthurDanj, venez le découvrir ici  :",
    no_posts: "Malheureusement il n'y a pas encore d'articles disponibles. Reviens plus tard 😉",
    see_more: "Voir plus d'articles",
    pagination: {
      prev: 'Précédent',
      next: 'Suivant'
    }
  },

  about: {
    banner: {
      hello: 'Bonjour, je suis',
      1: "Je suis un jeune développeur créatif qui aime bricoler et toucher à tout ! Je m'intéresse beaucoup aux nouvelles technologies, au développement et à l'informatique.",
      2: "J'adore partager mes connaissances et aider les autres à travers des lives sur Twitchs, des articles techniques sur mon blog, des projets open-sources ou encore en relisant du code de la communauté. Tant que je partage mes passions, je continuerai à faire ça.",
      3: "Je suis capable d'apprendre rapidement des nouvelles technologies pour répondre aux besoins des différents projets. J\'identifie souvent le besoin de nouveaux systèmes ou outils pour améliorer l'efficacité du flux de travail. Je suis toujours motivé par un défi et j'aime être bien organisé pour produire des résultats cohérents.",
      4: 'En parallèle du développement, je suis étudiant en Mathématiques et en Physique dans la faculté des Sciences Paris-Saclay. De plus, je suis un grand fan de moto.'
    },
    title: {
      skills: 'Compétences',
      interests: 'Intérêts',
      technologies: 'Technologies',
      languages: 'Langues',
      formations: 'Formations',
      experiences: 'Expériences'
    },
    interests: {
      dev: 'Développement',
      devops: 'DevOps',
      startups: 'Startups & Entreprises innovantes',
      sysadmin: 'Administration système',
      trips: 'Voyage',
      moto: 'Moto',
      cloud: 'Cloud Computing',
      maths: 'Mathématiques'
    },
    languages: {
      fr: 'Français',
      en: 'Anglais',
      native: 'Natal',
      fluent: 'Courant'
    },
    cv: 'Télécharger mon CV'
  },

  env: {
    title: {
      description: "Mon environnement de développement permet de gagner en productivité. En effet, je m'organise de la sorte à toujours optimiser mon temps de réflexion et de développement. Voici donc une liste de tous mes logiciels que j'utilise au quotidien et de mon setup.",
      ide: 'Editeurs de texte',
      apps: 'Apps & Logiciels',
      hosting: 'Hébergement',
      setup: 'Setup bureautique'
    },
    ide: {
      java: 'Editeur Java',
      web: 'Editeur Web',
      go: 'Editeur Go',
      db: 'Editeur Bases de données',
      all: 'All-In-One'
    },
    police: "Police d'Ecriture",
    console: 'Console',
    wsl_2: 'WSL 2',
    calendar: 'Calendrier',
    shell: 'Shell Unix',
    email_client: 'Client Email',
    vpn_client: 'Client VPN',
    ftp_client: 'Client FTP',
    web_client: 'Navigateur Web',
    design_tool: 'Création / Graphisme',
    communication_tool: 'Outil de Communication',
    organisation_tool: "Outil d'Organisation",
    hosting: {
      cloud: 'Hébergeur Cloud',
      ndd: 'Nom de domaine'
    },
    setup: {
      desk: 'Bureau',
      phone: 'Téléphone',
      computer: 'Ordinateur',
      headphone: 'Ecouteurs',
    }
  },

  projects: {
    no_project: 'Malheureusement il n\'y a pas encore de projets disponibles. Reviens plus tard 😉',
    description: "Voici les différents projets auxquels j'ai pu participer dans ma vie de développeur !",
    latest: 'Derniers projets',
    see_more: 'Voir plus de projets'
  },

  contact: {
    form: {
      title: {
        main: 'Remplissez le formulaire ou',
        email: 'Envoyer un email'
      },
      name: 'Quel est votre prénom ?',
      email: 'Quelle est votre adresse mail ?',
      subject: 'Pourquoi me contactez-vous ?',
      content: 'Racontez moi votre projet',
      submit: 'Envoyer',
      error: "Erreur lors de l'envoi du formulaire ❌",
      success: 'Merci pour votre message 😉'
    },
    why: {
      title: 'Pourquoi me contacter ? 📩',
      description: "N'hésitez pas à me contacter si vous avez des questions, pensez que nous pourrions travailler ensemble ou si vous souhaitez simplement discuter ✌️"
    }
  },

  newsletter: {
    description: 'Ma newsletter fournit un aperçu des coulisses de ce sur quoi je travaille et sur quoi j\'écris. Je partage fréquemment certains de mes articles préférés que j\'ai lus, ainsi que tout ce qui est fascinant sur la technologie.',
    title: 'Abonnez-vous à ma newsletter',
    subtitle: "Recevez des e-mails de ma part sur le développement Web, la technologie et l'accès anticipé aux nouveaux articles.",
    placeholder: 'elon@tesla.com',
    subscribe: "S'abonner",
    error: "Erreur lors de votre abonnement ❌",
    success: 'Merci pour votre abonnement 😉',
    count: '{count} abonné(s)',
    infos: 'Vos informations ne sont utilisées uniquement pour recevoir de nouveaux mails de ma part.',
    no_spam: 'Pas de spam.',
    exist: "L'adresse email est déjà abonnée 👍"
  },

  date: {
    today: "Aujourd'hui"
  },

  copied: 'Copié',

  month: {
    '01': 'Janvier',
    '02': 'Février',
    '03': 'Mars',
    '04': 'Avril',
    '05': 'Mai',
    '06': 'Juin',
    '07': 'Juillet',
    '08': 'Août',
    '09': 'Septembre',
    10: 'Octobre',
    11: 'Novembre',
    12: 'Décembre',
  },

  works: {
    athena: 'Athena est mon API personnelle connectée à mes diverses instances.',
    ares: 'Ares est mon site personnel créant un point de contact unique.',
    erisium: 'Erisium est un serveur minecraft francophone de mini-jeux.',
    linkyjs: "LinkyJS est mon raccourcisseur d'url personnalisé et Open-Source."
  },

  loading: 'Chargement...',

  maintenance: {
    back_soon: "Nous serons de retour bientôt...",
    title: 'Site en maintenance !',
    progress: "Pour suivre l'avancée : ",
    separator: 'ou'
  }
}

export default async function () {
  let informations = {}
  const response = await axios.get('https://athena.arthurdanjou.fr/translations', {
    headers: {
      authorization: `Bearer ${process.env.API_TOKEN}`
    }
  })
  response.data.translations.map(({ code, french }: any) => {
    informations = { ...informations, [code]: french }
  })

  return {
    ...informations,
    ...translations
  }
}
