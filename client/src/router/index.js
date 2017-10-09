import Vue from 'vue'
import Router from 'vue-router'
import FormThreads from '@/components/FormThread'
import FormUsers from '@/components/FormUsers'
import Signin from '@/components/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/threads',
      name: 'Threads',
      component: FormThreads
    }, {
      path: '/users',
      name: 'Users',
      component: FormUsers
    }, {
      path: '/',
      name: 'Signin',
      component: Signin
    }
  ]
})
