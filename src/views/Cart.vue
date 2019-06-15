<template>
  <div id="cart">
    <Header :title="title"></Header>
    <div class="main">
      <!-- 去登录 -->
      <div class="to_login" v-if="!isLogin">
        <a href="javascript:;" @click="login()">
          <span>登录后享受更多优惠</span>
          <em>去登录</em>
        </a>
      </div>
      <!-- 购物车空 -->
      <div class="cart_null" v-if="isNull">
        <a href="javascript:;" @click="shopping()">
          <span>购物车还是空的</span>
          <em>去逛逛</em>
        </a>
      </div>
      <!-- 购物车不为空 -->
      <div class="cart_goods_list" v-if="!isNull">
        <ul class="goods_list">
          <li class="list_item" v-for="(item,index) in cartGoods" :key="index" ref="goodsItems">
            <div class="left" @click="changeCheckStatus(index)" :class="{'checked':isChecked[index],'unchecked':!isChecked[index]}" ></div>
            <a href="javascript:;" class="center">
              <img :src="item.image_url" alt="">
            </a>
            <div class="right">
              <div class="goods_name" v-text="item.product_name"></div>
              <div class="goods_price">
                <span>售价</span>
                <span>￥{{item.price}}</span>
              </div>
              <div class="goods_num">
                <div class="num_input">
                  <span @click="reduce(index)">-</span>
                  <input type="text" v-model="item.num">
                  <span @click="add(index)">+</span>
                </div>

                <a href="javascript:;" class="clear_cart_btn" @click="clearCart(index)">
                  <i class="icon"></i>
                </a>

              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <Like></Like>

    <!-- 商品结算 -->
    <div class="goods_submit" v-show="!isNull">
      <div class="goods_submit_inner">
        <div class="goods_price_num">
          <span>共{{totalNum}}件 金额：</span>
          <br>
          <strong>{{totalPrice}}</strong>
          <span>元</span>
        </div>
        <a href="javascript:;" class="continue_buy_btn" @click="continueShopping()">继续购物</a>
        <a href="javascript:;" class="settle_btn" @click="settlePrice()">去结算</a>
      </div>
    </div>

  </div>
