<template>
  <div>
    <ListHeader/>
    <ListContent/>

  </div>
</template>

<script>
import ListHeader from "../components/ListHeader.vue";
import ListContent from "../components/ListContent.vue";

export default {
  components: {
    ListHeader,
    ListContent,  
  },
  methods:{
      getRem(pwidth,prem){
          var html = document.getElementsByTagName("html")[0];
          var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
          html.style.fontSize = oWidth/pwidth*prem + "px";
      }

  },
  created(){
    // this.getRem(720,100);
  }
};
  //  window.onload = function(){
  //         getRem(720,100)
  //     };
  //     window.onresize = function(){
  //         getRem(720,100)
  //     };
    
  
</script>

 <style >
  
</style>

