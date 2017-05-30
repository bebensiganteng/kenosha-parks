import * as types from '../mutationTypes'
import { auth } from 'firebase'
import { router } from '../../router'

const state = {
  principle: null,
  email: '',
  password: '',
  loginError: null
}

const getters = {
  authenticated ({ principle }) {
    return state.principle !== null && Object.keys(principle).length !== 0
  }
}

const actions = {
  login ({ commit }) {
    auth().signInWithEmailAndPassword(state.email, state.password)
      .catch(({ message }) => {
        commit(types.LOGIN_ERROR, message)
      })
  },
  logout ({ commit }) {
    auth().signOut()
      .then(() => {
        commit(types.USER_LOGOUT)
      })
      .catch(({ message }) => {
        commit(types.LOGOUT_ERROR, message)
      })
  }
}

const mutations = {
  [types.USER_LOGIN] (state, user) {
    state.principle = Object.assign({}, user)
    state.email = ''
    state.password = ''
    state.loginError = null
    router.push({ name: 'dashboard' })
  },
  [types.USER_LOGOUT] (state) {
    state.principle = null
    state.loginError = null
    router.push({ name: 'login' })
  },
  [types.EMAIL_INPUT_CHANGE] (state, email) {
    state.email = email
  },
  [types.PASSWORD_INPUT_CHANGE] (state, password) {
    state.password = password
  },
  [types.LOGIN_ERROR] (state, message) {
    state.loginError = message
    state.email = ''
    state.password = ''
  },
  [types.LOGOUT_ERROR] (state, message) {
    state.loginError = message
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
