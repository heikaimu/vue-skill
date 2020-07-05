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
