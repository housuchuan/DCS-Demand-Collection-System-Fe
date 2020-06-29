/* eslint-disable */
import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";

import "./registerServiceWorker";
import "lib-flexible";
import "./assets/style/common.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
/* eslint-disable */
