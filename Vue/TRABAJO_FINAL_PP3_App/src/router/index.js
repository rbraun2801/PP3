/* eslint-disable */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component:()=> import ('../views/HomeView.vue')
  },
  {
    path: '/cliente',
    name: 'cliente',
    component:()=> import ('../views/ClienteView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
