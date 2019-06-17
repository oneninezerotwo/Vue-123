<template>
  <div>
    <div data-v-bc186c1a id="app">
      <div data-v-bc186c1a class="app-shell app-shell-bottom-navigation">

        <!-- 引入Header组件 -->
        <Header :title="title"></Header>
        <div data-v-bc186c1a class="app-view-wrapper">
          <div data-v-06d70f2d data-v-bc186c1a class="container app-view app-view-with-header app-view-with-footer">
            <div data-v-06d70f2d class="list-navbar">
              <ul data-v-06d70f2d>
                <li @click="setFloorNavMountClick(index)" v-for="(pp,index) in  lists" :key="index" :class="{'active':index==num}" categoryid="653" data-v-06d70f2d>
                  <a data-v-06d70f2d data-stat-id="7afb86bd3d8804f9">
                    <span data-v-06d70f2d v-text="pp.category_name">新品</span>
                  </a>
                </li>
              </ul>
            </div>
            <div data-v-06d70f2d class="list-wrap">
              <div v-for="(pp,idx2) in lists" :key="idx2" data-v-06d70f2d class="list-item category0">
                <div data-v-06d70f2d class="component-list-main">
                  <!---->
                  <div class="cells_auto_fill category_item_big_pic" index="0">
                    <a class="exposure items"  data-stat-id="8df97ab0b51e65f3">
                      <img v-if="pp.category_list[0].body.items"  data-src="//i8.mifile.cn/v1/a1/c727b13a-cab6-70c9-5c94-79a30c5aee51!500x200.webp" :key="idx2" :src="pp.category_list[0].body.items[0].img_url">
                    </a>
                    <!---->
                  </div>
                  <!---->
                  <div name="m1" class="category_title category_item_title">
                    <span v-text="pp.category_list[1].body.category_name"></span>
                  </div>
                  <!---->
                  <div data-v-6b9822de class="category_group box-flex goods_list" index="2">
                    <div data-v-6b9822de v-if="pp.category_list[2]" class="goods_list_inner">
                      <div data-v-6b9822de class="product goods" v-for="(list3,idx3) in pp.category_list[2].body.items" :key="idx3">
                        <a data-v-6b9822de data-log_code="31wapcategorycategory_group001025#t=normal&amp;act=product&amp;page=category&amp;pid=10000151&amp;bid=3450059.1" class="exposure item" data-stat-id="18292e58117b1319">
                          <div data-v-6b9822de class="img goods_img">
                            <img data-v-6b9822de class="big" style="width: 1.2rem; height: 1.2rem;" data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7616c2ddc8ca4546caf1f48bc31b24c.png?thumb=1&amp;w=120&amp;h=120" :src="list3.img_url" lazy="loaded" @click="goToDetail(idx3)">
                            <!---->
                            <!---->
                          </div>
                          <div data-v-6b9822de class="name goods_name" v-text="list3.product_name"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Header from "../components/Header";
var timer_timer = null;
export default Vue.extend({
  data() {
    return {
      xiaoxiao: [],
      dada0: [],
      lists: [],
      btn: 0,
      floorIndex: 1,
      active: false,
      num: 0,
      title: [
        {
          content: "分类"
        }
      ]
    };
  },
  components: {
    Header
  },

  created() {
    this.getList();
    this.$store.state.footShow = true;//显示foot
  },
  mounted() {
    window.onscroll = e => {};
  },
  // mounted() {
  //   this.$nextTick(()=>{
  //     setTimeout(() => {
  //          this.initPage()

  //     }, 0.01);
  //   })

  //       },

  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    async getList() {
      this.$store.state.isLoading += 1;
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf6520f58e5451e010fa98a/example/xiaomilist"
      );
      this.$store.state.isLoading -= 1;
      console.log(data.data.data);

      this.lists = [...this.lists, ...data.data.data];
      // console.log(this.lists[0].category_list[0].body.items[0]);
    },
    setFloorNavMountClick(index) {
      var _this = this;
      let floor_item = document.getElementsByClassName("list-item"),
        floor_offsetTop = floor_item[index].offsetTop - floor_item[0].offsetTop,
        window_scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop,
        timer = {
          step: 100,
          times: 20,
          FLOOR_OFFSETTOP: floor_offsetTop
        };
      this.num = index;
      console.log(this.num);
      console.log({ index, offsetTop: timer.FLOOR_OFFSETTOP });
      // console.log( document.getElementById('list-navbar').getElementsByClassName('nav-btn')[0])
      if (window_scrollTop > floor_offsetTop) {
        _this.setFloorScrollArrowUp(timer);
      } else if (window_scrollTop == floor_offsetTop) {
        return false;
      } else {
        _this.setFloorScrollArrowDown(timer);
      }
    },
    /**
     * 设置楼层向上滚动
     * @params Object timer 定时器配置
     */
    setFloorScrollArrowUp(timer) {
      var _this = this;
      clearInterval(timer_timer);
      timer_timer = setInterval(() => {
        let window_scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (window_scrollTop <= timer.FLOOR_OFFSETTOP) {
          document.documentElement.scrollTop = timer.FLOOR_OFFSETTOP;
          document.body.scrollTop = timer.FLOOR_OFFSETTOP;
          clearInterval(timer_timer);
        } else {
          document.documentElement.scrollTop = window_scrollTop - timer.step;
          document.body.scrollTop = window_scrollTop + timer.step;
        }
      }, timer.times);
    },
    /**
     * 设置楼层向下滚动
     * @params Object timer 定时器配置
     */
    setFloorScrollArrowDown(timer) {
      var _this = this;
      clearInterval(timer_timer);
      timer_timer = setInterval(() => {
        let window_scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (window_scrollTop >= timer.FLOOR_OFFSETTOP) {
          document.documentElement.scrollTop = timer.FLOOR_OFFSETTOP;
          document.body.scrollTop = timer.FLOOR_OFFSETTOP;
          clearInterval(timer_timer);
        } else {
          document.documentElement.scrollTop = window_scrollTop + timer.step;
          document.body.scrollTop = window_scrollTop - timer.step;
        }
      }, timer.times);
    },
    /**
     * 监听窗口滚动楼层导航动态定位
     */
    floorSrcollAddEventListener() {
      var _this = this;
      var nav_item = document
          .getElementById("list-navbar")
          .getElementsByClassName("nav-btn"),
        floor_item = document.getElementsByClassName("list-item");
      console.log(nav_item);

      window.onscroll = function() {
        let window_scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        for (let i = 0, len = floor_item.length; i < len; i++) {
          let floor_offsetTop =
            floor_item[i].offsetTop - floor_item[0].offsetTop;
          if (window_scrollTop >= floor_offsetTop) {
            for (let n = 0, len = nav_item.length; n < len; n++) {
              _this.num = i;
            }
          }
        }
        console.log(this.num);
      };
    },
    goToDetail(id) {
      this.$router.push({
        path: "detail/",
        query: { goods_id: id }
      });
    },
    initPage() {
      var _this = this;
      _this.floorSrcollAddEventListener();
    }
  }
});
</script>
<style >
@import "../components/Category/yanshi.css";
.component-list-main1 {
  margin-top: 1.333333rem;
}
.aabbcc {
  border: none;
}
.pzpzpz {
  margin-top: 1.333333rem;
}
.yanse {
  color: orange;
}
</style>