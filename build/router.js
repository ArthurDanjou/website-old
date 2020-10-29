import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3829e6ee = () => interopDefault(import('..\\src\\templates\\pages\\about.vue' /* webpackChunkName: "templates/pages/about" */))
const _35b3d65e = () => interopDefault(import('..\\src\\templates\\pages\\blog.vue' /* webpackChunkName: "templates/pages/blog" */))
const _12f401b6 = () => interopDefault(import('..\\src\\templates\\pages\\dev.vue' /* webpackChunkName: "templates/pages/dev" */))
const _57e1c1b3 = () => interopDefault(import('..\\src\\templates\\pages\\index.vue' /* webpackChunkName: "templates/pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3829e6ee,
    name: "about"
  }, {
    path: "/blog",
    component: _35b3d65e,
    name: "blog"
  }, {
    path: "/dev",
    component: _12f401b6,
    name: "dev"
  }, {
    path: "/",
    component: _57e1c1b3,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
