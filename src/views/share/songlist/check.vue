<template>
  <div class="view-wrap">
    <el-table :data="songsList" height="500" size="small" border style="width: 100%">
      <el-table-column prop="date" label="歌曲标题" width="180" />
      <el-table-column prop="name" label="歌手" width="180" />
      <el-table-column prop="address" label="专辑标题" />
      <el-table-column prop="address" label="专辑图片" width="180" header-align="center" />
      <el-table-column prop="address" label="所属平台" width="180" header-align="center" />
      <el-table-column prop="address" label="平台ID" width="180" header-align="center" />
      <el-table-column label="操作" header-align="center">
        <template slot-scope="scope">
          <div class="button-group">
            <el-button
              v-for="btn in buttonGroup"
              :key="btn.label"
              :type="btn.type"
              size="mini"
              @click="btn.handler(scope.row)"
            >{{ btn.label }}</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      songsList: [{}], // 搜索结果列表
      buttonGroup: [
        { label: 'Remove', handler: this.handlerAdd, type: 'danger' }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handlerAdd() {
      alert('add')
    }
  }
}
</script>

<style lang='scss' scoped>
    @import url('~@/styles/global.scss');
    .button-group {
        display: flex;
        justify-content: center;
    }
</style>
