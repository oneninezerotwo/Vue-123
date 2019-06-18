<template>
  <footer id="app_footer" v-show="isShow">
    <div class="footer_inner">
      <a href="javascript:;" @click="jumpPage(0)" :class="{'active':now == 0}">
        <i class="icon icon-home"></i>
        <span>首页</span>
      </a>
      <a href="javascript:;" @click="jumpPage(1)" :class="{'active':now == 1}">
        <i class="icon icon-category"></i>
        <span>分类</span>
      </a>
      <a href="javascript:;" @click="jumpPage(2)" :class="{'active':now == 2}">
        <i class="icon icon-cart"></i>
        <span>购物车</span>
        <em class="bubble">{{goodsNum}}</em>
      </a>
      <a href="javascript:;" @click="jumpPage(3)" :class="{'active':now == 3}">
        <i class="icon icon-user"></i>
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
  beforeCreate() {
    // this.getCartGoodsNum();
  },
  created() {
    this.getCartGoodsNum();
  },
  mounted() {
    // this.getCartGoodsNum();
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
      // 本地存储是否有购物车
      if (JSON.parse(localStorage.getItem("cart"))) {
        var arr = JSON.parse(localStorage.getItem("cart")); //将购物车的数据存储到定义的数组
        var num = 0;
        for (var i = 0; i < arr.length; i++) {
          num += arr[i].num;
        }
        this.goodsNum = num;
        console.log(this.goodsNum);
        return;
      }

      this.goodsNum = 0;
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
      .icon-home {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAk1BMVEUAAABxcXFxcXFwcHBxcXFwcHBvb29wcHBwcHBxcXFvb29wcHBubm5vb29vb29wcHBwcHBvb29wcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBycnJwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBvb29vb29wcHBwcHBwcHBubm5wcHB0dHRycnJ2dnY0KzjsAAAALnRSTlMAAgn0mv6+6cEcQdIlEg36rTcy5E0g7tXFu6GPhmwG3Kl4KbSTc1xXR8p/Zyxhwd65kwAAAr1JREFUSMftlumSojAUhYEYQemwg7K4r63dOXn/p5ubbqoVcByw5tfUnNLKMfB5b05AMZ7JJBkv6gt8mRZhKF6ta552uxMNr7DLi82YfVmSHcyKEYeU4CMxkKaQ0wDgQcCBIKXPg2KO5hJ+6XmlD8wjmhrAJjOAHUzyBwbMEjK92U8bsI9kyR+1/yTfc4s2utpZW/066y42NN2H9fb8e521aP0A9l6X7sY8WeuYU/I/q0h16OvJn0OPHGIbZcgK3YwTPQXrBfr6qmrFcPHrGJ6wxxjIrmQ7R64ZEB/JPo15lZB9tPWrJ6FTzGUrZq1m6LzUaXRRipnY4JZpdx8Coin0B/jHGMDIexaJNwIw/ujWnboAr9oxt0JfVhxwp2Qb7EnHvLifNWu8ed5Ch34iez/HwFdJh/1d6D9VaLAqH9wNW81sF0VQHKL25oRzDr+y9Kx+i4Jzjl2zrneJfamUb+8nrRTCjE4vxPfp2xwadqxGsAWX0me+lMjTZuepDQ7k2682XAl7xyTB5q3nEuD54XQNGGRgNXp6s8EYl25IPTsK7BhmTThh8EtB1jqQu7Zg6W5iqLEwxE6tTsb0vjJFVChemN/7VHE1pkunAb+Lc6x2QocaGm347V3Z0zrPj5VahS14NjHCxbaeaMNRTF9eeyuQWdKC3cntTuzAYSznXl3ZXEvWhfWBmm7D25mMoxpOXRVPH8G1OrC1VrysL+wDV3oJfWEajxzs+uWTGHxjmENgXZoVyfa8t7lyqHB/mEzqKIDZDFCz0BgEk9JRBiklWEDJDYPJLqdVPs/LxKNPA2HtTTERehgM179fNToY1jjJ6A939R/+B+EeegyPlz2fD9MujLkwrR7yjCiTswYc2TJz8nEf5e++dMQ9vByBS9VHUknOW08BaQDZV/rfuamwGvXVJu2EOETdu3yAjL+gX1S9Wc5duViwAAAAAElFTkSuQmCC);
      }
      .icon-category {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAllBMVEUAAABubm5xcXFxcXFvb29xcXFycnJwcHBxcXF3d3d2dnZwcHBwcHBtbW1wcHBwcHBycnJ0dHRwcHBwcHBwcHBwcHBwcHBqampwcHBwcHBwcHBzc3NwcHBwcHBwcHBwcHBwcHB6enpxcXFwcHBxcXFwcHBwcHBxcXFwcHBwcHBwcHBxcXFwcHBvb29wcHBwcHBwcHBwcHDmBwfKAAAAMnRSTlMAAhVLVT4vv/////WOCrP7//9yK/HuxxCJ0HwGfySCWx7/q9SEGZpDUDllpeuV3+S22PgUu6wAAAK1SURBVHgB7ZaFmqMwEIBnqhMozUzd3QV23//lLjU0t3CufyX2/cRDABC+HoRSufIFVDFeXa1OqjiO2/Ai22sqTVwYYmlBSFsTdbqFcbX0onGqMXEVS/1ClGCgZJiU21CYUUauwRgLMYaJRUYoBCbl/zJ+lm+qGXNkBK9dszNFwA9lBJwR2+nMAXLkxVARk43lyoMfV/O39DkH/GXz/OvlmeJ1oT7b5NFyWf/qmmvNXhkMWXlc2UxCNpWxzff6YJMRKrRUIUuq5DQoKbeWEsHLVkzGJyZikw3b3XoYst5tISQ0jGuXM43ESBi394dK+bi4JbOyxY6SpdN57YrwpXctRwUF5tkElR45wjfE6Zxr9pptIIwHWojJ7XQ7rgnFrwBgMRnGOybWvVF1u20frj7T/WjAD5odX81MHLQ8eDDdaeLu3iLHnDAsu8z+ESB8aEuT9EqA2anK2P03oUdF4azNWEvLRO2LJFofpmIimkCiH/268Hs/JSO0FCdWpvk1hP1tqk0VYn3IyPPXxqD5M2fbY75CSl70hAYmYtuS0W5EmF6YU5vLJHaKmxnZsveJ+ZgqRdgo6WVlfBHJZJFnSoYFam53mA8Z+aq4XkBerJlH0YBFc7/Lkw3eWbjnpUa72mV9yt8YCCchnRhuE70KXaaA+fJ0zTzcJo6hg0uyg4xss1tMvOrfLZNCgKPPFBgj5+75vI+L5mYNHjpgxWctDYjkKVjBR8OHoiXYVE3tsDicNWvi9/3jUTUiejuvslynT7vWE2IJ6s3VW881UWYS/2Fv144WFeE4z3B5fe3y7dVlFpPviDH90+Bh34rnHVEWHNWIzpf9KnDZcYQ6740p4M0OjG3Y71Y2BuEE3YLpqXE+7yaHkknebQ6qkCX3HYMPW628j24xcQFeefhIbci5InwVxp63tvAJwN9WhCnsGIoAAAAASUVORK5CYII=);
        background-position: 50%;
      }
      .icon-cart {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABHCAYAAACgTtGvAAADTUlEQVR4AWIsKCiYx8AAaNcegGu7ojCO56K2Gw3q3mZUa1Tbtjmobbsdq+2zbQ2fNYr5/GLbyf/5vRWdc7Ku9t3fzG8Qnnx373WyT5L0PPwYKb0Yh5eQUPGLkpx9fALGr/855hY1Dr1wk3MTsaiXEIBvCD9CJmS33sDkQOYyW9TAZNsV5ayoQnTj8GTYogamA0WwK8rDnDod59qidAb6nShFD/riTCtW4QG3RWV7KOo/JMOPeMtxuBFz8BOSgnCS3AS+832KNU5f7UJ0uVxRr6AcJuRdp0V1I99lUYuRDF+cOAaPohoyV8ui3Az005AMU9KJmXgJMr2iKA8D3bwsh0zWwKLsQE9xVpQ9HIdGW1QJ2uQXTZCictwU1YOCBFhRl0ImWxbldqCfhhTDV9Ru1MqivMypkOErKmvgWc8O9DScPHAXiaLs087BB7mXorajRWlF3YlS9GlDKe5U2Haet14vcpWK+i+MR6Bk/KdQVA9yRVGe59SpSEWsxQe3kS96MdpEUfpHmSg+htmNlxVWVC72JgiiMtBXQMTBY5jYyTk4Q84n8SjY/oogVpNKUTvQKFeULcrZqspAvEfuig6UaBd1ClINW1F56NYoSiZk4hnvyKLsQD8NybYoj2c8jaJKUSu/mWkP60RRnpNr8IpqwA6torLlnQ9pZg1yWZS988nrzlYvyoDtdxLS5c+mWZQpTzsvgS+cW68KECvKpDOeLEpx+4VM+fOUdlEm3PlkUbkgukXlGjDQLx647fSLyorzojJwoUJRxv4r0NG4H4vEHa8bSzEgQYwmtSgTJ++XgbjMDJSrrSiRbJiQTnwLEp6ilsGEfIwCEKWtJ/IXTsbbOAPxlG7k4xdMAglfUX34GjA3fsRGbFG2KFuUjS3KFmWLskXZonx4FPOwGfPxGHyIRoJ4GUuxGdNxu4cvol7Sf3gRB3IF7sX9eAZ9EX6cMg93iOt5FL/ik2itqJdBSYPmKbyOSOYLUZI8BN8VvaKGzytQiN71RKuo872/Xz3HIUXnevSLKsdwKUOk0oYGnevRL2oyhstUKETveqJV1N9Yg8GyDn9EYZjnY7DMxYRoFdWBW/AdStCFEnyPm9GKSKYW1+Ef7EQX8vE+HkEPHKUfkZb5KCDSBwMAAAAASUVORK5CYII=);
      }
      .icon-user {
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
</style>

