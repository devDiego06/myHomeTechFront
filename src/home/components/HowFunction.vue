<template>
  <!-- Como Funciona -->
  <section class="py-16 bg-white" id="how-it-works">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Simple, Rápido y Eficaz</h2>
      <p class="text-gray-600 mb-12 max-w-2xl mx-auto">
        Encuentra el técnico ideal en tres sencillos pasos. Nuestro objetivo es facilitar la
        conexión entre clientes y profesionales.
      </p>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          class="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div
            class="bg-indigo-100 text-indigo-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6"
          >
            <span class="material-icons text-3xl">search</span>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">1. Busca y Filtra</h3>
          <p class="text-gray-600">
            Encuentra técnicos por especialidad, ubicación y disponibilidad. Lee opiniones de otros
            clientes.
          </p>
        </div>
        <div
          class="bg-indigo-600 text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform md:scale-105 transition-all duration-300"
        >
          <div
            class="bg-white text-indigo-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6"
          >
            <span class="material-icons text-3xl">calendar_today</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">2. Agenda tu Cita</h3>
          <p>
            Selecciona el técnico, elige la fecha y hora que te convenga, y solicita el servicio
            directamente.
          </p>
          <a
            class="mt-6 inline-block bg-white text-indigo-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
            href="#find-technician"
            >Buscar Ahora</a
          >
        </div>
        <div
          class="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div
            class="bg-indigo-100 text-indigo-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6"
          >
            <span class="material-icons text-3xl">thumb_up</span>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">3. Servicio y Calificación</h3>
          <p class="text-gray-600">
            Recibe el servicio y califica tu experiencia para ayudar a otros usuarios.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
