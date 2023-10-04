<template>
  <div id="overview">
    <div id="search-box">
      <select id="course">
        <option value="value0">请选择课程</option>
        <option value="value1">高等数学</option>
        <option value="value2">高级语言程序设计</option>
      </select>
      <div class="search">
        学号：
        <input type="text" id="number" />
      </div>
      <div class="search">
        姓名：
        <input type="text" id="number" />
      </div>
      <button id="searchbtn">搜索</button>
    </div>

    <div id="banner">
      <span>上课时长：1-16周</span>
      <span>上课时间：周一、周三、周五</span>
      <span>上课人数：99人</span>
    </div>
    <div id="list">
      <div class="list-item" v-for="(student, i) in pagedOrders" :key="i">
        <span>{{ student.id }}</span>
        <span>{{ student.name }}</span>
      </div>
    </div>
    <el-pagination
      id="page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="studentList.length"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Overview",
  data() {
    return {
      studentList: [
        { id: "161561561", name: "网上搜1" },
        { id: "161561561", name: "网上搜2" },
        { id: "161561561", name: "网上搜3" },
        { id: "161561561", name: "网上搜4" },
        { id: "161561561", name: "网上搜5" },
        { id: "161561561", name: "网上搜6" },
        { id: "161561561", name: "网上搜7" },
        { id: "161561561", name: "网上搜8" },
        { id: "161561561", name: "网上搜9" },
        { id: "161561561", name: "网上搜10" },
        { id: "161561561", name: "网上搜11" },
        { id: "161561561", name: "网上搜12" },
        { id: "161561561", name: "网上搜13" },
        { id: "161561561", name: "网上搜14" },
        { id: "161561561", name: "网上搜15" },
        { id: "161561561", name: "网上搜16" },
      ],
      currentPage: 1,
      pageSize: 5,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
  computed: {
    pagedOrders() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.studentList.slice(startIndex, endIndex);
    },
  },
};
</script>

<style scoped>
#overview {
  box-sizing: border-box;
  position: relative;
  width: 85.4%;
  height: 100vh;
  min-width: 910px;
  min-height: 700px;
  background-image: url("../assets/background.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
#search-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#course {
  width: 20%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-left: 50px;
  margin-top: 50px;
  margin-right: 30px;
  opacity: 0.7;
  text-align: center;
}

.search {
  width: 20%;
  margin-left: 20px;
  font-size: 15px;
  font-weight: bold;
}
#number {
  width: 70%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-top: 50px;
  opacity: 0.7;
  font-size: 15px;
  text-align: center;
}
#searchbtn {
  width: 80px;
  height: 40px;
  border-radius: 10px;
  border: 0px;
  margin-top: 50px;
  margin-left: 50px;
  opacity: 0.74;
  font-size: 15px;
  font-weight: bold;
  background: #229fe0;
}
#searchbtn:hover {
  background: #1e90ff;
}
#searchbtn:active {
  background: #1c86ee;
}
#banner {
  box-sizing: border-box;
  position: absolute;
  margin-left: 5.5%;
  margin-top: 125px;
  width: 90%;
  height: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #70707055;
}
#list {
  box-sizing: border-box;
  position: absolute;
  margin-left: 5.5%;
  margin-top: 200px;
  width: 90%;
  height: 600px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: transparent;
}
.list-item {
  box-sizing: border-box;
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #fffffff5;
}
.list-item:hover {
  background: #95daff;
}
#page {
  margin: auto;
  margin-top: -80px;
}
</style>