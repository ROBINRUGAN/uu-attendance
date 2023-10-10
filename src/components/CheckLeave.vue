<template>
  <div id="check-leave">
    <!-- <el-button type="text" @click="dialogTableVisible = true"
        >打开嵌套表格的 Dialog</el-button> -->
    <div id="list">
      <div
        class="list-item"
        v-for="(check, i) in pagedOrders"
        :key="i"
        @click="onCheckItem(check.leaveId, i)"
      >
        <div class="list-brief">
          <div>课程：{{ check.courseName }}</div>
          <div>理由：{{ check.reason }}</div>
        </div>
        <div
          class="list-status"
          :style="{
            color:
              check.status === '1'
                ? '#33d290'
                : check.status === '2'
                ? '#cd4a4a'
                : '#1c86ee',
          }"
        >
          {{
            check.status === "1"
              ? "已通过"
              : check.status === "2"
              ? "未通过"
              : "待审核"
          }}
        </div>
      </div>
    </div>
    <el-pagination
      id="page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 2, 5]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="checkList.length"
    >
    </el-pagination>

    <el-dialog title="申诉详情" :visible.sync="dialogTableVisible">
      <div id="stu-info">
        <div id="name">姓名：{{ name }}</div>
        <div id="id">学号：{{ no }}</div>
      </div>
      <div id="time">时间：{{ time }}</div>
      <div id="course">课程：{{ course }}</div>
      <div id="excuse">理由：{{ excuse }}</div>
      <div id="imgmsg">图片：</div>
      <div id="img">
        <img
          src="../assets/home/background.png"
          alt=""
          v-for="i in 3"
          :key="i"
        />
      </div>
      <div id="footer">
        <button id="passbtn" @click="passFunc">同意</button>
        <button id="failbtn" @click="failFunc">不同意</button>
      </div>
    </el-dialog>
  </div>
</template>
  
  <script>
import { LeaveAppeal, LeaveCheck, LeaveDetail } from "@/api/api";
export default {
  data() {
    return {
      dialogTableVisible: false,
      checkList: [],
      currentPage: 1,
      pageSize: 5,
      name: "",
      no: "",
      time: "",
      course: "",
      excuse: "",
      id: "",
      i: "",
    };
  },
  mounted() {
    LeaveAppeal({
      pageSize: 10000,
      pageNo: 1,
    }).then((res) => {
      if (res.code === 1) {
        if (res.data.rows.length == 0) {
          this.$message.error("暂无申请信息！");
        }
        else this.checkList = res.data.rows;
      } else {
        alert("登录过期，请重新登录！");
        this.$router.push("/login");
      }
    });
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    onCheckItem(id, i) {
      this.id = id;
      this.i = i;
      this.dialogTableVisible = true;
      LeaveDetail({
        id: id,
      }).then((res) => {
        if (res.code === 1) {
          this.name = res.data.studentName;
          this.no = res.data.studentNo;
          this.time = res.data.beginTime;
          this.course = res.data.courseName;
          this.excuse = res.data.reason;
        } else {
          alert("登录过期，请重新登录！");
          this.$router.push("/login");
        }
      });
    },
    passFunc() {
      LeaveCheck({
        id: this.id,
        status: "1",
      }).then((res) => {
        if (res.code == 1) {
          this.checkList[
            (this.currentPage - 1) * this.pageSize + this.i
          ].status = "1";
          this.dialogTableVisible = false;
          this.$message({
            message: "已同意",
            type: "success",
          });
        } else {
          alert("登录过期，请重新登录！");
          this.$router.push("/login");
        }
      });
    },
    failFunc() {
      LeaveCheck({
        id: this.id,
        status: "2",
      }).then((res) => {
        console.log(res);
        if (res.code == 1) {
          this.checkList[
            (this.currentPage - 1) * this.pageSize + this.i
          ].status = "2";
          this.dialogTableVisible = false;
          this.$message({
            message: "已拒绝",
            type: "warning",
          });
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
      return this.checkList.slice(startIndex, endIndex);
    },
  },
};
</script>
  
  <style scoped>
#stu-info {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 0px;
  font-size: 20px;
}
#time {
  margin: 0 0px;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 30px;
}
#course {
  margin: 0 0px;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 30px;
}
#excuse {
  margin: 0 0px;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 30px;
}
#imgmsg {
  margin: 0 0px;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 8px;
}
#img {
  margin: auto;
  justify-content: center;
  text-align: start;
  margin-left: 8%;
}
#img img {
  width: 150px;
  height: 150px;
  margin: 10px;
}
#footer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
}
#passbtn {
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: 0px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #43e19f;
  color: white;
  font-size: 20px;
  cursor: pointer;
}
#passbtn:hover {
  background-color: #33d290;
}
#passbtn:active {
  background-color: #3ccb8f;
}
#failbtn {
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: 0px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #ff5d5d;
  color: white;
  font-size: 20px;
  cursor: pointer;
}
#failbtn:hover {
  background-color: #cd4a4a;
}
#failbtn:active {
  background-color: #cf3c3c;
}
#check-leave {
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

#list {
  box-sizing: border-box;
  position: relative;
  margin-left: 5.5%;
  margin-top: 100px;
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
  height: 100px;
  border-radius: 20px;
  box-shadow: 0 -4px 4px 0 #d4d2d2 inset;
  display: flex;
  align-items: center;
  background: #fffffff5;
  cursor: pointer;
}
.list-item:hover {
  background: #95daff;
}
.list-brief {
  margin-left: 20px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 18px;
}
#page {
  margin: auto;
  margin-top: 0px;
}
.list-status {
  font-size: 23px;
  font-weight: 900;
}
</style>