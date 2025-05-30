import HomeLayout from '@/home/layouts/HomeLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeLayout',
      component: HomeLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/home/view/HomeView.vue'),
        },
      ],
    },
  ],
});

export default router;
