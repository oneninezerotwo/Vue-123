<template>
    <div id="set">
        <Header :title="title"></Header>
        <main class="main">
            <ol>
                <li>
                    <a href="javascript:;">地址管理</a>
                </li>
                <li>
                    <a href="javascript:;">经营证照</a>
                </li>
                <li>
                    <a href="javascript:;">协议规则</a>
                </li>
                <li>
                    <a href="javascript:;">小米商城用户协议</a>
                </li>
                <li>
                    <a href="javascript:;">小米帐号使用协议</a>
                </li>
                <li>
                    <a href="javascript:;">隐私政策</a>
                </li>
            </ol>
        </main>
        <footer class="footer">
            <a href="javascript:;" @click="quit()">退出账号</a>
        </footer>
    </div>
</template>
<script>
import Header from "../components/Header";
export default {
  data() {
    return {
      title: [
        {
          content: "个人中心"
        }
      ]
    };
  },
  components: {
    Header
  },
  methods: {
    /*******退出登录******/
    quit() {
    //   this.$store.state.isLogin = false; //设置仓库值
      localStorage.removeItem("username"); //删除本地存储
      this.$router.push({
        //跳转到“我的”页面
        path: "/user"
      });
    }
  },
  created() {
    this.$store.state.footShow = false;
  }
};
</script>

<style lang="scss" scoped>
#set {
  padding-top: 1.333333rem;
  .main {
    ol {
      font-size: 0.4rem;
      margin-bottom: 0.4rem;
      li {
        position: relative;
        // display: inline-block;
        padding: 0.266667rem;
        width: 100%;
        height: 1.053333rem;
        border-bottom: 0.026667rem solid #f6f6f6;
        box-sizing: border-box;

        a {
          display: block;
          width: 100%;
          height: 100%;
          line-height: 1.053333rem;
          text-align: left;
          color: #3c3c3c;
        }
      }
      li::after {
        content: " ";
        position: absolute;
        // width: 2.24px;
        width: 0.293333rem;
        // height: 2.24px;
        height: 0.293333rem;
        // right: 2.24px;
        right: 0.293333rem;
        top: 50%;
        margin-top: -1.12px;
        margin-top: -0.07rem;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        text-decoration: inherit;
        vertical-align: inherit;
      }
    }
  }
  //
  .footer {
    background-color: #f4f4f4;
    text-align: center;
    height: 1.333333rem;
    line-height: 1.333333rem;
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    a {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 0.4rem;
      color: #3c3c3c;
      outline: 0;
      text-decoration: none;
    }
  }
}
</style>

