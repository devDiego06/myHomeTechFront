<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from './modules/auth/store/authStore';
import { AuthStatus } from './modules/auth/interfaces/authStatus.enum';

const authSotre = useAuthStore();
const router = useRouter();
const route = useRoute();

//redirection to home screnn when be logued
authSotre.$subscribe(
  (_, state) => {
    if (state.authStatus === AuthStatus.Checking) {
      authSotre.checkAuthStatus();
      return;
    }

    if (route.path.includes('/auth') && state.authStatus === AuthStatus.Authenticated) {
      return router.replace({ name: 'home' });
    }
  },
  {
    immediate: true,
  },
);
</script>
