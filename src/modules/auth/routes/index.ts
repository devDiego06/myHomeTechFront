import type { RouteRecordRaw } from 'vue-router';

export const authRoutes: RouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/modules/auth/views/LoginView.vue'),
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('@/modules/auth/views/RegisterView.vue'),
    },
  ],
};
