<template>
<<<<<<< HEAD
  <div id="detail">
    <!-- 返回 分享 -->
    <header class="header">
      <div class="header_inner">
        <a href="javascript:;" @click="back()">
          <i class=" icon1 "></i>
        </a>
        <a href="javascript:; ">
          <i class="icon2 "></i>
        </a>
      </div>
    </header>

    <!-- 轮播图 -->
    <div class="swiper-container " style="height:11rem;width:100%; ">
      <div class="swiper-wrapper " style="height:11rem;width:100%; ">
        <div class="swiper-slide " style="height:11rem;width:100%; " v-for="(item,index) in slideshow " :key="index ">
          <img class="img " style="height:11rem;width:100%; " :src="item.img_url ">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination "></div>
    </div>

    <!-- 商品相关信息 -->
    <div class="goods_infos " :data-id="goodsInfos.goods_id">
      <div class="goods_name " v-text="goodsInfos.name"></div>
      <p class="goods_brief " v-text="goodsDesc.product_desc"></p>
      <div class="goods_price ">
        <div class="price cur_price" v-text="goodsInfos.price"></div>
        <div class="price origin_price" v-text="goodsInfos.market_price"></div>
      </div>
    </div>

    <!-- 产品配置 -->
    <div class="param">
      <div class="param_item" data-stat-id="af9f418d418164fd" v-for="(item,index) in goodsParameters" :key="index">
        <img :src="item.icon" class="pic">
        <div class="title1" v-text="item.name"></div>
        <div class="title2" v-text="item.value"></div>
      </div>
    </div>

    <!-- 促销 -->
    <div class="cuxiao ">
      <div class="left ">促销</div>
      <div class="right ">
        <div class="box ">
          <div>赠品</div>
          <div>黑鲨游戏手机 Helo 8GB+128GB 黑色 x 1</div>
        </div>
        <div class="box ">
          <div>赠品</div>
          <div>黑鲨游戏手机 Helo 8GB+128GB 黑色 x 1</div>
        </div>
        <div class="box ">
          <div>赠品</div>
          <div>黑鲨游戏手机 Helo 8GB+128GB 黑色 x 1</div>
        </div>
      </div>
    </div>
    <!-- 已选 -->
    <div class="choose_version ">
      <div class="choose_version_inner ">
        <div class="box ">
          <span>已选</span>
          <span>黑鲨游戏手机 Helo 8GB+128GB 黑色 x 1</span>
        </div>
        <div class="box ">
          <span>送至</span>
          <span>黑鲨游戏手机 Helo 8GB+128GB 黑色 x 1</span>
          <span></span>
        </div>
        <div class="box ">
          <span>小米自营</span>
          <span>小米自营</span>
          <span>小米自营</span>
        </div>
      </div>
    </div>
    <!-- 图片 -->
    <div class="pics ">
      <div class="pic " v-for="(item,index) in pics " :key="index ">
        <img :src="item.body.img_url " alt=" " style="width:100%; ">
      </div>
      <div class="more ">
        <a href="javascript:; ">更多参数</a>
      </div>
      <div>
        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc88fd153c1da1138fd621e00137d3e2.png?w=1080&h=427 " alt=" " style="width:100%; ">
      </div>
    </div>

    <!-- 为你推荐 -->
    <div class="goods ">
      <h2>为你推荐</h2>
      <ul class="goods_list">
        <li class="list_item" v-for="(item,index) in recommend" :key="index" data-id="item.product_id">
          <a href="javascript:; " class="goods_pic">
            <img :src="item.image_url" alt="#">
          </a>
          <div class="goods_infos1 ">
            <p class="goods_name" v-text="item.name"></p>
            <div class="goods_price">
              <span class="current_price">￥{{item.price}}</span>
              <span class="origin_price">￥{{item.market_price}}</span>
            </div>
          </div>
        </li>
      </ul>

    </div>
    <!-- 回到顶部 -->
    <Top style="bottom: 2.4rem; right: 0.466667rem; "></Top>
    <!-- foot -->
    <footer class="detail_foot ">
      <div class="foot_inner ">
        <a href="javascript:; " class="home_btn " @click="toHome()">
          <i class="icon "></i>
          <span>首页</span>
        </a>
        <a class="cart_btn " @click="toCart()">
          <i class="icon "></i>
          <span>购物车</span>
          <em class="bubble">{{goodsNum}}</em>
        </a>
        <div class="add_cart " @click="addCart(goodsInfos.goods_id,goodsInfos.name)">
          <a class="add_cart ">加入购物车</a>
        </div>
      </div>
    </footer>

  </div>

