export { default as Footer } from '../..\\src\\components\\Footer.vue'
export { default as Header } from '../..\\src\\components\\Header.vue'
export { default as HomePost } from '../..\\src\\components\\HomePost.vue'
export { default as Post } from '../..\\src\\components\\Post.vue'

export const LazyFooter = import('../..\\src\\components\\Footer.vue' /* webpackChunkName: "components_Footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\src\\components\\Header.vue' /* webpackChunkName: "components_Header" */).then(c => c.default || c)
export const LazyHomePost = import('../..\\src\\components\\HomePost.vue' /* webpackChunkName: "components_HomePost" */).then(c => c.default || c)
export const LazyPost = import('../..\\src\\components\\Post.vue' /* webpackChunkName: "components_Post" */).then(c => c.default || c)
