<template>
  <div id="app">
    <router-view class="router-view" v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      transitionName: 'slide-left'
    })
    const router = useRouter()
    router.beforeEach((to, from) => {// 如果to索引大于from索引, 判断为前进状态, 反之则为后退状态
      if (to.meta.index > from.meta.index) {
        // 设置动画名称
        state.transitionName = 'slide-left'
      } else if (to.meta.index < from.meta.index) {
        state.transitionName = 'slide-right'
      } else {
        state.transitionName = '' // 同级无过渡效果
      }
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch; /** 属性控制元素在移动设备上是否使用滚动回弹效果 auto: 使用普通滚动, 当手指从触摸屏上移开，滚动会立即停止。 touch: 使用具有回弹效果的滚动, 当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。同时也会创建一个新的堆栈上下文。 */
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.5s;
  width: 100%;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
