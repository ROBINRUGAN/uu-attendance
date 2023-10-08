<template>
  <div id="home-part">
    <div id="banner">
      <div id="info-time">
        <div class="title">当前时间：</div>
        <div class="content">{{date}}</div>
      </div>
      <div id="info-sche">
        <div class="title">当前学期：</div>
        <div class="content">2023年-02学期</div>
      </div>
    </div>
    <div id="hello">{{ name }}老师您好：</div>
    <div id="cloud1">
      <div class="func-title" id="title1">考勤<br />查询</div>
      <div class="func-content" id="content1">
        可进行课程时间查询， 以及查询学生名单
      </div>
    </div>
    <div id="cloud2">
      <div class="func-title" id="title2">课程<br />查询</div>
      <div class="func-content" id="content2">
        可通过搜索，了解某节课学生的考勤情况
      </div>
    </div>
    <div id="cloud3">
      <div class="func-title" id="title3">学生<br />查询</div>
      <div class="func-content" id="content3">
        通过搜索，查询某课程某学生的考勤情况
      </div>
    </div>
    <div id="cloud4">
      <div class="func-title" id="title4">审核<br />请假</div>
      <div class="func-content" id="content4">
        对学生的考勤申诉与请假申诉进行审核
      </div>
    </div>
    <div id="cloud5">
      <div class="func-title" id="title5">督导<br />指定</div>
      <div class="func-content" id="content5">选择、删除、查询本课程的督导</div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    name: () => {
      return localStorage.getItem('name');
    },
    date: () => {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return `${year}年${month}月${day}日`;
    },
  },
};
</script>

<style scoped>
#home-part {
  box-sizing: border-box;
  position: relative;
  width: 85.4%;
  height: 100vh;
  min-width: 910px;
  min-height: 700px;
  background-image: url("../assets/home/background.png");
  background-size: cover;
  display: flex;
}
#banner {
  box-sizing: border-box;
  position: absolute;
  margin-left: 5.5%;
  margin-top: 15px;
  width: 90%;
  height: 50px;
  background-color: #d0e7f2;
  border-radius: 20px;
  justify-content: center;
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#info-sche {
  display: flex;
}
#info-time {
  display: flex;
}
.title {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
}
.content {
  font-size: 20px;
  font-weight: 400;
}
#hello {
  margin-left: 50px;
  margin-top: 90px;
  font-size: 20px;
  align-self: flex-start;
  font-weight: bold;
}
@keyframes move1 {
  from {
    transform: translate(100%, -100%);
  }
  to {
    transform: translate(0%, 0%);
  }
}
@keyframes move2 {
  from {
    transform: translate(120%, -80%);
  }
  to {
    transform: translate(0%, 0%);
  }
}
@keyframes move3 {
  from {
    transform: translate(100%, 10%);
  }
  to {
    transform: translate(0%, 0%);
  }
}
@keyframes move4 {
  from {
    transform: translate(110%, 50%);
  }
  to {
    transform: translate(0%, 0%);
  }
}
@keyframes move5 {
  from {
    transform: translate(20%, 80%);
  }
  to {
    transform: translate(0%, 0%);
  }
}
#cloud1 {
  background-image: url("../assets/home/cloud1.png");
  background-size: contain;
  position: absolute;
  z-index: 100;
  width: 439px;
  height: 259px;
  top: 70.9%;
  left: 6%;
  animation: move1 1.5s ease;
}
#cloud2 {
  background-image: url("../assets/home/cloud2.png");
  background-size: contain;
  position: absolute;
  z-index: 100;
  width: 439px;
  height: 249px;
  top: 50.9%;
  left: 0%;
  animation: move2 1.5s ease;
}
#cloud3 {
  background-image: url("../assets/home/cloud3.png");
  background-size: contain;
  position: absolute;
  z-index: 100;
  width: 439px;
  height: 279px;
  top: 24.9%;
  left: 10%;
  animation: move3 1.5s ease;
}
#cloud4 {
  background-image: url("../assets/home/cloud4.png");
  background-size: contain;
  position: absolute;
  z-index: 100;
  width: 333px;
  height: 319px;
  top: 10.9%;
  left: 38%;
  animation: move4 1.5s ease;
}
#cloud5 {
  background-image: url("../assets/home/cloud5.png");
  background-size: contain;
  position: absolute;
  z-index: 100;
  width: 430px;
  height: 319px;
  top: 12.9%;
  left: 61%;
  animation: move5 1.5s ease;
}
.func-title {
  font-size: 22px;
  font-weight: bold;
  margin-top: 25px;
  margin-left: 20px;
  position: absolute;
  color: white;
}
.func-content {
  font-size: 18px;
  font-weight: 550;
  margin-top: 10px;
  margin-left: 20px;
  position: absolute;
}
#title1 {
  top: 23%;
  left: 60%;
  letter-spacing: 2px;
}
#content1 {
  width: 190px;
  top: 40%;
  left: 12%;
}
#title2 {
  top: 23%;
  left: 60%;
  letter-spacing: 2px;
}
#content2 {
  width: 190px;
  top: 33%;
  left: 14%;
}
#title3 {
  top: 38%;
  left: 60%;
  letter-spacing: 2px;
}
#content3 {
  width: 190px;
  top: 26%;
  left: 14%;
}
#title4 {
  top: 45%;
  left: 37%;
  letter-spacing: 2px;
}
#content4 {
  width: 190px;
  top: 21%;
  left: 14%;
}
#title5 {
  top: 35%;
  left: 15%;
  letter-spacing: 2px;
}
#content5 {
  width: 190px;
  top: 21%;
  left: 30%;
}
</style>