<template>
  <div class="view-wrap">
    <el-table :data="songsList" height="500" border style="width: 100%" size="small">
      <el-table-column prop="date" label="歌曲标题" width="180" />
      <el-table-column prop="name" label="歌手" width="180" />
      <el-table-column prop="address" label="专辑标题" />
      <el-table-column prop="address" label="专辑图片" />
      <el-table-column>
        <template slot="header">
          <el-input v-model="keyWord" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <div class="button-group">
            <el-button
              v-for="btn in buttonGroup"
              :key="btn.label"
              type="primary"
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
      keyWord: '', // 搜索关键字
      songsList: [], // 搜索结果列表
      buttonGroup: [{ label: 'Add', handler: this.handlerAdd }]
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
