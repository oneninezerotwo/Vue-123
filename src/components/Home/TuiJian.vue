<template>
    <div id="main">
        <!-- 轮播图 -->
        <Slideshow :slideshow="slideshow"></Slideshow>
        <!-- main1 新品发布 -->
        <div class="main1">
            <a class="item" href="javascript:;" v-for="(item,index) in aMainData1" :key="index">
                <img :src="item.img_url" alt="">
            </a>
        </div>
        <!-- 分割线 -->
        <div class="divider_line" index="5" style="height: 0.16rem; border-bottom: 0.16rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);">
        </div>
        <!-- main2三张图片 -->
        <div class="main2">
            <a href="javascript:;" v-for="(item,index) in aMainData2" :key="index">
                <img :src="item.img_url" alt="#">
            </a>
        </div>
        <!-- 分割线 -->
        <div class="divider_line" index="5" style="height: 0.16rem; border-bottom: 0.16rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);">
        </div>

        <!--  -->
        <div class="activity_box main3" v-for="(data,index) in aDatas" :key="index">
            <!-- 图片1-->
            <div class="big_img1">
                <a href="javascript:;;" v-for="(item,index) in data.big_img1.body.items" :key="index">
                    <img :src="item.img_url" alt="">
                </a>
            </div>
            <!-- 分割线 -->
            <div class="divider_line" index="7" style="height: 0.16rem; border-bottom: 0.16rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"></div>
            <!-- 图片2-->
            <div class="big_img2">
                <a href="javascript:;;" v-for="(item,index) in data.big_img2.body.items" :key="index">
                    <img :src="item.img_url" alt="">
                </a>
            </div>
            <!-- 分割线 -->
            <div class="divider_line" index="9" style="height: 0.04rem; border-bottom: 0.04rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"></div>
            <!-- 商品列表 -->
            <div class="goods_list">
                <a href="javascript:;" v-for="(item,index) in data.goods_list.body.items" :key="index" :data-id="item.product_id" @click="jumpDetailPage(item.product_id)">
                    <div class="img">
                        <img :src="item.img_url" alt="">
                    </div>
                    <div class="tag_icon" v-for="(item,index) in item.product_tag_array" :key="index">
                        <img :src="item" alt="#">
                    </div>
                    <div class="info">
                        <p class="name">{{item.product_name}}</p>
                        <p class="brief">{{item.product_brief}}</p>
                        <div class="price">{{item.product_price}}
                            <span>起</span>
                            <span class="price old">
                                <s>{{item.product_org_price}}</s>
                            </span>
                        </div>
                    </div>
                </a>
            </div>
            <!-- 分割线 -->
            <div class="divider_line" index="14" style="height: 0.02rem; border-bottom: 0.02rem solid rgb(206, 206, 206); background-color: rgb(206, 206, 206);"></div>
            <!-- main6 -->
            <div class="goods_enter" v-for="(item,index) in data.goods_enter.body.items" :key="index">
                <a href="javascript:;" class="enter_btn">{{item.action_title}} &gt;</a>
            </div>
            <!-- 分割线 -->
            <div class="divider_line" index="16" style="height: 0.16rem; border-bottom: 0.16rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"></div>

        </div>
        <!-- 米家智能 start-->
        <div class="activity_box main7" v-for="(data,index) in aMainData7" :key="index">
            <div class="big_img1">
                <a href="javascript:;;" v-for="(item,index) in data.big_img1.body.items" :key="index">
                    <img :src="item.img_url" alt="">
                </a>
            </div>
            <!-- 分割线 -->
            <div class="divider_line" index="7" style="height: 0.16rem; border-bottom: 0.16rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"></div>
            <!-- 图片2-->
            <div class="big_img2">
                <a href="javascript:;;" v-for="(item,index) in data.big_img2.body.items" :key="index">
                    <img :src="item.img_url" alt="">
                </a>
            </div>
            <!-- 分割线 -->
            <div class="divider_line" index="9" style="height: 0.04rem; border-bottom: 0.04rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"></div>
            <!-- 商品列表 -->
            <div class="goods_list">
                <a href="javascript:;" v-for="(item,index) in data.goods_list.body.items" :key="index" :data-id="item.product_id" @click="jumpDetailPage(item.product_id)">
                    <div class="img">
                        <img :src="item.img_url" alt="">
                    </div>
                    <div class="tag_icon" v-for="(item,index) in item.product_tag_array" :key="index">
                        <img :src="item" alt="#">
                    </div>
                    <div class="info">
                        <p class="name">{{item.product_name}}</p>
                        <p class="brief">{{item.product_brief}}</p>
                        <div class="price">{{item.product_price}}
                            <span>起</span>
                            <span class="price old">
                                <s>{{item.product_org_price}}</s>
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <!-- 米家智能 end -->
        <!-- 活动项目 start -->
        <div class="activity_items main8">
            <a href="javascript:;" v-for="(item,index) in aMainData8" :key="index">
                <img :src="item.img_url" alt="">
            </a>
        </div>
        <!-- 活动项目 end -->
        <!-- 分割线 -->
        <div class="divider_line" index="62" style="height: 0.16rem; border-bottom: 0.16rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"></div>
        <!-- 优惠 start -->
        <div class="main9 youhui">
            <a href="javascript:;" v-for="(item,index) in aMainData9" :key="index">
                <img :src="item.img_url" alt="">
            </a>
        </div>
        <!-- 优惠 end -->
        <!-- 了解小米 start -->
        <div class="goods_enter" v-for="(item,index) in aMainData10" :key="index">
            <a href="javascript:;" class="enter_btn">{{item.action_title}}</a>
        </div>
        <!-- 了解小米 end -->
        <div class="divider_line" index="16" style="height: 0.16rem; border-bottom: 0.16rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"></div>

    </div>
