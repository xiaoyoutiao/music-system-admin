import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}
export function loginOut() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}
// 添加管理员
export function addAdmin(data) {
  return request({
    url: '/admin/user/admin/add',
    method: 'post',
    data
  })
}
// 获取网站管理员信息
export function getAdminList() {
  return request({
    url: '/admin/user/admin/list',
    method: 'get'
  })
}
// 获取注册用户列表
export function getUserList() {
  return request({
    url: '/admin/user/list',
    method: 'get'
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
