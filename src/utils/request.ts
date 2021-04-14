import axios from 'axios';
import router from "@/router";
import { Toast } from "vant";

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = (msg: string) => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: true
  })
}

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: (router.currentRoute as any).fullPath
    }
  })
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status: number, other: string): void => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin()
      break
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录')
      localStorage.removeItem('token')
      //   store.commit('loginSuccess', null);
      setTimeout(() => {
        toLogin()
      }, 1000)
      break
    // 404请求不存在
    case 404:
      tip('请求的资源不存在')
      break
    default:
      console.log(other)
  }
}

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000 * 10
})

service.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'

service.interceptors.request.use(
  config => {
    // const token = localStorage.token
    // token && (config.headers.token = token)
    return config
  }
)

service.interceptors.response.use(
  response => {
    return response.status === 200 ? Promise.resolve(response) : Promise.reject(response)
  },
  error => {
    const { response } = error
    if (response) {
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {

    }
  }
)

export default service
