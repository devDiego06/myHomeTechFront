import isAuthenticatedGuard from '@/modules/auth/guards/isAuthenticated.guard';
import type { RouteRecordRaw } from 'vue-router';


export const technicianRoutes: RouteRecordRaw = {
  path: '/technician',
  name: 'technician',
  beforeEnter: isAuthenticatedGuard,
  component: () => import('@/modules/technician/layouts/ProfileLayout.vue'),
  children: [
    {
      path: 'profile',
      name: 'technician-profile',
      component: () => import('@/modules/technician/views/ProfileView.vue')
    },
    {
      path: 'services',
      name: 'technician-services',
      component: () => import('@/modules/technician/views/ServicesProfile.vue')
    },
    {
      path: 'dashboard',
      name: 'technician-dashboard',
      component: () => import('@/modules/technician/views/DashboardView.vue')
    },
    {
      path: 'settings',
      name: 'technician-settings',
      component: () => import('@/modules/technician/views/SettingsView.vue')
    }
  ]
};