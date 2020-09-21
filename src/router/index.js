import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      name: 'Home',
      redirect: '/welcome',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          component: () => import(/* webpackChunkName: "about" */ '../components/welcome.vue')
        }
      ]
    }
    // {
    //   path: '/homePage',
    //   name: 'HomePage',
    //   component: () => import(/* webpackChunkName: "about" */ '../views/HomePage.vue')
    // }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
