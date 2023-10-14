# UU考勤教师端 - uuAttendance for Teachers

> 本项目是一个跨平台考勤系统，主要提供课前请假、教师审批、考勤申诉、督导点名、定位签到、指定督导等功能，分为学生端/督导端，和教师端。教师端实现考勤查询、教师审批和督导授权，采用VUE进行开发。
>
> 学生端/督导端App仓库地址：https://github.com/klxiaoniu/UUAttendance
>
> 后端仓库地址：https://github.com/flying-pig-z/uuAttendance
## 1.UU考勤的流程图

[![img](https://github.com/ROBINRUGAN/uu-attendance/blob/main/public/%E6%B5%81%E7%A8%8B%E5%9B%BE.png)](https://github.com/ROBINRUGAN/uu-attendance/blob/main/public/%E6%B5%81%E7%A8%8B%E5%9B%BE.png)

## 2.教师端技术栈

- 使用渐进式框架VUE进行组件化开发，代码可维护性强，性能较好，兼容性强。
- 采用MVVM技术架构实现用户界面和业务逻辑分离。
- 封装Axios，简化网络操作和接口调用，提高代码的可维护性、可读性和可测试性。
- 使用ElementUI，确保了在大规模数据和复杂应用中的高性能，也大大简化前端开发。
- 使用Jszip解析数据，实现考勤数据excel导出功能。

## 3.教师端项目目录树

```bash
uuAttendance/
├────dist                            //打包后的文件
├────node_modules                    //所导入的模块
├────public/                         //公共文件
│    ├────favicon.ico
│    └────index.html 
├────README.md                       //项目说明
├────src/
│    ├────api/                       //封装接口
│    │    └────api.js
│    ├────App.vue                    //根组件
│    ├────assets/                    //静态图片资源
│    │    ├────home/         
│    │    └────login/
│    ├────components/                //组件
│    │    ├────CheckAttendance.vue   //考勤申诉审核模块
│    │    ├────CheckLeave.vue        //请假审核模块
│    │    ├────Course.vue            //基于课程的考勤情况查询模块
│    │    ├────Empower.vue           //督导指定及授权模块
│    │    ├────HomePart.vue          //主页以及快捷导航模块
│    │    ├────Sidebar.vue           //侧边栏模块
│    │    └────Student.vue           //基于学生的考勤情况查询模块
│    ├────main.js                    //入口文件
│    ├────pages/                     //页面
│    │    ├────Home.vue              //整体页面
│    │    ├────Login.vue             //登录页面
│    │    └────Register.vue          //注册页面
│    ├────router/                    //路由封装
│    │    └────index.js
│    └────utils/                     //工具类
│         └────request.js            //封装axios
├────.gitignore                      //git忽略文件
├────babel.config.js                 //babel配置文件
├────jsconfig.json                   //js配置文件
├────LICENSE                         //开源协议
├────package-lock.json               //包版本锁定文件
├────package.json                    //包管理文件
└────vue.config.js                   //vue配置文件
```
