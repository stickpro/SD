export const state = () => ({
  menu: false,
  modal: false
})

export const getters = {
  menu(state) {
    return state.menu
  },
  modal(state) {
    return state.modal
  }
}

export const mutations = {
  toggleMenu(state) {
    state.menu = !state.menu
  },
  toggleModal(state) {
    state.modal = ! state.modal
  }
}
