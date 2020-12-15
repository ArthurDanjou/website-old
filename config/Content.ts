export default {
  apiPrefix: 'api',
  nestedProperties: ['categories.slug'],
  markdown: {
    prism: {
      theme: 'prism-themes/themes/prism-darcula.css'
    },
    remarkPlugins: [
      'remark-squeeze-paragraphs',
      'remark-slug',
      'remark-autolink-headings',
      'remark-external-links',
      'remark-footnotes',
    ],
  }
}
