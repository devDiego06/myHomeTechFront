<template>

  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="text-3xl font-bold">Configuración</h2>
      <button
        @click="handleSaveSettings"
        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Guardar Cambios
      </button>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <!-- Notifications Settings -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="mb-4">
          <h3 class="flex items-center text-lg font-semibold">
            <BellIcon class="mr-2 h-5 w-5" />
            Notificaciones
          </h3>
          <p class="text-gray-500">Configura cómo quieres recibir notificaciones</p>
        </div>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Notificaciones por Email</label>
            <button
              @click="notifications.email = !notifications.email"
              :class="[
                'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                notifications.email ? 'bg-blue-600' : 'bg-gray-200'
              ]"
            >
              <span
                :class="[
                  'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                  notifications.email ? 'translate-x-6' : 'translate-x-1'
                ]"
              />
            </button>
          </div>

          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Notificaciones por SMS</label>
            <button
              @click="notifications.sms = !notifications.sms"
              :class="[
                'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                notifications.sms ? 'bg-blue-600' : 'bg-gray-200'
              ]"
            >
              <span
                :class="[
                  'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                  notifications.sms ? 'translate-x-6' : 'translate-x-1'
                ]"
              />
            </button>
          </div>

          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Notificaciones Push</label>
            <button
              @click="notifications.push = !notifications.push"
              :class="[
                'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                notifications.push ? 'bg-blue-600' : 'bg-gray-200'
              ]"
            >
              <span
                :class="[
                  'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                  notifications.push ? 'translate-x-6' : 'translate-x-1'
                ]"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- Security Settings -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="mb-4">
          <h3 class="flex items-center text-lg font-semibold">
            <LockClosedIcon class="mr-2 h-5 w-5" />
            Seguridad
          </h3>
          <p class="text-gray-500">Configura la seguridad de tu cuenta</p>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Contraseña Actual</label>
            <input
              type="password"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Nueva Contraseña</label>
            <input
              type="password"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <ShieldCheckIcon class="mr-2 h-4 w-4" />
            Cambiar Contraseña
          </button>
        </div>
      </div>

      <!-- Rate Settings -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="mb-4">
          <h3 class="flex items-center text-lg font-semibold">
            <CurrencyDollarIcon class="mr-2 h-5 w-5" />
            Tarifas por Hora
          </h3>
          <p class="text-gray-500">Configura tus tarifas por tipo de servicio</p>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Plomería</label>
            <div class="flex">
              <span class="inline-flex items-center px-3 text-sm border border-r-0 border-gray-300 bg-gray-50 rounded-l-md">$</span>
              <input
                v-model="rates.plumbing"
                type="number"
                class="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span class="inline-flex items-center px-3 text-sm border border-l-0 border-gray-300 bg-gray-50 rounded-r-md">/hr</span>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Electricidad</label>
            <div class="flex">
              <span class="inline-flex items-center px-3 text-sm border border-r-0 border-gray-300 bg-gray-50 rounded-l-md">$</span>
              <input
                v-model="rates.electrical"
                type="number"
                class="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span class="inline-flex items-center px-3 text-sm border border-l-0 border-gray-300 bg-gray-50 rounded-r-md">/hr</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Availability Settings -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="mb-4">
          <h3 class="flex items-center text-lg font-semibold">
            <ClockIcon class="mr-2 h-5 w-5" />
            Disponibilidad
          </h3>
          <p class="text-gray-500">Configura tus horarios de trabajo</p>
        </div>

        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Hora de Inicio</label>
              <input
                v-model="availability.startTime"
                type="time"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Hora de Fin</label>
              <input
                v-model="availability.endTime"
                type="time"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Días de Trabajo</label>
            <div class="grid grid-cols-2 gap-2">
              <div
                v-for="(day, key) in weekDays"
                :key="key"
                class="flex items-center space-x-2"
              >
                <input
                  :id="key"
                  v-model="availability[key]"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label :for="key" class="text-sm">{{ day }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  BellIcon,
  LockClosedIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/vue/24/outline'

const notifications = ref({
  email: true,
  sms: false,
  push: true,
  newServices: true,
  reminders: true
})

const availability = ref({
  monday: true,
  tuesday: true,
  wednesday: true,
  thursday: true,
  friday: true,
  saturday: false,
  sunday: false,
  startTime: "08:00",
  endTime: "18:00"
})

const rates = ref({
  plumbing: "50",
  electrical: "60",
  hvac: "55",
  general: "45"
})

const weekDays = {
  monday: "Lunes",
  tuesday: "Martes",
  wednesday: "Miércoles",
  thursday: "Jueves",
  friday: "Viernes",
  saturday: "Sábado",
  sunday: "Domingo"
}

const handleSaveSettings = () => {
  console.log('Guardando configuración:', {
    notifications: notifications.value,
    availability: availability.value,
    rates: rates.value
  })
  alert('Configuración guardada exitosamente')
}
</script>
