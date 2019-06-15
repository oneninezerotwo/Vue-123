<template>
    <div id="loginRegister">
        <div class="top">
            <div class="top_inner">
                <div class="login">
                    <div class="logo">
                        <div class="logo_inner">
                            <!-- logo -->
                            <em id="custom_display_1" class="milogo">
                                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="3" ry="3" style="fill:#ff6700"></rect>
                                    <rect x="10" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect>
                                    <rect x="33.75" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect>
                                    <rect x="11.25" y="15" width="15" height="4.1" style="fill:#FFFFFF"></rect>
                                    <rect x="26.2" y="20.55" width="4.2" height="12.5" style="fill:#FFFFFF"></rect>
                                    <rect x="20.6" y="15" width="9.8" height="9.8" rx="4.4" ry="4.4" style="fill:#FFFFFF"></rect>
                                    <rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" style="fill:#ff6700"></rect>
                                    <rect x="18" y="19.1" width="4" height="2.2" style="fill:#ff6700"></rect>
                                    <rect x="24.2" y="23" width="1.94" height="10" style="fill:#ff6700"></rect>
                                    <rect x="18.1" y="22.8" width="4.2" height="10.2" style="fill:#FFFFFF"></rect>
                                </svg>
                            </em>
                            <!-- 小米账号登录 -->
                            <h2>小米帐号登录</h2>

                        </div>
                    </div>
                    <div class="login_content"></div>
                </div>
                <div class="register"></div>
                <div class=""></div>
                <div></div>
                <div></div>

            </div>
        </div>
        <div class="bottom"></div>
    </div>
</template>
<style lang="scss" scoped>
// @import url(../assets/css/login.css);
#loginRegister {
  // top
  .top {
    padding-bottom: 0.9rem;
    .top_inner {
      width: 100%;
      margin: 0 auto 30px;
      padding: 0 20px;
      position: relative;
      box-sizing: border-box;
      .login {
        .logo {
          .logo_inner {
            padding: 0.8rem 0 0.266667rem;
            text-align: center;
            // logo
            .custom_display_1{
                width: 1.28rem;
                height: 1.28rem;
                margin: 0 auto .506667rem;
                display: block;
                background-image: -webkit-image-set(url(https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo.png) 1x,url(https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo@2x.png) 2x);
            }
            // 小米账号登录
            h2{
                height: .466667rem;
                font-size: .466667rem;
                color: #000;
                line-height: .466667rem;
                // text-align: center;
            }

          }
        }
      }
    }
  }
}
</style>

