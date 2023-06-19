// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import home from '@/views/home.vue'
import fertilizationScheme from '@/views/fertilizationScheme.vue'
// import { defineAsyncComponent } from 'vue'
// const _import = (path) => defineAsyncComponent(() => import(`../views/${path}.vue`));

// createRouter 创建路由实例
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      // component: home
      redirect: '/fertilizationScheme'
    },
    {
      path: '/fertilizationScheme',
      component: fertilizationScheme,
    }
  ]
})

// 抛出路由实例, 在 main.js 中引用
export default router