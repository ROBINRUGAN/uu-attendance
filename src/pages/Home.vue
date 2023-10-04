<template>
    <div id="home">
        <Sidebar id="sidebar"/>
        <router-view></router-view>
        <!-- <HomePart id="home-part"/> -->
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
        margin-left: -10px;
    }
    #overview {
        margin-left: -10px;
    }
    #sidebar {
        z-index: 2;
    }
</style>