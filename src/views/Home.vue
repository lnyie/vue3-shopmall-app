<template>
  <div class="home">
    <header class="header-bar">
      <div class="search-box">
        <van-search
            v-model="searchContent"
            placeholder="请输入搜索关键词"
            input-align="center"
            show-action
            background="transparent"
        >
          <template #action>
            <div v-if="isLogin" @click="toUser" :class="{ white: !isScoll, gray: isScoll }"><van-icon name="user-circle-o" size="24px" style="top: 5px" /></div>
            <div v-else @click="onLogin" :class="{ white: !isScoll, gray: isScoll }">登录</div>
          </template>
        </van-search>
      </div>
    </header>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in bannerList" :key="index">
        <img class="swipe-img" :src="item.imgUrl" alt="" style="width: 100%">
      </van-swipe-item>
    </van-swipe>
    <ul class="home-nav">
      <li v-for="(item, index) in homeNavImg" :key="index" class="mb10" @click="showTip">
        <img :src="item.imgUrl" alt="">
        <p class="mt5 clr_333">{{ item.name }}</p>
      </li>
    </ul>
    <div class="goods-box">
      <div class="title-floor"><span>热门商品</span></div>
      <ul class="goods-list">
        <li v-for="(item, index) in goodsList.newgoods" :key="index" @click="toDetail(item)">
          <img :src="item.goodsCoverImg" alt="">
          <p class="goods-title">{{ item.goodsName }}</p>
          <p class="goods-price">¥ {{ item.sellingPrice }}</p>
        </li>
      </ul>
      <div class="title-floor"><span>新品推荐</span></div>
      <ul class="goods-list">
        <li v-for="(item, index) in goodsList.hotgoods" :key="index" @click="toDetail(item)">
          <img :src="item.goodsCoverImg" alt="">
          <p class="goods-title">{{ item.goodsName }}</p>
          <p class="goods-price">¥ {{ item.sellingPrice }}</p>
        </li>
      </ul>
      <div class="title-floor"><span>最新上市</span></div>
      <ul class="goods-list">
        <li v-for="(item, index) in goodsList.recommend" :key="index" @click="toDetail(item)">
          <img :src="item.goodsCoverImg" alt="">
          <p class="goods-title">{{ item.goodsName }}</p>
          <p class="goods-price">¥ {{ item.sellingPrice }}</p>
        </li>
      </ul>
    </div>
    <van-tabs v-model:active="goodsTypeActive" swipeable title-active-color="#ee0a24"  title-inactive-color="#3a3a3a">
      <van-tab v-for="(list, idx) in tabList" :key="idx">
        <template #title>
          <div class="slot-title">
            <b class="tab-title f16">{{ list.name }}</b>
          </div>
        </template>
        <ul class="goods-list">
          <li v-for="(item, index) in list.list" :key="index">
            <img :src="item.img" alt="">
            <p class="goods-title">{{ item.name }}</p>
            <p class="goods-price">{{ item.price }}</p>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
    <nav-bar />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, reactive, ref, toRefs} from 'vue';
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import NavBar from '@/components/NavBar.vue'
import { homeImgList } from '@/api/appApi'
import { Toast } from "vant";

interface GoodsListItem {
    goodsId: number,
    goodsName: string,
    goodsIntro: string,
    goodsCoverImg: string,
    sellingPrice: number,
    tag: string
}

export default defineComponent({
  name: 'Home',
  components: {
    NavBar
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const onLogin = (): void => {
      router.push('/login')
    }
    const toUser = (): void => {
      router.push('/user')
    }
    const searchContent = ref<string>('')
    const state = reactive({
      bannerList: [],
      homeNavImg: [],
      goodsList: [],
      tabList: [],
      isScoll: false
    })
    homeImgList().then(res => {
      // console.log(res);
      const { status, images, images2, goodsList, tabList } = res.data
      state.bannerList = images
      state.homeNavImg = images2
      state.goodsList = goodsList
      state.tabList = tabList
    })
    const goodsTypeActive = ref(0)
    const toDetail = (item: GoodsListItem): void => {
      router.push(`/goodsDetail/${item.goodsId}`)
    }
    const showTip = (): void => {
      Toast('暂未开放')
    }
    const isLogin = computed(() => !!store.getters.token)
    onMounted(() => {
      window.onscroll = () => {
        state.isScoll = document.documentElement.scrollTop !== 0
      }
    })
    return {
      searchContent,
      onLogin,
      toUser,
      ...toRefs(state),
      goodsTypeActive,
      toDetail,
      showTip,
      isLogin
    }
  }
});
</script>

<style lang="less" scoped>
@import "../style/mixin.less";
.white {
  color: @white;
}
.gray {
  color: #c8c9cc;
}
.home {
  padding-bottom: 50px;
}
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}
.my-swipe .van-swipe-item {
  color: @white;
  text-align: center;
}
.my-swipe {

  .swipe-img {
    width: 100%;
    height: 250px;
  }
}
.home-nav {
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  border-bottom: 10px solid #f9f9f9;
  li {
    width: 20%;
    text-align: center;
    img {
      width: 36px;
    }
  }
}
.goods-box {
  .title-floor {
    margin-top: 10px;
    font-size: 16px;
    line-height: 20px;
    &::before {
      content: '';
      display: inline-block;
      width: 5px;
      height: 20px;
      background-color: @themePink;
      margin-right: 5px;
      vertical-align: top;
    }
  }
  .goods-list {
    border-bottom: 10px solid #f9f9f9;
  }
}
.goods-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  li {
    padding: 10px;
    box-sizing: border-box;
    width: 50%;
    text-align: center;
    border-bottom: 1PX solid #e9e9e9;
    &:nth-child(2n + 1) {
      border-right: 1PX solid #e9e9e9;
    }
    img {
      width: 120px;
    }
    .goods-price {
      margin-top: 5px;
      color: #ee0a24;
      font-weight: 600;
    }
  }
}
</style>
