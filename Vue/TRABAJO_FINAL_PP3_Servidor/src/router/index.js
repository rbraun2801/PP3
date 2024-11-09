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
  },
  {
    path: '/modificar',
    name: 'modificar',
    component:()=> import('../views/ModificarView.vue')
  },
  {
    path:'',
    name:'',
    component:()=>import('../views/SocketView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
