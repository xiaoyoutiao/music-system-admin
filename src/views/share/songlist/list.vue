<template>
  <div class="view-wrap">
    <div>
      <el-table :data="searchResult" height="500" border style="width: 100%">
        <el-table-column prop="date" label="歌曲标题" width="180" />
        <el-table-column prop="name" label="歌手" width="180" />
        <el-table-column prop="address" label="专辑标题" />
        <el-table-column prop="address" label="专辑图片" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div>
              <el-button type="primary" icon="el-icon-edit">搜索</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      searchResult: []
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang='scss' scoped>
    @import url('~@/styles/global.scss');
</style>
