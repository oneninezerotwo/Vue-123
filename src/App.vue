<template>
  <div data-v-bc186c1a id="app">
    <router-view/>
    <Foot></Foot>

  </div>
</template>
<script>
import {rem} from './rem.js';
import Foot from "./components/Foot.vue";
export default {
  components: {
    Foot
  },
  async created(){
    rem();

    const goodsDatas = await this.$axios(
      "https://www.easy-mock.com/mock/5cf9fc1ee43289695bb400cc/like"
    );
    this.$store.state.like_goods = goodsDatas.data.data.recom_list;
    console.log(this.$store.state.cart_goods);
  }
};
</script>


<style>

@import url(./assets/css/base.css);
#app {
  position: static;
  font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular,
    Hiragino Sans GB, Microsoft Yahei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #3c3c3c;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

</style>
