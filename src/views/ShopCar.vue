<template>
  <div class="shopcar">
    <header class="header-bar">购物车</header>
    <div class="car-body">
      <van-empty
          v-if="shopCarData.length === 0"
          class="custom-image"
          image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
          description="购物车是空的"
      />
      <van-checkbox-group v-model="goodsCheckedList">
        <van-swipe-cell
          v-for="(item, index) in shopCarData"
          :key="index"
          class="mb5"
        >
          <div class="good-item">
            <van-checkbox :name="item.goodsId" @toggle="toggleCheck(item.goodsId)" />
            <div class="good-img">
              <img :src="item.goodsCoverImg" alt="">
            </div>
            <div class="good-detail">
              <div class="good-desc">
                <span>{{ item.goodsName }}</span>
                <span class="count">x{{ item.count }}</span>
              </div>
              <div class="good-btn">
                <div class="price">¥{{ item.sellingPrice }}</div>
                <van-stepper
                    integer
                    :min="1"
                    :max="10"
                    :model-value="item.count"
                    :name="item.goodsId"
                    async-change
                    @change="onChange"
                />
              </div>
            </div>
          </div>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="onDelete(item.goodsId)" />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
      <van-submit-bar style="bottom: 50px" :price="totalPrice * 100" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="allChecked" @click="allcheckFn">全选</van-checkbox>
      </van-submit-bar>
    </div>
    <nav-bar />
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs, watchEffect, computed} from 'vue'
import { useStore } from 'vuex'
import NavBar from "@/components/NavBar.vue";
import {Toast} from "vant";
import { carGoodsList } from '@/utils/type'

interface StateInterface {
  goodsCheckedList: string[]
  allChecked: boolean
  shopCarData: carGoodsList[]
}

export default defineComponent({
  name: "ShopCar",
  components: {
    NavBar
  },
  setup() {
    const state = reactive<StateInterface>({
      goodsCheckedList: [],
      allChecked: false,
      shopCarData: []
    })
    const store = useStore()
    state.shopCarData = store.getters.carGoodsList
    store.getters.carGoodsList.forEach((ele: carGoodsList) => {
      if (ele.isSelected) {
        state.goodsCheckedList.push(ele.goodsId)
      }
    })
    const onChange = (value: number, detail: any) => {
      if (value > 10) {
        Toast.fail('商品数量不能超过10')
        return
      }
      if (value < 1) {
        Toast.fail('商品数量最少为1')
        return
      }
      store.dispatch('shopCar/setCount', { goodsId: detail.name, count: value })
    }
    const onDelete = (id: string): void => {
      store.dispatch('shopCar/deleteGoods', id)
    }
    const allcheckFn = () => {
      if (state.allChecked) {
        state.goodsCheckedList = state.shopCarData.map((ele: carGoodsList): string => ele.goodsId)
      } else {
        state.goodsCheckedList = []
      }
    }
    watchEffect(() => {
      state.allChecked = state.goodsCheckedList.length === state.shopCarData.length
    })
    const toggleCheck = (id: string) => {
      store.dispatch('shopCar/setIsSelected', { goodsId: id, isSelected: state.goodsCheckedList.includes(id) })
    }
    const totalPrice = computed({
      get: () => {
        return state.shopCarData.reduce((acc, cur: carGoodsList) => {
          if (cur.isSelected) {
            return acc + cur.sellingPrice * cur.count
          } else {
            return acc
          }
        }, 0)
      },
      set:() => {}
    })
    const onSubmit = () => {
      Toast('提交')
    }
    return {
      ...toRefs(state),
      totalPrice,
      onChange,
      onDelete,
      allcheckFn,
      toggleCheck,
      onSubmit
    }
  }
})
</script>

<style lang=less scoped>
@import '../style/mixin';

.shopcar {
  padding-top: 40px;
  padding-bottom: 90px;
  .header-bar {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-bottom: 1PX solid #f8f9fa;
  }
  .goods-card {
    margin: 0;
    background-color: @white;
  }
  .delete-button {
    height: 100%;
  }
  .car-body {
    padding-top: 10px;
    .boxSizing();
    .good-item {
      display: flex;
      padding-left: 10px;
      .boxSizing();
      .good-img {
        margin-left: 15px;
        img {
          width: 88px;
          height: 88px;
          border-radius: 8px;
          object-fit: cover; // 保持原有尺寸比例。但部分内容可能被剪切。
        }
      }
      .good-detail {
        flex: 1;
        padding: 10px 15px 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .boxSizing();
        .good-desc {
          display: flex;
          justify-content: space-between;
          .count {
            margin-left: 5px;
          }
        }
        .good-btn {
          display: flex;
          justify-content: space-between;
          .price {
            font-size: 16px;
            color: @themePink;
          }
        }
      }
    }
    .custom-image .van-empty__image {
      width: 90px;
      height: 90px;
    }
  }
}
</style>
