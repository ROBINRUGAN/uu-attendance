<template>
  <div id="background">
    <div id="image">
      <div id="cover">
        <h1>登录</h1>
        <input type="text" id="id" v-model="no" placeholder="师工号" /><br />
        <input type="password" id="pwd" v-model="password" placeholder="密码" />
        <button id="loginbtn" @click="login">登录</button>

        <router-link to="/register">
          <button id="registerbtn">注册</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Login } from "@/api/api";
export default {
  data() {
    return {
      no: "",
      password: "",
    };
  },
  methods: {
    login() {
      let loginData = {
        no: this.no,
        password: this.password,
      };
      Login(loginData).then(
        (res) => {
          if (res.code == 1) {
            if (res.data.identity == 3) {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("name", res.data.name);
              this.$message.success("登录成功！");
              this.$router.push("/home");
            } else {
              this.$message.error("请使用教师账号登录！");
            }
          } else {
            this.$message.error(res.msg);
            console.log(res);
          }
        },
        (err) => {
          this.$message.error(res.msg);
          console.log(err);
        }
      );
    },
  },
};
</script>

<style scoped>
#background {
  height: 100vh;
  width: 100vw;
  min-width: 1000px;
  min-height: 500px;
  background-image: url("../assets/login/login-background.png");
  background-size: cover;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
}
#image {
  width: 65.8%;
  height: 60%;
  min-width: 1000px;
  min-height: 500px;
  background-image: url("../assets/login/login-image.png");
  background-size: cover;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  position: absolute;
  justify-content: flex-end;
}
@keyframes move {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
#cover {
  width: 50%;
  height: 100%;
  min-width: 500px;
  background: rgba(255, 255, 255, 1);
  background-size: fill;
  box-sizing: border-box;
  display: block;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 20px;
  animation: move 1s ease-in-out;
}
#cover h1 {
  position: absolute;
  left: 40%;
  top: 10%;
  font-size: 40px;
  font-weight: normal;
  line-height: 52px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #000000;
  display: block;
}
#id {
  box-sizing: border-box;
  position: absolute;
  padding: 5px 10px;
  top: 32%;
  left: 11%;
  width: 75%;
  height: 10%;
  font-size: 20px;
  border-radius: 15px;
  border-width: 1px;
}
#pwd {
  box-sizing: border-box;
  position: absolute;
  padding: 5px 10px;
  top: 50%;
  left: 11%;
  width: 75%;
  height: 10%;
  font-size: 20px;
  border-radius: 15px;
  border-width: 1px;
}
button {
  top: 70%;
  left: 25%;
  width: 100px;
  height: 50px;
  position: absolute;
  font-size: 20px;
  border-radius: 15px;
  cursor: pointer;
  border-width: 0px;
  background-color: #77b6e1;
  color: white;
  transition: background-color ease-in-out 0.3s;
}
#registerbtn {
  left: 52%;
}
button:hover {
  background-color: #d69898;
  color: #ffffff;
  border-color: #000000;
}
button:active {
  border-style: inset;
  background-color: #d28686;
}
</style>