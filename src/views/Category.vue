<template>
<<<<<<< HEAD
    <div id="category">
        <!-- 头部 -->
        <header class="header">
            <div class="back_icon">
                <a href="javascript:;"></a>
            </div>
            <div class="title">分类</div>
            <div class="find_icon">
                <a href="javascript:;"></a>
            </div>
        </header>
        <!-- 主体 -->
        <main class="main">
            <!-- 选项卡title -->
            <div class="tabs_title">
                <ul class="tab_list">
                    <li class="list_item">
                        <a href="javascript:;">新品</a>
                    </li>
                </ul>
            </div>
            <!-- 选项卡内容 -->
            <div class="tabs_content">


            </div>
        </main>
    </div>
</template>
<script>
export default {
    created(){
        this.$store.state.footShow = true;
    }  
}
</script>
<style lang="scss" scoped>
#category{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // 头部
    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 1.333333rem;
        background: #f2f2f2;
        .title{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            display: block;
            height: 100%;
            background:red;
        }
        .back_icon,find_icon{

            a{
                display: block;
                width: .533333rem;
                height: .533333rem;
                background: pink;

            }
        }
       
    }
    // 主体
    .main{
        flex: 1;
        display: flex;
        flex-direction: row;
        .tabs_title{
            width: 2.106667rem;
            height: 100%;
            border-right: 2px solid grey;
        }
        .tabs_content{
            flex: 1;
        }
    }
}

