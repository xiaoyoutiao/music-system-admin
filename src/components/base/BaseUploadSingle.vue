<template>
  <el-upload
    class="avatar-uploader"
    :action="imgUploadUrl"
    name="file"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    :style="uploadStyle"
  >
    <img v-if="src" :src="src" class="avatar" :style="uploadStyle">
    <i v-else class="el-icon-plus avatar-uploader-icon" :style="uploadStyle" />
  </el-upload>
</template>

<script>
import { imgUploadUrl } from '@/api/url'

export default {
  components: {},
  props: {
    src: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '150px'
    },
    height: {
      type: String,
      default: '150px'
    }
  },
  data() {
    return {
      imgUploadUrl: imgUploadUrl
    }
  },
  computed: {
    uploadStyle() {
      return {
        width: this.width,
        height: this.height,
        lineHeight: this.height
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleAvatarSuccess(res, file) {
      this.$emit('update:src', res.data.url)
      this.$emit('on-upload', res.data.url)
    },
    beforeAvatarUpload() {}
  }
}
</script>

<style lang='scss' scoped>
    .avatar-uploader {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader:hover {
        border-color: #409eff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        text-align: center;
    }
    .avatar {
        display: block;
    }
</style>
