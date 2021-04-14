import request from '@/utils/request.ts'

const baseUrl = 'http://shopmall.com'

export function homeImgList() {
  return request({
    url: baseUrl + '/home/homeImgList',
    method: 'get'
  })
}

export function categoryData() {
  return request({
    url: baseUrl + '/category/categoryData',
    method: 'get'
  })
}

export function goodsDetail(data: { id: string }) {
  return request({
    url: baseUrl + `/goodsDetail`,
    method: 'get',
    data
  })
}

export function login(data: { username: string, password: string }) {
  return request({
    url: baseUrl + `/login`,
    method: 'post',
    data
  })
}
