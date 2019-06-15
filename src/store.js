import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 选显卡当前选项
    tabsCurrentItem:0,
    // 是否显示foot
    footShow:true,
    // 返回之前页面
    back:{
      old:0,
      now:0
    },
    // 猜你喜欢商品
    like_goods:[],
    // 未登录 购物车商品
    cart_goods:[],
  },
  mutations: {
    
  },
  actions: {

  }
})
