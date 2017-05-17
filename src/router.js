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
    component: DashboardView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

export const router = new VueRouter({ routes })
