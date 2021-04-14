import router from "@/router";
import store from "@/store";
import {Toast} from "vant";

const whiteList: string[] = ['/home', '/category', '/shopcar', '/login']

router.beforeEach((to, from, next) => {
  const token: string | null = window.localStorage.getItem('token')
  if(token) {
    store.dispatch('userInfo/setToken', token)
    next()
  }else {
    store.dispatch('userInfo/removeToken')
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
      Toast('请登录')
    }
  }
})
