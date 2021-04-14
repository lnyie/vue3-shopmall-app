<template>
  <div class="login">
    <header class="header-bar">
      <van-nav-bar left-arrow title="登录" @click-left="toHome" />
    </header>
    <p>用户名: 15523322110 密码: 123456</p>
    <van-form @submit="onSubmit" class="mt15">
      <van-field
          v-model="state.username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="state.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from "vue-router";
import { login } from '@/api/appApi'
import {Toast} from "vant";

export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter()
    const toHome = () => {
      router.push('/home')
    }
    const state = reactive({
      username: '15523322110',
      password: '123456',
    });
    const onSubmit = (values: { username: string, password: string }) => {
      console.log('submit', values);
      const { username, password } = values
      login({ username, password }).then(res => {
        console.log(res);
        const { status, msg, token } = res.data
        if (status === 0) {
          window.localStorage.setItem('token', token)
          toHome()
        } else {
          Toast.fail(msg)
        }
      })
    }
    return {
      toHome,
      state,
      onSubmit
    }
  }
})
</script>

<style lang="less" scoped>
.login {
  /deep/.van-nav-bar__title {
    font-size: 14px;
  }
}
</style>
