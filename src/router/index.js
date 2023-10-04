import VueRouter from "vue-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Overview from "../components/Overview";
import HomePart from "../components/HomePart";
import Course from "../components/Course";
import Student from "../components/Student";
import Empower from "../components/Empower";
import CheckAttendance from "../components/CheckAttendance";
export default new VueRouter({
    routes: [{
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/',
            component: Home,
            children: [{
                    path: 'overview',
                    component: Overview
                },
                {
                    path: 'home',
                    component: HomePart
                },
                {
                    path: 'course',
                    component: Course
                },
                {
                    path: 'student',
                    component: Student
                },
                {
                    path: 'empower',
                    component: Empower
                },
                {
                    path: 'check-attendance',
                    component: CheckAttendance
                }
            ],
            redirect: '/home'

        }
        // {
        //     path: '/userCenter',
        //     component: UserCenter,
        //     children: [{
        //             path: 'myInfo',
        //             component: MyInfo
        //         },
        //         {
        //             path: 'starredGoods',
        //             component: StarredGoods

        //         }, {
        //             path: 'buyerBidOrder',
        //             component: BuyerBidOrder

        //         }, {
        //             path: 'soldGoods',
        //             component: SoldGoods

        //         },
        //     ],
        //     redirect: 'userCenter/myInfo'
        // },
    ]
})