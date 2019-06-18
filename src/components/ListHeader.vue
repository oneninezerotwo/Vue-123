<template>
  <div data-v-3c2ff24f="" data-v-bc186c1a="" class="app-search-page app-view">
    <div data-v-3c2ff24f="" class="showbg" style="display: none;"></div>
    <div data-v-3c2ff24f="" id="search-head" class="app-search-head fixed">
      <div data-v-7cbaca4a="" data-v-3c2ff24f="" class="app-search-head-input">
        <div data-v-7cbaca4a="" class="app-search">
          <router-link to="/Search" data-v-7cbaca4a="" class="header-btn" data-stat-id="8bc2ac9505456527">
            <i data-v-7cbaca4a="" class="image-icons app-header-icon icon-back"></i>
          </router-link>
          <div data-v-7cbaca4a="" class="search-item"><input data-v-7cbaca4a="" type="search" autocomplete="off" placeholder="搜索商品名称" autocapitalize="off"></div>
          <a data-v-7cbaca4a="" class="header-btn">
            <i data-v-7cbaca4a="" class="image-icons app-header-icon icon-search"></i>
          </a>
        </div>
        <!---->
      </div>
      <router-link to="/viewport" data-v-3c2ff24f=""  class="guide" data-stat-id="09b0482d6121a42f"><img data-v-3c2ff24f="" src="https://i8.mifile.cn/b2c-mimall-media/7e6f1f652ccc78e3bf84c2e85585a6f4.png?w=1080&amp;h=300&amp;bg=E8EDF1"></router-link>
      <div data-v-3c2ff24f="" class="app-nav">
        <div data-v-3c2ff24f="" class="nav-main">
          <a data-v-3c2ff24f="" @click="showCont" class="item active" data-stat-id="6792e8195e555b84">综合
            <i data-v-3c2ff24f="" class="icon icon-down active"></i>
          </a>
          <a data-v-3c2ff24f="" class="item">销量</a>
          <a data-v-3c2ff24f="" class="item">价格
            <span data-v-3c2ff24f="">
              <i data-v-3c2ff24f="" class="icon icon-up"></i>
              <i data-v-3c2ff24f="" class="icon icon-down"></i>
            </span>
          </a>
          <a data-v-3c2ff24f="" @click="showC" class="item active" data-stat-id="42f943ceba9c124c">筛选</a>
        </div>
        <div data-v-3c2ff24f="" v-if="show1" class="item-child">
          <div data-v-3c2ff24f="">
            <a data-v-3c2ff24f="" class="active" data-stat-id="3437fd74cb1fa18f">综合排序
              <em data-v-3c2ff24f=""></em>
            </a>
            <a data-v-3c2ff24f="" class="" data-stat-id="f91d47b708a1ed3b">新品优先
              <em data-v-3c2ff24f=""></em>
            </a>
          </div>
        </div>
      </div>
      <div data-v-3c2ff24f="" class="app-classes-head">
        <div data-v-3c2ff24f="" class="nav-specs">
          <a @click="tabsSwitch(inde)" data-v-3c2ff24f="" v-for="(tab,inde) in tabsName" :key="inde" data-log_code="m#bid=3323563.3&amp;page=promotion&amp;search_word=undefined" class="item border-1px " data-stat-id="ae8624c2b2c14c9e">
            <span data-v-3c2ff24f="">{{tab.name}}</span>
            <i data-v-3c2ff24f="" class="icon icon-down"></i>
          </a>
          <div data-v-3c2ff24f="" class="item-child" v-show="show2" style="display: none;">
            <div data-v-3c2ff24f="" class="box bd-top-1px bd-bottom-1px">
              <a data-v-3c2ff24f="" data-log_code="m#bid=3323563.3.0&amp;page=promotion&amp;search_word=undefined" class="bd-bottom-1px" data-stat-id="559d367474a10210" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-559d367474a10210', '', 'pcpid', 'm#bid=3323563.3.0&amp;page=promotion&amp;search_word=undefined']);">
                <em data-v-3c2ff24f=""></em>
                <p data-v-3c2ff24f="" class="name">三摄像头</p>
                <p data-v-3c2ff24f="" class="desc">后置相机拥有3个摄像头</p>
              </a>
              <a data-v-3c2ff24f="" data-log_code="m#bid=3323563.3.1&amp;page=promotion&amp;search_word=undefined" class="bd-bottom-1px" data-stat-id="ddedabc62582809b" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-ddedabc62582809b', '', 'pcpid', 'm#bid=3323563.3.1&amp;page=promotion&amp;search_word=undefined']);">
                <em data-v-3c2ff24f=""></em>
                <p data-v-3c2ff24f="" class="name">双摄像头</p>
                <p data-v-3c2ff24f="" class="desc">后置相机拥有2个摄像头</p>
              </a>
              <a data-v-3c2ff24f="" data-log_code="m#bid=3323563.3.2&amp;page=promotion&amp;search_word=undefined" class="bd-bottom-1px" data-stat-id="197e5f01f0bbd03c" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-197e5f01f0bbd03c', '', 'pcpid', 'm#bid=3323563.3.2&amp;page=promotion&amp;search_word=undefined']);">
                <em data-v-3c2ff24f=""></em>
                <p data-v-3c2ff24f="" class="name">高清拍摄</p>
                <p data-v-3c2ff24f="" class="desc">后置相机在1200万像素以上</p>
              </a>
            </div>
            <div data-v-3c2ff24f="" class="btn-box">
              <a data-v-3c2ff24f="" href="javascript:;" class="btn btn-white" data-stat-id="6c763bcd8f559245" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-6c763bcd8f559245', 'javascript:', 'pcpid', '']);">重置</a>
              <a data-v-3c2ff24f="" href="javascript:;" class="btn" data-stat-id="933f4b81171ce604" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-933f4b81171ce604', 'javascript:', 'pcpid', '']);">确定</a>
            </div>
          </div>
          <div data-v-3c2ff24f="" class="item-child" style="display: none;">
            <div data-v-3c2ff24f="" class="box bd-top-1px bd-bottom-1px">
              <a data-v-3c2ff24f="" data-log_code="m#bid=3323563.1.0&amp;page=promotion&amp;search_word=undefined" class="bd-bottom-1px" data-stat-id="096ee7016d538db8">
                <em data-v-3c2ff24f=""></em>
                <p data-v-3c2ff24f="" class="name">超大屏</p>
                <p data-v-3c2ff24f="" class="desc">屏幕超过6英寸</p>
              </a>
              <a data-v-3c2ff24f="" data-log_code="m#bid=3323563.1.1&amp;page=promotion&amp;search_word=undefined" class="bd-bottom-1px" data-stat-id="fc3d54dfffe1b915">
                <em data-v-3c2ff24f=""></em>
                <p data-v-3c2ff24f="" class="name">中小屏</p>
                <p data-v-3c2ff24f="" class="desc">屏幕小于6英寸</p>
              </a>
            </div>
            <div data-v-3c2ff24f="" class="btn-box">
              <a data-v-3c2ff24f="" href="javascript:;" class="btn btn-white" data-stat-id="6c763bcd8f559245" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-6c763bcd8f559245', 'javascript:', 'pcpid', '']);">重置</a>
              <a data-v-3c2ff24f="" href="javascript:;" class="btn" data-stat-id="933f4b81171ce604" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-933f4b81171ce604', 'javascript:', 'pcpid', '']);">确定</a>
            </div>
          </div>
          <div data-v-3c2ff24f="" class="item-child" style="display: none;">
            <div data-v-3c2ff24f="" class="box bd-top-1px bd-bottom-1px">
              <a data-v-3c2ff24f="" data-log_code="m#bid=3323563.5.0&amp;page=promotion&amp;search_word=undefined" class="bd-bottom-1px" data-stat-id="17a1fce17e30a092" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-17a1fce17e30a092', '', 'pcpid', 'm#bid=3323563.5.0&amp;page=promotion&amp;search_word=undefined']);">
                <em data-v-3c2ff24f=""></em>
                <p data-v-3c2ff24f="" class="name">极速畅玩</p>
                <p data-v-3c2ff24f="" class="desc">运行内存在5GB以上</p>
              </a>
              <a data-v-3c2ff24f="" data-log_code="m#bid=3323563.5.1&amp;page=promotion&amp;search_word=undefined" class="bd-bottom-1px" data-stat-id="9e8b46d73fd616fd" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-9e8b46d73fd616fd', '', 'pcpid', 'm#bid=3323563.5.1&amp;page=promotion&amp;search_word=undefined']);">
                <em data-v-3c2ff24f=""></em>
                <p data-v-3c2ff24f="" class="name">高速</p>
                <p data-v-3c2ff24f="" class="desc">运行内存为4GB</p>
              </a>
              <a data-v-3c2ff24f="" data-log_code="m#bid=3323563.5.2&amp;page=promotion&amp;search_word=undefined" class="bd-bottom-1px" data-stat-id="3064f24164281e60" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-3064f24164281e60', '', 'pcpid', 'm#bid=3323563.5.2&amp;page=promotion&amp;search_word=undefined']);">
                <em data-v-3c2ff24f=""></em>
                <p data-v-3c2ff24f="" class="name">流畅</p>
                <p data-v-3c2ff24f="" class="desc">运行内存为3GB</p>
              </a>
              <a data-v-3c2ff24f="" data-log_code="m#bid=3323563.5.3&amp;page=promotion&amp;search_word=undefined" class="bd-bottom-1px" data-stat-id="9ab276d479fc5c5b" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-9ab276d479fc5c5b', '', 'pcpid', 'm#bid=3323563.5.3&amp;page=promotion&amp;search_word=undefined']);">
                <em data-v-3c2ff24f=""></em>
                <p data-v-3c2ff24f="" class="name">实用</p>
                <p data-v-3c2ff24f="" class="desc">运行内存在3GB以下</p>
              </a>
            </div>
            <div data-v-3c2ff24f="" class="btn-box">
              <a data-v-3c2ff24f="" href="javascript:;" class="btn btn-white" data-stat-id="6c763bcd8f559245" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-6c763bcd8f559245', 'javascript:', 'pcpid', '']);">重置</a>
              <a data-v-3c2ff24f="" href="javascript:;" class="btn" data-stat-id="933f4b81171ce604" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-933f4b81171ce604', 'javascript:', 'pcpid', '']);">确定</a>
            </div>
          </div>
          <div data-v-3c2ff24f="" class="item-child" style="display: none;">
            <div data-v-3c2ff24f="" class="box bd-top-1px bd-bottom-1px">
              <a data-v-3c2ff24f="" data-log_code="m#bid=3323563.4.0&amp;page=promotion&amp;search_word=undefined" class="bd-bottom-1px" data-stat-id="4b2aafb6789ae379" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-4b2aafb6789ae379', '', 'pcpid', 'm#bid=3323563.4.0&amp;page=promotion&amp;search_word=undefined']);">
                <em data-v-3c2ff24f=""></em>
                <p data-v-3c2ff24f="" class="name">超长待机</p>
                <p data-v-3c2ff24f="" class="desc">电池容量在3500mAh以上</p>
              </a>
              <a data-v-3c2ff24f="" data-log_code="m#bid=3323563.4.1&amp;page=promotion&amp;search_word=undefined" class="bd-bottom-1px" data-stat-id="afc17ff4ad0b25f3" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-afc17ff4ad0b25f3', '', 'pcpid', 'm#bid=3323563.4.1&amp;page=promotion&amp;search_word=undefined']);">
                <em data-v-3c2ff24f=""></em>
                <p data-v-3c2ff24f="" class="name">持久待机</p>
                <p data-v-3c2ff24f="" class="desc">电池容量在2000mAh-3500mAh之间</p>
              </a>
            </div>
            <div data-v-3c2ff24f="" class="btn-box">
              <a data-v-3c2ff24f="" href="javascript:;" class="btn btn-white" data-stat-id="6c763bcd8f559245" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-6c763bcd8f559245', 'javascript:', 'pcpid', '']);">重置</a>
              <a data-v-3c2ff24f="" href="javascript:;" class="btn" data-stat-id="933f4b81171ce604" onclick="_msq.push(['trackEvent', 'b8e4456b21f33db1-933f4b81171ce604', 'javascript:', 'pcpid', '']);">确定</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div data-v-3c2ff24f="" class="filter-wrap" :class="{'show':isshow}">
      <div data-v-3c2ff24f="" class="filter-bg" @click="isshow = false"></div>
      <div data-v-3c2ff24f="" class="filter-box">
        <div data-v-3c2ff24f="" class="filter-con">
          <div data-v-3c2ff24f="" class="con filter-main">
            <div data-v-3c2ff24f="" class="filter-child">
              <div data-v-3c2ff24f="" class="filter-head">
                <span data-v-3c2ff24f="" class="address-infor">
                  <i data-v-3c2ff24f="" class="icon-location"></i>选择配送地址</span>服务</div>
              <div data-v-3c2ff24f="" class="filter-list service-box">
                <a data-v-3c2ff24f="" v-for="(l,indexl) in list" :key="indexl" class="filter-item" data-stat-id="ca7b6aa183f1a575">{{ l.name}}</a>

              </div>
            </div>
            <div data-v-3c2ff24f="" class="filter-head">
              <span data-v-3c2ff24f="" class="icon icon-down"></span>分类</div>
            <div data-v-3c2ff24f="" class="filter-list hide">
              <a data-v-3c2ff24f="" v-for="(f,indexf) in warp" :key="indexf" class="filter-item " :class="{active : active == f.class_name}" @click="selected(f.class_name)" data-stat-id="c60292bde31233f3">{{f.class_name}}</a>
            </div>
          </div>
          <div data-v-3c2ff24f="" class="con">
            <div data-v-3c2ff24f="" class="filter-child" v-for="(c,indexc) in adparameters" :key="indexc">
              <div data-v-3c2ff24f="" class="filter-head">
                <span data-v-3c2ff24f="" class="icon icon-down" @click="showText()"></span>{{c.parameter_name}}</div>
              <div data-v-3c2ff24f="" class="filter-list" :class="{hide : hide}">
                <a data-v-3c2ff24f="" class="filter-item" v-for="(k,indexk) in c.rules" :key="indexk" >{{k.name}} </a>
              </div>
            </div>
          </div>
        </div>
        <div data-v-3c2ff24f="" class="filter-btn">
          <a data-v-3c2ff24f="" href="javascript:;" class="btn btn-white">重置</a>
          <a data-v-3c2ff24f="" href="javascript:;" class="btn">确定</a>
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
      show1: false,
      isshow: false,
      tabsName: [
        {
          name: "拍照像素",
          isActive: false
        },
        {
          name: "屏幕大小",
          isActive: false
        },
        {
          name: "运行内存",
          isActive: false
        },
        {
          name: "电池续航",
          isActive: false
        }
      ],
      show2: false,
      list: [],
      warp: [],
      adparameters: [],
      rules: [],
      hide: true,
      active: "",

 
    };
  },
  created() {
    this.getlist();
  },

  methods: {
    async getlist() {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf66186c51c246c3655bfa4/example/list"
      );
      this.list = data.data.data.filter_tags;
      this.warp = data.data.data.classes;
      this.adparameters = this.warp[0].class_parameters;

      console.log(data.data.data);
      console.log(this.list);
      console.log(this.warp);
      console.log(this.adparameters);

      // for(let i in this.warp){
      //   // this.rules= (this.adparameters)[i].rules;
      //   // this.adparameters = (this.warp[0].class_parameters)
      // }
    },
    showCont: function() {
      this.show1 = !this.show1;
    },
    showC: function() {
      this.isshow = !this.isshow;
    },
    showHide: function() {
      this.hide = !this.hide;
    },
    selected(name) {
      this.active = name;
    },
    IsActive(indexk) {
      this.kshow = !this.kshow;
    },
    // tabsSwitch: function(tabIndex) {
    //  var tabCardCollection = document.querySelectorAll(".item-child"),
    //   len = tabCardCollection.length;
    //  for(var i = 0; i < len; i++) {
    //   tabCardCollection[i].style.display = "none";
    //   this.tabsName[i].isActive = false;
    //  }
    //  this.tabsName[tabIndex].isActive = true;
    //  tabCardCollection[tabIndex].style.display = "block";
    // }
    tabsSwitch: function() {
      this.show2 = !this.show2;
    },
    showText: function (index, id) {
				if (this.isShow === index) {
					this.isShow = -1;  //在这里就将它赋值为-1  由于：-1 !=  index 所以其他内容隐藏 ，被点击的则打开
				} else {
					this.isShow = index;    //这里是把index赋值给isShow，isShow=index则显示
				}
			}
  }
});
</script>
<style scoped>
* {
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
}
.app-shell .app-view-wrapper .app-view[data-v-3c2ff24f] {
  height: 100%;
  overflow: hidden;
  background: #fafafa;
}
.app-shell .app-view-wrapper .app-view[data-v-bc186c1a] {
  background: #fff;
  color: #3c3c3c;
}
.app-classes-head .nav-specs .item.active[data-v-3c2ff24f] {
  color: #ff6700;
  background: #fff;
  padding-bottom: 0.8rem;
  margin-top: 0;
}
.app-search-page[data-v-3c2ff24f] {
  width: 7.2rem;
  margin: 0 auto;
}
.showbg[data-v-3c2ff24f] {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
}
.app-search-head.fixed[data-v-3c2ff24f] {
  position: fixed;
  /* left: 50%; */
  /* margin-left: -3.6rem; */
  /* width: 7.2rem; */
  top:0;
  left:0;
  width: 100%;
}
.app-search-head[data-v-3c2ff24f] {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background: #fafafa;
  -webkit-transition: -webkit-transform 0.5s
    cubic-bezier(0.25, 0.46, 0.33, 0.98);
  transition: -webkit-transform 0.5s cubic-bezier(0.25, 0.46, 0.33, 0.98);
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.33, 0.98);
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.33, 0.98),
    -webkit-transform 0.5s cubic-bezier(0.25, 0.46, 0.33, 0.98);
}
.app-search-head-input[data-v-7cbaca4a] {
  width: 100%;
}
.app-search[data-v-7cbaca4a] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 1.106667rem;
  width: 100%;
}
.app-search .header-btn[data-v-7cbaca4a] {
  display: block;
  margin: 0 .466667rem;
  color: #666;
}
.app-search .app-header-icon.icon-back[data-v-7cbaca4a] {
  width: 0.5rem;
  height: 0.5rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABfUlEQVR4AWL4//8/oH1zzA4gCMJgbNv239i2beP+R8gXczpmV79XB9ja3UEDDJCAIAQhCEF/TBAgCEEIUkSKFrEoahD0VFCdOLtmWxQh6E5Okzh7xCyC7n85T+lyL0jREJDT434NMr6cAde7mLHmXDDkfptX1AfkjPk+B9lyRn0fFO01Z8r9SVrRGJAzLaL9CrJ/q4XvlnPBX5IT4/qyqqgJyFkWcX5v8/aXsyKSXKc7FLUBORuGHAeC7K18y5DjQ5CiOiBnU6T6zSjav9WWSPebcrV3qz2R4Tcnba85hyLTb9Le/nL2RY7fqsbLcnJdl30MOSeiwG9dzD4hX1DitnCoSBDlhpwy15VVRY9YDvxWhd/xYAjiF2ORLnYviG3+45dTDopcNbisftvvRrrjlQmzNAeCSLmStP9OSZR9KBx+6cK95LH0TPMC7S80UNGCRxMnbcA0kg8iiFEEhlkYh2Kg7vd/STvPj2Qy1NvKUO+PgCAEIQhBCEIQghAE53kdVfEUUHFYAAAAAElFTkSuQmCC);
}
.app-search .app-header-icon[data-v-7cbaca4a] {
  display: block;
  width: 0.6rem;
  height: 0.6rem;
}
.image-icons {
  display: inline-block;
  width: 0.72rem;
  height: 0.72rem;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}