</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import Top from "../components/Top";

export default {
  data() {
    return {
      // 轮播图
      goods_id: "",
      slideshow: [],
      pics: [],
      productInfos: {},
      goodsInfos: {},
      goodsDesc: {},
      goodsParameters: [],
      recommend: [],
      goodsNum:0,
    };
  },

  components: {
    Top
  },

  async created() {
    // 不显示foot
    this.$store.state.footShow = false;
    // 获取商品id值
    this.goods_id = this.$route.query.goods_id;
    // 获取购物车数量
    this.getCartGoodsNum();

    // ajaxs获取数据
    const datas = await this.$axios(
      "https://www.easy-mock.com/mock/5cf9fc1ee43289695bb400cc/detail"
    );

    this.goodsInfos = datas.data.data.goods_info[0]; //商品相关信息
    this.slideshow = datas.data.data.goods_info[0].gallery_v3; //轮播图
    this.goodsDesc = datas.data.data.product_info; //商品描述
    this.goodsParameters = datas.data.data.goods_info[0].class_parameters.list;
    this.pics = datas.data.data.goods_tpl_datas["7385"].sections.slice(11, 29);
    this.pics.splice(16, 1);
    const recommendDatas = await this.$axios(
      "https://www.easy-mock.com/mock/5cf9fc1ee43289695bb400cc/recommond"
    );
    this.recommend = recommendDatas.data.data.recommend_list;

    // 轮播图
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
  },

  beforeMount: function() {},
  mounted: function() {},

  methods: {
    // 获取购物车商品总数量
    getCartGoodsNum(){
      var arr = JSON.parse(localStorage.getItem("cart"));
      // 是否包行商品
      if(arr){
        var num = 0;
        for(var i = 0; i < arr.length; i++){
          num += arr[i].num;
        }  
        this.goodsNum = num;
      }

    },
    //   返回
    back() {
      // 获取 之前页面的index
      var old = this.$store.state.back.old; //之前的页面
      var now = this.$store.state.back.now; //当前的页面

      // 根据获取到的index设置返回路径
      var path = "";
      if (old == 0) {
        path = "/";
      } else if (old == 1) {
        path = "/category";
      } else if (old == 2) {
        path = "/cart";
      } else if (old == 3) {
        path = "/user";
      }

      //跳转
      this.$router.push({
        path: path
      });

      // 重新设置
      this.$store.state.back.old = now;
      this.$store.state.back.now = old;
    },

    //  to首页
    toHome() {
      this.$router.push({ path: "/" });
    },

    // to购物车页
    toCart() {
      this.$router.push({ path: "/cart" });
    },

    // 加入购物车
    addCart(goods_id, goods_name) {

      /**********************修改本地存储***********************/ 
      //获取本地存储
      var arr = JSON.parse(localStorage.getItem("cart"));

      // 判断数组中是否包含该商品
      var isExist = false;
      var index = null;
      for (var i = 1; i < arr.length; i++) {
        if (arr[i].id == goods_id) {
          isExist = true;
          index = i;
          break;
        }
      }
      if (isExist) {
        //存在 商品数量加1
        arr[i].num++;
      } else {
        //不存在 添加商品
        var obj = {
          id: goods_id,
          name: goods_name,
          num: 1
        };
        arr.push(obj);
      }

      //将修改后数据存储到localStorage
      localStorage.setItem("cart", JSON.stringify(arr));

      this.getCartGoodsNum();

    }
  }
};
</script>




