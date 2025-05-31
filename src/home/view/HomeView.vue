<template>
  <!-- Nabvar -->
  <TopMenu />
  <RouterView />

  <!-- Footer -->
  <FooterVue />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import FooterVue from '../components/FooterVue.vue';
import TopMenu from '../components/TopMenu.vue';
</script>
