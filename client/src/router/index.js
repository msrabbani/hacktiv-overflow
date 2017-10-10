import Vue from 'vue'
import Router from 'vue-router'
import FormThreads from '@/components/FormThread'
import FormUsers from '@/components/FormUsers'
import Signin from '@/components/Signin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/users',
      name: 'Users',
      component: FormUsers
    }, {
      path: '/threads',
      name: 'Threads',
      component: FormThreads
    }
  ]
})
