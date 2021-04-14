<template>
  <div class="goodsDetail">
    <header class="header-bar">
      <van-nav-bar left-arrow title="商品详情" @click-left="toHome" />
    </header>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in [goodsDetail.goodsCoverImg]" :key="index">
        <img class="swipe-img" :src="item" alt="" style="width: 100%">
      </van-swipe-item>
    </van-swipe>
    <div class="goods-info">
      <div class="goods-title">
        {{ goodsDetail.goodsName }}
      </div>
      <div class="goods-express">
        全国包邮 隔天送达
      </div>
      <div class="goods-price">
        ¥{{ goodsDetail.sellingPrice }}
      </div>
    </div>
    <ul class="nav-floor">
      <li class="van-hairline--right">宝贝详情</li>
      <li class="van-hairline--right">参数</li>
      <li class="van-hairline--right">售后服务</li>
      <li>常见问题</li>
    </ul>
    <div class="goods-display">
      <img v-for="(item, index) in goodsDetail.goodsDetailContent" :key="index" :src="item" alt="" style="max-width: 100%">
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon icon="cart-o" text="购物车" :badge="carCount" />
      <van-action-bar-button type="warning" text="加入购物车" @click="addToCar" />
      <van-action-bar-button type="danger" text="立即购买" @click="toBuy" />
    </van-action-bar>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, toRefs} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { goodsDetail } from '@/api/appApi.ts'
import {Toast} from "vant";

export default defineComponent({
  name: "GoodsDetail",
  setup() {
    const state = reactive({
      goodsId: '',
      goodsDetail: {}
    })
    const route = useRoute()
    state.goodsId = route.params.id as string
    goodsDetail({ id: state.goodsId }).then(res => {
      console.log(res);
      const { status, goodsDetail, msg } = res.data
      if (status === 0) {
        state.goodsDetail = goodsDetail
      } else {
        Toast.fail(msg)
      }
    })
    const router = useRouter()
    const toHome = () => {
      router.push('/home')
    }
    const store = useStore()
    const carCount = computed(() => store.getters.carCount)

    const addToCar = () => {
      store.dispatch('shopCar/addGoods', Object.assign({}, state.goodsDetail, { count: 1, isSelected: true }))
      Toast.success('已加入购物车')
    }
    const toBuy = () => {
      Toast('立即购买')
    }
    return {
      ...toRefs(state),
      toHome,
      addToCar,
      toBuy,
      carCount
    }
  }
})
</script>

<style lang="less" scoped>
@import '../style/mixin';
.goodsDetail {
  padding-top: 46px;
  padding-bottom: 50px;
  .header-bar {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
  }
  /deep/.van-nav-bar__title {
    font-size: 14px;
  }
  .goods-info {
    padding: 0 10px;
    .goods-title {
      font-size: 18px;
      color: #333333;
    }
    .goods-express {
      font-size: 14px;
      margin-top: 5px;
      color: #999;
    }
    .goods-price {
      font-size: 20px;
      color: @themePink;
      margin-top: 5px;
    }
  }
  .nav-floor {
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    li {
      padding-right: 25px;
      //width: 25%;
      &::after {
        border-color: #333333;
      }
    }
  }
}
</style>
