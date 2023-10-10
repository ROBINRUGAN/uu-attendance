<template>
  <div id="student">
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
      <div class="search">
        学号：
        <input type="text" id="number" v-model="number" />
      </div>

      <button id="searchbtn" @click="search">搜索</button>
      <button id="exportbtn" @click="download">导出</button>
    </div>

    <div id="banner">
      <span id="span-id">学生学号</span>
      <span id="span-name">姓名</span>
      <span id="span-week">周数</span>
      <span id="span-day">星期</span>
      <span id="span-status">签到情况</span>
    </div>
    <div id="list">
      <div class="list-item" v-for="(student, i) in pagedOrders" :key="i">
        <span>{{ student.studentNo }}</span>
        <span>{{ student.studentName }}</span>
        <span>{{ computedWeek(student.week) }}</span>
        <span>{{ computedWeekday(student.weekday) }}</span>
        <span>{{ computedStatus(student.status) }}</span>
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
import { CourseList, ExportStudentSearch, StudentSearch } from "@/api/api";
export default {
  name: "student",
  data() {
    return {
      term: "0",
      course: "0",
      number: "",
      courseList: [],
      studentList: [],
      currentPage: 1,
      pageSize: 10,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    search() {
      StudentSearch({
        semester: this.term,
        courseName: this.course,
        studentNo: this.number,
        pageSize: 10000,
        pageNo: 1,
      }).then((res) => {
        if (res.code === 1) {
          if (res.data.rows.length == 0) {
            this.$message.error("没有查询到数据");
          } else {
            this.studentList = res.data.rows;
            this.$message.success("查询成功");
          }
        } else {
          this.$message.error("登录过期，请重新登录");
          this.$router.push("/login");
        }
      });
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
    download() {
      ExportStudentSearch({
        semester: this.term,
        courseName: this.course,
        studentNo: this.number,
      }).then((res) => {
        const blob = new Blob([res], { type: "application/zip" });
        // 创建URL以供下载
        const blobUrl = window.URL.createObjectURL(blob);
        // 创建一个下载链接
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = "学生查询结果.xlsx"; // 设置文件名
        // 触发点击事件以下载文件
        link.click();
      });
    },
    computedWeek(weekData) {
      let week = "";
      switch (weekData) {
        case 1:
          week = "第一周";
          break;
        case 2:
          week = "第二周";
          break;
        case 3:
          week = "第三周";
          break;
        case 4:
          week = "第四周";
          break;
        case 5:
          week = "第五周";
          break;
        case 6:
          week = "第六周";
          break;
        case 7:
          week = "第七周";
          break;
        case 8:
          week = "第八周";
          break;
        case 9:
          week = "第九周";
          break;
        case 10:
          week = "第十周";
          break;
        case 11:
          week = "第十一周";
          break;
        case 12:
          week = "第十二周";
          break;
        case 13:
          week = "第十三周";
          break;
        case 14:
          week = "第十四周";
          break;
        case 15:
          week = "第十五周";
          break;
        case 16:
          week = "第十六周";
          break;
        case 17:
          week = "第十七周";
          break;
        case 18:
          week = "第十八周";
          break;
        case 19:
          week = "第十九周";
          break;
        case 20:
          week = "第二十周";
          break;
      }
      return week;
    },
    computedWeekday(weekdayData) {
      let weekday = "";
      switch (weekdayData) {
        case 1:
          weekday = "星期一";
          break;
        case 2:
          weekday = "星期二";
          break;
        case 3:
          weekday = "星期三";
          break;
        case 4:
          weekday = "星期四";
          break;
        case 5:
          weekday = "星期五";
          break;
        case 6:
          weekday = "星期六";
          break;
        case 7:
          weekday = "星期日";
          break;
      }
      return weekday;
    },
    computedStatus(statusData) {
      let status = "";
      switch (statusData) {
        case 0:
          status = "未签到";
          break;
        case 1:
          status = "已签到";
          break;
        case 2:
          status = "请假";
          break;
        case 3:
          status = "旷课";
          break;
      }
      return status;
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
#student {
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
  margin: 0 0 0 35.5px;
}
#span-name {
  margin: 0 0 0 60px;
}
#span-week {
  margin: 0 0 0 50px;
}
#span-day {
  margin: 0 15px 0 50px;
}
#span-status {
  margin: 0 30px 0 15px;
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