import {GetterTree, MutationTree} from "vuex";

export const state = () => ({
  opened: false,
  route: '/'
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  opened: state => state.opened,
  route: state => state.route
}

export const mutations: MutationTree<RootState> = {
  TOGGLE_OPENED: (state, opened: boolean) => (state.opened = opened),
  SET_ROUTE: (state, route: string) => (state.route = route)
}
