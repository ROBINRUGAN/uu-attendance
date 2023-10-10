<template>
  <div id="empower">
    <div id="search-box">
      <select id="term" v-model="term" @change="fetchCourses">
        <option value="0">请选择学期</option>
        <option value="202201">202201</option>
        <option value="202202">202202</option>
        <option value="202301">202301</option>
      </select>
      <select id="course" v-model="course">
        <option value="0">请选择课程</option>
        <option
          v-for="courseItem in courseList"
          :value="courseItem"
          :key="courseItem"
        >
          {{ courseItem }}
        </option>
      </select>

      <button id="searchbtn" @click="search">搜索</button>
    </div>

    <div id="banner">
      <span>上课时长：1-16周</span>
      <span>上课时间：周一、周三、周五</span>
      <span>上课人数：99人</span>
    </div>
    <div id="list">
      <div class="list-item" v-for="(student, i) in pagedOrders" :key="i">
        <span>{{ student.studentNo }}</span>
        <span>{{ student.studentName }}</span>
        <button
          v-if="student.studentType === 1"
          id="setbtn"
          @click="assign(student.stuUserId, i)"
        >
          设置督导
        </button>
        <button
          v-if="student.studentType === 2"
          id="unsetbtn"
          @click="dismiss(student.stuUserId, i)"
        >
          取消督导
        </button>
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
import { Assign, CourseList, Dismiss, EmpowerList } from "@/api/api";

export default {
  name: "empower",
  data() {
    return {
      studentList: [],
      currentPage: 1,
      pageSize: 5,
      courseList: [],
      term: "0",
      course: "0",
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    fetchCourses() {
      CourseList({ semester: this.term }).then((res) => {
        if (res.data.length == 0) {
          this.course = "0";
          this.$message.error("该学期没有课程");
        }
        this.courseList = res.data;
      });
    },
    search() {
      EmpowerList({
        semester: this.term,
        courseName: this.course,
      }).then((res) => {
        if (res.code === 1) {
          if(res.data.length == 0) {
            this.$message.error("没有查询到数据");
          } else {
            this.studentList = res.data;
            this.$message.success("查询成功");
          }
        } else {
          alert("登录过期，请重新登录！");
          this.$router.push("/login");
        }
      });
    },
    assign(id, i) {
      Assign({
        semester: this.term,
        courseName: this.course,
        userId: id,
      }).then((res) => {
        if (res.code === 1) {
          this.studentList[
            (this.currentPage - 1) * this.pageSize + i
          ].studentType = 2;
          this.$message.success("设置成功");
        } else {
          alert("登录过期，请重新登录！");
          this.$router.push("/login");
        }
      });
    },
    dismiss(id, i) {
      Dismiss({
        semester: this.term,
        courseName: this.course,
        userId: id,
      }).then((res) => {
        if (res.code === 1) {
          this.studentList[
            (this.currentPage - 1) * this.pageSize + i
          ].studentType = 1;
          this.$message.success("取消成功");
        } else {
          alert("登录过期，请重新登录！");
          this.$router.push("/login");
        }
      });
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
#empower {
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
  box-shadow: 0 -3px 3px 0 #d4d2d2 inset;
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