import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import kids from '@/components/AppKids'
import friendship from '@/components/AppFriendship'
import landscape from '@/components/AppLandscape'
import seasons from '@/components/AppSeasons'
import concerts from '@/components/AppConcerts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Kids',
      name: 'kids',
      component: kids
    },
    {
      path: '/Friendship',
      name: 'friendship',
      component: friendship
    },
    {
      path: '/Landscape',
      name: 'landscape',
      component: landscape
    },
    {
      path: '/Seasons',
      name: 'seasons',
      component: seasons
    },
    {
      path: '/Concerts',
      name: 'concerts',
      component: concerts
    }
  ]
})
