<template>
  <div class="zh_CN">
    <div class="wrapper">
      <!-- loading -->
      <div class="popup_mask acquirePhoneMask" style="display:none;" id="loadingMask">
        <div class="bkc"></div>
        <div class="mod_wrap loadingmask"></div>
        <div class="loadingTips">正在检测你的帐号信息...</div>
      </div>
      <!--bg_banner_start-->
      <div class="bgiframe">
        <iframe
          name="ifr"
          style="height:100%"
          width="100%"
          height="686"
          src="about:blank"
          id="bgiframe"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
      <!--bg_banner_end-->
      <div class="wrap">
        <div class="layout_panel">
          <div class="layout" id="layout">
            <!--表单输入登录-->
            <div class="mainbox form-panel" id="login-main">
              <div id="custom_display_2">
                <a class="ercode" id="qrcode-trigger" href="javascript:void(0)"></a>
              </div>
              <!-- header s -->
              <div class="lgnheader">
                <div class="header_tit t_c">
                  <em id="custom_display_1" class="milogo">
                    <svg
                      width="100%"
                      height="100%"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="48" height="48" rx="3" ry="3" style="fill:#ff6700"></rect>
                      <rect x="10" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect>
                      <rect x="33.75" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect>
                      <rect x="11.25" y="15" width="15" height="4.1" style="fill:#FFFFFF"></rect>
                      <rect x="26.2" y="20.55" width="4.2" height="12.5" style="fill:#FFFFFF"></rect>
                      <rect
                        x="20.6"
                        y="15"
                        width="9.8"
                        height="9.8"
                        rx="4.4"
                        ry="4.4"
                        style="fill:#FFFFFF"
                      ></rect>
                      <rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" style="fill:#ff6700"></rect>
                      <rect x="18" y="19.1" width="4" height="2.2" style="fill:#ff6700"></rect>
                      <rect x="24.2" y="23" width="1.94" height="10" style="fill:#ff6700"></rect>
                      <rect x="18.1" y="22.8" width="4.2" height="10.2" style="fill:#FFFFFF"></rect>
                    </svg>
                  </em>
                  <h4 class="header_tit_txt" id="login-title">小米帐号登录</h4>
                  <div class="site_info"></div>
                </div>
              </div>
              <!-- header e -->
              <!-- tab s -->
              <div class="nav_tabs_panel">
                <div id="nav-tabs" class="nav_tabs">
                  <a class="navtab-link now" data-tab="pwd">帐号登录</a>
                  <span class="line"></span>
                  <a class="navtab-link" href="javascript:void(0);" data-tab="qr">扫码登录</a>
                </div>
              </div>
              <!-- tab e -->
              <!-- tab con s -->
              <div class="tabs-con tabs_con now" data-con="pwd">
                <div>
                  <div class="login_area">
                    <form action="/pass/serviceLoginAuth2" method="POST" id="login-main-form">
                      <div class="loginbox c_b">
                        <!-- 输入框 -->
                        <div class="lgn_inputbg c_b login-panel pwdLogin sms_login">
                          <!--验证用户名-->
                          <div class="single_imgarea" id="account-info">
                            <div class="na-img-area" id="account-avator" style="display:none">
                              <div class="na-img-bg-area" id="account-avator-con"></div>
                            </div>
                            <p class="us_name tac" id="account-displayname"></p>
                            <p class="us_id tac"></p>
                          </div>
                          <label
                            id="region-code"
                            class="labelbox login_user c_b disable add_regioncode"
                            for
                          >
                            <div class="turn_area">
                              <a
                                class="btn_turn"
                                id="manual_code"
                                href="javascript:void(0);"
                                title="关闭国家码"
                              ></a>
                            </div>
                            <div class="country_list" v-show="pdd==0?!ture:ture">
                              <div class="animation countrycode_selector" id="countrycode_selector">
                                <span class="country_code">
                                  <tt class="countrycode-value" id="countrycode_value">+86</tt>
                                  <i class="icon_arrow_down"></i>
                                </span>
                              </div>
                            </div>
                            
                            <input
                              class="item_account"
                              autocomplete="off"
                              type="password"
                              name="user"
                              id="username"
                              :placeholder="zh[pdd].a1"
                              _type="tel"
                            >
                            <div id="btn-clear-link" class="clear_link_panel">
                              <span class="clear_link"></span>
                            </div>
                          </label>
                          <div
                            class="country-container"
                            id="countrycode_container"
                            style="display: none;"
                          >
                            <div class="country_container_con" id="countrycode_container_con"></div>
                          </div>
                          <div id="captcha"></div>
                          <label class="labelbox pwd_panel c_b" id="bianda">
                            <input
                              class="item_account"
                              :placeholder="zh[pdd].a2"
                              autocomplete="off"
                              id="pwd"
                              name="password"
                              type="password"
                            >
                            <input
                              class="item_account"
                              type="password"
                              placeholder="密码"
                              autocomplete="off"
                              id="visiablePwd"
                              name="visiablepwd"
                              style="display:none"
                            >
                            <div class="eye_panel pwd-visiable">
                              <i class="eye pwd-eye">
                                <svg
                                  width="100%"
                                  height="100%"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    class="eye_outer"
                                    d="M0 8 C6 0,14 0,20 8, 14 16,6 16, 0 8 z"
                                  ></path>
                                  <circle class="eye_inner" cx="10" cy="8" r="3"></circle>
                                </svg>
                              </i>
                            </div>
                            <div id="sms-code-panel" class="code_panel" style="display: block;">
                              <a
                                class="send_ticket"
                                href="javascript:;"
                                id="getSMSCode"
                                v-if="pdd==1?ture:!ture"
                              ></a>
                            </div>
                          </label>
                        </div>
                        <div class="security_Controller" style="display: none;">
                          <label class="checkbox_area">
                            <input type="checkbox" id="trustSecurityController" class="checkbox">使用安全控件
                          </label>
                        </div>

                        <!-- 错误信息 -->
                        <div class="err_tip" v-if="yyy==2?!ture:ture">
                          <div>
                            <em class="icon_error"></em>
                            <span class="error-con" v-text="cw[yyy].a1"></span>
                          </div>
                        </div>
                        <div @click="Registera()" class="btns_bg">
                          <input class="btnadpt" id="login-button" :value="zh[pdd].a3">
                          <span
                            id="custom_display_8"
                            class="sns-default-container sns_default_container"
                            style="display: none;"
                          ></span>
                        </div>
                        <div class="other_panel clearfix">
                          <span id="custom_display_256" class="sms_link">
                            <a
                              href="javascript:;"
                              class="btnadpt btn_gray login_type_link"
                              @click="toggleState()"
                              id="ChangeLoginType"
                              v-text="zh[pdd].a4"
                            >用户名密码登录</a>
                          </span>
                          <div class="reverse">
                            <div class="n_links_area" id="custom_display_64" style="display: none;">
                              <a
                                class="outer-link"
                                href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fcart%26sign%3DMzg3MzdjZjNkMWJhZDBmMjc0OTU4ZGEzMTQzYTRmM2ZhYjJiOWJmNw%2C%2C&amp;sid=mi_eshopm_go&amp;_bal=true&amp;_loginSign=ticket&amp;_loginType=ticket"
                              >立即注册</a>
                              <span>|</span>
                              <a
                                class="outer-link"
                                href="https://account.xiaomi.com/pass/forgetPassword?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fcart%26sign%3DMzg3MzdjZjNkMWJhZDBmMjc0OTU4ZGEzMTQzYTRmM2ZhYjJiOWJmNw%2C%2C&amp;sid=mi_eshopm_go&amp;_bal=true&amp;_loginSign=ticket&amp;_loginType=ticket"
                              >忘记密码？</a>
                            </div>
                          </div>
                          <!-- 其他登录方式 s -->
                          <div
                            style="display: block;"
                            class="other_login_type sns-login-container"
                            id="custom_display_16"
                          >
                            <fieldset class="oth_type_tit">
                              <legend align="center" class="oth_type_txt">其他方式登录</legend>
                            </fieldset>
                            <div id="sns-login-links" class="oth_type_links">
                              <a
                                class="icon_type btn_qq sns-login-link"
                                data-type="qq"
                                href="/pass/sns/login/auth?appid=100284651&amp;&amp;callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fcart%26sign%3DMzg3MzdjZjNkMWJhZDBmMjc0OTU4ZGEzMTQzYTRmM2ZhYjJiOWJmNw%2C%2C&amp;sid=mi_eshopm_go"
                                title="QQ登录"
                                target="_blank"
                              >
                                <i class="btn_sns_icontype icon_default_qq"></i>
                              </a>
                              <a
                                class="icon_type btn_weibo sns-login-link"
                                data-type="weibo"
                                href="/pass/sns/login/auth?appid=2996826273&amp;&amp;callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fcart%26sign%3DMzg3MzdjZjNkMWJhZDBmMjc0OTU4ZGEzMTQzYTRmM2ZhYjJiOWJmNw%2C%2C&amp;sid=mi_eshopm_go"
                                title="微博登录"
                                target="_blank"
                              >
                                <i class="btn_sns_icontype icon_default_weibo"></i>
                              </a>
                              <a
                                class="icon_type btn_alipay sns-login-link"
                                data-type="alipay"
                                href="/pass/sns/login/auth?appid=2088011127562160&amp;&amp;callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fcart%26sign%3DMzg3MzdjZjNkMWJhZDBmMjc0OTU4ZGEzMTQzYTRmM2ZhYjJiOWJmNw%2C%2C&amp;sid=mi_eshopm_go"
                                title="支付宝登录"
                                target="_blank"
                              >
                                <i class="btn_sns_icontype icon_default_alipay"></i>
                              </a>
                            </div>
                          </div>
                          <!-- 其他登录方式 e -->
                          <p class="acq_tips" style="display: none;"></p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="tabs-con tabs_con" data-con="qr"></div>
              <!-- tab con e -->
            </div>
            <div class="ercode_area" id="login-qrcode">
              <div class="ercode_pannel">
                <a class="code_close" href="javascript:void(0)" title="关闭" id="qrcode-close">
                  <span class="icon_code_close"></span>
                </a>
                <div class="ercode_box">
                  <div class="code_hd">
                    <h3 class="code_tit">小米帐号扫码登录</h3>
                    <p>请打开「设置 &gt; 小米帐号 &gt; 右上角扫一扫」扫码登录</p>
                  </div>
                  <div class="code_iframe">
                    <iframe
                      style="background:#fff;"
                      src="about:blank"
                      id="qriframe"
                      frameborder="0"
                      scrolling="no"
                      sandbox="allow-scripts allow-same-origin allow-top-navigation allow-modals"
                    ></iframe>
                  </div>
                  <div class="custom_sub_txt">
                    <p id="custom-qr-name"></p>
                    <p>小米手机可打开「设置」&gt;「小米帐号」扫码登录</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 取号注册 -->
            <div id="ac-register" class="tac mode_panel form-panel" style="display: none">
              <h1>注册小米帐号</h1>
              <div class="box">
                <img
                  src="https://account.xiaomi.com/static/res/bcc9d9f/account-static/respassport/acc-2014/img/2018/sim.png"
                  alt="sim card"
                  width="70"
                  height="70"
                >
                <p>
                  手机号：
                  <span class="maskedPhone"></span>
                </p>
              </div>
              <div class="err_tip">
                <div class="dis_box">
                  <em class="icon_error"></em>
                  <span class="error-con"></span>
                </div>
              </div>
              <div class="fixed_bot dis_box">
                <a href="javascript:;" class="btnadpt plain ok_btn">一键注册</a>
                <a href="javascript:;" class="btnadpt plain no_btn btn_gray">登录其他帐号</a>
              </div>
              <p class="acq_tips" style="display: none">取号来源于中国移动</p>
              <p class="agreeTip">
                <i class="icon_select icon_true"></i>同意小米的
                <a
                  href="https://static.account.xiaomi.com/html/agreement/account/cn.html"
                  class="agreement_link"
                >用户协议</a>和
                <a href="https://www.mi.com/about/privacy/" class="privacy_link">隐私政策</a>
              </p>
            </div>
            <!-- 回收号确认 -->
            <div id="ac-confirm" class="tac mode_panel form-panel" style="display: none">
              <div>
                <div class="box">
                  <div class="na-img-area">
                    <div class="na-img-bg-area us-portraitUrl"></div>
                  </div>
                  <div class="confirm_tips">
                    <p class="us_name us-userName">
                      昵称：
                      <span class="usernameShow"></span>
                    </p>
                    <p>
                      小米ID：
                      <span class="useridShow"></span>
                    </p>
                    <!-- <p>注册时间：<span class="userRegisterDateShow"></span></p>
                    <p>注册设备：<span class="userRegisterDeviceShow"></span></p>
                    <p>注册来源：<span class="userRegisterOriginShow"></span></p>
                    <p>手机号：<span class="userPhoneShow"></span></p>-->
                  </div>
                </div>
                <h2>这是你的帐号吗？</h2>
                <div class="recycle">
                  <p>
                    <span class="user-phone"></span>疑似是运营商回收后再次售卖的号码，该号码下已有小米帐号，这个帐号是你的吗？
                  </p>
                  <p class="color_warning">如果使用非本人注册的帐号，部分功能可能会受限制。</p>
                </div>
              </div>
              <div class="err_tip">
                <div class="dis_box">
                  <em class="icon_error"></em>
                  <span class="error-con"></span>
                </div>
              </div>
              <div class="fixed_bot">
                <a href="javascript:;" class="btnadpt plain ok_btn">继续登录</a>
                <a href="javascript:;" class="btnadpt plain no_btn">注册新帐号</a>
              </div>
              <p class="acq_tips" style="display: none">取号来源于中国移动</p>
              <p class="ptb30 btn_alink_box">
                <a href="javascript:;" class="back_btn blue">登录其他帐号</a>
              </p>
            </div>
            <div id="set-pwd" class="mode_panel set_pwd_panel form-panel">
              <h4>请设置您的密码：</h4>
              <label class="labelbox c_b">
                <input class="item_account set-password re-password" placeholder="请输入密码">
              </label>
              <label class="labelbox c_b">
                <input
                  class="item_account set-password"
                  name="repassword"
                  type="password"
                  placeholder="请输入确认密码"
                >
              </label>
              <div class="err_tip pwd_tip">
                <div class="dis_box">
                  <em class="icon_error"></em>
                  <span
                    class="error-con"
                    data-origin="密码长度8~16位，数字、字母、字符至少包含两种"
                  >密码长度8~16位，数字、字母、字符至少包含两种</span>
                </div>
              </div>
              <div class="btns_bg">
                <a id="register-button" class="btnadpt">立即注册</a>
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
import { constants } from "crypto";
export default Vue.extend({
  created(){
   this.hide()
  },
  destroyed(){
    this.show()
  },

  data() {
    return {
      pdd: 0,
      yyy: 0,
      sss: 0,
      ture: "ture",
      zh1: "",
      mm1: "",
      ture: "false",
      zh: [
        {
          a1: "手机号码",
          a2: "密码",
          a3: "登陆",
          a4: "用户名密码登陆"
        },
        {
          a1: "手机号码",
          a2: "密码",
          a3: "注册",
          a4: "手机短信登录/注册"
        }
      ],
      cw: [
        {
          a1: "请输入手机号"
        },
        {
          a1: "请输入正确手机号"
        },
        {
          a1: "请输入6到18位字母开头的密码"
        },
        {
          a1: "请输入6到18位字母开头的密码"
        },
        {
          a1: "账号已存在"
        },
        {
          a1: "请输入正确的账号密码"
        }
      ]
    };
  },
  
  methods: {
    show(){
       return this.$store.state.isShow = true
    },
     hide(){
      return this.$store.state.isShow = false
    },
    async toggleState() {
      if (this.pdd == 0) {
        this.pdd = 1;
        $("#bianda").css("width", "5rem");
      } else {
        this.pdd = 0;
      }
      //  constants.log(this.pdd)
    },
    trim(str) {   //正则
      //去掉前后空格
      var reg = /^\s+|\s+$/g;
      return str.replace(reg, "");
    },
    tel(str) {
      //号码
      var reg = /^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;
      return reg.test(str);
    },
    psweasy(str) {
      //6-18位首字母开头
      var reg = /^[a-zA-Z]\w{7,17}$/;
      return reg.test(str);
    },
    Registera() {  //登陆注册判断
      if (this.pdd == 1) {  //注册判断 pdd是判断 是注册还是登陆页的
        if (this.trim($("#username").val())) {
          this.yyy = 1;       //判断是否为空   yyy  是渲染的数据要是不符和就显示盒子并赋予yyy  下标为1 的值
          $(".err_tip").css("display", "block");
          if (this.tel($("#username").val())) { //判断手机号
            this.yyy = 2;
            console.log(123);
            this.yyy = 3;         
            this.sss = 1;      
            $(".err_tip").css("display", "block");
            // console.log(this.psweasy($("#pwd").val()));
            // $(".err_tip").css("display", "block");
            if (this.psweasy($("#pwd").val())) {  //判断密码正则
              this.yyy = 3;
              this.sss = 1;       
              $(".err_tip").css("display", "none");
              console.log($("#username").val());
              console.log($("#pwd").val());
              this.zh1 = $("#username").val();  //点击获取框里面的值   赋予变量   然后进行判断
              this.mm1 = $("#pwd").val();
              if (this.dropToCart()) {  //查询数据库是否有该手机号
              }

              // console.log(  this.dropToCart())
            }
          }
        }
      }
      if (this.pdd == 0) {  //  登陆页判断
                this.zh1 = $("#username").val();    //获取当前输入的值
              this.mm1 = $("#pwd").val();
        this.dropToCart1();    //查询数据库是否存在该账号密码
      }
    },
    dropToCart1() {
      this.demand1(res => {
        if (res == "false") {    //有该账号密码     返回上一层
          this.$router.go(-1); //返回上一层  
        }
        if (res == "ture") {    //没用该账号密码或者账号密码错误提醒客户
          console.log("已经有了");
          this.yyy = 5;
          $(".err_tip").css("display", "block");
        }
      });
    },
    dropToCart() {          //先查询数据库有没该账号  没有就添加
      this.demand(res => {
        // console.log(res,err)
        if (res == "ture") {
          var shuliang = this.zh1;
          var jieshao = this.mm1;
          this.$http
            .post(
              "api/user/addUser",
              {
                // username:name,
                shuliang: shuliang,
                jieshao: jieshao
              },
              {}
            )
            .then(response => {
              console.log(response);
              this.pdd = 0;
            });
        }
        if (res == "false") {
          console.log("已经有了");
          this.yyy = 4;
          $(".err_tip").css("display", "block");
        }
      });
    },
    demand1(res) {  //登陆账号密码数据库查询
      var shuliang = this.zh1;
      var jieshao = this.mm1;
      console.log(shuliang,jieshao);
      this.$http
        .post(
          "api/user/checkCurr1",
          {
            shuliang: shuliang,
            jieshao: jieshao
          },
          {}
        )
        .then(response => {
          console.log(response);
          if (response.body == false) {
            //数据库没有这条商品id []==false? >true

            return res("ture");
          } else if (response.body) {
            //  this.currQty=response.body.qty
            //  console.log(this.currQty)
            return res("false");
          }
        });
    },

    demand(res) {   //注册判断账号是否存在
      var shuliang = this.zh1;
      this.$http
        .post(
          "api/user/checkCurr",
          {
            shuliang: shuliang
          },
          {}
        )
        .then(response => {
          console.log(response);

          if (response.body == false) {
            //数据库没有这条商品id []==false? >true

            return res("ture");
          } else if (response.body) {
            //  this.currQty=response.body.qty
            //  console.log(this.currQty)
            return res("false");
          }

          // console.log(this.total_qty)
        });
    }
  }
});
</script>

<style >
@import "../components/LoginRegister/LoginRegister.css";

#pwd {
  padding-left: 0.04rem;
}
#bianda {
  width: 5rem;
}
#pwd {
  padding-left: 0.163333rem;
}
</style>