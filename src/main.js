import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import { router } from './router'
import App from './App.vue'
import store from './store'
import { sync } from 'vuex-router-sync'
import { USER_LOGIN } from './store/mutationTypes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as firebase from 'firebase'
import { config as firebaseConfig } from './firebase'

sync(store, router)

firebase.initializeApp(firebaseConfig)

Vue.use(VueRouter)
Vue.use(BootstrapVue)

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
