import Vue from "vue";
import Router from "vue-router";
import login from "./views/login.vue";

Vue.use(Router);

export default new Router({
    // mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "login",
            component: login,
            meta: {title: "用户登录"}
        },
        {
            path: "/demand",
            name: "demand",
            redirect: '/',
            component: () => import('./views/layout.vue'),
            children: [{
                path: "demands",
                name: "demands",
                component: () => import('./views/demands.vue'),
                meta: {title: "需求中心"}
            }, {
                path: "user",
                name: "user",
                component: () => import('./views/user.vue'),
                meta: {title: "用户中心"}
            }]
        }
    ]
});
