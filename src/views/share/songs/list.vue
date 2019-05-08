<template>
  <div class="view-wrap">
    <el-table :data="songs" height="500" border style="width: 100%" size="small">
      <el-table-column prop="date" label="歌曲标题" />
      <el-table-column prop="name" label="歌手" />
      <el-table-column prop="address" label="专辑标题" />
      <el-table-column prop="address" label="专辑图片" />
      <el-table-column prop="address" label="所属平台" />
      <el-table-column prop="address" label="平台歌曲ID" />
      <el-table-column label="操作" header-align="center">
        <template slot="header">
          <el-button type="success" size="mini" @click="handlerAdd">Add New</el-button>
        </template>
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
      songs: [{}], // 搜索结果列表
      buttonGroup: [
        { label: 'Remove', handler: this.handlerRemove, type: 'danger' }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handlerRemove(row) {
      alert('Remove')
    },
    handlerAdd() {
      this.$router.push({ name: 'ShareSongsAdd' })
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
