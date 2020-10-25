export { default as Footer } from '../..\\src\\components\\Footer.vue'
export { default as GoToTop } from '../..\\src\\components\\GoToTop.vue'
export { default as Header } from '../..\\src\\components\\Header.vue'
export { default as LangSwitcher } from '../..\\src\\components\\LangSwitcher.vue'

export const LazyFooter = import('../..\\src\\components\\Footer.vue' /* webpackChunkName: "components_Footer" */).then(c => c.default || c)
export const LazyGoToTop = import('../..\\src\\components\\GoToTop.vue' /* webpackChunkName: "components_GoToTop" */).then(c => c.default || c)
export const LazyHeader = import('../..\\src\\components\\Header.vue' /* webpackChunkName: "components_Header" */).then(c => c.default || c)
export const LazyLangSwitcher = import('../..\\src\\components\\LangSwitcher.vue' /* webpackChunkName: "components_LangSwitcher" */).then(c => c.default || c)
