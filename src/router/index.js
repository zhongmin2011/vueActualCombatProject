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
      // redirect: '/welcome',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          component: () => import(/* webpackChunkName: "about" */ '../components/welcome.vue')
        },
        {
          path: '/users',
          name: 'users',
          component: () => import(/* webpackChunkName: "about" */ '../components/users.vue')
        }
      ]
    },
    {
      path: '/role',
      name: 'role',
      redirect: '/roles',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      children: [
        {
          path: '/roles',
          name: 'roles',
          component: () => import(/* webpackChunkName: "about" */ '../components/roles.vue')
        },
        {
          path: '/rights',
          name: 'rights',
          component: () => import(/* webpackChunkName: "about" */ '../components/rights.vue')
        }
      ]
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import(/* webpackChunkName: "about" */ '../components/orders.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import(/* webpackChunkName: "about" */ '../components/reports.vue')
    },
    {
      path: '/goods',
      name: 'goods',
      redirect: 'goodsList',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      children: [
        {
          path: '/goodsList',
          name: 'goodsList',
          component: () => import(/* webpackChunkName: "about" */ '../components/goodsList.vue')
        },
        {
          path: '/classParams',
          name: 'classParams',
          component: () => import(/* webpackChunkName: "about" */ '../components/classParams.vue')
        },
        {
          path: '/productParams',
          name: 'productParams',
          component: () => import(/* webpackChunkName: "about" */ '../components/productParams.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
