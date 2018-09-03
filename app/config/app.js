import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store/index'
import router from '@/router'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/style.css'
import { iHttp } from './http'
import echarts from 'echarts'
Vue.use(ElementUI);

//同步状态
sync(store, router);

Vue.prototype.$ajax = iHttp
Vue.prototype.$echarts = echarts

new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})