import Vue from "vue";
import Router from "vue-router";
// import store from "@/store/index";
// import { Message } from "element-ui";

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
                component: () =>
                    import ("@/view/main/index")
            }, {
                path: "/Refraction",
                name: "Refraction",
                component: () =>
                    import ("@/view/Refraction/Refraction")
            }, {
                path: "/treeRadio",
                name: "treeRadio",
                component: () =>
                    import ("@/view/tree-radio/treeRadio")
            }, {
                path: "/transition",
                name: "transition",
                component: () =>
                    import ("@/view/transition/transition")
            }]
        }
    ]
});

// router.beforeEach((to, from, next) => {
//   if (to.name === "login" || store.state.user.roleId || sessionStorage.roleId) {
//     next();
//   } else {
//     Message.error("未登录！");
//     router.push("/login");
//   }
// });

export default router;