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
        <button v-if="student.status === '0'" id="setbtn">设置督导</button>
        <button v-if="student.status !== '0'" id="unsetbtn">取消督导</button>
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
          status: "0",
        },
        {
          id: "161561561",
          name: "网上搜2",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "1",
        },
        {
          id: "161561561",
          name: "网上搜3",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "0",
        },
        {
          id: "161561561",
          name: "网上搜4",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "1",
        },
        {
          id: "161561561",
          name: "网上搜5",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "0",
        },
        {
          id: "161561561",
          name: "网上搜6",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "0",
        },
        {
          id: "161561561",
          name: "网上搜7",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "0",
        },
        {
          id: "161561561",
          name: "网上搜8",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "0",
        },
        {
          id: "161561561",
          name: "网上搜9",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "0",
        },
        {
          id: "161561561",
          name: "网上搜10",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "0",
        },
        {
          id: "161561561",
          name: "网上搜11",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "0",
        },
        {
          id: "161561561",
          name: "网上搜12",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "0",
        },
        {
          id: "161561561",
          name: "网上搜13",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "0",
        },
        {
          id: "161561561",
          name: "网上搜14",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "0",
        },
        {
          id: "161561561",
          name: "网上搜15",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "0",
        },
        {
          id: "161561561",
          name: "网上搜16",
          pass: "5",
          unknown: "2",
          fail: "0",
          status: "0",
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
  width: 20%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-top: 50px;
  opacity: 0.7;
  text-align: center;
  cursor: pointer;
}
#course {
  width: 30%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-left: 50px;
  margin-top: 50px;
  margin-right: 30px;
  opacity: 0.7;
  text-align: center;
  cursor: pointer;
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
    color: black;
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
  cursor: pointer;
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
  margin: 0 0 0 75.5px;
}
#span-name {
  margin: 0 0 0 85px;
}
#span-pass {
  margin: 0 0 0 40px;
}
#span-unknown {
  margin: 0 0px;
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
#setbtn {
  width: 90px;
  height: 36px;
  border-radius: 10px;
  border: 0px;
  opacity: 0.74;
  font-size: 15px;
  font-weight: bold;
  background: #43e19f;
  color: #fff;
  cursor: pointer;
}
#setbtn:hover {
  background: #33d290;
}
#setbtn:active {
  background: #3ccb8f;
}
#unsetbtn {
  width: 90px;
  height: 36px;
  border-radius: 10px;
  border: 0px;
  opacity: 0.74;
  font-size: 15px;
  font-weight: bold;
  background: #ff5d5d;
  color: #fff;
  cursor: pointer;
}
#unsetbtn:hover {
  background: #cd4a4a;
}
#unsetbtn:active {
  background: #cf3c3c;
}
</style>