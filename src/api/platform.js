import request from '@/utils/request'

export function getPlatformList() {
  return request({
    url: '/admin/platform/list',
    method: 'get'
  })
}
