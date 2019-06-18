<template>
  <div data-v-3c2ff24f="" id="page-box" style="padding-top: 239px;">
    <div data-v-3c2ff24f="" class="page-wrap">
      <div data-v-3c2ff24f="" class="app-goods-con">
        <div data-v-3c2ff24f="" class="list-con">
          <div data-v-3c2ff24f="" class="app-goods-list">
            <div data-v-3c2ff24f="" id="J_classify" class="app-goods-classify">
              <div data-v-3c2ff24f="" class="classify-box">
                <a v-for="(item,index) in listclasses" :key="index" data-v-3c2ff24f="" data-log_code="m#bid=3323562.1&amp;page=promotion&amp;search_word=undefined" class="classify-item" @click="toggle(index)" :class="{'active':index == checkindex }" data-stat-id="e398745c25a7be70">
                  <span data-v-3c2ff24f=""><img data-v-3c2ff24f="" data-src="//i8.mifile.cn/b2c-mimall-media/96f96a1dcc30aad39635034d1ef0918c.png" :src="item.class_icon" lazy="loaded">{{item.class_name}}</span>
                </a>
              </div>
            </div>
            <div data-v-3c2ff24f="" v-for="(a,index2) in listlist_v2" :key="index2" class="item-box">
              <router-link to="Detail" data-v-3c2ff24f="" data-log_code="search_0_168#seid=20:0:0:0:0:0:0:0:0:0&amp;page=search&amp;pid=9781&amp;keyword=小米&amp;product_source=&amp;search_word=小米" class="item bd-bottom-1px" data-stat-id="e0689bd942370353"><img data-v-3c2ff24f="" class="item-img" data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d7a5b37db87530ce1f8c62c2b9b53da9.png" :src="a.body.image" lazy="loaded">
                <div data-v-3c2ff24f="" class="icon-left">
                  <img data-v-3c2ff24f="" src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dc366c6277333af59cd0fec8285b5677.png?w=120&amp;h=48"></div>
                <div data-v-3c2ff24f="" class="item-con">
                  <h3 data-v-3c2ff24f="" class="" v-text="a.body.name">
                    <!---->
                  </h3>
                  <p data-v-3c2ff24f="" class="item-desc" v-html="a.body.desc">
                    </p>
                  <div data-v-3c2ff24f="" class="item-specs-list">
                    <div data-v-3c2ff24f="" class="specs-item bd-right-1px">
                      <span data-v-3c2ff24f="" class="name" ></span>
                      <span data-v-3c2ff24f="" class="desc">骁龙730八核</span>
                    </div>
                    <div data-v-3c2ff24f="" class="specs-item bd-right-1px">
                      <span data-v-3c2ff24f="" class="name">三摄像头</span>
                      <span data-v-3c2ff24f="" class="desc">4800万+800万+1300万像素</span>
                    </div>
                    <div data-v-3c2ff24f="" class="specs-item bd-right-1px">
                      <span data-v-3c2ff24f="" class="name">超大屏</span>
                      <span data-v-3c2ff24f="" class="desc">6.39英寸</span>
                    </div>
                  </div>
                  <div data-v-3c2ff24f="" class="item-price">
                    <sub data-v-3c2ff24f="" v-text="a.body.price">¥</sub>
                    <!---->
                    <del data-v-3c2ff24f="">
                      <sub data-v-3c2ff24f="" v-text="a.body.market_price">¥</sub></del>
                    <span data-v-3c2ff24f="" class="icon-box"><img data-v-3c2ff24f="" src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f9034fa592b46b4e965fba89808c44d.png"><img data-v-3c2ff24f="" src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png"></span>
                  </div>
                  <div data-v-3c2ff24f="" class="item-count">
                    <span data-v-3c2ff24f="" v-if="a.body.comments_total == ' '"></span>
                    <span data-v-3c2ff24f="" v-else>{{a.body.comments_total}}条评价</span>
                    <span data-v-3c2ff24f="" v-if="a.body.satisfy_per == '' ">{{a.body.satisfy_per}}</span>
                    <span data-v-3c2ff24f="" v-else>{{a.body.satisfy_per}}满意</span>
                  </div>
                </div>
                <a data-v-3c2ff24f=""  data-stat-id="6c5a590409206c52" v-if="a.body.is_pk == false"></a>
                <a data-v-3c2ff24f="" class="item-pk"  data-stat-id="6c5a590409206c52" v-else>PK</a>
              </router-link>
              <!---->
              <!---->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      data: "",
      listclasses: [],
      listlist_v2: [],
      checkindex: 0,
    }
  },
  created() {
    this.getlist();
  },

  methods: {
    async getlist() {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf66186c51c246c3655bfa4/example/list"
      );
      this.listclasses = data.data.data.classes;
      // this.listlist_v2 = [...listlist_v2,...data.data.data];
      this.listlist_v2 = data.data.data.list_v2;

      // console.log(this.listclasses);
      // console.log(this.listlist_v2);
    },
    toggle(index) {
      this.checkindex = index;
    },
  }
});
</script>
<style scoped>
* {
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
}
.page-wrap[data-v-3c2ff24f] {
  position: relative;
  z-index: 1;
  width: 100%;
  overflow: auto;
  height: 100%;
  background: #fafafa;
}
.app-goods-list[data-v-3c2ff24f] {
  padding-bottom: 0.3rem;
}
*,
:after,
:before {
  box-sizing: inherit;
}
.app-goods-classify[data-v-3c2ff24f] {
  overflow-y: hidden;
  overflow-x: scroll;
  height: 3.133333rem;
  background: #f4f4f4;
  font-size: .32rem;
  white-space: nowrap;
  z-index: 2;
  padding: .346667rem 0;
  text-align: left;
  width: 100%;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.app-goods-classify[data-v-3c2ff24f]::-webkit-scrollbar {
  display: none;
}
.app-goods-classify .classify-item[data-v-3c2ff24f] {
  display: inline-block;
  background: #fff;
  padding-bottom: 0.1rem;
  width:1.786667rem;
  margin-left: .16rem;
  overflow-x: hidden;
  text-align: center;
  border-radius: 0.04rem;
}
.app-goods-classify .active span[data-v-3c2ff24f] {
  color: #ff6700;
}
.app-goods-classify .classify-item span img[data-v-3c2ff24f] {
  display: block;
  width: 1.706667rem;
  height:1.706667rem;
  margin: .08rem auto;
}

img[lazy="loaded"] {
  -webkit-animation: opacity01 0.3s;
  animation: opacity01 0.3s;
}
img {
  border-style: none;
}
.app-goods-classify .classify-item span[data-v-3c2ff24f] {
  display: inline-block;
  font-size: .293333rem;
}
.app-goods-list .item[data-v-3c2ff24f]:last-child {
  border-bottom: none;
}
.app-goods-list .item[data-v-3c2ff24f] {
  display: block;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  padding: .373333rem 0;
  padding-right: .373333rem;
  min-height: 3.373333rem;
  position: relative;
  background: #fff;
}
.bd-bottom-1px:after,
.bd-bottom-1px:before,
.bd-left-1px:after,
.bd-left-1px:before,
.bd-right-1px:after,
.bd-right-1px:before,
.bd-top-1px:after,
.bd-top-1px:before {
  content: "";
  display: block;
  position: absolute;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
:after,
:before {
  text-decoration: inherit;
  vertical-align: inherit;
}
.app-goods-list .item .item-img[data-v-3c2ff24f] {
  width:3.373333rem;
  height: 100%;
  position: relative;
}
img[lazy="loaded"] {
  -webkit-animation: opacity01 0.3s;
  animation: opacity01 0.3s;
}

img {
  border-style: none;
}
.app-goods-list .item .icon-left[data-v-3c2ff24f] {
  position: absolute;
  top: 0;
  left: 0;
}
.app-goods-list .item .icon-left img[data-v-3c2ff24f] {
    display: inline-block;
    height: .426667rem;
    margin-right: .1rem;
}

img {
    border-style: none;
}
.app-goods-list .item .item-con[data-v-3c2ff24f] {
    display: block;
    text-align: left;
    width: 5.6rem;
    margin-left: .306667rem;
}
.app-goods-list .item .item-con h3[data-v-3c2ff24f] {
    font-size: .293333rem;
    color: rgba(0,0,0,.87);
    line-height: .506667rem;
    margin-bottom: .08rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: 400;
}
.app-goods-list .item .item-con .item-desc[data-v-3c2ff24f] {
    font-size: .266667rem;
    line-height: .5rem;
    color: rgba(0,0,0,.54);
    /* margin-top: .066667rem; */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-bottom: .293333rem;
    
}
.app-goods-list .item .item-con .item-specs-list[data-v-3c2ff24f] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    /* margin:.293333rem 0 0; */
    margin-bottom: .4rem;
}
.app-goods-list .item .item-con .item-specs-list .specs-item[data-v-3c2ff24f] {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 1.866667rem;
}
.bd-bottom-1px, .bd-left-1px, .bd-right-1px, .bd-top-1px {
    position: relative;
}
.bd-bottom-1px:after, .bd-bottom-1px:before, .bd-left-1px:after, .bd-left-1px:before, .bd-right-1px:after, .bd-right-1px:before, .bd-top-1px:after, .bd-top-1px:before {
    content: "";
    display: block;
    position: absolute;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.app-goods-list .item .item-con .item-specs-list .specs-item .name[data-v-3c2ff24f] {
    color: #4a4a4a;
    font-size: .226667rem;
    line-height: .466667rem;
}
.app-goods-list .item .item-con .item-specs-list .specs-item span[data-v-3c2ff24f] {
    display: block;
    text-align: center;
}
.app-goods-list .item .item-con .item-specs-list .specs-item .desc[data-v-3c2ff24f] {
    color: rgba(0,0,0,.54);
    font-size: .266667rem;
    line-height: .346667rem;
    height:.346667rem;
    overflow: hidden;
}

.app-goods-list .item .item-con .item-specs-list .specs-item span[data-v-3c2ff24f] {
    display: block;
    text-align: center;
}
.app-goods-list .item .item-con .item-price[data-v-3c2ff24f] {
    color: #ff6700;
    font-size: .48rem;
    /* line-height: 1; */
    /* margin-top:.293333rem; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.app-goods-list .item .item-con .item-price sub[data-v-3c2ff24f] {
    font-size:.666667rem;
    top: .146667rem;
    margin-right: .093333rem;
    /* margin-bottom: .14666rem; */
}
sub {
    bottom: -0.333333rem;
}
sub, sup {
    /* font-size: 75%; */
    /* line-height: 0; */
    position: relative;
    vertical-align: baseline;
}
.app-goods-list .item .item-con .item-price .spe[data-v-3c2ff24f] {
    font-size: .32rem;
    display: inline-block;
    line-height: .56rem;
}

.app-goods-list .item .item-con .item-price span[data-v-3c2ff24f] {
    font-size: .4rem;
    line-height: .48rem;
}
.app-goods-list .item .item-con .item-price del[data-v-3c2ff24f] {
    margin-left: .05rem;
    color: rgba(0,0,0,.54);
    font-size: .293333rem;
    line-height: .56rem;
}
.app-goods-list .item .item-con .item-price del sub[data-v-3c2ff24f] {
    top: -0.026667rem;
    font-size: .186667rem;
}
.app-goods-list .item .item-con .item-price sub[data-v-3c2ff24f] {
    font-size: .373333rem;
    /* top:1.066667rem; */
    margin-right: .066667rem;
}
sub {
    bottom:-.333333rem;
}
sub, sup {
    /* font-size: 75%; */
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}
.app-goods-list .item .item-con .item-price .icon-box[data-v-3c2ff24f] {
    display: inline-block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    vertical-align: bottom;
    margin-top: -.02rem;
}
.app-goods-list .item .item-con .item-price span[data-v-3c2ff24f] {
    font-size: .3rem;
    line-height: .36rem;
}
.app-goods-list .item .item-con .item-price .icon-box img[data-v-3c2ff24f] {
    line-height: 1;
    vertical-align: bottom;
}
.app-goods-list .item .item-con .item-price img[data-v-3c2ff24f] {
    display: inline-block;
    height: .24rem;
    margin-left: .1rem;
    vertical-align: middle;
    margin-top: -2px;
}
img {
    border-style: none;
}
.app-goods-list .item .item-con .item-count[data-v-3c2ff24f] {
    color: rgba(0,0,0,.54);
    font-size: .266667rem;
    line-height: .32rem;
    margin-top: .133333rem;
}
.app-goods-list .item .item-pk[data-v-3c2ff24f] {
    width: .48rem;
    height: .48rem;
    line-height: .48rem;
    border: 1px solid rgba(0,0,0,.15);
    position: absolute;
    right: .32rem;
    font-size: .2rem;
    color: rgba(0,0,0,.54);
    border-radius: 50%;
    bottom: .32rem;
    text-align: center;
    background: #fff;
    z-index: 3;
}
.bd-bottom-1px:after {
    border-bottom: 1px solid #d9d9d9;
    left: 0;
    bottom: 0;
    width: 100%;
    -webkit-transform-origin: 0 bottom;
    transform-origin: 0 bottom;
}
.bd-bottom-1px:after, .bd-bottom-1px:before, .bd-left-1px:after, .bd-left-1px:before, .bd-right-1px:after, .bd-right-1px:before, .bd-top-1px:after, .bd-top-1px:before {
    content: "";
    display: block;
    position: absolute;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}

</style>
