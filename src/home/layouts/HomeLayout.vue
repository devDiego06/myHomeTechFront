<template>
  <!-- Nabvar -->
  <TopMenu />

  <RouterView />
  <!-- Footer -->
  <FooterVue />
</template>

<script setup lang="ts">
import TopMenu from '@/home/components/TopMenu.vue';

import FooterVue from '../components/FooterVue.vue';
</script>
