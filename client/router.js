import VueRouter from 'vue-router'
import DashboardView from './views/Dashboard.vue'
import LoginView from './views/Login.vue'
import NotificationView from './views/Notification.vue'
import store from './store'

export const routes = [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'dashboard' }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/notifications',
    name: 'notification',
    component: NotificationView
  },
  {
    path: '*',
    name: 'error',
    redirect: { name: 'dashboard' }
  }
]

export const router = new VueRouter({ routes })

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // On successfull password/email auth, firebase sets the user in localStorage.
    // This is an undocumented 'feature' from firebase.
    const authUser = Object.keys(window.localStorage).filter(item => {
      return item.startsWith('firebase:authUser')
    })
    if (!authUser.length) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
