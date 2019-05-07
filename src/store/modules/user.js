import { addAdmin } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import { Message } from 'element-ui'

const state = {

}

const mutations = {

}

const actions = {
  addAdmin(context, data) {
    addAdmin(data).then(_data => {
      // console.log(_data)
      Message({ message: '添加成功', type: 'success' })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

