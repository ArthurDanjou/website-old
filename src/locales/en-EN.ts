import axios from "axios";

const translations = {
  header: {
    home: 'Home',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
    projects: 'Projects',
    env: 'Tools',
    newsletter: 'Newsletter',
    services: 'Services'
  },

  sidebar: {
    close: 'Close the menu'
  },

  part: {
    about: 'About me',
    blog: 'My blog',
    projects: 'My projects',
    contact: 'Contact me',
    env: 'My environment',
    newsletter: 'My newsletter',
    services: 'My services'
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
    description: 'Développeur Web et Logiciel, mais également étudiant en Mathématiques et en Physique. Je développe des sites internet',
    links: 'Quick links',
    credits: 'Developed with',
    credits_separator: 'and',
    copyrights: '© {date} Arthur Danjou - All rights reserved'
  },

  error: {
    back: 'Go back',
    no_page: 'The page you are looking for does not exist',
    internal: 'Internal error',
    error: 'Error'
  },

  home: {
    about: {
      title: 'Who am I ?',
      about: 'Discover my profile',
      description: 'I am a {age} year old self-taught developer. I live in Paris 🇫🇷. I love to create more or less useful applications and software. I use modern technologies to get the best possible result ✨',
    },
    banner: {
      role: 'Web and Software Developer',
      hello: 'Hello, I am',
      student: {
        main: 'but also',
        strong: 'student'
      },
      color: {
        develop: 'Develop.',
        publish: 'Publish.',
        improve: 'Improve.'
      }
    },
    ad: {
      env: {
        title: 'How do I work?',
        description: 'Come discover my development environment.'
      },
      contact: {
        title: 'You have a project?',
        description: 'Contact me by detailing your project to start our collaboration.'
      }
    }
  },

  blog: {
    latest: 'Latest articles',
    read: {
      back: 'Go back',
      thanks: 'Thanks for reading to the end!',
      time: 'Reading'
    },
    description: 'I write articles about my life, development and my passions.',
    tweet: 'I love a new post from @ArthurDanj, check it out here:',
    no_posts: 'Unfortunately there are no items available yet. Come back later 😉',
    see_more: 'See more articles',
    pagination: {
      prev: 'Previous',
      next: 'Next'
    }
  },

  about: {
    banner: {
      hello: 'Hello, I am',
      1: 'I am a young creative developer who loves to tinker and touch everything! I am very interested in new technologies, development and IT.',
      2: 'I love sharing my knowledge and helping others through lives on Twitchs, technical articles on my blog, open-source projects or by reviewing community code. As long as I share my passions, I will continue to do this.',
      3: 'I am able to quickly learn new technologies to meet the needs of different projects. I often identify the need for new systems or tools to improve workflow efficiency. I am always motivated by a challenge and like to be well organized to produce consistent results.',
      4: 'En parallèle du développement, je suis étudiant en Mathématiques et en Physique dans la faculté des Sciences Paris-Saclay. De plus, je suis un grand fan de moto.'
    },
    title: {
      skills: 'Skills',
      interests: 'Interests',
      technologies: 'Technologies',
      languages: 'Languages',
      formations: 'Formations',
      experiences: 'Experiences'
    },
    interests: {
      dev: 'Development',
      devops: 'DevOps',
      startups: 'Startups & innovative companies',
      sysadmin: 'System administration',
      trips: 'Trip',
      moto: 'Motorbike',
      cloud: 'Cloud Computing',
      maths: 'Mathematics'
    },
    languages: {
      fr: 'French',
      en: 'English',
      native: 'Native',
      fluent: 'Fluent'
    },
    cv: 'Download my CV'
  },

  env: {
    title: {
      description: 'My development environment makes it possible to gain in productivity. Indeed, I organize myself in this way to always optimize my time for reflection and development. Here is a list of all my software that I use on a daily basis and my setup.',
      ide: 'Text editors',
      apps: 'Apps & Softwares',
      hosting: 'Hosting & Co',
      setup: 'Office setup'
    },
    ide: {
      java: 'Java editor',
      web: 'Web editor',
      go: 'Go editor',
      db: 'Databases editor',
      all: 'All-In-One'
    },
    police: 'Font',
    console: 'Console',
    wsl_2: 'WSL 2',
    calendar: 'Calendar',
    shell: 'Unix Shell',
    email_client: 'Email Client',
    vpn_client: 'VPN Client',
    ftp_client: 'FTP Client',
    web_client: 'Web Browser',
    design_tool: 'Creation / Graphics',
    communication_tool: 'Communication tool',
    organisation_tool: 'Organisation tool',
    hosting: {
      cloud: 'Cloud Hosting',
      ndd: 'Domain name'
    },
    setup: {
      desk: 'Desktop',
      phone: 'Phone',
      computer: 'Computer',
      headphone: 'Headphone',
    }
  },

  projects: {
    no_project: 'Unfortunately there are no projects available yet. Come back later 😉',
    description: 'Here are the different projects in which I have been able to participate in my life as a developer!',
    latest: 'Latest projects',
    see_more: 'See more projects'
  },

  contact: {
    form: {
      title: {
        main: 'Fill in the form',
        email: 'Send an email'
      },
      name: 'What is your name?',
      email: 'What is your Email?',
      subject: 'Why are you contacting me?',
      content: 'Tell me about your project',
      submit: 'Submit',
      error: 'Error while sending the form ❌',
      success: 'Thank you for your message 😉'
    },
    why: {
      title: 'Why contact me ? 📩',
      description: "Please don't hesitate to contact me if you have any questions, think we could work together or if you just want to chat ✌️"
    }
  },

  newsletter: {
    description: 'My newsletter provides a behind-the-scenes look into what I\'m working on and writing about. I frequently share some of my favorite articles I\'ve read, as well as anything fascinating about technology.',
    title: 'Subscribe to my newsletter',
    subtitle: 'Get emails from me about web development, tech, and early access to new articles.',
    placeholder: 'elon@tesla.com',
    subscribe: 'Subscribe',
    error: 'Error during your subscription ❌',
    success: 'Thank you for your subscription 😉',
    count: '{count} subscriber(s)',
    infos: 'Your information is only used to receive new emails from me.',
    no_spam: 'No spam.',
    exist: "The email address is already subscribed 👍"
  },

  date: {
    today: 'Today'
  },

  copied: 'Copied',

  month: {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  },

  works: {
    athena: 'Athena is my personal API connected to my various instances',
    ares: 'Ares is my personal website creating a single point of contact',
    erisium: 'Erisium is a french minecraft mini-game server.',
    linkyjs: 'LinkyJS is my custom and Open-Source url shortener'
  },

  loading: 'Loading...'
}

export default async function () {
  let informations = {}
  const response = await axios.get('https://athena.arthurdanjou.fr/translations', {
    headers: {
      authorization: `Bearer ${process.env.API_TOKEN}`
    }
  })
  response.data.translations.map(({ code, english }: any) => {
    informations = { ...informations, [code]: english }
  })

  return {
    ...informations,
    ...translations
  }
}
