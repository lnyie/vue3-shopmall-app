<template>
  <div class="user">
    <header class="header-bar">我</header>
    <van-skeleton title avatar :row="3" :loading="loading">
      <div class="user-info">
        <img class="user-avatar" src="../assets/images/user/avatar.jpg" alt="">
        <div class="user-detail">
          <span>昵称：{{ 'LNYIE' }}</span>
          <span>登录账号：{{ '15523322110' }}</span>
          <span>消费等级：{{ '购物达人' }}</span>
        </div>
      </div>
    </van-skeleton>
    <ul class="menu-list">
      <li class="van-hairline--bottom" @click="toPage('/myOrder')">
        <span>我的订单</span>
        <van-icon name="arrow" size="14" color="#333333" />
      </li>
      <li class="van-hairline--bottom" @click="toPage('/account')">
        <span>账号管理</span>
        <van-icon name="arrow" size="14"  color="#333333" />
      </li>
      <li class="van-hairline--bottom" @click="toPage('/address')">
        <span>地址管理</span>
        <van-icon name="arrow" size="14"  color="#333333" />
      </li>
      <li class="van-hairline--bottom" @click="toPage('/about')">
        <span>关于</span>
        <van-icon name="arrow" size="14"  color="#333333" />
      </li>
    </ul>
    <nav-bar />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: "User",
  components: {
    NavBar
  },
  setup() {
    const state = reactive({
      loading: true
    })
    state.loading = false
    const router = useRouter()
    const toPage = (to: string): void => {
      router.push(to)
    }
    return {
      ...toRefs(state),
      toPage
    }
  }
})
</script>

<style lang="less" scoped>
@import '../style/mixin';

.user {
  .header-bar {
    font-size: 14px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-bottom: 1PX solid #f8f9fa;
  }
  .user-info {
    display: flex;
    background: linear-gradient(to bottom, #fe4f6f, #fb6d61);
    padding: 30px 20px;
    .user-avatar {
      width: 88px;
      height: 88px;
      border-radius: 50%;
    }
    .user-detail {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: @white;
      font-size: 14px;
    }
  }
  .menu-list {
    margin-top: 20px;
    padding: 0 20px;
    li {
      font-size: 14px;
      color: #333333;
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      .van-icon-arrow {
        padding-top: 13px;
      }
    }
  }
}
</style>
