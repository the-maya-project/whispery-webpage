import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Post from '@/components/Post'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Feed from '@/components/Feed'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: SignUp
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
      data: {
        title: 'Feed Page'
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/post',
      name: 'Post',
      component: Post,
      data: {
        title: 'Post Page'
      },
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
    next('login')
  } else if (!requiresAuth && currentUser) {
    console.log('else if ' + currentUser)
    next('home')
  } else {
    next()
  }
})

export default router
