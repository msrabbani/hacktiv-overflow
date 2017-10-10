import Vue from 'vue'
import Router from 'vue-router'
import Mainpage from '@/components/MainPage'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Mainpage
    }, {
      path: '/users',
      name: 'User',
      component: User
    }
  ]
})
