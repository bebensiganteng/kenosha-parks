import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from './router'
import App from './App.vue'
import store from './store'
import { sync } from 'vuex-router-sync'
import { USER_LOGIN } from './store/mutationTypes'
import * as firebase from 'firebase'
import { config as firebaseConfig } from './firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

sync(store, router)

firebase.initializeApp(firebaseConfig)

Vue.use(VueRouter)
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeCreate () {
    firebase.auth().onAuthStateChanged(user => {
      store.commit(USER_LOGIN, user)
    })
  }
})
