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
            component: login
        },
        {
            path: "/demand",
            name: "demand",
            component: () => import('./views/layout.vue'),
            children: [{
                path: "",
                name: "demands",
                component: () => import('./views/demands.vue')
            }, {
                path: "user",
                name: "user",
                component: () => import('./views/user.vue')
            }]
        }
    ]
});
