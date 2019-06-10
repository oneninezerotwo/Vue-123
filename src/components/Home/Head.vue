<template>
    <header data-v-0677858e="" class="header-bar">
        <Find></Find>
        <Nav></Nav>
    </header>
</template>
<script>
import Find from "./Find.vue";
import Nav from "./Nav.vue";
export default {
  components: {
    Find,
    Nav
  }
};
</script>

<style lang="scss" scoped>
.header-bar{
  position: fixed;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  background: #f2f2f2;
}
</style>


