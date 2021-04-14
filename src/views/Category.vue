<template>
  <div class="category">
    <header class="header-bar">
      <van-nav-bar left-arrow @click-left="toHome">
        <template #title>
          <van-search
              v-model="searchContent"
              placeholder="请输入搜索关键词"
              input-align="center"
              background="transparent"
              style="width: 100%"
          >
          </van-search>
        </template>
      </van-nav-bar>
    </header>
    <div class="main-container" ref="categoryWrap">
      <list-scroll class="left-side">
<!--        <ul>-->
<!--          <li v-for="(item, index) in categoryDatas" :key="index">{{ item.name }}</li>-->
<!--        </ul>-->
        <van-sidebar v-model="currentIndex" style="height: 100%">
          <van-sidebar-item
              v-for="(item, index) in categoryDatas"
              :key="index">
            <template #title>
              <p>{{ item.name.slice(0, 2) }}</p>
              <p>{{ item.name.slice(2, 4) }}</p>
            </template>
          </van-sidebar-item>
        </van-sidebar>
      </list-scroll>
      <list-scroll class="right-side">
        <div class="category-container">
          <template
              v-for="(category, index) in categoryDatas"
              :key="index">
            <div v-if="currentIndex === index" class="category-box">
              <div
                  v-for="(products, index) in category.list"
                  :key="index">
                <p class="category-title">{{ products.title }}</p>
                <div class="category-list">
                  <div
                      class="product-item"
                      v-for="(product, index) in products.productList"
                      :key="index">
                    <img class="img-item" :src="product.imgUrl" alt="">
                    <p class="product-name">{{ product.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </list-scroll>
    </div>
    <nav-bar />
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, ref, toRefs} from 'vue'
import { useRouter } from 'vue-router'
import { categoryData } from '@/api/appApi'
import ListScroll from "@/components/ListScroll.vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: "Category",
  components: {
    NavBar,
    ListScroll
  },
  setup() {
    const router = useRouter()
    const toHome = () => {
      router.push('/home')
    }
    const searchContent = ref('')
    const categoryWrap: any = ref(null);
    const setCategoryWrapHeight = () => {
      const { clientHeight } = document.documentElement;
      categoryWrap.value.style.height = clientHeight - 104 + "px";
    };
    onMounted(() => {
      // setCategoryWrapHeight()
    })
    const state = reactive({
      categoryDatas: [],
      currentIndex: 0
    })
    categoryData().then((res: any) => {
      console.log(res);
      const { status, categoryData } = res.data
      state.categoryDatas = categoryData
    })
    return {
      toHome,
      searchContent,
      ...toRefs(state),
      categoryWrap
    }
  }
})
</script>

<style lang="less" scoped>
@import '../style/mixin';

.category {
  height: 100%;
  padding-top: 54px;
  box-sizing: border-box;
  //padding-bottom: 50px;
  .header-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
  }
  .main-container {
    width: 100%;
    height: calc(100vh - 104px);
    display: flex;
    .left-side {
      width: 88px;
      height: 100%;
      overflow: hidden;
      overflow-y: scroll;
      .van-sidebar {
        .van-sidebar-item {
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .van-sidebar-item--select {
          font-weight: 600;
          color: @themePink;
        }
      }
      //ul {
      //  li {
      //    height: 50px;
      //    line-height: 50px;
      //    text-align: center;
      //    background-color: skyblue;
      //  }
      //}
    }
    .right-side {
      flex: 1;
      height: 100%;
      .category-container {
        width: 100%;
        height: 100%;
        .category-box {
          padding: 10px 15px 50px;
          height: 100%;
          overflow-y: scroll;
          .boxSizing();
          .category-title {
            font-size: 14px;
            font-weight: 600;
            color: @themePink;
          }
          .category-list {
            display: flex;
            flex-wrap: wrap;
            flex-shrink: 0;
            margin-top: 10px;
            margin-bottom: 10px;
            .product-item {
              width: 33.3%;
              text-align: center;
              margin-bottom: 10px;
              .boxSizing();
              padding: 0 5px 0;
              .img-item {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
/deep/ .van-nav-bar__content {
  height: 54px;
}
/deep/ .van-nav-bar__left {
  padding-right: 0;
}
/deep/ .van-nav-bar__title {
  max-width: 100%;
  width: calc(100% - 36px);
  position: absolute;
  right: 0;
}
</style>
