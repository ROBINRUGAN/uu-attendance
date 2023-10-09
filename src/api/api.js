import {
    service
} from "@/utils/request";

export function Login(data) {
    return service.request({
        method: "post",
        url: `/user/login`,
        data
    })
}
export function Logout() {
    return service.request({
        method: "post",
        url: `/user/logout`,
    })
}
export function CourseSearch(data) {
    return service.request({
        method: "get",
        url: `/courseAttendances/courseAttendanceList?courseName=${data.courseName}&`+
        `semester=${data.semester}&week=${data.week}&weekday=${data.weekday}&`+
        `beginSection=${data.beginSection}&endSection=${data.endSection}&pageSize=${data.pageSize}&pageNo=${data.pageNo}`,
    })
}
export function ExportCourseSearch(data) {
    return service.request({
        method: "get",
        url: `/courseAttendances/export/courseAttendanceList?courseName=${data.courseName}&`+
        `semester=${data.semester}&week=${data.week}&weekday=${data.weekday}&`+
        `beginSection=${data.beginSection}&endSection=${data.endSection}`,
        responseType: 'blob'
    })
}

// export function LoginByTelephone(data) {
//     console.log('我在api.js，手机号登录表单发送', data)
//     return service.request({
//         method: "post",
//         url: `/users/login/phone`,
//         data
//     })
// }
// export function UserInfo() {
//     console.log('我在api.js，获取用户中心信息')
//     return service.request({
//         method: "get",
//         url: `/users`,
//     })
// }
// export function HomeInfo(page, size) {
//     console.log('我在api.js，获取首页商品列表')
//     return service.request({
//         method: "get",
//         url: `/home-page?page=${page}&size=${size}`,
//     })
// }
// export function DetailInfo(queryParams) {
//     console.log('我在api.js，获取详情页信息')
//     return service.request({
//         method: "get",
//         url: `/goods?id=${queryParams}`,
//     })
// }
// export function HomeSearch(page, size, keywords) {
//     console.log('我在api.js，获取首页搜索信息')
//     return service.request({
//         method: "get",
//         url: `/search?page=${page}&size=${size}&keywords=${keywords}`,
//     })
// }
// export function Like(data) {
//     console.log('我在api.js，获取加入心愿单信息');
//     return service.request({
//         method: "post",
//         url: `/users/favorites`,
//         data,
//     });
// }
// export function ChatHistory(cid) {
//     console.log('我在api.js，获取悬浮聊天室历史记录' + cid)
//     return service.request({
//         method: "get",
//         url: `/chat/history?send_id=${cid}`,
//     })
// }
// export function LoginGetCode(data) {
//     console.log('我在api.js，登录获取验证码')

//     return service.request({
//         method: "post",
//         url: `/users/sms`,
//         data: JSON.stringify(data), // 将参数转换为JSON字符串
//         headers: {
//             'Content-Type': 'application/json' // 指定请求头的Content-Type为application/json
//         }
//     })
// }
// export function RegisterGetCode(data) {
//     console.log('我在api.js，注册获取验证码')

//     return service.request({
//         method: "post",
//         url: `/users/sms`,
//         data: JSON.stringify(data), // 将参数转换为JSON字符串
//         headers: {
//             'Content-Type': 'application/json' // 指定请求头的Content-Type为application/json
//         }
//     })
// }
// export function ModifyGetCode(data) {
//     console.log('我在api.js，修改手机号获取验证码')

//     return service.request({
//         method: "post",
//         url: `/users/sms`,
//         data: JSON.stringify(data), // 将参数转换为JSON字符串
//         headers: {
//             'Content-Type': 'application/json' // 指定请求头的Content-Type为application/json
//         }
//     })
// }
// //raw传参
// export function Register(data) {
//     console.log('我在api.js，注册')

//     return service.request({
//         method: "post",
//         url: `/users`,
//         data
//     })
// }
// //form-data传参
// export function AddGood(data) {
//     console.log("我在api.js，添加商品");
//     return service.request({
//         method: "post",
//         url: "/goods",
//         data: data,
//         headers: {
//             "Content-Type": "multipart/form-data"
//         }
//     });
// }

// export function Money(data) {
//     console.log("我在api.js，充值或提现金额");
//     return service.request({
//         method: "put",
//         url: "users/money",
//         data,
//     })
// }

// export function Guess() {
//     console.log("我在api.js,准备猜你喜欢");
//     return service.request({
//         method: "get",
//         url: "guess"
//     })
// }

// export function ModifyPhoto() {
//     console.log("我在api.js，准备修改头像")
//     return service.request({
//         method: "put",
//         url: "users/profile-photo"
//     })
// }

// export function ModifyNickname(data) {
//     console.log("我在api.js，准备修改昵称")
//     return service.request({
//         method: "put",
//         url: "users/nickname",
//         data,
//     })
// }

// export function ModifyUsername(data) {
//     console.log("我在api.js，准备修改用户名")
//     return service.request({
//         method: "put",
//         url: "users/username",
//         data,
//     })
// }

// export function ModifyTelephone(data) {
//     console.log("我在api.js，准备修改手机号")
//     return service.request({
//         method: "put",
//         url: "users/phone-number",
//         data,
//     })
// }

// export function GetPictureUrl(data) {
//     console.log("我在api.js，发送图片文件获取对应url")
//     return service.request({
//         method: "post",
//         url: "picture",
//         data,
//         headers: {
//             "Content-Type": "multipart/form-data"
//         }
//     })
// }

// export function BidOrder(data) {
//     console.log("我在api.js，准备生成订单")
//     return javaService.request({
//         method: "post",
//         url: "order/bid",
//         data,
//         headers: {
//             "Content-Type": "multipart/form-data"
//         }

//     })
// }

// export function GetChatList() {
//     console.log("我在api.js，准备获取聊天列表")
//     return service.request({
//         method: "get",
//         url: "chat/list"
//     })
// }

// export function ReadMessage(data) {
//     console.log("我在api.js,我要把消息置为已读")
//     return service.request({
//         method: "put",
//         url: "chat/read",
//         data,
//     })
// }

// export function GetBuyerBidOrder() {
//     console.log("我在api.js,我要获取买家竞拍订单")
//     return javaService.request({
//         method: "get",
//         url: "order/Myorder/buy"
//     })
// }

// export function GetFavorite() {
//     console.log("我在api.js,我要获取收藏夹")
//     return service.request({
//         method: "get",
//         url: "users/favorites"
//     })
// }

// export function GetSellerOrder() {
//     console.log("我在api.js,我要获取卖家订单")
//     return javaService.request({
//         method: "get",
//         url: "order/my/sell"
//     })
// }

// export function PayBill(id) {
//     console.log("我在api.js,我要支付订单")
//     return javaService.request({
//         method: "put",
//         url: `order/pay?id=${id}`
//     })
// }
// export function ProcessOrder(data) {
//     console.log("我在api.js,我要处理订单")
//     return javaService.request({
//         method: "put",
//         url: "order/deal",
//         data,
//         headers: {
//             "Content-Type": "multipart/form-data"
//         }
//     })
// }

// export function AdminGetGood() {
//     console.log("我在api.js,管理员获取商品")
//     return service.request({
//         method: "get",
//         url: "admin/goods",
//     })
// }

// export function AdminPocessGood(data) {
//     console.log("我在api.js,管理员处理商品")
//     return javaService.request({
//         method: "put",
//         url: "good/verify",
//         data,
//         headers: {
//             "Content-Type": "multipart/form-data"
//         }
//     })
// }