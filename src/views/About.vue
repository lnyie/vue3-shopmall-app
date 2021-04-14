<template>
  <div class="about">
    <header class="header-bar">
      <van-nav-bar left-arrow title="关于" @click-left="toUser" />
    </header>
    <van-notice-bar
        left-icon="volume-o"
        text="欢迎浏览本页面。"
    />
    <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
      介绍
    </van-divider>
    <div class="project-desc">
      <p>本项目是移动端电商系统，包含首页、商品分类、购物车、个人中心等模块。主要功能有：商品信息浏览、商品信息搜索、商品分类、购物车、商品结算、个人信息修改、登录等。</p>
      <p class="mt15">主要技术栈：vue3 + ts + vant + mockjs。</p>
      <p class="mt15">github: <a class="github-link" href="https://github.com/lnyie">https://github.com/lnyie</a></p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'About',
  setup() {
    const router = useRouter()
    const toUser = () => {
      router.push('/user')
    }
    return {
      toUser
    }
  }
})
</script>

<style lang="less" scoped>
@import '../style/mixin';
.about {
  /deep/.van-nav-bar__title {
    font-size: 14px;
  }
  .project-desc {
    padding: 15px;
    font-size: 14px;
    color: #333333;
    .github-link {
      color: @themePink;
      text-decoration: underline;
    }
  }
}
</style>
