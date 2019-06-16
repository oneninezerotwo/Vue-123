import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';//首页
import Category from './views/Category.vue';//分类
import Cart from './views/Cart.vue';//购物车
import User from './views/User.vue';//我的
import Search from './views/Search.vue';//搜索
import Detail from './views/Detail.vue';//详情页
import List from './views/List.vue';//列表页7
import LoginRegister from './views/LoginRegister.vue';//登录注册页
import Order from './views/Order.vue';//订单页


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {//首页
      path: '/',
      name: 'home',
      component: Home
    },
    {//分类
      path:'/category',
      name:'category',
      component: () => import(/* webpackChunkName: "about" */ './views/Category.vue')
    },
    {//购物车
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: "about" */ './views/Cart.vue')
    },{//我的
      path:'/user',
      name:'user',
      component: () => import(/* webpackChunkName: "about" */ './views/User.vue')
    },{//搜索
      path:'/search',
      name:'search',
      component: () => import(/* webpackChunkName: "about" */ './views/Search.vue')
    },
    {//详情页
      path:'/detail',
      name:'detail',
      component: () => import(/* webpackChunkName: "about" */ './views/Detail.vue')
    },{//列表页
      path:'/list',
      name:'list',
      component: () => import(/* webpackChunkName: "about" */ './views/List.vue')
    },{//登录注册页
      path:'/loginRegister',
      name:'loginRegister',
      component: () => import(/* webpackChunkName: "about" */ './views/LoginRegister.vue')
    },{//订单页
      path:'/order',
      name:'order',
      component: () => import(/* webpackChunkName: "about" */ './views/Order.vue')
    },
    {
      path:"/user/set",
      name:'user/set',
      component: () => import(/* webpackChunkName: "about" */ './views/Set.vue')
    },
    { //选购
      path: '/viewport',
      name: 'viewport',
      component: () => import( /* webpackChunkName: "about" */ './components/viewport.vue')
    }, { //更多
      path: '/more',
      name: 'more',
      component: () => import( /* webpackChunkName: "about" */ './components/more.vue')
    }
   
  ]
})
