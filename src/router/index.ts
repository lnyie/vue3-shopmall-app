import {createRouter, createWebHashHistory, RouteRecordRaw, RouterOptions} from 'vue-router'
import store from '../store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ '@/views/Category.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/shopCar',
    name: 'ShopCar',
    component: () => import(/* webpackChunkName: "shopCar" */ '@/views/ShopCar.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '@/views/User.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/myOrder',
    name: 'MyOrder',
    component: () => import(/* webpackChunkName: "myOrder" */ '@/views/MyOrder.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "account" */ '@/views/Account.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import(/* webpackChunkName: "address" */ '@/views/Address.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/goodsDetail/:id',
    name: 'GoodsDetail',
    component: () => import(/* webpackChunkName: "goodsDetail" */ '@/views/GoodsDetail.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    meta: {
      index: 2
    }
  }
]

const router = createRouter({
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHashHistory(),
  routes
} as RouterOptions)

export default router
