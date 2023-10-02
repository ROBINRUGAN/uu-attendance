import VueRouter from "vue-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
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
            component: Login
        },
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