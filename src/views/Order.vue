<template>
<<<<<<< HEAD
  <div id="order">
    <Header :title="title"></Header>
    <ul class="tabs">
      <li>
        <a href="javascript:;" @click="changeIndex(1)" :class="{'active':currentIndex ===1}">全部</a>
      </li>
      <li>
        <a href="javascript:;" @click="changeIndex(2)" :class="{'active':currentIndex ===2}">待付款</a>
      </li>
      <li>
        <a href="javascript:;" @click="changeIndex(3)" :class="{'active':currentIndex ===3}">待收获</a>
      </li>
    </ul>
    <main class="main">
      <All v-show="currentIndex === 1"></All>
      <Pay v-show="currentIndex === 2"></Pay>
      <Receipt v-show="currentIndex === 3"></Receipt>
    </main>

  </div>
</template>
<script>
import Header from "../components/Header";
import All from "../components/Order/All";
import Pay from "../components/Order/Pay";
import Receipt from "../components/Order/Receipt";

export default {
  data() {
    return {
      title: [
        {
          content: ""
        }
      ],
      currentIndex: 1
    };
  },
  components: {
    Header,
    All,
    Pay,
    Receipt
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
      if(index == 1){
        this.title[0].content = "商品订单";
      }else if(index == 2){
        this.title[0].content = "待支付订单";
      }else{
        this.title[0].content = "待收货订单";
      }
    }
  },
  created() {
    this.$store.state.footShow = true;
    if(this.currentIndex == 1){
        this.title[0].content = "商品订单";
      }else if(this.currentIndex == 2){
        this.title[0].content = "待支付订单";
      }else{
        this.title[0].content = "待收货订单";
      }
  }
};
</script>
<style lang="scss" scoped>
#order {
  background: #ececec;
  padding-top: 2.426667rem;

  //   选项卡
  .tabs {
    margin-bottom: 0.213333rem;
    border-bottom: 0.013333rem solid #ececec;
    position: fixed;
    top: 1.333333rem;
    left: 0;
    width: 100%;
    height: 0.88rem;
    background: #fff;
    z-index: 2;

    li {
      display: inline-block;
      width: 33.33%;
      text-align: center;
      line-height: 0.866667rem;
      a {
        color: #000;
        border-bottom: 0.013333rem solid transparent;
        display: inline-block;
        padding: 0 0.133333rem;
        line-height: 0.853333rem;
        font-size: 0.36rem;
        outline: 0;
        text-decoration: none;
      }
      .active {
        color: #ff6700;
        border-bottom: 0.013333rem solid #ff6700;
      }
    }
  }
  //   内容
  .main {
  }
}
=======
    <div>订单页</div>
</template>
<script>
export default {
    
}
</script>
<style>

>>>>>>> a3c946ec3bc66720be29a54605a05624964a5ec2
</style>
