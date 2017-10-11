import Vue from 'vue'
import Router from 'vue-router'
import Question from '@/components/MainPage'
import User from '@/components/User'
import Index from '@/components/Index'
import DetailQuestion from '@/components/DetailQuestion'
import Threads from '@/components/Threads'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/questions',
      component: Question,
      children: [
        {path: '', name: 'questions', component: Threads},
        {path: ':threadId', component: DetailQuestion, props: true}
      ]
    }, {
      path: '/users',
      name: 'User',
      component: User
    }
  ]
})
