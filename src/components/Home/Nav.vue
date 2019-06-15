<template>
import { setTimeout } from 'timers';
  <div class="nav-wrap">
    <!-- 按钮 -->
    <div class="nav-display" @click="changeStatus()">
      <i class="image-icons icon-arrow-down" :class="{'unfold':isShow}"></i>
    </div>
    <!-- 显示全部 -->
    <div class="nav-item-layer" v-show="isShow">
      <div class="title">全部</div>
      <div class="btn-wrap">
        <span class="extra-btn mr-interval" :class="{'cur':index === now}" v-for="(item,index) in aTabsDatas" :key="index" @click="setCurrentItem(index)">{{item.name}}</span>

      </div>
    </div>
    <!-- 显示部分 -->
    <div class="nav" v-show="!isShow">
      <div class="nav-item" v-for="(item,index) in aTabsDatas" :key="index" @click="setCurrentItem(index)">
        <span :class="{active:now === index}">{{item.name}}</span>
      </div>
      <div class="nav-item-extra"></div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      aTabsDatas: []
    };
  },

  async created() {
    const datas = await this.$axios(
      "https://www.easy-mock.com/mock/5cf9fc1ee43289695bb400cc/page"
    );
    this.aTabsDatas = datas.data.data.tabs;
  },

  methods: {
    setCurrentItem(index) {
      this.$store.state.tabsCurrentItem = index; //改变仓库中tabsCurrentItem
      this.isShow = false;
    },
   
    changeStatus() {
      this.isShow = !this.isShow;
    }
  },
  computed: {
    now() {
      return this.$store.state.tabsCurrentItem; //获取仓库中tabsCurrentItem
    }
  }
};
</script>

<style lang="scss" scoped>
// 最外部大盒子
.nav-wrap {
  position: relative;
  overflow: hidden;
  //   按钮
  .nav-display {
    position: absolute;
    right: 0;
    top: 0;
    width: 0.84rem;
    height: 0.84rem;
    line-height: 0.84rem;
    background-color: #f2f2f2;
    box-shadow: -15px 0 15px 0 #f2f2f2;
    z-index: 99;
    text-align: center;

    .image-icons {
      vertical-align: middle;
      width: 0.4rem;
      height: 0.4rem;
      //   background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABlBMV…Yljq7EyZU4uBKfrsSHK/F0JR6mhCPYDmwHdKzVUaWTJElefOyLAQtGqMZ7AAAAAElFTkSuQmCC);
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABlBMVEX///+9vb18/6H5AAAAAXRSTlMAQObYZgAAAF9JREFUeNrtzCESwDAMxMD4/59umIBJJ6JalLo3OkmS5Ie55IbRyAmrUQtmlxisoeswtR3GurPn+4crcXYljq7EyZU4uBKfrsSHK/F0JR6mhCPYDmwHdKzVUaWTJElefOyLAQtGqMZ7AAAAAElFTkSuQmCC);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: -webkit-transform 0.2s linear;
      transition: -webkit-transform 0.2s linear;
      transition: transform 0.2s linear;
      transition: transform 0.2s linear, -webkit-transform 0.2s linear;
    }
    .image-icons {
      display: inline-block;
      width: 0.44rem;
      height: 0.44rem;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: cover;
    }
    .unfold {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }

  //   隐藏部分
  .nav-item-layer {
    background-color: #f2f2f2;
    font-size: 0.28rem;
    text-align: left;
    padding: 0 0.25rem;
    -webkit-transition: max-height 0.3s ease-in-out;
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;

    .title {
      padding-top: 0.25rem;
    }

    .btn-wrap {
      margin-top: 0.34rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;

      .extra-btn.cur {
        background-color: #fde0d5;
        border-color: #ff6700;
        color: #ff6700;
      }
      .extra-btn.mr-interval {
        margin-right: 0.2rem;
      }
      .extra-btn {
        margin-bottom: 0.24rem;
        display: inline-block;
        width: 1.52rem;
        height: 0.56rem;
        text-align: center;
        line-height: 0.56rem;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        font-size: 0.25rem;
        background-color: #fff;
      }
    }
  }

  // 显示部分
  .nav {
    overflow-x: auto;
    background: #f2f2f2;
    font-size: 0.36rem;
    white-space: nowrap;
    z-index: 2;
    height: 0.84rem;
    //  选项
    .nav-item {
      display: inline-block;
      padding: 0 0.25rem;
      // 文字
      .active {
        color: #ed5b00;
        border-color: #ed5b00;
      }
      span {
        display: inline-block;
        height: 100%;
        line-height: 0.84rem;
        color: #747474;
        border-bottom: 2px solid transparent;
      }
    }
  }
}
</style>

