import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Countdowner from './components/Countdowner.vue'
import Helper from './components/Helper.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/help',
      name: 'help',
      component: Helper
    },
    {
      path: '/tweet/:uurl',
      name: 'page',
      component: Countdowner
    }
  ]
})
