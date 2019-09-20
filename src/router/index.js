import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Feed from '@/components/Feed'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  // To allow more readable URL paths (/path) instead of default (/#/path)
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/feed'
    },
    {
      path: '/',
      redirect: '/feed'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    console.log(currentUser)
    next('/login')
  } else if (requiresAuth && currentUser) {
    console.log('else if ' + currentUser)
    next()
  } else {
    console.log('else')
    next()
  }
})

export default router
