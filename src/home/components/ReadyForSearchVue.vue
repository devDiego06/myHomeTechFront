<script setup lang="ts">
import ButtonVue from '@/modules/common/ButtonVue.vue';
</script>

<template>
  <section class="bg-black text-white py-16">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para reparar tus electrodomésticos?
        </h2>
        <p class="text-lg mb-8 text-blue-100">
          Encuentra al técnico perfecto para tus necesidades y recibe un servicio de calidad con
          garantía
        </p>
        <router-link to="/busqueda">
          <ButtonVue border-color="white" text="Buscar Tecnico" />
        </router-link>
      </div>
    </div>
  </section>
</template>