<style lang="scss" scoped>
#detail {
  position: relative;
  padding-bottom: 3.6rem;
  //   返回 分享
  .header {
    display: flex;
    flex-direction: column;
    align-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    height: 1.333333rem;
    width: 100%;
    background: transparent;

    .header_inner {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: auto 0.28rem;
      height: 0.826667rem;
      //   background: pink;
      // background: transparent

      a {
        width: 0.826667rem;
        height: 0.826667rem;
        border-radius: 50%;
        background: #626262;
        font-size: 0.4rem;
        color: #fff;
        line-height: 0.826667rem;
        text-align: center;

        .icon1 {
          display: inline-block;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABtElEQVR4Ae2btVYYQBBF4+6eNHHtYk1ccGtx9++AHqdFO6TFpcKdFpcKhwYfBtdZXOftOfcH7urIniIiYAASIAiCIAiCjp8gAEEQBEFnmTCmgnGDoPV40/LoYv5C0DKhtH4UQ9A8PrTxiCKCoEBBTjzOIHnlJBLhFgsV5KTimifyFeRk4h1E5CfIScdDkchLkJPNnNYuKFiQk8dc0h1qyGdOmSBHlSA/g5yr2oNVN0FOLXNLdzQvb6tG5pH2dIenIKeZeaI7HySHDx2CHFWCXAQ5rcwz7RlFT8PKea095eouyOll3mvPSXsLckaYD9qT9q6CnH7mk/aqhrtBzlftZR9JzjjzXXtdzJfkYam5cHiXcSR52GmvrMYxtRuIGWN+ofQMQZtyj3HCFtvdIW0BQeZrfgLX/DIehofiFwgyhxp9CDUQrG4LD6Q7dpcwewVBSLkiab+XeKHss/MXdwMKh5sf3DXMDQgyNy+UonlBloT2FzRQ7Qzvw27BQxMn2oDRSJ4CQfiKsCefWeIgaPOVFAlB+FC343dSN75krucsE85UMu4HegYBCIIgCIIgCIIgCIIgMAMUpMidp52UUAAAAABJRU5ErkJggg==);
        }
        .icon2 {
          display: inline-block;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAACm0lEQVRoBe3BT2jWdRwA4M/7vvaOLawORdA6iF6iokNZIkEWRJGJKM46GIanBhoeougfRPQHUogRHQo8VKzVkuEsRpcwKBChk7KEjOaWxRqDyDR633dzTxASe3+87vdeft+X4H2eiK6urv89FQMOm9HQMO0zO1Sic2x0Wtake6Iz7NTQSt2OSM9GDVdStyHSUnHaSiaVIyUD8myPlByW59NIyYw8ZyMlDXnqkZIleeqRknPyTEUqrvKMC/KMRBoe9YN2bIviucWX2nNKOYrlOkMWtKdmfRRJxaB5WT+a00rN9iiS+52Udd6zqtb4RtYp66M41hiTdckhN8ZlHjZsSkPdlBHblKMorvaGv2V9685IT8luv8qa8Xh0gg1OyPrLK3qjKKp2OeKchgXTRmxWin+5yUeWZI24OYpjk59kHbdWjxddkPWde6NIdlrQyrwpWbP2KEWR3KGmPXVvWR1F87X2jFsXxXO7dkx6MNLwnDx/2KsSqfhQnulIyVF5FiMlo/IsRkrelOdspOQhec57WiVSscqMfCfdF6nYrT2f6I80fKw9F72gGsVTNayVX7zkd83O2Bwp2GXKcos+cEOE673vkmZfWBfFU/GAVw0b856n9Md/3OW4ZjWv64vOUfKk3zT72WPRSa7xtgXNjrktOsmtvtJswZBro5MMmNFszh6luMxqT3jXEWOGDOiN4unzmppmJ9wdYZWX/Wm5efuVo3jW+lyzJYcc08qEvkjBI85oz4RSpKDqeRe1Y1+kot+IfHN6Ih2bfC/P1kjJO/IcjJQclWc0UjImz2ikZEieA5GSAXm2REp6zVvJrGqkZb+VDEZqyiZcybhSpKfPhFbG9UZnKNlnznKzBpWik/TY6qBRow7YohpdXV0d9A/qIDTTrnD0UAAAAABJRU5ErkJggg==);
        }
      }
    }
  }
  //   商品相关信息
  .goods_infos {
    padding-top: 0.626667rem;
    padding-left: 0.453333rem;
    padding-right: 0.453333rem;
    height: 3.666667rem;
    text-align: left;
    .goods_name {
      margin-bottom: 0.12rem;
      height: 0.546667rem;
      font-size: 0.546667rem;
      color: #000;
      line-height: 0.546667rem;
    }
    .goods_brief {
      margin-bottom: 0.36rem;
      font-size: 0.32rem;
      line-height: 0.506667rem;
      word-break: break-all;
      color: rgba(0, 0, 0, 0.54);
    }
    .goods_price {
      height: 0.48rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      //   align-content: flex-end;
      .cur_price {
        margin-right: 0.266667rem;
        height: 100%;
        font-size: 0.48rem;
        color: red;
        line-height: 0.48rem;
      }
      .origin_price {
        height: 100%;
        font-size: 0.28rem;
        color: gray;
        line-height: 0.68rem;
      }
    }
  }

  // 参数配置
  .param {
    height: 2.133333rem;
    color: #3c3c3c;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0 0.16rem;
    text-align: center;
    overflow-x: auto;
    -webkit-box-pack: start;

    .param_item {
      float: left;
      min-width: 2.346667rem;
      border-right: 0.013333rem solid gray;
      width: auto;
      padding: 0 0.266667rem;
      text-align: center;
      color: #3c3c3c;
      text-overflow: ellipsis;
      font-size: 0.28rem !important;
      white-space: nowrap; //强制文本在一行显示
      overflow: hidden; //溢出隐藏
      text-overflow: ellipsis; //溢出文本显示省略号

      .pic {
        display: block;
        margin: 0 auto;
        width: 0.533333rem;
        height: 0.533333rem;
      }
      .title1 {
        padding: 0.2rem 0;
        line-height: 0.2rem;
      }
      .title2 {
        display: inline;
        // width: 2.346667rem;;
        color: #676767;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }

  //
  /*   促销 start   */
  .cuxiao {
    margin: 0 0.453333rem;
    margin-bottom: 0.226667rem;

    border-radius: 8px;
    border: 1px solid #e5e5e5;
    height: 2.893333rem;
    padding: 0.506667rem 0;
    text-align: left;
    background: #fafafa;
    .left {
      float: left;
      width: 1.533333rem;
      font-size: 0.32rem;
      color: #000;
      text-align: center;
    }
    .right {
      float: left;
      .box {
        height: 0.346667rem;
        div {
          float: left;
          font-size: 0.32rem;
          color: #000;
          line-height: 0.346667rem;
          text-align: left;
          margin-bottom: 0.226667rem;
        }
        div:nth-child(1) {
          float: left;
          color: orangered;
          text-align: left;
        }
      }
    }
  }

  /*   促销 end   */
  /*  已选 start */
  .choose_version {
    margin-bottom: 0.226667rem;
    padding: 0 0.453333rem;
    .choose_version_inner {
      width: 100%;
      height: auto;
      background: #fafafa;
      border-radius: 8px;
      border: 1px solid #e5e5e5;
      .box {
        padding-left: 0.44rem;
        height: 1.053333rem;
        border-bottom: 1px solid #e5e5e5;
        text-align: left;
        span {
          font-size: 0.32rem;
          line-height: 1.04rem;
        }
        span:nth-child(1) {
          margin-right: 0.44rem;
          color: grey;
        }
      }
      .box:nth-last-child(1) {
        border-bottom: none;
        span {
          color: #000;
          margin-right: 0.266667rem;
        }
      }
    }
  }
  /* 已选 end */
  //   留言板 start
  //   .section-detail {
  //     .image_w_1080 {
  //       width: 7.2rem;
  //       img {
  //         display: block;
  //         width: 100%;
  //         height: auto;
  //             animation: opacity01 .3s;
  //       }
  //     }
  //   }
  // 留言板 end
  /*图片start*/
  .pics {
    margin-bottom: 0.893333rem;
    .more {
      height: 0.533333rem;
      border: 1px solid #fff;
      border-left: none;
      border-right: none;
      background: #000;
      a {
        font-size: 0.493333rem;
        color: #fff;
        line-height: 0.493333rem;
        margin-left: 0.266667rem;
      }
    }
  }
  /*图片end*/
  //   商品
  .goods {
    margin: 0 0.4rem;
    h2 {
      margin-bottom: 0.973333rem;
      height: 0.973333rem;
      font-size: 0.973333rem;
      color: #000;
      line-height: 0.973333rem;
      font-weight: 600;
      text-align: left;
    }

    .goods_list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      .list_item {
        width: 4.306667rem;
        height: 5.946667rem;
        // background: red;
        .goods_pic {
          display: block;
          margin-bottom: 0.306667rem;
          width: 100%;
          height: 4.306667rem;
          border-radius: 0.106667rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .goods_infos1 {
          margin-left: 0.36rem;

          .goods_name {
            margin-bottom: 0.24rem;
            height: 0.373333rem;
            font-size: 0.373333rem;
            line-height: 0.373333rem;
            color: #000;
            font-weight: 600;
            text-align: left;
            white-space: nowrap; //强制文本在一行显示
            overflow: hidden; //溢出隐藏
            text-overflow: ellipsis; //溢出文本显示省略号
          }

          .goods_price {
            text-align: left;
            height: 0.32rem;
            .current_price {
              margin-right: 0.266667rem;
              font-size: 0.32rem;
              color: red;
            }
            .origin_price {
              font-size: 0.213333rem;
              color: gray;
            }
          }
        }
      }
    }
  }

  //   foot
  .detail_foot {
    padding: 0 0.16rem 0.16rem;
    background: transparent;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;

    .foot_inner {
      background-color: hsla(0, 0%, 100%, 0.96) !important;
      width: 100%;
      height: 1.48rem;
      border: 1px solid #e5e5e5;
      border-radius: 0.16rem;
      overflow: hidden;
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
        0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12);
      display: flex;
      flex-direction: row;
      align-items: center;
      .home_btn {
        position: relative;
        display: block;
        text-decoration: none;
        width: auto;
        margin-left: 0.5rem;
        color: rgba(0, 0, 0, 0.54);
        .icon {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAk1BMVEUAAABxcXFxcXFwcHBxcXFwcHBvb29wcHBwcHBxcXFvb29wcHBubm5vb29vb29wcHBwcHBvb29wcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBycnJwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBvb29vb29wcHBwcHBwcHBubm5wcHB0dHRycnJ2dnY0KzjsAAAALnRSTlMAAgn0mv6+6cEcQdIlEg36rTcy5E0g7tXFu6GPhmwG3Kl4KbSTc1xXR8p/Zyxhwd65kwAAAr1JREFUSMftlumSojAUhYEYQemwg7K4r63dOXn/p5ubbqoVcByw5tfUnNLKMfB5b05AMZ7JJBkv6gt8mRZhKF6ta552uxMNr7DLi82YfVmSHcyKEYeU4CMxkKaQ0wDgQcCBIKXPg2KO5hJ+6XmlD8wjmhrAJjOAHUzyBwbMEjK92U8bsI9kyR+1/yTfc4s2utpZW/066y42NN2H9fb8e521aP0A9l6X7sY8WeuYU/I/q0h16OvJn0OPHGIbZcgK3YwTPQXrBfr6qmrFcPHrGJ6wxxjIrmQ7R64ZEB/JPo15lZB9tPWrJ6FTzGUrZq1m6LzUaXRRipnY4JZpdx8Coin0B/jHGMDIexaJNwIw/ujWnboAr9oxt0JfVhxwp2Qb7EnHvLifNWu8ed5Ch34iez/HwFdJh/1d6D9VaLAqH9wNW81sF0VQHKL25oRzDr+y9Kx+i4Jzjl2zrneJfamUb+8nrRTCjE4vxPfp2xwadqxGsAWX0me+lMjTZuepDQ7k2682XAl7xyTB5q3nEuD54XQNGGRgNXp6s8EYl25IPTsK7BhmTThh8EtB1jqQu7Zg6W5iqLEwxE6tTsb0vjJFVChemN/7VHE1pkunAb+Lc6x2QocaGm347V3Z0zrPj5VahS14NjHCxbaeaMNRTF9eeyuQWdKC3cntTuzAYSznXl3ZXEvWhfWBmm7D25mMoxpOXRVPH8G1OrC1VrysL+wDV3oJfWEajxzs+uWTGHxjmENgXZoVyfa8t7lyqHB/mEzqKIDZDFCz0BgEk9JRBiklWEDJDYPJLqdVPs/LxKNPA2HtTTERehgM179fNToY1jjJ6A939R/+B+EeegyPlz2fD9MujLkwrR7yjCiTswYc2TJz8nEf5e++dMQ9vByBS9VHUknOW08BaQDZV/rfuamwGvXVJu2EOETdu3yAjL+gX1S9Wc5duViwAAAAAElFTkSuQmCC);
          display: block;
          width: 0.533333rem;
          height: 0.533333rem;
          margin: 0 auto 0.04rem;
          background-color: transparent;
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: cover;
        }
        span {
          color: rgba(0, 0, 0, 0.54);
        }
      }
      .cart_btn {
        position: relative;
        display: block;
        text-decoration: none;
        width: auto;
        margin-left: 0.5rem;
        color: rgba(0, 0, 0, 0.54);
        .icon {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABHCAYAAACgTtGvAAADTUlEQVR4AWIsKCiYx8AAaNcegGu7ojCO56K2Gw3q3mZUa1Tbtjmobbsdq+2zbQ2fNYr5/GLbyf/5vRWdc7Ku9t3fzG8Qnnx373WyT5L0PPwYKb0Yh5eQUPGLkpx9fALGr/855hY1Dr1wk3MTsaiXEIBvCD9CJmS33sDkQOYyW9TAZNsV5ayoQnTj8GTYogamA0WwK8rDnDod59qidAb6nShFD/riTCtW4QG3RWV7KOo/JMOPeMtxuBFz8BOSgnCS3AS+832KNU5f7UJ0uVxRr6AcJuRdp0V1I99lUYuRDF+cOAaPohoyV8ui3Az005AMU9KJmXgJMr2iKA8D3bwsh0zWwKLsQE9xVpQ9HIdGW1QJ2uQXTZCictwU1YOCBFhRl0ImWxbldqCfhhTDV9Ru1MqivMypkOErKmvgWc8O9DScPHAXiaLs087BB7mXorajRWlF3YlS9GlDKe5U2Haet14vcpWK+i+MR6Bk/KdQVA9yRVGe59SpSEWsxQe3kS96MdpEUfpHmSg+htmNlxVWVC72JgiiMtBXQMTBY5jYyTk4Q84n8SjY/oogVpNKUTvQKFeULcrZqspAvEfuig6UaBd1ClINW1F56NYoSiZk4hnvyKLsQD8NybYoj2c8jaJKUSu/mWkP60RRnpNr8IpqwA6torLlnQ9pZg1yWZS988nrzlYvyoDtdxLS5c+mWZQpTzsvgS+cW68KECvKpDOeLEpx+4VM+fOUdlEm3PlkUbkgukXlGjDQLx647fSLyorzojJwoUJRxv4r0NG4H4vEHa8bSzEgQYwmtSgTJ++XgbjMDJSrrSiRbJiQTnwLEp6ilsGEfIwCEKWtJ/IXTsbbOAPxlG7k4xdMAglfUX34GjA3fsRGbFG2KFuUjS3KFmWLskXZonx4FPOwGfPxGHyIRoJ4GUuxGdNxu4cvol7Sf3gRB3IF7sX9eAZ9EX6cMg93iOt5FL/ik2itqJdBSYPmKbyOSOYLUZI8BN8VvaKGzytQiN71RKuo872/Xz3HIUXnevSLKsdwKUOk0oYGnevRL2oyhstUKETveqJV1N9Yg8GyDn9EYZjnY7DMxYRoFdWBW/AdStCFEnyPm9GKSKYW1+Ef7EQX8vE+HkEPHKUfkZb5KCDSBwMAAAAASUVORK5CYII=);
          display: block;
          width: 0.533333rem;
          height: 0.533333rem;
          margin: 0 auto 0.04rem;
          background-color: transparent;
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: cover;
        }
        span {
          color: rgba(0, 0, 0, 0.54);
        }
        em {
          position: absolute;
          min-width: 0.306667rem;
          line-height: 0.306667rem;
          height: 0.306667rem;
          box-sizing: border-box;
          padding: 0 0.05rem;
          font-size: 0.266667rem;
          overflow: hidden;
          text-align: center;
          border-radius: 0.28rem;
          background: #ed4d41;
          color: #fff;
          top: 0;
          left: 50%;
          -webkit-transform: translate3d(0.1rem, -20%, 0);
          transform: translate3d(0.1rem, -20%, 0);
          font-style: normal;
        }
      }
      .add_cart {
        margin-right: 0.32rem;
        margin-left: 0.4rem;
        text-align: right;
        flex: 1 1 auto;
        a {
          display: inline-block;
          width: auto;
          max-width: 4rem;
          overflow: hidden;
          padding: 0 0.48rem;
          height: 0.893333rem;
          line-height: 0.893333rem;
          border-radius: 0.32rem;
          outline: 0;
          background: #ff6700;
          color: #fff;
          text-align: center;
          font-size: 0.36rem;
        }
      }
    }
  }
}
</style>

=======
    <div>商品详情页</div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>
>>>>>>> a3c946ec3bc66720be29a54605a05624964a5ec2
