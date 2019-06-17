<template>
  <div data-v-0677858e="" class="app-header-wrapper">
    <div data-v-0677858e="" class="app-header-left">
      <div data-v-0677858e="" class="app-header-item logo">
        <img data-v-0677858e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC">
      </div>
    </div>
    <div data-v-0677858e="" class="app-header-middle" @click="jumpToSearch()">
      <div data-v-0677858e="" class="app-header-title">
        <i data-v-0677858e="" class="image-icons app-header-icon icon-search"></i>搜索商品名称</div>
    </div>
    <div data-v-0677858e="" class="app-header-right" @click="jumpToUser()">
      <div data-v-0677858e="" class="app-header-item">
        <i data-v-0677858e="" class="image-icons app-header-icon icon-user"></i>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  methods: {
    jumpToSearch() {
      this.$router.push("/search");
    },
    jumpToUser() {
      if (localStorage.getItem("username")) {
        this.$router.push("/user");//已经登录 跳转到“我的”页面
      }else{
        this.$router.push("/loginRegister");//未登录 跳转到登录注册页
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.app-header-wrapper[data-v-0677858e] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.app-header-wrapper[data-v-0677858e] {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  height: 1.12rem;
  background: #f2f2f2;
  color: #666;
  padding: 0;
}
.app-header-wrapper[data-v-0677858e] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.app-header-wrapper .app-header-item[data-v-0677858e] {
  display: block;
  width: 0.6rem;
  margin: 0 0.2rem;
}
.app-header-wrapper .logo img[data-v-0677858e] {
  height: 0.453333rem;
  width: 80%;
}
// 中间
.app-header-wrapper .app-header-middle[data-v-0677858e] {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  height: 0.866667rem;
  font-size: 0.4rem;
}
.app-header-wrapper > div[data-v-0677858e],
.container .app-header-wrapper[data-v-0677858e] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.app-header-wrapper .app-header-title[data-v-0677858e] {
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
.app-header-wrapper .app-header-icon.icon-search[data-v-0677858e] {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQ…fKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII=);
  background-size: 0.4rem 0.4rem;
}
.app-header-wrapper .app-header-icon[data-v-0677858e] {
  display: block;
  width: 0.6rem;
  height: 0.6rem;
}
.image-icons {
  display: inline-block;
  width: 0.72rem;
  height: 0.56rem;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}
// right
.app-header-wrapper > div[data-v-0677858e],
.container .app-header-wrapper[data-v-0677858e] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.app-header-wrapper .app-header-item[data-v-0677858e] {
  display: block;
  width: 0.6rem;
  margin: 0 0.2rem;
}
.app-header-wrapper .app-header-icon.icon-user[data-v-0677858e] {
  background-image: url(data:image/png;base64,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);
  background-size: 0.4rem 0.4rem;
}
.app-header-wrapper .app-header-item .app-header-icon[data-v-0677858e] {
  line-height: 0.6rem;
}
.app-header-wrapper .app-header-icon[data-v-0677858e] {
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
</style>

