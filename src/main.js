/*
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-07-06 17:28:58
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-07-06 17:29:35
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { init, bind } from './utils/custom-life-cycle';

Vue.config.productionTip = false;

// 添加自定义生命周期钩子函数
init();

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// 绑定生命周期钩子函数到vm根节点
bind(vm);