</template>
<script>
import Slideshow from "./Slideshow";
import { constants } from "fs";
export default {
  data() {
    return {
      //    轮播图
      slideshow: [],
      //    main1 新品发布
      aMainData1: [],
      //    main2 三张图片
      aMainData2: [],
      //
      aDatas: [],
      aMainData7: [],
      //    最后
      aMainData8: [],
      //    优惠
      aMainData9: [],
      //    走进小米
      aMainData10: []
    };
  },
  components: {
    Slideshow
  },
  methods: {
    jumpDetailPage(id) {
      console.log(id);
      this.$router.push({
        path: "/detail",
        query: { goods_id: id }
      });
    }
  },
  async created() {
    // ajaxs获取数据
    const datas = await this.$axios(
      "https://www.easy-mock.com/mock/5cf9fc1ee43289695bb400cc/page"
    );

    //轮播图
    this.slideshow = datas.data.data.data.sections[0].body.items;
    // main1 新品发布
    this.aMainData1 = datas.data.data.data.sections[1].body.items;
    // main2 三张图片
    this.aMainData2 = datas.data.data.data.sections[2].body.items;
    // 每日精选 -
    this.aDatas = datas.data.data.data.sections.slice(3, 7);
    this.aMainData7.push(datas.data.data.data.sections[7]);
    // this.aMain7 = datas.data
    // 最后商品列表
    this.aMainData8 = datas.data.data.data.sections[8].goods_list.items;
    // 优惠
    this.aMainData9 = datas.data.data.data.sections[9].body.items;
    // 走进小米
    this.aMainData10 = datas.data.data.data.sections[10].body.items;
  }
};
</script>

