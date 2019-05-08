<template>
  <div class="view-wrap">
    <el-table :data="searchResult" height="500" border style="width: 100%">
      <el-table-column prop="date" label="歌单标题" />
      <el-table-column prop="address" label="封面" />
      <el-table-column prop="songsCount" label="歌曲数量" />
      <el-table-column label="操作">
        <template slot="header">
          <el-button size="mini" type="success" @click="handlerAdd">Add New</el-button>
        </template>
        <template slot-scope="scope">
          <div>
            <el-button
              v-for="btn in buttonGroup"
              :key="btn.label"
              :type="convertBtnType(btn.label)"
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
      searchResult: [
        {
          _id: '',
          title: '像暗杀似的绕到背后拥抱你',
          description:
                '自打我出生以来啊，就独得上帝恩宠，我劝上帝一定要雨露均沾，可上帝非是不听呢，就让我单身，就让我单身',
          cover:
                'http://b-ssl.duitang.com/uploads/item/201705/29/20170529123626_f32Tv.jpeg'
        }
      ],
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
    convertBtnType(label) {
      const obj = {
        Check: '',
        Edit: 'primary',
        Delete: 'danger'
      }
      return obj[label] || ''
    },
    handlerAdd() {
      this.$router.push({ name: 'ShareSongListAdd' })
    },
    handlerCheck(row) {
      this.$router.push({ name: 'ShareSongListCheck' })
    },
    handlerEdit(row) {
      this.$router.push({ name: 'ShareSongListEdit', params: row })
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
