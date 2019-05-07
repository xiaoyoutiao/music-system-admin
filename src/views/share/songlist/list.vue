<template>
  <div class="view-wrap">
    <div>
      <el-table :data="searchResult" height="500" border style="width: 100%">
        <el-table-column prop="date" label="歌单标题" width="180" />
        <el-table-column prop="address" label="封面" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div>
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
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      searchResult: [],
      buttonGroup: [
        { label: 'Check', handler: this.handlerCheck },
        { label: 'Edit', handler: this.handlerEdit },
        { label: 'Delete', handler: this.handlerDelete }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handlerCheck(row) {
      alert('check')
    },
    handlerEdit(row) {
      alert('edit')
    },
    handlerDelete(row) {
      alert('delete')
    }
  }
}
</script>

<style lang='scss' scoped>
    @import url('~@/styles/global.scss');
</style>
