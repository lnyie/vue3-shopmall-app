<template>
  <div class="nav-bar">
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" >
      <van-tabbar-item
        v-for="(item, index) in tabbar" :key="index"
        :to="item.path"
        :icon="item.icon"
        :badge="item.name === '购物车' ? carCount : ''">
        {{ item.name }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, reactive, toRefs, computed} from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: "NavBar",
  setup() {
    const active = ref(0)
    const state = reactive({
      tabbar: [
        {
          name: '首页',
          path: '/home',
          pathName: 'Home',
          icon: 'home-o'
        },
        {
          name: '分类',
          path: '/category',
          pathName: 'Category',
          icon: 'apps-o'
        },
        {
          name: '购物车',
          path: '/shopcar',
          pathName: 'ShopCar',
          icon: 'cart-o'
        },
        {
          name: '我',
          path: '/user',
          pathName: 'User',
          icon: 'user-circle-o'
        }
      ]
    })
    const route = useRoute()
    state.tabbar.forEach((ele, index) => {
      if (ele.pathName === route.name) {
        active.value = index
      }
    })
    const store = useStore()
    const carCount = computed(() => store.getters.carCount)
    return {
      active,
      ...toRefs(state),
      carCount
    }
  }
})
</script>

<style lang="less" scoped>
.nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;

}
</style>
