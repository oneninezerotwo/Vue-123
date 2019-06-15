<template>
<<<<<<< HEAD
  <footer id="app_footer" v-show="isShow">
    <div class="footer_inner">
      <a href="javascript:;" @click="jumpPage(0)" :class="{'active':now == 0}">
        <i class="icon"></i>
        <span>首页</span>
      </a>
      <a href="javascript:;" @click="jumpPage(1)" :class="{'active':now == 1}">
        <i class="icon"></i>
        <span>分类</span>
      </a>
      <a href="javascript:;" @click="jumpPage(2)" :class="{'active':now == 2}">
        <i class="icon"></i>
        <span>购物车</span>
        <em class="bubble">{{goodsNum}}</em>
      </a>
      <a href="javascript:;" @click="jumpPage(3)" :class="{'active':now == 3}">
        <i class="icon"></i>
        <span>我的</span>
      </a>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      now: 0,
      goodsNum: 0
    };
  },
  computed: {
    isShow() {
      if (this.$store.state.footShow) {
        return true;
      }
      return false;
    }
  },
  created() {
    this.getCartGoodsNum();
  },

  methods: {
    jumpPage(index) {
      console.log(this.$store.state.cart_goods);
      //设置当前index
      this.now = index;
      //跳转
      var path = "/";
      if (index == 0) {
        path = "/";
      } else if (index == 1) {
        path = "/category";
      } else if (index == 2) {
        path = "/cart";
      } else if (index == 3) {
        path = "/user";
      }
      this.$router.push({
        path: path
      });
      //
      this.$store.state.back.old = this.$store.state.back.now;
      this.$store.state.back.now = index;
    },

    getCartGoodsNum() {
      var arr = JSON.parse(localStorage.getItem("cart"));
      // 是否包行商品
      if (arr) {
        var num = 0;
        for (var i = 0; i < arr.length; i++) {
          num += arr[i].num;
        }
        this.goodsNum = num;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
#app_footer {
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.386667rem;
  background: #fff;
  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
  box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  .footer_inner {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    a {
      display: block;
      color: #999;
      position: relative;
      flex: 1 1 auto;
      outline: 0;
      text-decoration: none;
      text-align: center;
      .icon {
        display: block;
        width: 0.56rem;
        height: 0.56rem;
        margin: 0 auto 0.186667rem;
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
      }

      span {
        font-size: 0.293333rem;
        color: #999;
      }
      .icon:nth-child(1) {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAk1BMVEUAAABxcXFxcXFwcHBxcXFwcHBvb29wcHBwcHBxcXFvb29wcHBubm5vb29vb29wcHBwcHBvb29wcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBycnJwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBvb29vb29wcHBwcHBwcHBubm5wcHB0dHRycnJ2dnY0KzjsAAAALnRSTlMAAgn0mv6+6cEcQdIlEg36rTcy5E0g7tXFu6GPhmwG3Kl4KbSTc1xXR8p/Zyxhwd65kwAAAr1JREFUSMftlumSojAUhYEYQemwg7K4r63dOXn/p5ubbqoVcByw5tfUnNLKMfB5b05AMZ7JJBkv6gt8mRZhKF6ta552uxMNr7DLi82YfVmSHcyKEYeU4CMxkKaQ0wDgQcCBIKXPg2KO5hJ+6XmlD8wjmhrAJjOAHUzyBwbMEjK92U8bsI9kyR+1/yTfc4s2utpZW/066y42NN2H9fb8e521aP0A9l6X7sY8WeuYU/I/q0h16OvJn0OPHGIbZcgK3YwTPQXrBfr6qmrFcPHrGJ6wxxjIrmQ7R64ZEB/JPo15lZB9tPWrJ6FTzGUrZq1m6LzUaXRRipnY4JZpdx8Coin0B/jHGMDIexaJNwIw/ujWnboAr9oxt0JfVhxwp2Qb7EnHvLifNWu8ed5Ch34iez/HwFdJh/1d6D9VaLAqH9wNW81sF0VQHKL25oRzDr+y9Kx+i4Jzjl2zrneJfamUb+8nrRTCjE4vxPfp2xwadqxGsAWX0me+lMjTZuepDQ7k2682XAl7xyTB5q3nEuD54XQNGGRgNXp6s8EYl25IPTsK7BhmTThh8EtB1jqQu7Zg6W5iqLEwxE6tTsb0vjJFVChemN/7VHE1pkunAb+Lc6x2QocaGm347V3Z0zrPj5VahS14NjHCxbaeaMNRTF9eeyuQWdKC3cntTuzAYSznXl3ZXEvWhfWBmm7D25mMoxpOXRVPH8G1OrC1VrysL+wDV3oJfWEajxzs+uWTGHxjmENgXZoVyfa8t7lyqHB/mEzqKIDZDFCz0BgEk9JRBiklWEDJDYPJLqdVPs/LxKNPA2HtTTERehgM179fNToY1jjJ6A939R/+B+EeegyPlz2fD9MujLkwrR7yjCiTswYc2TJz8nEf5e++dMQ9vByBS9VHUknOW08BaQDZV/rfuamwGvXVJu2EOETdu3yAjL+gX1S9Wc5duViwAAAAAElFTkSuQmCC);
      }
      .icon:nth-child(2) {
        background-image: url(data:image/png;base64,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);
      }
      .icon:nth-child(3) {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABHCAYAAACgTtGvAAADTUlEQVR4AWIsKCiYx8AAaNcegGu7ojCO56K2Gw3q3mZUa1Tbtjmobbsdq+2zbQ2fNYr5/GLbyf/5vRWdc7Ku9t3fzG8Qnnx373WyT5L0PPwYKb0Yh5eQUPGLkpx9fALGr/855hY1Dr1wk3MTsaiXEIBvCD9CJmS33sDkQOYyW9TAZNsV5ayoQnTj8GTYogamA0WwK8rDnDod59qidAb6nShFD/riTCtW4QG3RWV7KOo/JMOPeMtxuBFz8BOSgnCS3AS+832KNU5f7UJ0uVxRr6AcJuRdp0V1I99lUYuRDF+cOAaPohoyV8ui3Az005AMU9KJmXgJMr2iKA8D3bwsh0zWwKLsQE9xVpQ9HIdGW1QJ2uQXTZCictwU1YOCBFhRl0ImWxbldqCfhhTDV9Ru1MqivMypkOErKmvgWc8O9DScPHAXiaLs087BB7mXorajRWlF3YlS9GlDKe5U2Haet14vcpWK+i+MR6Bk/KdQVA9yRVGe59SpSEWsxQe3kS96MdpEUfpHmSg+htmNlxVWVC72JgiiMtBXQMTBY5jYyTk4Q84n8SjY/oogVpNKUTvQKFeULcrZqspAvEfuig6UaBd1ClINW1F56NYoSiZk4hnvyKLsQD8NybYoj2c8jaJKUSu/mWkP60RRnpNr8IpqwA6torLlnQ9pZg1yWZS988nrzlYvyoDtdxLS5c+mWZQpTzsvgS+cW68KECvKpDOeLEpx+4VM+fOUdlEm3PlkUbkgukXlGjDQLx647fSLyorzojJwoUJRxv4r0NG4H4vEHa8bSzEgQYwmtSgTJ++XgbjMDJSrrSiRbJiQTnwLEp6ilsGEfIwCEKWtJ/IXTsbbOAPxlG7k4xdMAglfUX34GjA3fsRGbFG2KFuUjS3KFmWLskXZonx4FPOwGfPxGHyIRoJ4GUuxGdNxu4cvol7Sf3gRB3IF7sX9eAZ9EX6cMg93iOt5FL/ik2itqJdBSYPmKbyOSOYLUZI8BN8VvaKGzytQiN71RKuo872/Xz3HIUXnevSLKsdwKUOk0oYGnevRL2oyhstUKETveqJV1N9Yg8GyDn9EYZjnY7DMxYRoFdWBW/AdStCFEnyPm9GKSKYW1+Ef7EQX8vE+HkEPHKUfkZb5KCDSBwMAAAAASUVORK5CYII=);
      }
      .icon:nth-child(4) {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAkFBMVEUAAABiYmJoaGhxcXFwcHBwcHBycnJwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBzc3NycnJwcHB2dnZwcHBwcHBxcXFwcHBwcHBwcHBwcHBwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBnZ2dwcHC6NtRcAAAAMHRSTlMAAwoXHycsRXWfxdzz+jB+vv8ljv/+72HU682aahOXTQ+wNblUtazlb1elWuE7B4ObTEwxAAADdklEQVR4AZWWh5rqOgyEnd7LEA2k0Os24P3f7vLdBVOSTTizBbfflmVZWHXJUBeZlu24rmNbpm56U5bnB2EUJ0kchYHvWep9pVke40FxnqX9hLZ4VEQQgEk8vihOCAiiYnTpHGKNSQmAVd1MvdRxUm/a1BUBlJNLZz87mycAo2axNHTjctFEBJL5rI82lL0SYjxfX+sX/ZbW8zEoK1sZPexGiHL7cDa6uC1B2XTQ2uaVEDv3idS8uwNl9bflhRB7q7vbUNYelOKvhRck8g5W0znIhTI6+2rwsO5zyfpA1N2zfwg5Ub2akPLR6a0I2Jn9J2nugKjLZ5/s3FDLLfxUba0guTUYgLlg1e6wIkg2HPqZIJq1DRpj3Gu1HlbpYbrVT6QcDcOjWpKPFlxAclMNyswFRQv+ElmpN7QS+WrBe5H9kNV6XP/Kre5HuL3yHLIx1LB2gnkLzii1peuW9RwES10KhVkL/o5x8G6tXlnq8kXTn91vCjHU8Ufi75Zv3AMwvbUWIuFSGbebWIlsr+UpcXBVSyHk6zbjBGRxO3UnB+PrPT99CULVVkZU66txy42Q+/X/w7c1KGdtBJh1wE6lM5Sh0lKIn+Dbm+5iEF+3O1wIK0d1aA6Oj7ddpzkAxuMEv9le/bprTDSdsZNWxEanCescERAgCSeXputuwCrtjsMMRHEZdI2p1N/XUdhMLB1lBYjsrzSxAZk9BOPSSUfGfTaflFyb1kqtEZhkevjvqNv/U5YQUU9qXlQgG/s+n6GH2gGIaqF6tD2ACL/NVg74DEEctqpXXg0i3kxe5lzFIGpPDcgJElA4ffouiYVIAkcN6vRdM0HsKkP7MUHC8PvUz11d3JDE8Q57QrL47Rt4DB2bmMRudoetXMi4OQ4+h2b+Dwis7Ke7vieIH3/Zz7orgizPs5eT8ksS3Lt97LEE8XN+fa9dKs75AKI89rCREJujemavVS8HJTr+FdpuKUQwa6FX3ArAru8znXtQmH8/aMwClFX3gDOI5tT3oDk1IM6dG44fEknPjY+7nLbDLXuqvscUsGs3b2NtUR+dgfG2tcRe9PusD7ZLyKplzw94VidjSKoAfvTurrAPRLZ6Q3YE+C8WBoLQHjmjATkjO4QEL8EVgUn1lhKidJXxAC9A4k2RWDzBn5LwPSVkIp9Pm16m7j8ovWaF/wCc31NtcLeHeAAAAABJRU5ErkJggg==);
      }
      .bubble {
        position: absolute;
        min-width: 0.28rem;
        line-height: 0.28rem;
        height: 0.28rem;
        box-sizing: border-box;
        padding: 0 0.05rem;
        font-size: 0.18rem;
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
    .active {
      color: #ff6700;
      .icon {
        color: #ff6700;
      }
      span {
        color: #ff6700;
      }
    }
  }
}
=======
    <footer data-v-7c04fb90="" data-v-bc186c1a="" class="app-bottom-navigator-wrapper app-shell-footer" style="">
        <div data-v-7c04fb90="" class="fill-height box-flex align-center">
            <router-link data-v-7c04fb90="" class="flex on" data-stat-id="5b0ff65d95a1f2de" to="/">
                <i data-v-7c04fb90="" class="image-icons app-bottom-icon icon-home"></i>
                <span data-v-7c04fb90="">首页</span>
                <!---->
            </router-link>
            <router-link data-v-7c04fb90="" class="flex" data-stat-id="a6da9caf03470e4d" to="/category">
                <i data-v-7c04fb90="" class="image-icons app-bottom-icon icon-category"></i>
                <span data-v-7c04fb90="">分类</span>
                <!---->
            </router-link>
            <router-link data-v-7c04fb90="" class="flex" data-stat-id="bd504b3ba442376d" to="/cart">
                <i data-v-7c04fb90="" class="image-icons app-bottom-icon icon-cart"></i>
                <span data-v-7c04fb90="">购物车</span>
                <!-- <em data-v-7c04fb90="" class="bubble">10</em> -->
            </router-link>
            <router-link data-v-7c04fb90="" class="flex" data-stat-id="e271db51020d3856" to="/user">
                <i data-v-7c04fb90="" class="image-icons app-bottom-icon icon-user"></i>
                <span data-v-7c04fb90="">我的</span>
                <!---->
            </router-link>
        </div>
        <div data-v-7c04fb90="" class="safe-area-inset"></div>
    </footer>
</template>
<style>
.app-shell-footer {
    position: fixed;
    z-index: 9999;
    bottom: 0;
    left: 0;
    right: 0;
}
.app-bottom-navigator-wrapper{
    background: #fff;
    -webkit-transition: -webkit-transform .2s ease-out;
    transition: -webkit-transform .2s ease-out;
    transition: transform .2s ease-out;
    transition: transform .2s ease-out,-webkit-transform .2s ease-out;
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
}
.app-bottom-navigator-wrapper .box-flex{
    height: 52px;
}
.fill-height {
    height: 100%;
}
.align-center {
    -webkit-box-align: center;
    align-items: center;
}
.box-flex {
    display: flex;
}
.flex{
    display: block;
    color: #999;
    position: relative;
}
.flex {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
}
.safe-area-inset {
    display: block;
    background: #fff;
    padding-bottom: env(safe-area-inset-bottom);
}
.app-bottom-navigator-wrapper .flex.on{
    color: #ff6700;
}
.app-bottom-navigator-wrapper .flex{
    display: block;
    color: #999;
    position: relative;
}
.flex {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
}
a {
    background-color: transparent;
    outline: 0;
    text-decoration: none;
}
.app-bottom-navigator-wrapper .flex .app-bottom-icon{
    display: block;
    width: .4rem;
    height: .4rem;
    margin: 0 auto .1rem;
}
.image-icons {
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
}
i {
    font-style: italic;
}
.app-bottom-navigator-wrapper .flex.on{
    color: #ff6700;
}
.app-bottom-navigator-wrapper .flex{
    display: block;
    color: #999;
    position: relative;
}
a {
    background-color: transparent;
    outline: 0;
    text-decoration: none;
}

>>>>>>> a3c946ec3bc66720be29a54605a05624964a5ec2
</style>

