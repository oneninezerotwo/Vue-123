<template>
    <div class="top" v-show="isShow" @click="returnTop()">
        <a href="javascript:;">
            <img src="../assets/img/top.png">
        </a>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    isShow(){
       return true;
    }
  },
  mounted() {
    var windowHeight = document.documentElement.clientHeight; //可视区域高度

    window.onscroll = function(e) {
      // console.log(window.scrollY);
      // 位移量
      var Top = document.documentElement.scrollTop || document.body.scrollTop;
      //   console.log(Top);
      if (Top > 1000) {
        //   console.log(12);
    
      } else {
        this.isShow = false;
      }
    };
  },
  methods: {
    returnTop() {
      window.scrollTo(0, 0);
      localStorage.setItem('username',123);
      
    }
  }
};
</script>

<style lang="scss" scoped>
//   回到顶部
.top {
  position: fixed;
  z-index: 999;
  width: 0.973333rem;
  height: 0.973333rem;
  a {
    display: block;
    width: 0.973333rem;
    height: 0.973333rem;
    img {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
}
</style>

