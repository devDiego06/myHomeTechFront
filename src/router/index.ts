import ContactLayout from '@/home/layouts/ContactLayout.vue';
import HomeLayout from '@/home/layouts/HomeLayout.vue';
import HomeView from '@/home/view/HomeView.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: HomeView,
      children: [
        {
          path: '', // Ruta predeterminada para la raíz
          name: 'home',
          component: HomeLayout,
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
