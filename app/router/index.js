import Vue from "vue";
import Router from "vue-router";
import store from "@/store/index";
import { Message } from "element-ui";

Vue.use(Router);

const router = new Router({
    mode: "hash",
    routes: [{
            path: "/",
            redirect: "/main"
        },
        {
            path: "/login",
            name: "login",
            meta: {
                title: '登录'
            },
            component: () =>
                import ("@/view/login/logins")
        },
        {
            path: "/main",
            name: "mainstay",
            component: () =>
                import ("@/view/main/mains"),
            redirect: "/main/",
            children: [{
                path: "/",
                name: "main",
                meta: {
                    title: '首页'
                },
                component: () =>
                    import ("@/view/main/index")
            }, {
                path: "/Refraction",
                name: "Refraction",
                meta: {
                    title: '类光线效果'
                },
                component: () =>
                    import ("@/view/Refraction/Refraction")
            }, {
                path: "/treeRadio",
                name: "treeRadio",
                meta: {
                    title: '单选树形控件'
                },
                component: () =>
                    import ("@/view/tree-radio/treeRadio")
            }, {
                path: "/transition",
                name: "transition",
                meta: {
                    title: '过渡效果'
                },
                component: () =>
                    import ("@/view/transition/transition")
            }, {
                path: "/echars",
                name: "echars",
                meta: {
                    title: '过渡效果'
                },
                component: () =>
                    import ("@/view/echars/echars")
            }, {
                path: "/checkAll",
                name: "checkAll",
                meta: {
                    title: '复选框'
                },
                component: () =>
                    import ("@/view/checkAll/checkAll")
            }]
        }
    ]
});

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    if (to.name === "login" || store.state.user.roleId || sessionStorage.roleId) {
        next();
    } else {
        Message.error("未登录！");
        router.push("/login");
    }
});

export default router;