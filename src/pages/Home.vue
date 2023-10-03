<template>
    <div id="home">
        <Sidebar id="sidebar"/>
        <HomePart id="home-part"/>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import HomePart from '../components/HomePart'
export default {
    name: 'Home',
    components: {
        Sidebar,
        HomePart
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-family: "微软雅黑";
}
    #home {
        display: flex;
        flex-direction: row;
    }
    #home-part {
        z-index: -2;
        margin-left: -10px;
    }
</style>