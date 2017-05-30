import * as types from '../mutationTypes'
import axios from 'axios'

const state = {
  title: '',
  message: '',
  response: null,
  error: null
}

const actions = {
  async sendNotification ({ state, commit, rootState }) {
    try {
      let response = await axios.post('/api/notification')
      commit(types.NOTIFICATION_SUCCESS, response)
    } catch (error) {
      commit(types.NOTIFICATION_ERROR, error)
    }
  }
}

const mutations = {
  [types.TITLE_INPUT_CHANGE] (state, title) {
    state.title = title
  },
  [types.MESSAGE_INPUT_CHANGE] (state, message) {
    state.message = message
  },
  [types.NOTIFICATION_ERROR] (state, error) {
    state.error = error
  },
  [types.NOTIFICATION_SUCCESS] (state, response) {
    state.title = ''
    state.message = ''
    state.response = response
  }
}

export default {
  state,
  actions,
  mutations
}