<style lang="scss" scoped>
#main {
  // 新品发布
  .main1 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    .item {
      display: block;
      width: 2rem;
      height: 2.106667rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  // 三张图片
  .main2 {
    position: relative;
    height: 7.066667rem;
    a {
      position: absolute;
      display: block;
      width: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    a:nth-child(1) {
      top: 0;
      left: 0;
      height: 100%;
    }
    a:nth-child(2) {
      top: 0;
      right: 0;
      height: 50%;
    }
    a:nth-child(3) {
      bottom: 0;
      right: 0;
      height: 50%;
    }

    .left {
      flex: 1;
      background: red;
      margin-right: 4px;
      a {
        display: block;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      a {
        height: 49%;
        display: block;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  /**************每日精选 start**************/

  .main3,
  .main4,
  .main5,
  .main6 {
    .big_img1 {
      height: 3.906667rem;

      a {
        display: block;
        height: 100%;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .big_img2 {
      height: 6.12rem;

      a {
        display: block;
        height: 100%;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .goods_list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      a {
        position: relative;
        display: block;
        width: 49%;
        height: 7.133333rem;
        .img {
          width: 100%;
          height: 5.053333rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .tag_icon {
          position: absolute;
          right: 0;
          bottom: 2.08rem;
          width: 1.24rem;
          height: 1.24rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .info {
          height: 2.08rem;
          padding: 0.333333rem 0.373333rem;
          text-align: left;
          .name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 0.4rem;
            color: rgba(0, 0, 0, 0.87);
            line-height: 0.4rem;
            margin-bottom: 0.106667rem;
          }
          .brief {
            margin-top: 0.06rem;
            font-size: 0.306667rem;
            line-height: 0.44rem;
            color: rgba(0, 0, 0, 0.54);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 0.106667rem;
          }
          .price {
            font-size: 0.28rem;
            color: #ea625b;
            height: 0.533333rem;
            line-height: 0.533333rem;
            position: relative;
            display: inline-block;
            padding-left: 0.5em;
            span {
              display: inline-block;
              margin-left: 0.04rem;
              font-size: 0.2rem;
            }
            .old {
              display: inline-block;
              margin: 0 0.1rem;
              font-size: 0.22rem;
              color: rgba(0, 0, 0, 0.54);
            }
          }
          .price:before {
            content: "\A5";
            position: absolute;
            left: 0;
            top: 0;
            font-size: 0.76em;
            text-decoration: none;
          }
        }
      }
    }
  }
  .main7 {
    .big_img1 {
      height: 3.906667rem;

      a {
        display: block;
        height: 100%;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .big_img2 {
      height: 6.12rem;

      a {
        display: block;
        height: 100%;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .goods_list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      a {
        display: block;
        width: 100%;
        height: 5.053333rem;
        .img {
          float: left;
          width: 50%;
          height: 5.053333rem;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .info {
          float: left;
          height: 5.053333rem;
          width: 50%;
          padding: 0.333333rem 0.373333rem;
          text-align: left;
          .name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 0.4rem;
            color: rgba(0, 0, 0, 0.87);
            line-height: 0.4rem;
            margin-bottom: 0.106667rem;
          }
          .brief {
            margin-top: 0.06rem;
            font-size: 0.306667rem;
            line-height: 0.44rem;
            color: rgba(0, 0, 0, 0.54);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 0.106667rem;
          }
          .price {
            font-size: 0.28rem;
            color: #ea625b;
            height: 0.533333rem;
            line-height: 0.533333rem;
            position: relative;
            display: inline-block;
            padding-left: 0.5em;
            span {
              display: inline-block;
              margin-left: 0.04rem;
              font-size: 0.2rem;
            }
            .old {
              display: inline-block;
              margin: 0 0.1rem;
              font-size: 0.22rem;
              color: rgba(0, 0, 0, 0.54);
            }
          }
          .price:before {
            content: "\A5";
            position: absolute;
            left: 0;
            top: 0;
            font-size: 0.76em;
            text-decoration: none;
          }
        }
      }
      a:nth-child(2n) {
        .img {
          float: right;
        }
        .info {
          float: right;
        }
      }
    }
  }

  .activity_items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    a {
      display: block;
      margin-bottom: 4px;
      background: gray;
      width: 4.973333rem;
      height: 6.666667rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .youhui {
    width: 100%;
    height: 3.88rem;
    a {
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .goods_enter {
    height: 1.4rem;
    width: 100%;
    .enter_btn {
      height: 100%;
      background: #fff;
      display: block;
      width: 100%;
      font-size: 0.426667rem;
      color: #888;
      line-height: 1.4rem;
      text-align: center;
    }
  }
}
</style>

