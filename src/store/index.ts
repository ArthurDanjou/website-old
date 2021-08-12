import {GetterTree, MutationTree} from "vuex";

export const state = () => ({
  opened: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  opened: state => state.opened,
}

export const mutations: MutationTree<RootState> = {
  TOGGLE_OPENED: (state, opened: boolean) => (state.opened = opened),
}
