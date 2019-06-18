<template>
    <div data-v-bc186c1a="" class="app-view-wrapper">
        <div data-v-2d23ac17="" data-v-bc186c1a="" class="app-search-page app-view">
            <div data-v-2d23ac17="" class="app-search-head">
                <div data-v-7cbaca4a="" data-v-2d23ac17="" class="app-search-head-input">
                    <div data-v-7cbaca4a="" class="app-search">
                        <router-link to="/" data-v-7cbaca4a="" class="header-btn" data-stat-id="8bc2ac9505456527" >
                            <i data-v-7cbaca4a="" class="image-icons app-header-icon icon-back"></i>
                        </router-link>
                        <div data-v-7cbaca4a="" class="search-item"><input data-v-7cbaca4a="" type="search" autocomplete="off" placeholder="搜索商品名称" autocapitalize="off"></div>
                        <router-link to="/List" data-v-7cbaca4a="" class="header-btn" data-stat-id="8bc2ac9505456527">
                            <i data-v-7cbaca4a="" class="image-icons app-header-icon icon-search"></i>
                        </router-link>
                    </div>
                    <!---->
                </div>
            </div>
            <div data-v-2d23ac17="" class="page-wrap">
                <div data-v-2d23ac17="" class="search-promotion">
                    <div data-v-2d23ac17="" class="search-promotion-title">热门搜索</div>
                    <div data-v-2d23ac17="" class="search-promotion-list">
                        <div data-v-2d23ac17="" class="item-list">
                            <div data-v-2d23ac17="" class="item">
                                <div data-v-2d23ac17="" data-log_code="31wapadsearch-precells_auto_fill001001#t=ad&amp;act=other&amp;page=adsearch-pre&amp;bid=3035040.1&amp;adp=63&amp;adm=12663" class="J_linksign-customize"><img data-v-2d23ac17="" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/63950bef45e860448855c0c381dc68b5.jpg?w=1080&h=300&bg=C3BFBB"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-2d23ac17="" class="search-key">
                    <a data-v-2d23ac17="" v-for="(host,index) in keywords" :key="index" href="javascript:void(0);" v-text="host.word" :style="{ 'color': host.font_n, 'border-color': host.border_n, 'background': host.back_n }"></a>
                </div>
                <div data-v-2d23ac17="" class="search-hotClassify">
                    <div data-v-2d23ac17="" class="search-promotion-title">常用分类</div>
                    <div data-v-2d23ac17="" class="hotClassify-list">
                        <a data-v-2d23ac17="" href="javascript:void(0);"  v-for="(hos,index) in hot_class" :key="index">{{hos.name}}</a>
                    </div>
                </div>
            </div>
        </div>
        <!---->
    </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      data: "",
      hot_class: [],
      keywords: []
    };
  },
  created() {
    this.getsearch();
  },
  methods: {
    async getsearch() {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf66186c51c246c3655bfa4/example/search"
      );
      this.hot_class = data.data.data.hot_class;
      this.keywords = data.data.data.keywords;
      console.log(this.hot_class);
      console.log(this.keywords);
    }
  }
});
</script>
<style lang="scss" scoped>
.app-shell .app-view-wrapper[data-v-bc186c1a] {
  position: relative;
  max-width: 7.2rem;
  margin: 0 auto;
}
.app-shell .app-view-wrapper .app-view[data-v-bc186c1a] {
  background: #fff;
  color: #3c3c3c;
}
.app-search-page[data-v-2d23ac17] {
  padding-top: 1.093333rem;
}
.app-search-head[data-v-2d23ac17] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  background: #f2f2f2;
}
.app-search-head-input[data-v-7cbaca4a] {
  // height: .693333rem;
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
  height: 1.093333rem;
  width: 100%;
}
.app-search .header-btn[data-v-7cbaca4a] {
  display: block;
  margin: 0 0.2rem;
  color: #666;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  outline: 0;
  text-decoration: none;
}
* {
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
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
}
.search-item input[data-v-7cbaca4a] {
  border: 1px solid #e5e5e5;
  border-radius: 0.04rem;
  width: 100%;
  padding: 0 0.2rem;
  outline: 0;
  font-size: 0.3rem;
  font-weight: 400;
  height: .693333rem;
  line-height: normal;
}
.app-search .header-btn[data-v-7cbaca4a] {
  display: block;
  margin: 0 0.2rem;
  color: #666;
}
.app-search .app-header-icon.icon-search[data-v-7cbaca4a] {
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQVQYGe3Bf0yUdRwH8I9GpBtZVpul0y1/ZD8sKzdXbupMh3Pq0jWtzbVs9YfL8scfLq02h1m52R3c832+z/d5HrjjAOH4KQhy4MQD4eS4gXiCePLjBIwU8VeCOAPy3dZf/mEpz56zW93rRRQVFRUVFfU/dGFM+UTHlOrXzq/yf9HwefeS0plpk4/F0b+je5x/UZXIPZV+URmRwMEhQfs940K+ry6hYTY9Wu0Tyze6yxVYwSGgQoUKFSpUCMiwwH6zPLVqZVcsPRrlSwvqVVghwMGhQYMOHTp0aNDAIcBhhQ53UcWLFH4127QrElQwqEi7keUu21W/vnl5+/y2dwKraj8p3pdZ7bzDIYNDQmqweQWFU/cTpU4GAQUMro6SbR2z6D4aFuRb0m4yqFCgDXq3U7hciynOSYQOBertgr2np9I/ODHPlSlDg4AN3m8oPKq+t0GHguSexg/ogepjPbvZkIACbci3lsx3Yr06rECGvSO4gB6SbxMb5pBhDwZeInN1vWJvY5DB+5uX0ShUfmeDAhtKCkOxZCZPogUCMo5vpFEJxRSkcKiQ0BBP5gnMSu+RIaGokEatc2ZqSEBCqasnhszi32SFgBYKLiQDqnfI0CAGz79B5uibkOOVIZCXTob0TrK3qeA4tpfM0TmPQYO427CBDHLrDAoO+H+LITM0r+VQkRy88DwZFFiXBAWOS73PkRl8WzgU5JVVjyeDQi+LPhmOW63zyAxH9yvgKE31jCGDKqZltTPYh+rXkBmKXAIyKpLIsJpn8hskpMDzJZmhKFuAoXIfGeaPO+i1IQXHtpIZPHsVyCgXZJhnUm6TBPtI3UdkBv9mDo5DOVUxZFDpjAO/yHDcCcSTGVreZxDI8F58kgxqelMe5LD3h+aQGbrnsBENYrDjbTKobnMSFLh8A7Fkhpa4Ao8MgcpdZEjTuAI3h4DnRzJLYEMiODKPX3qKDAjOF30a+N3gYjJLz+SMs0lQUL2ZDDiYqkDCQffFcWSeih8sYEht/HUqjVJgjehTIOH0CjJT99QDbRJsKCxtG0+j0PWqvUOGFYdzyGxnlyVf5ZCQ9xM9tJPP5jbaIMEZ7J5B5jv6FR/iUPsP778eRw+hc4ajhEGBs+NkPIXDmTFuRyI4FBSW9EyhB2h9N+O0AgEFR5MoXK49XilzMDBktBZ+Fnia/oZ/ev6elKscAioUOEPtCyl8POucfRwSZOTVunZWxg9MoHtcnuxek5mQE7JBhoAODQIStBttCyh8OubmHEke4LBAhXM4uykt35mWb8212bPSi7M6nX9wWCGQfL2M9U73JjBw2KBfbl1M4VPxmG9tdl76gA0WWCBBhQYNKiRY8TMYMnuzXdVL6S/H90hQwGHvObeEwiv4Vpn1UG1ea9ZV510dOhxIG8npOnykNKF5Lt2jZjeDCgXJl4PLKdx6xja+4Hm94D3Hh471rhXFi+qm0X3UfMsgwKDeOreUIoP3awYFEsTNs8soMnh3MnAw6FdallNkOLGLQUBBcl/LSooMtTtkqODQBlpWU2TwbZGhgEG5fWY1RQbfVhkcDKK/eTVFhtrtMjg49Butiygy+LfKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII=);
}
.app-search .app-header-icon[data-v-7cbaca4a] {
  display: block;
  width: 0.6rem;
  height: 0.6rem;
}
.image-icons {
  display: inline-block;
  width: .96rem;
  height: .96rem;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}
