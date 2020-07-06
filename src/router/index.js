/*
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-07-06 17:28:58
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-07-06 17:29:43
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewConfig from '../views';

Vue.use(VueRouter);

const routes = [
  ...ViewConfig
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
