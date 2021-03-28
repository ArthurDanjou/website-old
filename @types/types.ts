interface FormData {
  email: string,
  name: string
}

interface InfoData {
  age: number
  hiring: {
    status: string,
    color: string
  }
}

interface Skill {
  title: string,
  color: string,
  cover: string,
  slug: string
}

interface Experience {
  slug: string,
  title: string,
  company: string,
  location: string,
  begin_date: string,
  end_date: string
}

interface Formation {
  slug: string,
  title: string,
  description: string,
  location: string,
  begin_date: string,
  end_date: string
}


export { FormData, InfoData, Skill, Experience, Formation }
