import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHome from '@/components/AppHome.vue'
import AppLogin from '@/components/AppLogin.vue'
import AppContact from '@/components/AppContact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AppHome',
    component: AppHome
  },
  {
    path: '/login',
    name: 'AppLogin',
    component: AppLogin
  },
  {
    path: '/contact',
    name: 'AppContact',
    component: AppContact
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
