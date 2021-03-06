import accountApi from '@/api/account'

export default {
  state: {
    user: '123',
    token: 1234
  },
  getters: {
    user: state => state.user,
    token: state => state.token
  },
  actions: {
    fetchUser ({state, commit}, callback) {
      state.user
        ? callback && callback()
        : accountApi.getUser(
          res => {
            commit('setUser', res.user)
            callback && callback()
          }
        )
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
    }
  }
}
