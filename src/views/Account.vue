<template>
  <div class="account">
    <header class="header-bar">
      <van-nav-bar left-arrow title="账号管理" @click-left="toUser" />
    </header>
    <van-form @submit="onSubmit">
      <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
      />
      <van-field
          v-model="password"
          type="password"
          name="修改密码"
          label="修改密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">提交</van-button>
        <van-button round block type="danger" @click="logout" class="mt15">退出登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {defineComponent, reactive, toRefs} from 'vue'
import {useRouter} from "vue-router";
import {useStore} from 'vuex'
import {Toast} from "vant";
export default defineComponent({
  name: "Account",
  setup() {
    const store = useStore()
    const router = useRouter()
    const toUser = () => {
      router.push('/user')
    }
    const toHome = () => {
      router.push('/home')
    }
    const state = reactive({
      username: '',
      password: '',
    })
    const onSubmit = (values) => {
      console.log('submit', values);
      Toast.fail('暂不支持修改密码')
    }
    const logout = () => {
      window.localStorage.removeItem('token')
      store.dispatch('userInfo/removeToken')
      Toast.success('退出成功')
      toHome()
    }
    return {
      toUser,
      toHome,
      ...toRefs(state),
      onSubmit,
      logout
    }
  }
})
</script>

<style lang="less" scoped>
.account {
  /deep/.van-nav-bar__title {
    font-size: 14px;
  }
}
</style>
