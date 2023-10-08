<template>
  <div id="overview">
    <div id="search-box">
      <select id="term">
        <option value="value0">请选择学期</option>
        <option value="value1">202201</option>
        <option value="value2">202202</option>
        <option value="value3">202301</option>
      </select>
      <select id="course">
        <option value="value0">请选择课程</option>
        <option value="value1">高等数学</option>
        <option value="value2">高级语言程序设计</option>
      </select>
      <div class="search">
        学号：
        <input type="text" id="number" />
      </div>

      <button id="searchbtn">搜索</button>
    </div>

    <div id="banner">
      <span id="span-id">学生学号</span>
      <span id="span-name">姓名</span>
      <span id="span-pass">周数</span>
      <span id="span-unknown">星期</span>
      <span id="span-fail">签到情况</span>
    </div>
    <div id="list">
      <div class="list-item" v-for="(student, i) in pagedOrders" :key="i">
        <span>{{ student.id }}</span>
        <span>{{ student.name }}</span>
        <span>{{ student.pass }}</span>
        <span>{{ student.unknown }}</span>
        <span>{{ student.fail }}</span>
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
        {
          id: "161561561",
          name: "网上搜1",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜2",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜3",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜4",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜5",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜6",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜7",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜8",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜9",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜10",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜11",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜12",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜13",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜14",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜15",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
        {
          id: "161561561",
          name: "网上搜16",
          pass: "5",
          unknown: "2",
          fail: "0",
        },
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
#term {
  width: 10%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-top: 50px;
  opacity: 0.7;
  text-align: center;
}
#course {
  width: 18%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-left: 50px;
  margin-top: 50px;
  margin-right: 30px;
  opacity: 0.7;
  text-align: center;
}
#week {
  width: 10%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-left: 20px;
  margin-top: 50px;
  margin-right: 30px;
  opacity: 0.7;
  text-align: center;
}
#day {
  width: 10%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-left: 20px;
  margin-top: 50px;
  margin-right: 30px;
  opacity: 0.7;
  text-align: center;
}
#section {
  width: 10%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-left: 20px;
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
  margin-left: 20px;
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
  align-items: center;
  background: #70707055;
  justify-content: space-evenly;
}
#span-id {
  margin: 0 0 0 55.5px;
}
#span-name {
  margin: 0 0 0 65px;
}
#span-pass {
  margin: 0 0 0 50px;
}
#span-unknown {
  margin: 0 0 0 20px;
}
#span-fail {
  margin: 0 30px 0 0px;
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
  box-shadow:  0 -3px 3px 0 #d4d2d2 inset;

}
.list-item:hover {
  background: #95daff;
}
#page {
  margin: auto;
  margin-top: -80px;
}
</style>