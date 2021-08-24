import {GetterTree, MutationTree} from "vuex";

export const state = () => ({
  opened: false,
  route: '/',
  email: ''
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  opened: state => state.opened,
  route: state => state.route,
  email: state => state.email
}

export const mutations: MutationTree<RootState> = {
  TOGGLE_OPENED: (state, opened: boolean) => (state.opened = opened),
  SET_ROUTE: (state, route: string) => (state.route = route),
  SET_EMAIL: (state, email: string) => (state.email = email)
}
