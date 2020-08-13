import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ejemploBasico from '../components/Mapa-basico/Mapa-basico.vue'
import ejemploFiguras from '../components/Figuras/Figuras.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mapa-basico',
    name: 'mapa-basico',
    component: ejemploBasico
  },
  {
    path: '/figuras',
    name: 'figuras',
    component: ejemploFiguras
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
