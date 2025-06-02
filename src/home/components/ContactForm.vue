
<template>
  <div class="bg-gray-50 p-8 md:p-10 rounded-xl shadow-lg">
    <h2 class="text-2xl font-semibold text-gray-800 mb-6">
      {{ technician ? "Datos para la visita técnica" : "Envíanos un Mensaje" }}
    </h2>

    <form @submit.prevent="$emit('submit')" class="space-y-6">
      <div>
        <label class="block text-sm font-medium text-gray-700" for="name">
          Nombre Completo
        </label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          name="name"
          autocomplete="name"
          placeholder="Tu Nombre"
          required
          class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="email">
          Correo Electrónico
        </label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="tu@email.com"
          required
          class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div v-if="!technician">
        <label class="block text-sm font-medium text-gray-700" for="subject">
          Asunto
        </label>
        <input
          id="subject"
          v-model="formData.subject"
          type="text"
          name="subject"
          placeholder="Asunto de tu mensaje"
          class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div v-if="technician">
        <label class="block text-sm font-medium text-gray-700" for="phone">
          Teléfono
        </label>
        <input
          id="phone"
          v-model="formData.phone"
          type="text"
          placeholder="Tu teléfono"
          required
          class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div v-if="technician">
        <label class="block text-sm font-medium text-gray-700" for="service">
          Tipo de servicio
        </label>
        <select
          id="service"
          v-model="formData.service"
          required
          class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">Selecciona un servicio</option>
          <option value="repair">Reparación</option>
          <option value="maintenance">Mantenimiento</option>
          <option value="installation">Instalación</option>
          <option value="diagnosis">Diagnóstico</option>
        </select>
      </div>

      <div v-if="technician">
        <label class="block text-sm font-medium text-gray-700" for="address">
          Dirección completa
        </label>
        <input
          id="address"
          v-model="formData.address"
          type="text"
          placeholder="Calle, número, piso, código postal, ciudad"
          required
          class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div v-if="technician" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Fecha preferida
          </label>
          <input
            v-model="formData.date"
            type="date"
            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700" for="time">
            Horario preferido
          </label>
          <select
            id="time"
            v-model="formData.timeSlot"
            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Selecciona horario</option>
            <option value="morning">Mañana (9:00 - 13:00)</option>
            <option value="afternoon">Tarde (15:00 - 19:00)</option>
          </select>
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="message">
          {{ technician ? "Descripción del problema" : "Mensaje" }}
        </label>
        <textarea
          id="message"
          v-model="formData.message"
          name="message"
          :placeholder="technician ? 'Describe con detalle el problema que tienes con tu electrodoméstico' : 'Escribe tu mensaje aquí...'"
          rows="4"
          required
          class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          :disabled="loading"
          class="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform hover:scale-105 disabled:opacity-50"
        >
          <Send class="mr-2 h-4 w-4" />
          {{ loading ? "Enviando..." : "Enviar Mensaje" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Send } from 'lucide-vue-next'

interface Technician {
  id: string
  name: string
  specialty: string[]
  image: string
}

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  message: string
  service: string
  date: string
  timeSlot: string
  subject: string
}

defineProps<{
  technician: Technician | null
  formData: FormData
  loading: boolean
}>()

defineEmits<{
  submit: []
}>()
</script>
