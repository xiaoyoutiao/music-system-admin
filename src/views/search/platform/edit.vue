<template>
  <div class="view-wrap">
    <div class="form-box">
      <el-form ref="platformRef" :rules="rules" :model="platform" label-width="100px">
        <el-form-item label="平台名称" prop="name">
          <el-input v-model="platform.name" />
        </el-form-item>
        <el-form-item label="平台参数值" prop="value">
          <el-input v-model="platform.value" />
        </el-form-item>
        <el-form-item label="是否支持" prop="isSupport">
          <el-switch v-model="platform.isSupport" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :disabled="!allowSubmit" @click="onSubmit">修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      allowSubmit: false,
      platform: {
        _id: '',
        name: '',
        value: '',
        isSupport: false
      }
    }
  },
  computed: {
    rules: () => ({
      name: [{ required: true, message: '必须填写平台名称' }],
      value: [{ required: true, message: '必须填写平台参数值' }]
    })
  },
  watch: {
    platform: {
      deep: true,
      handler: function(val, oldVal) {
        this.validatorForm()
      }
    }
  },
  created() {
    const routerParams = this.$route.params
    this.platform._id = routerParams._id
    this.platform.name = routerParams.name
    this.platform.value = routerParams.value
    this.platform.isSupport = routerParams.isSupport
  },
  mounted() {},
  methods: {
    validatorForm() {
      this.$refs['platformRef'].validate(isPass => {
        this.allowSubmit = isPass
      })
    },
    onSubmit() {}
  }
}
</script>

<style lang='scss' scoped>
    @import url('~@/styles/global.scss');
    .form-box {
        width: 350px;
    }
</style>
