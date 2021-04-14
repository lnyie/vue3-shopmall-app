<template>
  <div class="my-order">
    <header class="header-bar">
      <van-nav-bar left-arrow title="我的订单" @click-left="toUser" />
    </header>
    <van-tabs v-model:active="activeName">
      <van-tab
        v-for="(item, index) in orderType"
        :title="item" :name="index"
      >
        <span class="no-more">没有更多了</span>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: "MyOrder",
  setup() {
    const router = useRouter()
    const toUser = () => {
      router.push('/user')
    }
    const state = reactive({
      activeName: 0,
      orderType: ['全部', '待付款', '待确认', '待发货', '已发货', '交易完成']
    })
    return {
      toUser,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="less" scoped>
.my-order {
  /deep/.van-nav-bar__title {
    font-size: 14px;
  }
  /deep/.van-tabs__content {
    padding-top: 20px;
    text-align: center;
    .no-more {
      font-size: 14px;
      color: #ddd;
    }
  }
}
</style>
