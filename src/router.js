import VueRouter from 'vue-router'
import DashboardView from './views/Dashboard.vue'
import LoginView from './views/Login.vue'

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
  }
]

export const router = new VueRouter({ routes })

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!window.localStorage.getItem('user')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      // User token exists, check if token is expired.

      // Valid token, attempt login
      next()
    }
  } else {
    next()
  }
})
