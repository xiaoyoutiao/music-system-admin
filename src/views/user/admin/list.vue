<template>
  <div class="view-wrap">
    <div>
      <el-table :data="adminList" height="500" border style="width: 100%">
        <el-table-column prop="id" label="帐号" width="250" />
        <el-table-column prop="account" label="帐号" width="180" />
        <el-table-column prop="nickName" label="昵称" width="180" />
      </el-table>
    </div>
  </div>
</template>

<script>
import { getAdminList } from '@/api/user'

export default {
  components: {},
  data() {
    return {
      adminList: []
    }
  },
  computed: {},
  watch: {},
  created() {
    getAdminList().then(_data => {
      if (_data) this.adminList = _data.list
    })
  },
  mounted() {},
  methods: {}
}
</script>

<style lang='scss' scoped>
    @import url('~@/styles/global.scss');
</style>
