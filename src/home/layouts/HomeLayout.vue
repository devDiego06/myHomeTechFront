<template>
  <!-- Nabvar -->
  <TopMenu />

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

  <!-- Footer -->
  <FooterVue />
</template>

<script setup lang="ts">
import TopMenu from '@/home/components/TopMenu.vue';
import HeroSection from '../components/HeroSection.vue';
import HowFunction from '../components/HowFunction.vue';
import ServicesCards from '../components/ServicesCards.vue';
import TestimonialVue from '../components/TestimonialVue.vue';
import ReadyForSearchVue from '../components/ReadyForSearchVue.vue';
import FooterVue from '../components/FooterVue.vue';
</script>