</style>
=======
  <div>
    <div data-v-bc186c1a id="app">
      <div data-v-bc186c1a class="app-shell app-shell-bottom-navigation">
        <header data-v-266b4a99 data-v-bc186c1a class="app-header-wrapper app-shell-header" style>
          <div data-v-266b4a99 class="app-header-left">
            <a data-v-266b4a99 class="app-header-item" data-stat-id="978dac80bd9946f9">
              <i data-v-266b4a99 class="image-icons app-header-icon icon-back"  @click="back()"></i>
            </a>
            <!---->
          </div>
          <div data-v-266b4a99 class="app-header-middle">
            <div data-v-266b4a99 class="app-header-title">分类</div>
          </div>
          <div data-v-266b4a99 class="app-header-right">
            <a data-v-266b4a99 class="app-header-item" data-stat-id="5300f1466caf2f56">
              <i data-v-266b4a99 class="image-icons app-header-icon icon-search"></i>
            </a>
          </div>
        </header>
        <div data-v-bc186c1a class="app-view-wrapper">
          <div
            data-v-06d70f2d
            data-v-bc186c1a
            class="container app-view app-view-with-header app-view-with-footer"
          >
            <div data-v-06d70f2d class="list-navbar">
              <ul data-v-06d70f2d>
                <li
                
                    @click="setFloorNavMountClick(index)"
                  v-for="(pp,index) in  lists"
                  :key="index"
                  :class="{'active':index==num}"
                  categoryid="653"
                  data-v-06d70f2d
                >
                  <a  data-v-06d70f2d data-stat-id="7afb86bd3d8804f9">
                    <span data-v-06d70f2d v-text="pp.category_name">新品</span>
                  </a>
                </li>
              </ul>
            </div>
                    <div data-v-06d70f2d class="list-wrap">
          <div
          
            v-for="(pp,idx2) in lists"
            :key="idx2"
            data-v-06d70f2d
            class="list-item category0"
          >
            <div data-v-06d70f2d class="component-list-main">
              <!---->
              <div class="cells_auto_fill" index="0">
                <a
                  data-log_code="31wapcategorycells_auto_fill001001#t=ad&amp;act=product&amp;page=category&amp;pid=9144&amp;page_id=25&amp;bid=3002988.1&amp;adp=757&amp;adm=11018"
                  class="exposure items"
                  style="width: 5rem; height: 2rem;"
                  data-stat-id="8df97ab0b51e65f3"
                  >
                  <img
                    v-if="pp.category_list[0].body.items"
                    style="height: 2rem; width: 5rem;"
                    data-src="//i8.mifile.cn/v1/a1/c727b13a-cab6-70c9-5c94-79a30c5aee51!500x200.webp"
                    :key="idx2"
                    :src="pp.category_list[0].body.items[0].img_url"
                  >
                </a>
                <!---->
              </div>
              <!---->
              <div name="m1" class="category_title">
                <span v-text="pp.category_list[1].body.category_name"></span>
              </div>
              <!---->
              <div data-v-6b9822de class="category_group box-flex" index="2">
                <div data-v-6b9822de  v-if="pp.category_list[2]">
                  <div
                    data-v-6b9822de
                    class="product"
                    v-for="(list3,idx3) in pp.category_list[2].body.items"
                    :key="idx3"
                  >
                    <a
                      data-v-6b9822de
                      data-log_code="31wapcategorycategory_group001025#t=normal&amp;act=product&amp;page=category&amp;pid=10000151&amp;bid=3450059.1"
                      class="exposure item"
                      data-stat-id="18292e58117b1319"
                     
                    >
                      <div data-v-6b9822de class="img">
                        <img
                          data-v-6b9822de
                          class="big"
                          style="width: 1.2rem; height: 1.2rem;"
                          data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7616c2ddc8ca4546caf1f48bc31b24c.png?thumb=1&amp;w=120&amp;h=120"
                          :src="list3.img_url"
                          lazy="loaded"
                          @click="goToDetail(idx3)"
                        >
                        <!---->
                        <!---->
                      </div>
                      <div data-v-6b9822de class="name" v-text="list3.product_name"></div>
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
      num: 0
    };
  },

  created() {
    this.getList();
  },
  mounted() {
    window.onscroll = e => {
    
    };
  },
  // mounted() {
  //   this.$nextTick(()=>{
  //     setTimeout(() => {
  //          this.initPage()

  //     }, 0.01);
  //   })

  //       },
 
  methods: {
     back(){
        this.$router.go(-1);//返回上一层
    },
     async getList() {
         this.$store.state.isLoading += 1;
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf6520f58e5451e010fa98a/example/xiaomilist"
      );
       this.$store.state.isLoading -= 1;
      console.log(data.data.data);
 
      this.lists = [...this.lists,...data.data.data];
      // console.log(this.lists[0].category_list[0].body.items[0]);
    },
          setFloorNavMountClick (index) {
                var _this = this;
                let floor_item = document.getElementsByClassName('list-item'),
                    floor_offsetTop = floor_item[index].offsetTop - floor_item[0].offsetTop,
                    window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                    timer = {
                        step: 100,
                        times: 20,
                        FLOOR_OFFSETTOP: floor_offsetTop,
                    };
                    this.num = index;
  console.log(this.num)
                    console.log({index, offsetTop: timer.FLOOR_OFFSETTOP});
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
            setFloorScrollArrowUp (timer) {
                var _this = this;
                clearInterval(timer_timer);
                timer_timer = setInterval(() => {
                    let window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
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
            setFloorScrollArrowDown (timer) {
                var _this = this;
                clearInterval(timer_timer);
                timer_timer = setInterval(() => {
                    let window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
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
            floorSrcollAddEventListener () {
          
            var _this = this;
            var nav_item = document.getElementById('list-navbar').getElementsByClassName('nav-btn'),
                floor_item = document.getElementsByClassName('list-item');
                console.log(nav_item)

              window.onscroll = function () {
             
                let window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                for (let i = 0, len = floor_item.length; i < len; i++) {
                    let floor_offsetTop = floor_item[i].offsetTop - floor_item[0].offsetTop;
                    if (window_scrollTop >= floor_offsetTop) {
                        for (let n = 0, len = nav_item.length; n < len; n++) {
                            _this.num=i;
                        }
                    }
                }
                console.log(this.num)
            };
        },
        goToDetail(id){
          this.$router.push({
            path:'detail/'+id
            })
        },
        initPage () {
                var _this = this;
                _this.floorSrcollAddEventListener();
        }
            
      },

 

  
});
</script>
<style >
@import "../components/Category/yanshi.css";
.component-list-main1 {
  margin-top: 1.333333rem;
}
.aabbcc{
  border: none;
}
.pzpzpz {
  margin-top: 1.333333rem;
}
.yanse {
  color: orange;
}
</style>
>>>>>>> a3c946ec3bc66720be29a54605a05624964a5ec2
