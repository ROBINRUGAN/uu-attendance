<template>
  <div id="sidebar">
    <div id="info">
      <img id="logo" src="../assets/home/avatar.png" alt="" />
      <h1 id="title">UU考勤</h1>
    </div>

    <el-menu default-active="1" class="menu">
      <router-link to="/home">
        <el-menu-item index="1">
          <div class="menu-item">
            <img src="../assets/home/home-icon.png" alt="" />
            首页
          </div>
        </el-menu-item>
      </router-link>

      <router-link to="/overview">
        <el-menu-item index="2">
          <div class="menu-item">
            <img src="../assets/home/all-icon.png" alt="" />
            综合一览
          </div>
        </el-menu-item>
      </router-link>

      <el-submenu index="3">
        <template slot="title">
          <div class="menu-item">
            <img src="../assets/home/search-menu.png" alt="" />
            考勤情况查询
          </div>
        </template>
        <el-menu-item-group>
          <router-link to="/course">
            <el-menu-item index="3-1">
              <div class="menu-item sub-item">
                <img src="../assets/home/search-menu.png" alt="" />
                课程查询
              </div>
            </el-menu-item>
          </router-link>

          <router-link to="/student">
            <el-menu-item index="3-2">
              <div class="menu-item sub-item">
                <img src="../assets/home/search-icon.png" alt="" />
                学生查询
              </div>
            </el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <div class="menu-item">
            <img src="../assets/home/pass-icon.png" alt="" />
            考勤与请假
          </div>
        </template>
        <el-menu-item-group>
          <router-link to="check-attendance">
            <el-menu-item index="3-1">
              <div class="menu-item sub-item">
                <img src="../assets/home/search-menu.png" alt="" />
                考勤审核
              </div>
            </el-menu-item>
          </router-link>

          <el-menu-item index="3-2">
            <div class="menu-item sub-item">
              <img src="../assets/home/search-icon.png" alt="" />
              请假审核
            </div>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <router-link to="/empower">
        <el-menu-item index="4">
          <div class="menu-item">
            <img src="../assets/home/auth-icon.png" alt="" />
            督导权限指定
          </div>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#sidebar {
  background-color: #a6e0fe;
  height: 100vh;
  width: 260px;
  min-height: 815px;
  box-shadow: 8px 0px 11px 0px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
#info {
  height: 95px;
  width: 255px;
  min-height: 95px;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #66c7fe;
  box-shadow: 5px 0px 4px 0px #66c7fe;
}
#logo {
  position: absolute;
  left: 10px;
  top: 13px;
  height: 71px;
  width: 71px;
}
#title {
  position: absolute;
  left: 105px;
  top: 26px;
  width: 135px;
  height: 30px;
  font-weight: 600;
}
.menu {
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  color: white;
  font-size: 20px;
  font-weight: 550;
}
.menu-item {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 40px;
  box-sizing: border-box;
  border-radius: 5px;
}
a {
  text-decoration: none;
  color: white;
}
.sub-item {
  padding-left: 50px;
}
li {
  padding: 0px !important;
}

.menu-item:hover {
  background: #6fc5f1;
  cursor: pointer;
}
.menu-item:active {
  background: #65bce7;
  cursor: pointer;
}
.menu-item img {
  height: 30px;
  width: 30px;
  margin-right: 10px;
}
.el-menu {
  background: transparent !important;
}
.el-menu-item {
  color: white !important;
  background-color: #a6e0fe !important;
  font-size: 18px !important;
}
.el-menu-item.is-active {
  color: #fff !important;
  background-color: #a6e0fe !important;
}
.el-menu-item:focus,
.el-menu-item:hover {
  outline: 0;
  background-color: #a6e0fe !important;
}
.sub-item[data-v-7d622f5c] {
  background-color: #a6e0fe !important;
}
.sub-item[data-v-7d622f5c]:hover {
  background-color: #6fc5f1 !important;
}
.sub-item[data-v-7d622f5c]:active {
  background-color: #65bce7 !important;
}
</style>