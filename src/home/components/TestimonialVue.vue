<template>
  <!-- Testimonios -->
  <section class="section bg-white p-20">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="mb-4 text-3xl font-bold">Lo que dicen nuestros clientes</h2>
        <p class="text-gray-600 max-w-3xl mx-auto">
          Miles de personas confían en nosotros para conectarlos con los mejores técnicos
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TestimonialCard
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :name="testimonial.name"
          :location="testimonial.location"
          :testimonial="testimonial.testimonial"
          :rating="testimonial.rating"
          :image="testimonial.image"
          :service="testimonial.service"
        />
      </div>
      <div class="text-center mt-12">
        <router-link
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 flex items-center justify-center w-fit mx-auto"
          to="#find-technician"
        >
          Encuentra tu técnico ideal
          <span class="material-icons ml-2">arrow_forward</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TestimonialCard from './TestimonialCard.vue';
import { RouterLink } from 'vue-router';

// Testimonios
const testimonials = ref([
  {
    name: 'Jose Garcia',
    location: 'Madrid',
    testimonial:
      'Excelente servicio. El técnico llegó puntual y reparó mi refrigerador en menos de una hora. Muy profesional y precio justo.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=1',
    service: 'Reparación de Refrigerador',
  },
  {
    name: 'Carlos Ruiz',
    location: 'Barcelona',
    testimonial:
      'Necesitaba urgentemente reparar mi lavadora y encontré un técnico excelente. Trabajo impecable y garantía incluida.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    service: 'Reparación de Lavadora',
  },
  {
    name: 'Ana Martín',
    location: 'Valencia',
    testimonial:
      'Muy contenta con el servicio de instalación de aire acondicionado. El técnico fue muy explicativo y dejó todo perfecto.',
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    service: 'Instalación de Aire Acondicionado',
  },
]);
</script>
