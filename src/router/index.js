import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/User_analytics')
  },
  {
    path: '/user_analytics',
    name: 'user_analytics',
    component: () => import('../components/User_analytics')
  },
  {
    path: '/global_analytics',
    name: 'global_analytics',
    component: () => import('../components/Global_analytics')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/LoginComponent')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router