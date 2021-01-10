import {set} from '@/utilits/vuex'

export const state = () => ({
  portfolios: [],
  portfolio: {},
})

export const getters = {
  getPortfolios(state) {
    return state.portfolios
  },
  getPortfolio(state) {
    return state.portfolio
  }
}

export const mutations = {
  SET_PORTFOLIOS: set('portfolios'),
  SET_PORTFOLIO: set('portfolio'),
  SET_IMAGE_VISIBLE: (state, data) => {
      state.portfolio.images[data.index].visible = data.isVisible
  }
}

export const actions = {
  async loadPortfolios({commit}, params) {
    const {data} = await this.$axios.$get('/api/portfolios', params)
    commit('SET_PORTFOLIOS', data)
  },
  async loadPortfolio({commit}, slug) {
    await this.$axios.$get(`/api/portfolios/${slug}`).then(response => {
      response.data.images.map(item => {
         return item.visible = false
      }),
      commit('SET_PORTFOLIO', response.data)
    })

  }
}
