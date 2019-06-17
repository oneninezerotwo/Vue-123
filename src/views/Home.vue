<template>
  <div id="home">
    <!-- 头部 -->
    <header class="header-bar">
      <Find></Find>
      <Nav></Nav>
    </header>
    <!-- 主体内容 -->
    <div id="home" class="page-wrap">
      <!-- 推荐 -->
      <tui-jian v-show="now === 0" class="bodys"></tui-jian>
      <!-- 手机 -->
      <shou-ji v-show="now === 1" class="bodys"></shou-ji>
      <!-- 618神卷 -->
      <shen-juan v-show="now === 2" class="bodys"></shen-juan>
      <!-- 智能 -->
      <zhi-neng v-show="now === 3" class="bodys"></zhi-neng>
      <!-- 电视 -->
      <dian-shi v-show="now === 4" class="bodys"></dian-shi>
      <!-- 笔记本 -->
      <bi-ji-ben v-show="now === 5" class="bodys"></bi-ji-ben>
      <!-- 家电 -->
      <jia-dian v-show="now === 6" class="bodys"></jia-dian>
      <!-- 生活周边 -->
      <sheng-huo-zhou-bian v-show="now === 7" class="bodys"></sheng-huo-zhou-bian>
    </div>
    <Top style="bottom: 1.4rem;right: 0.466667rem;"></Top>
  </div>
</template>

<script>
import Find from "../components/Home/Find";
import Nav from "../components/Home/Nav";
import TuiJian from "../components/Home/TuiJian";
import ShouJi from "../components/Home/ShouJi";
import ShenJuan from "../components/Home/ShenJuan";
import ZhiNeng from "../components/Home/ZhiNeng";
import DianShi from "../components/Home/DianShi";
import BiJiBen from "../components/Home/BiJiBen";
import JiaDian from "../components/Home/JiaDian";
import ShengHuoZhouBian from "../components/Home/ShengHuoZhouBian";
import Top from "../components/Top";

export default {
  data() {
    return {};
  },

  computed: {
    now() {
      return this.$store.state.tabsCurrentItem; //获取仓库中tabsCurrentItem
    }
  },

  components: {
    Find,
    Nav,
    "tui-jian": TuiJian,
    "shou-ji": ShouJi,
    "shen-juan": ShenJuan,
    "zhi-neng": ZhiNeng,
    "dian-shi": DianShi,
    "bi-ji-ben": BiJiBen,
    "jia-dian": JiaDian,
    "sheng-huo-zhou-bian": ShengHuoZhouBian,
    Top
  },
  created() {
    this.$store.state.footShow = true;
  }
};
</script>

<style lang="scss" scoped>
#home {
  position: relative;
  // 头部
  .header-bar {
    position: fixed;
    top: -1px;
    left: 0;
    right: 0;
    z-index: 99;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    background: #f2f2f2;
  }
  .bodys {
    padding-bottom: 1.386667rem;
    padding-top: 1.973333rem;
    overflow: hidden;
    background: #fff;
    -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.55, 0, 0.1, 1);
    transition: -webkit-transform 0.4s cubic-bezier(0.55, 0, 0.1, 1);
    transition: transform 0.4s cubic-bezier(0.55, 0, 0.1, 1);
    transition: transform 0.4s cubic-bezier(0.55, 0, 0.1, 1),
      -webkit-transform 0.4s cubic-bezier(0.55, 0, 0.1, 1);
  }
}
</style>

