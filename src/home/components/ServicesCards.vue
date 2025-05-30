<template>
  <section class="section p-20">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="py-10 text-3xl font-bold">Servicios Destacados</h2>
        <p class="text-gray-600 max-w-3xl mx-auto">
          Contamos con técnicos especializados en los principales sistemas de electrodomésticos para
          tu hogar
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :icon="service.icon"
          :description="service.description"
          :features="service.features"
        />
      </div>

      <div class="mt-10 text-center flex justify-center">
        <router-link to="/busqueda">
          <ButtonVue :text="'Ver todos los servicios'" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ServiceCard from './ServiceCard.vue';
import ButtonVue from '@/modules/common/ButtonVue.vue';

// Servicios destacados
const services = ref([
  {
    title: 'Refrigeración',
    icon: 'refrigerator',
    description: 'Mantenimiento y reparación de refrigeradores y congeladores de todas las marcas.',
    features: [
      'Diagnóstico completo del sistema',
      'Reparación de fugas de gas',
      'Reemplazo de componentes',
      'Limpieza y mantenimiento',
    ],
  },
  {
    title: 'Lavadoras',
    icon: 'washer',
    description:
      'Soluciones para problemas con tu lavadora o secadora de manera rápida y efectiva.',
    features: [
      'Reparación de motores y bombas',
      'Solución de problemas electrónicos',
      'Instalación de nuevas unidades',
      'Mantenimiento preventivo',
    ],
  },
  {
    title: 'Aire Acondicionado',
    icon: 'airConditioner',
    description: 'Instalación, mantenimiento y reparación de sistemas de aire acondicionado.',
    features: [
      'Recarga de gas refrigerante',
      'Limpieza de filtros y ductos',
      'Reparación de compresores',
      'Optimización de eficiencia energética',
    ],
  },
]);
</script>
