<template>
  <div id="background">
    <div id="image">
      <div id="cover">
        <h1>注册</h1>
        <input type="text" id="id" placeholder="师工号" /><br />
        <input type="password" id="pwd" placeholder="密码" /><br />
        <input type="password" id="repwd" placeholder="确认密码" /><br />
        <input type="text" id="email" placeholder="邮箱" /><br />
        <div id="codeform">
          <input type="text" id="code" placeholder="验证码" />
          <button id="getcode">获取验证码</button>
        </div>
        <router-link to="/login">
          <button id="loginbtn">登录</button>
        </router-link>
        <button id="registerbtn">注册</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {};
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
  justify-content: flex-start;
}
@keyframes move {
  0% {
    transform: translateX(100%);
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
input {
  box-sizing: border-box;
  position: absolute;
  padding: 5px 10px;
  left: 11%;
  width: 75%;
  height: 10%;
  font-size: 20px;
  border-radius: 15px;
  border-width: 1px;
}

#id {
  top: 24%;
}
#pwd {
  top: 36%;
}
#repwd {
  top: 48%;
}
#email {
  top: 60%;
}
#code {
  top: 72%;
  width: 42%;
}
button {
  top: 87.5%;
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
#codeform {
  display: flex;
}
#registerbtn {
  left: 52%;
}
#getcode {
  width: 30%;
  top: 73.5%;
  left: 56%;
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