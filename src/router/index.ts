import ContactForm from '@/home/components/ContactForm.vue';
import PerfilTechnician from '@/home/components/PerfilTechnician.vue';
import isAuthenticatedGuard from '@/modules/auth/guards/isAuthenticated.guard';

import ContactLayout from '@/home/layouts/ContactLayout.vue';
import HomeLayout from '@/home/layouts/HomeLayout.vue';
import SearchLayout from '@/home/layouts/SearchLayout.vue';
import HomeView from '@/home/view/HomeView.vue';
import { authRoutes } from '@/modules/auth/routes';

import { createRouter, createWebHistory } from 'vue-router';
import { technicianRoutes } from '@/modules/technician/routes';



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
        {
          path: 'search',
          name: 'search',
          beforeEnter: isAuthenticatedGuard,
          component: SearchLayout,
        },

        {
          path: '/:technicianId',
          name: 'search-technician',
          component: PerfilTechnician,
        },
        {
          path: 'contact-form/:technicianId',
          name: 'contact-form',
          component: ContactForm,
        },
      ],
    },
    authRoutes,
    technicianRoutes,
  ],
});

export default router;
