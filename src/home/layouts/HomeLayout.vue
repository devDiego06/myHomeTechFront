<template>
  <RouterView />

  <!-- Hero Section -->
  <HeroSection />

  <!-- Cards -->
  <HowFunction />

  <!-- ServicesCards -->
  <ServicesCards />

  <!-- TestimonialsCards -->
  <TestimonialVue />

  <!-- Ready for search -->
  <ReadyForSearchVue />

  <!-- Are You techinicia -->
   <AreYouTechnician />
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import HowFunction from '../components/HowFunction.vue';
import ServicesCards from '../components/ServicesCards.vue';
import TestimonialVue from '../components/TestimonialVue.vue';
import ReadyForSearchVue from '../components/ReadyForSearchVue.vue';
import { RouterView } from 'vue-router';
import AreYouTechnician from '../components/AreYouTechnician.vue';
</script>
