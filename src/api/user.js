import request from '@/utils/request'

export function addAdmin(data) { // 添加管理员
  return request({
    url: '/admin/user/admin/add',
    method: 'post',
    data
  })
}

export function getAdminList() { // 获取网站管理员信息
  return request({
    url: '/admin/user/admin/list',
    method: 'get'
  })
}

export function getUserList() { // 获取注册用户列表
  return request({
    url: '/admin/user/list',
    method: 'get'
  })
}
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
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
