import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {},
  getters: {},
  modules: {
    user,
    notification
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: []
})
