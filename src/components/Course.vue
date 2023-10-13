<template>
  <div id="overview">
    <div id="search-box">
      <select id="term" v-model="term" @change="fetchCourses">
        <option value="">请选择学期</option>
        <option value="202201">202201</option>
        <option value="202202">202202</option>
        <option value="202301">202301</option>
      </select>
      <select id="course" v-model="course">
        <option value="">请选择课程</option>
        <option
          v-for="courseItem in courseList"
          :value="courseItem"
          :key="courseItem"
        >
          {{ courseItem }}
        </option>
      </select>
      <select id="week" v-model="week">
        <option value="">请选择周数</option>
        <option v-for="i in 16" :value="i" :key="i">第{{ i }}周</option>
      </select>
      <select id="day" v-model="day">
        <option value="">请选择星期</option>
        <option value="1">星期一</option>
        <option value="2">星期二</option>
        <option value="3">星期三</option>
        <option value="4">星期四</option>
        <option value="5">星期五</option>
        <option value="6">星期六</option>
        <option value="7">星期日</option>
      </select>
      <select id="section" v-model="from">
        <option value="">请选择节数</option>
        <option v-for="i in 11" :key="i" :value="i">第{{ i }}节</option>
      </select>
      <select id="section" v-model="to">
        <option value="">请选择节数</option>
        <option v-for="i in 11" :key="i" :value="i">第{{ i }}节</option>
      </select>

      <button id="searchbtn" @click="search">搜索</button>
      <button id="exportbtn" @click="download">导出</button>
    </div>

    <div id="banner">
      <span id="span-id">学生学号</span>
      <span id="span-name">姓名</span>
      <span id="span-pass">已签到次数</span>
      <span id="span-unknown">未签到次数</span>
      <span id="span-fail">已缺勤次数</span>
      <span id="span-leave">已请假次数</span>
    </div>
    <div id="list">
      <div class="list-item" v-for="(student, i) in pagedOrders" :key="i">
        <span>{{ student.studentName }}</span>
        <span>{{ student.studentNo }}</span>
        <span>{{ student.signedCount }}</span>
        <span>{{ student.nocheckCount }}</span>
        <span>{{ student.absentCount }}</span>
        <span>{{ student.leaveCount }}</span>
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
import { CourseList, CourseSearch, ExportCourseSearch } from "@/api/api";
export default {
  name: "course",
  data() {
    return {
      term: "",
      course: "",
      week: "",
      day: "",
      from: "",
      to: "",
      courseList: [],
      studentList: [],
      currentPage: 1,
      pageSize: 5,
    };
  },
  methods: {
    download() {
      ExportCourseSearch({
        semester: this.term,
        courseName: this.course,
        week: this.week,
        weekday: this.day,
        beginSection: this.from,
        endSection: this.to,
      }).then((res) => {
        if (res.type == "text/xml") {
          console.log(res);
          const blob = new Blob([res], { type: "application/zip" });
          // 创建URL以供下载
          const blobUrl = window.URL.createObjectURL(blob);
          // 创建一个下载链接
          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = "课程查询结果.xlsx"; // 设置文件名
          // 触发点击事件以下载文件
          link.click();
        } else {
          this.$message.error("导出失败，请检查查询结果是否为空");
        }
      });
    },
    fetchCourses() {
      CourseList({ semester: this.term }).then((res) => {
        if (res.code == 1) {
          if (res.data.length == 0) {
            this.course = "";
            this.$message.error("该学期没有课程");
          }
          this.courseList = res.data;
        } else if (res.code == 0) {
          alert("登录过期，请重新登录！");
          this.$router.push("/login");
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    search() {
      let searchData = {
        semester: this.term,
        courseName: this.course,
        week: this.week,
        weekday: this.day,
        beginSection: this.from,
        endSection: this.to,
        pageNo: 1,
        pageSize: 10000,
      };
      CourseSearch(searchData).then((res) => {
        if (res.code == 2) {
          this.$message.error("没有查询到数据");
        } else if (res.code == 1) {
          this.studentList = res.data.rows;
          this.$message.success("查询成功");
        } else {
          alert("登录过期，请重新登录！");
          this.$router.push("/login");
        }
      });
    },
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
  width: 15%;
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
  width: 8%;
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
  width: 8%;
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
  width: 8%;
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
#exportbtn {
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
#exportbtn:hover {
  background: #1e90ff;
}
#exportbtn:active {
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
  margin: 0 0 0 0px;
}
#span-leave {
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
</style>