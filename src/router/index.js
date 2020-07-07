import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 处理加载routes文件夹路由注入
export let asyncComponents = [];
const files = require.context('./routes', false, /\.js$/);
files.keys().forEach(key => {
  asyncComponents = asyncComponents.concat(files(key).default);
});

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      redirect: '/home',
      component: () => import('@/layout/index.vue'),
      children: [
        ...asyncComponents
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    }
  ]
});

/**
 * 前置路由
 */
router.beforeEach((to, from, next) => {
  next();
});




export default router;
