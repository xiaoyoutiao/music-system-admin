<template>
  <div class="view-wrap">
    <div>
      <el-table :data="platformList" height="500" border style="width: 100%">
        <el-table-column prop="name" label="平台名称" width="250" />
        <el-table-column prop="value" label="设置相关值" width="180" />
        <el-table-column prop="isSupportDesc" label="是否支持" width="180">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.isSupport ? 'success' : 'info'"
            >{{ scope.row.isSupportDesc }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              v-for="btn in buttonGroup"
              :key="btn.label"
              :type="btn.label === 'Edit' ? 'primary':'danger'"
              size="mini"
              @click="btn.handler(scope.row)"
            >{{ btn.label }}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="80">
          <template slot="header">
            <el-button size="mini" type="success" @click="handlerAdd">Add</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getPlatformList } from '@/api/platform'

export default {
  components: {},
  data() {
    return {
      platformList: [],
      buttonGroup: [
        { label: 'Edit', handler: this.handlerEdit },
        { label: 'Delete', handler: this.handlerDelete }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {
    getPlatformList().then(_data => {
      if (_data) this.platformList = _data.list
    })
  },
  mounted() {},
  methods: {
    handlerAdd() {
      alert('添加')
    },
    handlerEdit() {
      alert('编辑')
    },
    handlerDelete() {
      alert('删除')
    }
  }
}
</script>

<style lang='scss' scoped>
    @import url('~@/styles/global.scss');
</style>
