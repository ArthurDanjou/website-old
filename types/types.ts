interface Form {
  email: string,
  name: string,
  content: string,
  subject: string
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

interface Tag {
  slug: string
}

interface Post {
  slug: string,
  title: string,
  description: string,
  reading_time: number,
  tags: Array<Tag>,
  cover: string,
  date: string
}

interface Project {
  slug: string,
  title: string,
  description: string,
  url: string,
  cover: string,
  tags: Array<Tag>,
}

interface GuestbookForm {
  message: string
}

interface NewsletterForm {
  email: string
}

export { Form, InfoData, Skill, Experience, Formation, Post, Tag, Project, GuestbookForm, NewsletterForm }
