import * as types from '../mutationTypes'
import { auth } from 'firebase'
import { router } from '../../router'

const state = {
  principle: null,
  email: '',
  password: '',
  loginError: {}
}

const getters = {
  authenticated (state) {
    return state.principle !== null
  }
}

const actions = {
  login ({ commit }) {
    auth().signInWithEmailAndPassword(state.email, state.password)
      .catch(error => {
        commit(types.LOGIN_ERROR, error)
      })
  },
  logout ({ commit }) {
    auth().signOut()
      .then(() => {
        commit(types.USER_LOGOUT)
      })
      .catch((error) => {
        throw error
      })
  }
}

const mutations = {
  [types.USER_LOGIN] (state, user) {
    state.principle = user
    router.push('/dashboard')
  },
  [types.USER_LOGOUT] (state) {
    state.principle = null
  },
  [types.EMAIL_INPUT_CHANGE] (state, email) {
    state.email = email
  },
  [types.PASSWORD_INPUT_CHANGE] (state, password) {
    state.password = password
  },
  [types.LOGIN_ERROR] (state, error) {
    state.error = error
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
