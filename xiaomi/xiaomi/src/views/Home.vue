<template>
  <div id="home">
    <Head></Head>
    <Main></Main>
  </div>
</template>
<script>
import Head from "../components/Home/Head.vue";
import Main from "../components/Home/Main.vue";

export default {
  components: {
    Head,
    Main
  }
};
</script>
<style>
 .container[data-v-0677858e] {
  color: #3c3c3c;
  position: relative;
}
.container .header-bar[data-v-0677858e] {
  position: fixed;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  background: #f2f2f2;
}
.container .app-header-wrapper[data-v-0677858e] {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  height: 0.84rem;
  background: #f2f2f2;
  color: #666;
  padding: 0;
}
.container .app-header-wrapper > div[data-v-0677858e],
.container .app-header-wrapper[data-v-0677858e] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.container .app-header-wrapper .app-header-item[data-v-0677858e] {
  display: block;
  width: 0.6rem;
  margin: 0 0.2rem;
}
.container
  .app-header-wrapper
  .app-header-item
  .app-header-icon[data-v-0677858e] {
  line-height: 0.6rem;
}
.container .app-header-wrapper .logo img[data-v-0677858e] {
  width: 80%;
}
.container .app-header-wrapper .app-header-middle[data-v-0677858e] {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  font-size: 0.3rem;
}
.container .app-header-wrapper .app-header-title[data-v-0677858e] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  border: 1px solid #e5e5e5;
  text-align: left;
  width: 100%;
  color: rgba(0, 0, 0, 0.3);
  background-color: #fff;
  border-radius: 0.04rem;
}
.container .app-header-wrapper .app-header-icon[data-v-0677858e] {
  display: block;
  width: 0.6rem;
  height: 0.6rem;
}
.container .app-header-wrapper .app-header-icon.icon-search[data-v-0677858e] {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQVQYGe3Bf0yUdRwH8I9GpBtZVpul0y1/ZD8sKzdXbupMh3Pq0jWtzbVs9YfL8scfLq02h1m52R3c832+z/d5HrjjAOH4KQhy4MQD4eS4gXiCePLjBIwU8VeCOAPy3dZf/mEpz56zW93rRRQVFRUVFfU/dGFM+UTHlOrXzq/yf9HwefeS0plpk4/F0b+je5x/UZXIPZV+URmRwMEhQfs940K+ry6hYTY9Wu0Tyze6yxVYwSGgQoUKFSpUCMiwwH6zPLVqZVcsPRrlSwvqVVghwMGhQYMOHTp0aNDAIcBhhQ53UcWLFH4127QrElQwqEi7keUu21W/vnl5+/y2dwKraj8p3pdZ7bzDIYNDQmqweQWFU/cTpU4GAQUMro6SbR2z6D4aFuRb0m4yqFCgDXq3U7hciynOSYQOBertgr2np9I/ODHPlSlDg4AN3m8oPKq+t0GHguSexg/ogepjPbvZkIACbci3lsx3Yr06rECGvSO4gB6SbxMb5pBhDwZeInN1vWJvY5DB+5uX0ShUfmeDAhtKCkOxZCZPogUCMo5vpFEJxRSkcKiQ0BBP5gnMSu+RIaGokEatc2ZqSEBCqasnhszi32SFgBYKLiQDqnfI0CAGz79B5uibkOOVIZCXTob0TrK3qeA4tpfM0TmPQYO427CBDHLrDAoO+H+LITM0r+VQkRy88DwZFFiXBAWOS73PkRl8WzgU5JVVjyeDQi+LPhmOW63zyAxH9yvgKE31jCGDKqZltTPYh+rXkBmKXAIyKpLIsJpn8hskpMDzJZmhKFuAoXIfGeaPO+i1IQXHtpIZPHsVyCgXZJhnUm6TBPtI3UdkBv9mDo5DOVUxZFDpjAO/yHDcCcSTGVreZxDI8F58kgxqelMe5LD3h+aQGbrnsBENYrDjbTKobnMSFLh8A7Fkhpa4Ao8MgcpdZEjTuAI3h4DnRzJLYEMiODKPX3qKDAjOF30a+N3gYjJLz+SMs0lQUL2ZDDiYqkDCQffFcWSeih8sYEht/HUqjVJgjehTIOH0CjJT99QDbRJsKCxtG0+j0PWqvUOGFYdzyGxnlyVf5ZCQ9xM9tJPP5jbaIMEZ7J5B5jv6FR/iUPsP778eRw+hc4ajhEGBs+NkPIXDmTFuRyI4FBSW9EyhB2h9N+O0AgEFR5MoXK49XilzMDBktBZ+Fnia/oZ/ev6elKscAioUOEPtCyl8POucfRwSZOTVunZWxg9MoHtcnuxek5mQE7JBhoAODQIStBttCyh8OubmHEke4LBAhXM4uykt35mWb8212bPSi7M6nX9wWCGQfL2M9U73JjBw2KBfbl1M4VPxmG9tdl76gA0WWCBBhQYNKiRY8TMYMnuzXdVL6S/H90hQwGHvObeEwiv4Vpn1UG1ea9ZV510dOhxIG8npOnykNKF5Lt2jZjeDCgXJl4PLKdx6xja+4Hm94D3Hh471rhXFi+qm0X3UfMsgwKDeOreUIoP3awYFEsTNs8soMnh3MnAw6FdallNkOLGLQUBBcl/LSooMtTtkqODQBlpWU2TwbZGhgEG5fWY1RQbfVhkcDKK/eTVFhtrtMjg49Butiygy+LfKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII=);
  background-size: 0.4rem 0.4rem;
}
.container .app-header-wrapper .app-header-icon.icon-user[data-v-0677858e] {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAkFBMVEUAAABiYmJoaGhxcXFwcHBwcHBycnJwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBzc3NycnJwcHB2dnZwcHBwcHBxcXFwcHBwcHBwcHBwcHBwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBnZ2dwcHC6NtRcAAAAMHRSTlMAAwoXHycsRXWfxdzz+jB+vv8ljv/+72HU682aahOXTQ+wNblUtazlb1elWuE7B4ObTEwxAAADdklEQVR4AZWWh5rqOgyEnd7LEA2k0Os24P3f7vLdBVOSTTizBbfflmVZWHXJUBeZlu24rmNbpm56U5bnB2EUJ0kchYHvWep9pVke40FxnqX9hLZ4VEQQgEk8vihOCAiiYnTpHGKNSQmAVd1MvdRxUm/a1BUBlJNLZz87mycAo2axNHTjctFEBJL5rI82lL0SYjxfX+sX/ZbW8zEoK1sZPexGiHL7cDa6uC1B2XTQ2uaVEDv3idS8uwNl9bflhRB7q7vbUNYelOKvhRck8g5W0znIhTI6+2rwsO5zyfpA1N2zfwg5Ub2akPLR6a0I2Jn9J2nugKjLZ5/s3FDLLfxUba0guTUYgLlg1e6wIkg2HPqZIJq1DRpj3Gu1HlbpYbrVT6QcDcOjWpKPFlxAclMNyswFRQv+ElmpN7QS+WrBe5H9kNV6XP/Kre5HuL3yHLIx1LB2gnkLzii1peuW9RwES10KhVkL/o5x8G6tXlnq8kXTn91vCjHU8Ufi75Zv3AMwvbUWIuFSGbebWIlsr+UpcXBVSyHk6zbjBGRxO3UnB+PrPT99CULVVkZU66txy42Q+/X/w7c1KGdtBJh1wE6lM5Sh0lKIn+Dbm+5iEF+3O1wIK0d1aA6Oj7ddpzkAxuMEv9le/bprTDSdsZNWxEanCescERAgCSeXputuwCrtjsMMRHEZdI2p1N/XUdhMLB1lBYjsrzSxAZk9BOPSSUfGfTaflFyb1kqtEZhkevjvqNv/U5YQUU9qXlQgG/s+n6GH2gGIaqF6tD2ACL/NVg74DEEctqpXXg0i3kxe5lzFIGpPDcgJElA4ffouiYVIAkcN6vRdM0HsKkP7MUHC8PvUz11d3JDE8Q57QrL47Rt4DB2bmMRudoetXMi4OQ4+h2b+Dwis7Ke7vieIH3/Zz7orgizPs5eT8ksS3Lt97LEE8XN+fa9dKs75AKI89rCREJujemavVS8HJTr+FdpuKUQwa6FX3ArAru8znXtQmH8/aMwClFX3gDOI5tT3oDk1IM6dG44fEknPjY+7nLbDLXuqvscUsGs3b2NtUR+dgfG2tcRe9PusD7ZLyKplzw94VidjSKoAfvTurrAPRLZ6Q3YE+C8WBoLQHjmjATkjO4QEL8EVgUn1lhKidJXxAC9A4k2RWDzBn5LwPSVkIp9Pm16m7j8ovWaF/wCc31NtcLeHeAAAAABJRU5ErkJggg==);
  background-size: 0.4rem 0.4rem;
}
.container .download-app-go[data-v-0677858e] {
  position: relative;
  display: block;
  height: 1rem;
  overflow: hidden;
}
.container .download-app-go a[data-v-0677858e] {
  display: block;
}
.container .download-app-go a img[data-v-0677858e] {
  display: block;
  width: 100%;
  height: auto;
}
.container .download-app-go .close[data-v-0677858e] {
  position: absolute;
  width: 0.5rem;
  height: 1rem;
  text-align: center;
  left: 0;
  top: 50%;
  margin-top: -0.5rem;
}
.container .download-app-go .close a[data-v-0677858e] {
  display: block;
}
.container .nav-wrap[data-v-0677858e] {
  position: relative;
  overflow: hidden;
}
.container .nav-wrap .nav-display[data-v-0677858e] {
  position: absolute;
  right: 0;
  top: 0;
  width: 0.68rem;
  height: 0.55rem;
  line-height: 0.55rem;
  background-color: #f2f2f2;
  box-shadow: -15px 0 15px 0 #f2f2f2;
  z-index: 99;
}
.container .nav-wrap .nav-display .image-icons[data-v-0677858e] {
  vertical-align: middle;
  width: 0.4rem;
  height: 0.4rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABlBMVEX///+9vb18/6H5AAAAAXRSTlMAQObYZgAAAF9JREFUeNrtzCESwDAMxMD4/59umIBJJ6JalLo3OkmS5Ie55IbRyAmrUQtmlxisoeswtR3GurPn+4crcXYljq7EyZU4uBKfrsSHK/F0JR6mhCPYDmwHdKzVUaWTJElefOyLAQtGqMZ7AAAAAElFTkSuQmCC);
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: -webkit-transform 0.2s linear;
  transition: -webkit-transform 0.2s linear;
  transition: transform 0.2s linear;
  transition: transform 0.2s linear, -webkit-transform 0.2s linear;
}
.container .nav-wrap .nav-display .image-icons.unfold[data-v-0677858e] {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.container .nav[data-v-0677858e] {
  overflow-x: auto;
  background: #f2f2f2;
  font-size: 0.26rem;
  white-space: nowrap;
  z-index: 2;
}
.container .nav .nav-item[data-v-0677858e] {
  display: inline-block;
  padding: 0 0.25rem;
}
.container .nav .nav-item span[data-v-0677858e] {
  display: inline-block;
  line-height: 0.55rem;
  border-bottom: 2px solid rgba(237, 91, 0, 0);
}
.container .nav .nav-item-extra[data-v-0677858e] {
  padding-right: 0.76rem;
  display: inline-block;
}
.container .nav[data-v-0677858e]::-webkit-scrollbar {
  height: 0;
  background: transparent;
}
.container .nav-item-layer[data-v-0677858e] {
  background-color: #f2f2f2;
  font-size: 0.28rem;
  text-align: left;
  padding: 0 0.25rem;
  -webkit-transition: max-height 0.3s ease-in-out;
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
}
.container .nav-item-layer .title[data-v-0677858e] {
  padding-top: 0.25rem;
}
.container .nav-item-layer .btn-wrap[data-v-0677858e] {
  margin-top: 0.34rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.container .nav-item-layer .btn-wrap .extra-btn[data-v-0677858e] {
  margin-bottom: 0.24rem;
  display: inline-block;
  width: 1.52rem;
  height: 0.56rem;
  text-align: center;
  line-height: 0.56rem;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 0.25rem;
  background-color: #fff;
}
.container .nav-item-layer .btn-wrap .extra-btn.mr-interval[data-v-0677858e] {
  margin-right: 0.2rem;
}
.container .nav-item-layer .btn-wrap .extra-btn.cur[data-v-0677858e] {
  background-color: #fde0d5;
  border-color: #ff6700;
  color: #ff6700;
}
.container .height-enter-active[data-v-0677858e] {
  max-height: 10rem;
}
.container .height-enter[data-v-0677858e] {
  max-height: 0.66rem;
}
.container .height-leave-to[data-v-0677858e],
.container .height-leave[data-v-0677858e] {
  max-height: 0;
}
.container .bodys[data-v-0677858e] {
  padding-bottom: 52px;
  position: absolute;
  top: 1.39rem;
  left: 0;
  right: 0;
  overflow: hidden;
  background: #fff;
  -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.55, 0, 0.1, 1);
  transition: -webkit-transform 0.4s cubic-bezier(0.55, 0, 0.1, 1);
  transition: transform 0.4s cubic-bezier(0.55, 0, 0.1, 1);
  transition: transform 0.4s cubic-bezier(0.55, 0, 0.1, 1),
    -webkit-transform 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}
.container .bodys.slide-left-enter[data-v-0677858e] {
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
.container .bodys.slide-right-enter[data-v-0677858e] {
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}
.container .bodys.slide-right-leave-active[data-v-0677858e] {
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
.container .bodys.slide-left-leave-active[data-v-0677858e] {
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}
.container .with-advert .bodys[data-v-0677858e] {
  top: 2.39rem;
}
</style>

