interface Form {
  email: string,
  name: string,
  content: string,
  subject: string
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

interface NewsletterForm {
  email: string
}

interface State {
  opened: boolean,
  route: string,
  email: string
}

export { Form, Post, Tag, NewsletterForm, State }
