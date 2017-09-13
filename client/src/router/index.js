import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FormQuestions from '@/components/FormQuestions'
import FormUsers from '@/components/FormUsers'
import Signin from '@/components/Signin'

Vue.use(Router)

export default new Router({
  mode: 'history', // HTML5 history mode, The default mode for vue-router is hash mode
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/questions',
      name: 'questions',
      component: FormQuestions
    }, {
      path: '/users',
      name: 'Users',
      component: FormUsers
    }, {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})