</template>
<script>
import Header from "../components/Header";
import Like from "../components/Like";
export default {
  data() {
    return {
      isLogin: false,
      ifNull: true,
      cartGoods: {},
      isChecked: {},
      totalNum:0,
      totalPrice:0,
      title: [
        {
          content: "购物车"
        }
      ]
    };
  },
  components: {
    Header,
    Like
  },

  methods: {
    /************ 判断是否登录 ************/
    judgeLogin() {
      if (localStorage.getItem("username")) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },

    /************ 登录账户 ************/
    login() {
      this.$router.push({
        path: "/loginRegister"
      });
    },

    /************ 去逛逛 ************/
    shopping() {
      this.$router.push({
        path: "/"
      });
    },

    /************ 选择与不选择 ************/
    changeCheckStatus(index) {
      this.$nextTick(function() {
        this.isChecked[index] = !this.isChecked[index];
        this.getTotalNumPrice();
      });
    },

    /************ 数量减少 ************/
    reduce(index) {
      this.cartGoods[index].num--; //数量减少
      if (this.cartGoods[index].num < 1) {
        //临界判断
        this.cartGoods[index].num = 1;
      }
      
      localStorage.setItem("cart", JSON.stringify(this.cartGoods)); //修改本地存储

      this.getTotalNumPrice();
      
    },

    /************ 数量增加 ************/
    add(index) {
      this.cartGoods[index].num++; //数量增加
      if (this.cartGoods[index].num > 10) {//假设 库存量为10
        //临界判断
        this.cartGoods[index].num = 10;
      }
      
      localStorage.setItem("cart", JSON.stringify(this.cartGoods)); //修改本地存储

      this.getTotalNumPrice();
    },

    /************ 清空购物车 ************/
    clearCart(index) {
      this.$nextTick(function() {
        //
        this.cartGoods.splice(index, 1); //删除数组元素
        localStorage.setItem("cart", JSON.stringify(this.cartGoods)); //将新的数组存储到本地
        this.getTotalNumPrice();
      });
    },
     /************ 商品数量和商品总价 ************/
     getTotalNumPrice(){
       var iTotalNum = 0;
       var iTotalPrice = 0;
       for(var i = 0; i < this.cartGoods.length; i ++){
         if(this.isChecked[i]){
           iTotalNum += this.cartGoods[i].num;
           iTotalPrice += this.cartGoods[i].price * this.cartGoods[i].num;
         }
       }
       this.totalNum = iTotalNum;
       this.totalPrice = iTotalPrice;
     },

    /************ 继续购物 ************/
    continueShopping() {
      this.$router.push({
        path: "/"
      });
    },

    /************ 结算 ************/
    settlePrice() {
      if (this.isLogin) {
        this.$router.push({
          path: "/order/checkout"
        });
      } else {
        this.$router.push({
          path: "/loginReigster"
        });
      }
    }
  },

  async created() {
    /************ 判断是否登录了账户 ************/
    this.judgeLogin();

    /************ 获取商品数据 ************/
    if (this.isLogin) {

      //axios获取购物车商品数据
      const cartGoodsDatas = await this.$axios(
        "https://www.easy-mock.com/mock/5cf9fc1ee43289695bb400cc/cart"
      );
      this.cartGoods = cartGoodsDatas.data.data.items;

      // 判断购物车商品数量是否大于0
      if (this.cartGoods) {
        this.$store.state.footShow = false; //隐藏foot
        this.isNull = false; //购物车状态标志

        for (var i = 0; i < this.cartGoods.length; i++) {//全选设置
          this.isChecked[i] = true;
        }

        this.getTotalNumPrice();//计算总数量和总价格

      } else {

        this.$store.state.footShow = true; //显示foot
        this.isNull = true; //购物车状态标志

      }
    } else {

      var arr = JSON.parse(localStorage.getItem("cart"));

      if (arr) {
        this.$store.state.footShow = false; //隐藏foot
        this.isNull = false; //购物车状态标志

        const cartGoodsDatas = await this.$axios(//获取数据
          "https://www.easy-mock.com/mock/5cf9fc1ee43289695bb400cc/cart"
        );
        this.cartGoods = cartGoodsDatas.data.data.items;

        for (var i = 0; i < this.cartGoods.length; i++) {//全选设置
          this.isChecked[i] = true;
        }

        this.getTotalNumPrice();   //计算总数量和总价格

      } else {
        this.$store.state.footShow = true; //购物车位空 显示foot
        this.isNull = true; //购物车为空
      }
    }

    /************  ************/
  }
};
</script>
<style lang="scss" scoped>
#cart {
  padding-top: 1.333333rem;
  background-color: #ebebeb;
  // 去登录
  .to_login {
    height: 1.44rem;
    background: #fff;
    a {
      margin: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      height: 100%;

      span {
        font-size: 0.426667rem;
        color: #000;
        font-weight: 600;
      }
      em {
        font-size: 0.32rem;
        color: gray;
      }

      em::after {
        content: "";
        position: absolute;
        right: 5.12px;
        right: 0.32rem;
        top: 50%;
        width: 2.88px;
        width: 0.18rem;
        height: 2.88px;
        height: 0.18rem;
        border-left: 1px solid currentColor;
        border-top: 1px solid currentColor;
        transform: translate3d(0, -50%, 0) rotate(135deg);
        -webkit-transform: translate3d(0, -50%, 0) rotate(135deg);
      }
    }
  }
  //   购物车空
  .cart_null {
    padding: 0.266667rem;
    height: 1.693333rem;
    background: #ebebeb;
    a {
      display: block;
      width: 100%;
      height: 100%;
      span {
        display: inline-block;
        line-height: 1.16rem;
        height: 1.16rem;
        // background: url(/static/img/cartnull.daaf7926f8.png) no-repeat 0;
        // background-size: 1.066667rem 1.066667rem;
        padding: 0 0.493333rem 0 1.333333rem;
        color: rgba(0, 0, 0, 0.27);
      }
      em {
        display: inline-block;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-sizing: border-box;
        height: 0.706667rem;
        line-height: 0.68rem;
        padding: 0 0.24rem;
        color: rgba(0, 0, 0, 0.87);
        font-style: normal;
      }
    }
  }
  //   购物车不为空
  .cart_goods_list {
    .goods_list {
      //   background: #f2f2f2;
      .list_item {
        border-bottom: 1px solid #f6f6f6;
        line-height: 0;
        padding: 0.333333rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.266667rem;
        background: #fff;
        .left {
          width: 0.6rem;
          padding: 0 0.2rem;
          height: 1.8rem;
        }
        .checked {
          background: url(//s1.mi.com/m/images/m/check_press.png) 50% 50%
            no-repeat;
          background-size: 0.4rem 0.4rem;
        }
        .unchecked {
          background: url(//s1.mi.com/m/images/m/check_normal.png) 50% 50%
            no-repeat;
          background-size: 0.4rem 0.4rem;
        }

        .center {
          display: block;
          width: 2.506667rem;
          height: 2.506667rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .right {
          width: 6.386667rem;
          height: 100%;
          .goods_name {
            font-size: 0.386667rem;
            line-height: 0.413333rem;
            color: #666;
            margin-bottom: 0.16rem;
            margin-right: 0.3rem;
            padding: 0;
            text-align: left;
          }
          .goods_price {
            margin-bottom: 0.146667rem;
            font-size: 0.333333rem;
            color: gray;
            height: 0.333333rem;
            line-height: 0.333333rem;

            span:nth-child(1) {
              margin-right: 0.133333rem;
            }
          }
          .goods_num {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 0.893333rem;
            width: 100%;

            .num_input {
              height: 100%;
              display: flex;
              flex-direction: row;
              border: 2px solid #eeeeee;
              background: #f4f4f4;
              width: 2.56rem;
              span {
                display: block;
                height: 100%;
                width: 0.826667rem;
                font-size: 0.533333rem;
                line-height: 0.826667rem;
                color: #000000;
                text-align: center;
              }

              input {
                display: block;
                width: 0.84rem;
                height: 100%;
                border: none;
                font-size: 0.533333rem;
                text-align: center;
                line-height: 0.826667rem;
                color: #000;
                background: #fff;
              }
            }

            .clear_cart_btn {
              margin-right: 0.2rem;
              display: block;
              width: 0.893333rem;
              height: 0.893333rem;
              .icon {
                display: block;
                width: 0.8rem;
                height: 0.8rem;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAD6klEQVR4Ae2aA4xkSxSGn23bDB/DZ9u2wmcbo8bYttG2lUy717a9wbNr/5Ms7/R6t3FzJvlTubc09XXVQeoeIoTYhVi7qGQxIAbEgBgQA2JADIgBMSAWA2JADIgBMaC//vrrmGnTpn3rdrtHvV6vxufzje6J0FYbCASGUX7xyy+/HC1bQMlksq6kpESQlEqlUKlUeyRqW1xcLCoqKgQAl8sS0IwZM44fGRnZUFlZKSwWiwY7ogi7o2xPFAwGi4xGo7WsrExotdrF+DtSdoCwe04fHR3dUFNTI+bNm3fr3vZPpVJPVVVVCZ1Ot2TmzJnHyQ7QlClTTh0bG1tTXV0t5s6d++De9o/FYq9uBrQAgI+VpQ3C4lbRInFE7tzbvpMnT36ejqfJZJqbVzbI5XKdDV0AnZNOTqfzHLvdfs74+Pg1Go1mXV1dncBuetTv9x9qtVqPQJtdymazHQE7dGg4HH6jtrZWwBYtwW66FH2lc0nnvcDj8ZyRdUBDQ0OroH+gX7fTL6Qtz8PDw78ODAz83tbWJpqamkR3d/dCPCdQN3lPNDg4mECfxdSXxqCxdjUfCX3+gc1bmnVA5Hq3qLy8XJCNaWxsFPRr07O0jt5vfqZyj0Rt6XhRXxpDOi69pzm3r6OSHELWAS1atOgR6Cno8VWrVt2L7W1G3EKu3L1mzZq78f6hhQsXPozygGrzmA9hjnth22IKhUIgkBzB/3AX3j+B+qdg6x7JOqA07vinwsJCARtRlylDiiM8SnMiiPw4571YNBqtQPRL7rgzU4B6enrMarVaINb6MS8AbT5inRncQWb8KPkFyGw2TwC0cePGa2Ejbv79999PltatXbv2aNiTm1Bev379+gmpBJLU06kvxrgmjSeVByDkYrPIGyFVeExa197efgm5cZTkxs9PM+475J1wdJNyBjRzPwC9TYCQrMZlCwi52BSKVWbNmjXB/XZ2dl7c0tIiUP6FBZ+XJhd7k9IUvV4fZkAMiAExIAbEgBgQA2JADIgBMSAGxIAYUAYBrdkM6Nk0gC7fDEhgwRemAfTeZkALZAlo6tSph2Fx1bie8c+ZM+dmab++vr5zAMeCUqvRaM6Q1icSiXsbGhoCGFctL0AZEANiQAxIKr72MRqNHZkC1N/fb8qbi8NIJFJN9+S4em7IFCDclmhKSkoIUEE+AKosKCgQiHkmh8Phn0KhUAm+MVQcDNHYmK8ANmguzYlYqTjnAa1cufKx+vp6QbsI2z4jwlx0n0b3bffnLiDJJZ/dbrfg67AQSu/BFI5yyOFwGFKp1Ev8pf3+igExIAbEgBgQA2JALAbEgBgQA2JADIgBMSDWJly2untRJ8f7AAAAAElFTkSuQmCC);
                background-size: 100%;
              }
            }
          }
        }
      }
    }
  }
  // 结算
  .goods_submit {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 99;
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    .goods_submit_inner {
      display: flex;
      color: #3c3c3c;
      height: 1.386667rem;
      .goods_price_num {
        text-align: center;
        width: 33%;

        span {
          font-size: 0.36rem;
          color: #999;
          width: 100%;
          text-align: center;
        }
        strong {
          font-size: 0.44rem;
          color: #ff5722;
          margin-right: 0.133333rem;
          font-weight: bolder;
        }
      }
      .continue_buy_btn {
        width: 33%;
        background: #f4f4f4;
        border: 1px solid #f4f4f4;
        color: #333;
        display: block;
        // width: 100%;
        height: 1.386667rem;
        line-height: 1.386667rem;
        font-size: 0.373333rem;
        text-align: center;
        // width: 100%;
        outline: 0;
        flex: 1 1 auto;
      }
      .settle_btn {
        width: 33%;
        display: block;
        outline: 0;
        background: #ff6700;
        color: #fff;
        text-align: center;
        // width: 100%;
        height: 1.386667rem;
        line-height: 1.386667rem;
        font-size: 0.373333rem;
        flex: 1 1 auto;
      }
    }
  }
}
</style>


