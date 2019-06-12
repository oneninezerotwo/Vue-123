<template>
  <div id="app">
    <router-view/>
    <Foot></Foot>
  </div>
</template>
<script>
import Foot from './components/Foot';

export default {
  components:{
    Foot,
  }
  
}
</script>


<style>

@import url(./assets/css/base.css);
#app {
    position: static;
    font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3c3c3c;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    text-size-adjust: none;
}
</style>
