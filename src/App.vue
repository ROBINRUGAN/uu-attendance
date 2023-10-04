<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-family: "微软雅黑";
}
.el-submenu__title {
  padding: 0px !important;
  color: #fff !important;
  background-color: #a6e0fe !important;
  font-size: 18px!important;
}
.el-menu-item-group__title {
  padding: 0px !important;
}
</style>