.page-wrap[data-v-2d23ac17] {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.search-promotion-title[data-v-2d23ac17] {
  line-height: 1.12rem;
  height: 1.12rem;
  padding: 0 .4rem;
  font-size: .426667rem;
  text-align: left;
  font-weight: 600;
}
.search-promotion-list img[data-v-2d23ac17] {
  width: 100%;
  display: block;
}
img {
  border-style: none;
}
.search-key[data-v-2d23ac17] {
  margin: .133333rem .266667rem;
  text-align: left;
}
.search-key a[data-v-2d23ac17] {
  display: inline-block;
  background: #e4e4e4;
  padding: .186667rem .266667rem;
  margin: 0.1rem;
  border: 1px solid #e4e4e4;
  background: hsla(12, 99%, 71%, 0.05);
  font-size: .32rem;
  color: #484848;
}
.search-promotion-title[data-v-2d23ac17] {
  line-height: 1.12rem;
  // padding: 0 .4rem;
  font-size: .32rem;
  text-align: left;
}
.search-hotClassify .hotClassify-list[data-v-2d23ac17] {
  text-align: left;
  max-height:1.666667rem;
  overflow: hidden;
  padding-left: 0.32rem;
}
.search-hotClassify a[data-v-2d23ac17] {
  display: inline-block;
  background: #f5f5f5;
  height: 0.55rem;
  line-height: 0.55rem;
  padding: 0 0.15rem;
  margin-right: 0.15rem;
  margin-bottom: 0.1rem;
  color: rgba(0, 0, 0, 0.54);
  font-size: .293333rem;
  line-height: .76rem;
  height: .76rem;
}
</style>
