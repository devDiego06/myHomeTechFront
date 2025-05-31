import ContactLayout from '@/home/layouts/ContactLayout.vue';
import HomeLayout from '@/home/layouts/HomeLayout.vue';
import HomeView from '@/home/view/HomeView.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLayout,
      children: [
        {
          path: 'home2',
          name: 'hom2',
          component: HomeView,
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactLayout,
        },
      ],
    },
  ],
});

export default router;
