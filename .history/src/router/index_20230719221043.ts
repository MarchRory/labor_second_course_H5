import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/components/layout/Layout.vue'
export const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
        },
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            title: '注册',
        },
        component: () => import('@/views/register/index.vue')
    },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/plan',
                name: 'plan',
                meta: {
                    title: '我的安排'
                },
                component: () => import('@/views/plan/index.vue')
            },
            {
                path: '/user',
                name: 'user',
                meta: {
                    title: "个人中心"
                },
                component: () => import('@/views/user/index.vue')
            },
        ]
    },
    {
        path: '/searchRes',
        name: 'searchRes',
        meta: {
            title: '搜索结果'
        },
        component: () => import('@/views/searchRes/index.vue')
    },
    {
        path: '/detail',
        name: 'detail',
        meta: {
            title: '可成详情'
        },
        component: () => import('@/views/courseDetail/index.vue')
    },
    {
        path: '/command',
        name: 'command',
        meta: {
            title: '可成评价'
        },
        component: () => import('@/views/command/index.vue')
    },
    {
        path: '/commandRes',
        name: 'commandRes',
        meta: {
            title: '评价反馈'
        },
        component: () => import('@/views/')
    }
    // 替代vue2中的'*'通配符路径
    { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
    history: createWebHashHistory(), // history 模式则使用 createWebHistory()
    routes,
});
export default router;