import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import kids from '@/components/AppKids'
import landscape from '@/components/AppLandscape'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/kids',
      name: 'kids',
      component: kids
    },
    {
      path: '/landscape',
      name: 'landscape',
      component: landscape
    }
  ]
})
