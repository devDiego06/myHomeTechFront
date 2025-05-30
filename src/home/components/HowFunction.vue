<template>
  <!-- Como Funciona -->
  <section class="section bg-gray-50 p-30">
    <div class="container-custom">
      <div class="text-center">
        <h2 class="pb-10 text-4xl font-bold">Cómo Funciona</h2>
        <p class="text-gray-600 max-w-3xl mx-auto pb-10">
          Un proceso simple y eficiente para conectarte con los técnicos adecuados para tus
          necesidades
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto pb-10">
        <div class="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
          <div
            class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <SearchIcon class="w-7 h-7 text-tech-blue" />
          </div>
          <h3 class="text-xl font-medium mb-2">Busca</h3>
          <p class="text-gray-600">
            Dinos qué necesitas reparar o instalar y tu ubicación para encontrar técnicos
            cualificados cerca de ti
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
          <div
            class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <LocalitationIcon class="w-7 h-7 text-tech-blue" />
          </div>
          <h3 class="text-xl font-medium mb-2">Selecciona</h3>
          <p class="text-gray-600">
            Compara perfiles, valoraciones y precios de diferentes técnicos para elegir el que mejor
            se adapte a tus necesidades
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
          <div
            class="w-14 h-14 bg-blue-100 rounded-full flex items-center p-1 justify-center mx-auto mb-4"
          >
            <DateIcon class="w-7 h-7" />
          </div>
          <h3 class="text-xl font-medium mb-2">Programa</h3>
          <p class="text-gray-600">
            Agenda una visita en el horario que te convenga y recibe la asistencia técnica que
            necesitas sin complicaciones
          </p>
        </div>
      </div>

      <div class="mt-10 text-center flex items-center justify-center">
        <router-link to="/busqueda">
          <ButtonVue :text="'Buscar Tecnicos ahora'" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DateIcon from '@/assets/icons/DateIcon.vue';
import LocalitationIcon from '@/assets/icons/LocalitationIcon.vue';
import SearchIcon from '@/assets/icons/SearchIcon.vue';
import ButtonVue from '@/modules/common/ButtonVue.vue';
</script>
