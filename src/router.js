import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Countdowner from './components/Countdowner.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tweet/:uurl',
      name: 'page',
      component: Countdowner
    }
  ]
})
