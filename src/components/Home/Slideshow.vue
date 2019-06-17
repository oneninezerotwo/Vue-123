<template>
  <div class="swiper-container" style="height:4.76rem;width:100%;">
    <div class="swiper-wrapper" style="height:4.76rem;width:100%;">
      <div class="swiper-slide" style="height:4.76rem;width:100%;" v-for="(item,index) in slideshow" :key="index">
        <img class="img" style="height:4.76rem;width:100%;" :src="item.img_url">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  props: {
    slideshow: {
      type: Array
    }
  },
  mounted: function() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      }
    });
  }
};
</script>

<style lang="scss" scoped>

</style>

