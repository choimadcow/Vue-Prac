import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/LoginPage.vue'),
    },
    {
      path: '/dashboard',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/pages/DashboardPage.vue'),
        },
      ],
    },
    {
      path: '/usermng',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'mng',
          component: () => import('@/pages/UserManagePage.vue'),
        },
      ],
    },
    {
      path: '/map',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'map',
          component: () => import('@/pages/MapPage.vue'),
        },
      ],
    },
    {
      path: '/pest',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'pest',
          component: () => import('@/pages/PestListPage.vue'),
        },
      ],
    },
  ],
})

export default router