.search-item[data-v-7cbaca4a] {
  background: #fff;
  width: 100%;
  height: .706667rem;
}
.search-item input[data-v-7cbaca4a] {
  border: .026667rem solid #e5e5e5;
  border-radius: 0.04rem;
  width: 100%;
  /* padding: 0 0.2rem; */
  outline: 0;
  font-size: .4rem;
  font-weight: 400;
  height: 100%;
  line-height: .653333rem;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
button,
input {
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
.app-search .header-btn[data-v-7cbaca4a] {
  display: block;
  margin: 0 0.2rem;
  color: #666;
}
.app-search .app-header-icon.icon-search[data-v-7cbaca4a] {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQVQYGe3Bf0yUdRwH8I9GpBtZVpul0y1/ZD8sKzdXbupMh3Pq0jWtzbVs9YfL8scfLq02h1m52R3c832+z/d5HrjjAOH4KQhy4MQD4eS4gXiCePLjBIwU8VeCOAPy3dZf/mEpz56zW93rRRQVFRUVFfU/dGFM+UTHlOrXzq/yf9HwefeS0plpk4/F0b+je5x/UZXIPZV+URmRwMEhQfs940K+ry6hYTY9Wu0Tyze6yxVYwSGgQoUKFSpUCMiwwH6zPLVqZVcsPRrlSwvqVVghwMGhQYMOHTp0aNDAIcBhhQ53UcWLFH4127QrElQwqEi7keUu21W/vnl5+/y2dwKraj8p3pdZ7bzDIYNDQmqweQWFU/cTpU4GAQUMro6SbR2z6D4aFuRb0m4yqFCgDXq3U7hciynOSYQOBertgr2np9I/ODHPlSlDg4AN3m8oPKq+t0GHguSexg/ogepjPbvZkIACbci3lsx3Yr06rECGvSO4gB6SbxMb5pBhDwZeInN1vWJvY5DB+5uX0ShUfmeDAhtKCkOxZCZPogUCMo5vpFEJxRSkcKiQ0BBP5gnMSu+RIaGokEatc2ZqSEBCqasnhszi32SFgBYKLiQDqnfI0CAGz79B5uibkOOVIZCXTob0TrK3qeA4tpfM0TmPQYO427CBDHLrDAoO+H+LITM0r+VQkRy88DwZFFiXBAWOS73PkRl8WzgU5JVVjyeDQi+LPhmOW63zyAxH9yvgKE31jCGDKqZltTPYh+rXkBmKXAIyKpLIsJpn8hskpMDzJZmhKFuAoXIfGeaPO+i1IQXHtpIZPHsVyCgXZJhnUm6TBPtI3UdkBv9mDo5DOVUxZFDpjAO/yHDcCcSTGVreZxDI8F58kgxqelMe5LD3h+aQGbrnsBENYrDjbTKobnMSFLh8A7Fkhpa4Ao8MgcpdZEjTuAI3h4DnRzJLYEMiODKPX3qKDAjOF30a+N3gYjJLz+SMs0lQUL2ZDDiYqkDCQffFcWSeih8sYEht/HUqjVJgjehTIOH0CjJT99QDbRJsKCxtG0+j0PWqvUOGFYdzyGxnlyVf5ZCQ9xM9tJPP5jbaIMEZ7J5B5jv6FR/iUPsP778eRw+hc4ajhEGBs+NkPIXDmTFuRyI4FBSW9EyhB2h9N+O0AgEFR5MoXK49XilzMDBktBZ+Fnia/oZ/ev6elKscAioUOEPtCyl8POucfRwSZOTVunZWxg9MoHtcnuxek5mQE7JBhoAODQIStBttCyh8OubmHEke4LBAhXM4uykt35mWb8212bPSi7M6nX9wWCGQfL2M9U73JjBw2KBfbl1M4VPxmG9tdl76gA0WWCBBhQYNKiRY8TMYMnuzXdVL6S/H90hQwGHvObeEwiv4Vpn1UG1ea9ZV510dOhxIG8npOnykNKF5Lt2jZjeDCgXJl4PLKdx6xja+4Hm94D3Hh471rhXFi+qm0X3UfMsgwKDeOreUIoP3awYFEsTNs8soMnh3MnAw6FdallNkOLGLQUBBcl/LSooMtTtkqODQBlpWU2TwbZGhgEG5fWY1RQbfVhkcDKK/eTVFhtrtMjg49Butiygy+LfKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII=);
}
.app-search .app-header-icon[data-v-7cbaca4a] {
  display: block;
  width: .666667rem;
  height:.666667rem;
}
.image-icons {
  display: inline-block;
  width: 0.72rem;
  height: 0.72rem;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}
.guide[data-v-3c2ff24f] {
  width: 100%;
  display: block;
}
.guide img[data-v-3c2ff24f] {
  width: 100%;
}
.app-nav[data-v-3c2ff24f] {
  width: 100%;
  position: relative;
  z-index: 2;
}
.app-nav .nav-main[data-v-3c2ff24f] {
  background: #fafafa;
  height: .96rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  font-size: .373333rem;
  line-height: .96rem;
  width: 100%;
  z-index: 4;
}
.app-nav .nav-main .active[data-v-3c2ff24f] {
  color: #ff6700;
}
.app-nav .nav-main .item[data-v-3c2ff24f] {
  text-align: center;
  color: rgba(0, 0, 0, 0.54);
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  position: relative;
  display: inline-block;
}
.app-nav .nav-main .item span[data-v-3c2ff24f] {
  display: inline-block;
  position: relative;
  margin-left: 0.1rem;
}
.app-nav .nav-main .active[data-v-3c2ff24f] {
  color: #ff6700;
}
.app-nav .icon-down.active[data-v-3c2ff24f] {
  border-color: #ff6700 transparent transparent;
}

.app-nav .icon-down[data-v-3c2ff24f] {
  border-width: 0.08rem 0.08rem 0;
  border-color: #bdbdbd transparent transparent;
}
.app-nav .icon[data-v-3c2ff24f] {
  width: 0;
  height: 0;
  border-style: solid;
  display: inline-block;
  margin-left: 0.1rem;
  vertical-align: middle;
}
.app-nav .nav-main .item span .icon-up[data-v-3c2ff24f] {
  top: -0.23rem;
}
.app-nav .nav-main .item span .icon[data-v-3c2ff24f] {
  position: absolute;
  left: 0;
  margin-left: 0;
}
.app-nav .icon-up[data-v-3c2ff24f] {
  border-width: 0 0.08rem 0.08rem;
  border-color: transparent transparent #bdbdbd;
}
.app-nav .icon[data-v-3c2ff24f] {
  width: 0;
  height: 0;
  border-style: solid;
  display: inline-block;
  margin-left: 0.1rem;
  vertical-align: middle;
}

.app-classes-head[data-v-3c2ff24f] {
  width: 100%;
  position: relative;
  z-index: 1;
}
.app-classes-head .nav-specs[data-v-3c2ff24f] {
  background: #fafafa;
  height: 1.386667rem;
  font-size: .373333rem;
  padding: .266667rem .133333rem 0;
  position: relative;
  width: 100%;
  text-align: left;
}
.app-classes-head .nav-specs .item[data-v-3c2ff24f] {
  display: inline-block;
  color: rgba(0, 0, 0, 0.54);
  width: 2.12rem;
  height: .8rem;
  line-height:.8rem;
  margin: 0 .106667rem;
  font-size: .32rem;
  position: relative;
  z-index: 3;
  text-align: center;
}
.border-1px {
  position: relative;
}
.app-classes-head .nav-specs .item[data-v-3c2ff24f]:before {
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.border-1px:before {
  content: "";
  pointer-events: none;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 0;
  border: 1px solid #999;
  -webkit-transform: scale(1);
  -webkit-transform-origin: 0 0;
  transform: scale(1);
  transform-origin: 0 0;
}
:after,
:before {
  text-decoration: inherit;
  vertical-align: inherit;
}
*,
:after,
:before {
  box-sizing: inherit;
}
.app-classes-head .nav-specs .item span[data-v-3c2ff24f] {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 1.4rem;
  height: 0.6rem;
  text-align: center;
}
.app-classes-head .nav-specs .icon-down[data-v-3c2ff24f] {
  border-width: 0.08rem 0.08rem 0;
  border-color: #bdbdbd transparent transparent;
}
.app-classes-head .nav-specs .icon[data-v-3c2ff24f] {
  width: 0;
  height: 0;
  border-style: solid;
  display: inline-block;
  margin-left: 0.1rem;
  vertical-align: middle;
  position: absolute;
  right: 0.08rem;
  top: 0.25rem;
}

.app-nav .item-child[data-v-3c2ff24f] {
  position: absolute;
  top: 0.72rem;
  left: 0;
  width: 100%;
  font-size: 0.28rem;
  z-index: 3;
}
.app-nav .item-child div[data-v-3c2ff24f] {
  width: 100%;
  background: #fff;
}
.app-nav .item-child div .active[data-v-3c2ff24f] {
  color: #ff6700;
}
.app-nav .item-child div a[data-v-3c2ff24f] {
  line-height: 0.96rem;
  text-align: left;
  display: block;
  margin: 0 0.32rem;
  color: rgba(0, 0, 0, 0.87);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.app-nav .item-child div .active em[data-v-3c2ff24f] {
  display: block;
}
.app-nav .item-child div[data-v-3c2ff24f] :last-child {
  border-bottom: none;
}
.app-nav .item-child div a em[data-v-3c2ff24f] {
  float: right;
  width: 0.36rem;
  height: 0.24rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAAAAXNSR0IArs4c6QAAAWJJREFUSA3F1r9KxEAQBvBvAmoh9wD2Vr6C+gTXWSgi2OoJNqKdwnFvYOc9wjV2YqGFnaWF7fVqKXYirt/cwZIjidlshs1A/uxmd+dHsptE0HG4AS7gcEbGM5awL1163DFGxFx5Q4bdzBcSnxQwgl/ipp2AChiQApzIDV6SP7JSjGBAzFgfUlJQHSYpKASTDBSKUZCf1O4cq1phHU0wmlvcKVbwjUeeb3GbYA2HMmSNQTTFaMoMP9jmUTEae3jDrRtieV6M38dgNFvG1K88fuZS99uiYjEzkFzjg4u/z8KXBaoNRvP79xAH2uT78p51vRzsjnNqJ3ROtcUsgLTQBmWBKYBiUVaYUlBTlCWmEhSKssb8C6pD4R2XCz9X+guR+2pr/5jwq6yqM+9CcfUJpky/nutjgtHxakHaqBSlF+ZhhtHhgkDasAJlimkEKkGZYxqDZqgjbPC+HnAOPckYD1pnGX+3u8d2kq5oywAAAABJRU5ErkJggg==);
  background-size: cover;
  margin-top: 0.3rem;
  display: none;
}

.filter-wrap.show .filter-box[data-v-3c2ff24f],
.filter-wrap.show[data-v-3c2ff24f] {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.filter-wrap[data-v-3c2ff24f] {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 3;
  width: 100%;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
.filter-wrap .filter-bg[data-v-3c2ff24f] {
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
}
.filter-wrap .filter-box[data-v-3c2ff24f] {
  position: absolute;
  top: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  margin-left: 0.9rem;
  overflow: hidden;
  background: #f8f8f8;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  -webkit-transition: -webkit-transform 0.5s
    cubic-bezier(0.25, 0.46, 0.33, 0.98);
  transition: -webkit-transform 0.5s cubic-bezier(0.25, 0.46, 0.33, 0.98);
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.33, 0.98);
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.33, 0.98),
    -webkit-transform 0.5s cubic-bezier(0.25, 0.46, 0.33, 0.98);
}
.filter-wrap .filter-con[data-v-3c2ff24f] {
  padding-bottom: 0.3rem;
  background: #f8f8f8;
  height: 100%;
  overflow-y: auto;
  width: 6.3rem;
}
.filter-wrap .filter-con .con[data-v-3c2ff24f] {
  background: #fff;
  margin-bottom: 0.08rem;
  padding: 0.32rem;
  width: 100%;
}
.filter-wrap .filter-child[data-v-3c2ff24f] {
  margin-bottom: 0.54rem;
}
.filter-wrap .filter-head[data-v-3c2ff24f] {
  font-size: 0.28rem;
  height: 0.37rem;
  line-height: 0.37rem;
  color: rgba(0, 0, 0, 0.54);
  text-align: left;
}
.filter-wrap .filter-head .address-infor[data-v-3c2ff24f] {
  color: #ff6b00;
  font-size: 0.24rem;
}
.filter-wrap .filter-head em[data-v-3c2ff24f],
.filter-wrap .filter-head span[data-v-3c2ff24f] {
  float: right;
}
.filter-wrap .filter-head .address-infor i[data-v-3c2ff24f] {
  display: inline-block;
  width: 0.19rem;
  height: 0.24rem;
  margin-right: 0.09rem;
  vertical-align: middle;
  margin-top: -0.05rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAYCAYAAAAYl8YPAAAAAXNSR0IArs4c6QAAAwhJREFUOBGNlU1IlFEUht9vmkIlyALLoiAqxBqxaBH0Y2AkLbWgH/qjkMhJI4OizEWDO8H+sXITiC4iAmsTFNQiEqtFgtHGRUQQjkTN6MLwb27Pvc43jJ9aXric77zve84999x7Zzz9Y5g6rdKk1iNZqpB+Yvu9Vv2aK8QLEiamsOKqllEN3JYAP4nfTeJb3gM9C3DAWcOc0wYS9QLdl6d+7EFmkRarABtBfQZ8TCl1mRq9Mhe1DDwzMpVBloC+ZcYJOMLKfRlV4MOcVQWaTuAhLdRO755rARDDXNESJV1FCS1SOeRwIH6Gy+JrAXtoR79WEhNTamqbSTWQtkALVDWfRDaz91Df2LZtw272csxhNDxPA5QZUgtbu25Bf3CaxRrXBfx18H1U3eLd0aDPW0uFT6mu2GtTSYhEFWB5zHZL+sPUajuJeql4LzNJwHGN6rM5r9W+xtmQi4vYwwshLAUcoKqv00STug33QYWKsKXDfG+CH+Esm6bpjN6l/dIQK65AGM8WmCd0T9oK3kljxyzHYgm0XXxus74/HC40kyq0lSUhlvuktd4hKNGblDZm42it/yMbczdBdFNKhBF0E9RIjyI8lS8ZocfFNYpxp4ao8z2aKvx98FUZjf0YcpiUo+4wm3zNIQxSy2WoU5Z3o1zNMLksdhUuF+y3fQFs63la4ZtLtiBO+bsDTFTXqGDCXQVfkrb2rXJSa4whJDCIqWQaay019QLsXYu7t/iRkzsQiJnVNW08pE/u6iSJ2WVF7gVwYiP0o565nyqPzhodBHsVAyoiQ12Qcj7ldjATdluzCtIg/A50E8yGbN3U2/SRfLfKMA1vT981n8lYdxVS6gDo4YE3Zwg+piXzmjnosE7QyTK90Y1sof12CyT1mHbk07GTtCcV1MzwebxRtmBPqTqbBL/JHGfuycb/+01AK8lGOZAyK8aedgtEVTtX8Iy74wvT/wUv8TczG9naXewjfmqiviZo50xmhaae3vxxvwoR+viCX5BK+jQRTDJvn2tQyJabqDTnf0F/AQcZ+md5uVAyAAAAAElFTkSuQmCC);
  background-size: cover;
}
.filter-wrap .filter-list.hide[data-v-3c2ff24f] {
  height: 0.76rem;
  overflow: hidden;
}
.filter-wrap .filter-list[data-v-3c2ff24f] {
  text-align: left;
}
.filter-wrap .filter-list .filter-item[data-v-3c2ff24f] {
  display: inline-block;
  width: 1.78rem;
  text-align: center;
  height: 0.6rem;
  line-height: 0.6rem;
  background: #f5f5f5;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.24rem;
  border: 1px solid #f5f5f5;
  border-radius: 4px;
  margin-right: 0.16rem;
  margin-top: 0.16rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.filter-wrap .filter-list .filter-item[data-v-3c2ff24f]:nth-child(3n) {
  margin-right: 0;
}
.filter-wrap .filter-head .icon-down[data-v-3c2ff24f] {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAANCAYAAACtpZ5jAAAAAXNSR0IArs4c6QAAAalJREFUOBGtk89KAlEUxp0/Tha0aZEQFW2KeoKW2aYWtShchIvCGcZ/D9Fz6KgzxEQEIuRC3NkdW/YQUVHQQqdlCI72nYEropkpHbhz555zz+9+9xsNBP45DMMIElKgBxaXkiTZuq6/0HrWKJVK861WqyqK4oNYLBaXut3uRafTYZZlrc0KrdVqc67rVgRB2AWj7isuFAqrADcIKsvyXiKReJvmAChVAL1DT6TX6x1lMhnHBxMEdqwj6WB4tAHFd8pPCvIUNy5D6QH2HqfT6Tr1iLwxlUq9Qu0+1kFsYqZprvDauJkxJgN6i/ohfD3hUNrfV8ybs9nsBsANKP8KhUIRVVU/eG1wxvUlXP8GuVNAo8lksjpY7yvmSVjwrCgKKV9ot9sM/od5jc84VAT0CnMUIs6GobRvBExJTdOeoILgi57n3du2vUx5CsAE+GriNQZoDBZW/MLQY8SKwXoul9sEyAHgk24BW5qAGtijYZzDU/L3x/gVTB35fH4LH8jBaxPjEQep+DPFcf1rrMfGRDB1QuQ24AzKw7BIB9QaS5y2gI+4g19M/K993+yYr2dUlPH1AAAAAElFTkSuQmCC);
  background-size: cover;
}
.filter-wrap .filter-head .icon[data-v-3c2ff24f] {
  width: 0.22rem;
  height: 0.13rem;
  margin-top: 0.1rem;
}
.filter-wrap .filter-list .active[data-v-3c2ff24f] {
  border: 1px solid #ff6700;
  color: #ff6700;
  background: #fde0d5;
}
.filter-btn[data-v-3c2ff24f] {
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  -webkit-transform: translateZ(0);
  width: 6.3rem;
}
.filter-btn .btn-white[data-v-3c2ff24f] {
  color: rgba(0, 0, 0, 0.87);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
.filter-btn a[data-v-3c2ff24f] {
  width: 50%;
  display: inline-block;
}

.btn-white[data-v-3c2ff24f] {
  color: #999;
  border: 1px solid transparent;
  background: transparent;
}
.btn {
  display: block;
  outline: 0;
  background: #ff6700;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.28rem;
}
.app-classes-head .nav-specs .item-child .box[data-v-3c2ff24f] {
  width: 100%;
  background: #fff;
}
.app-classes-head .nav-specs .item-child .box[data-v-3c2ff24f]:before {
  top: -2px;
}
.app-classes-head .nav-specs .item-child .box a[data-v-3c2ff24f] {
  line-height: 0.96rem;
  text-align: left;
  display: block;
  margin: 0 0.32rem;
  padding: 0.27rem 0;
  color: rgba(0, 0, 0, 0.54);
  position: relative;
}
.bd-bottom-1px,
.bd-left-1px,
.bd-right-1px,
.bd-top-1px {
  position: relative;
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
.app-classes-head .nav-specs .item-child .box a em[data-v-3c2ff24f] {
  width: 0.36rem;
  height: 0.24rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAAAAXNSR0IArs4c6QAAAWJJREFUSA3F1r9KxEAQBvBvAmoh9wD2Vr6C+gTXWSgi2OoJNqKdwnFvYOc9wjV2YqGFnaWF7fVqKXYirt/cwZIjidlshs1A/uxmd+dHsptE0HG4AS7gcEbGM5awL1163DFGxFx5Q4bdzBcSnxQwgl/ipp2AChiQApzIDV6SP7JSjGBAzFgfUlJQHSYpKASTDBSKUZCf1O4cq1phHU0wmlvcKVbwjUeeb3GbYA2HMmSNQTTFaMoMP9jmUTEae3jDrRtieV6M38dgNFvG1K88fuZS99uiYjEzkFzjg4u/z8KXBaoNRvP79xAH2uT78p51vRzsjnNqJ3ROtcUsgLTQBmWBKYBiUVaYUlBTlCWmEhSKssb8C6pD4R2XCz9X+guR+2pr/5jwq6yqM+9CcfUJpky/nutjgtHxakHaqBSlF+ZhhtHhgkDasAJlimkEKkGZYxqDZqgjbPC+HnAOPckYD1pnGX+3u8d2kq5oywAAAABJRU5ErkJggg==);
  background-size: cover;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -0.12rem;
  display: none;
}
.app-classes-head .nav-specs .item-child .name[data-v-3c2ff24f] {
  font-size: 0.28rem;
  line-height: 1;
  color: rgba(0, 0, 0, 0.87);
}
.app-classes-head .nav-specs .item-child .desc[data-v-3c2ff24f] {
  font-size: 0.24rem;
  line-height: 1;
  margin-top: 0.2rem;
}
.bd-bottom-1px:after {
  border-bottom: 1px solid #d9d9d9;
  left: 0;
  bottom: 0;
  width: 100%;
  -webkit-transform-origin: 0 bottom;
  transform-origin: 0 bottom;
}
.app-classes-head .nav-specs .btn-box[data-v-3c2ff24f] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.app-classes-head .nav-specs .btn-box .btn-white[data-v-3c2ff24f] {
  background: #fff;
  color: rgba(0, 0, 0, 0.87);
}
.app-classes-head .nav-specs .btn-box a[data-v-3c2ff24f] {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  font-size: 0.32rem;
  height: 0.95rem;
  line-height: 0.95rem;
}
.app-classes-head .nav-specs .item-child[data-v-3c2ff24f] {
  position: absolute;
  top: 1.01rem;
  left: 0;
  width: 100%;
  font-size: 0.28rem;
  z-index: 2;
}
.app-classes-head .nav-specs .item.active[data-v-3c2ff24f]:after {
  content: "";
  display: block;
  background: #fff;
  width: 100%;
  height: 3px;
  position: absolute;
  z-index: 3;
  bottom: -2px;
}
</style>

