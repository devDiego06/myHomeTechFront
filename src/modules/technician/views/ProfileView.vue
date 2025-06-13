<template>

  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="text-3xl font-bold">Mi Perfil</h2>
      <button
        @click="toggleEdit"
        :class="[
          'px-4 py-2 rounded-md font-medium',
          isEditing
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
        ]"
      >
        {{ isEditing ? 'Guardar Cambios' : 'Editar Perfil' }}
      </button>
    </div>

    <div class="grid gap-6 md:grid-cols-3">
      <!-- Profile Summary Card -->
      <div class="md:col-span-1 bg-white rounded-lg shadow p-6">
        <div class="text-center">
          <div class="h-24 w-24 mx-auto rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
            {{ getInitials(formData.name) }}
          </div>
          <h3 class="text-xl font-semibold">{{ formData.name }}</h3>
          <p class="text-gray-500">Técnico Profesional</p>
        </div>

        <div class="mt-6 space-y-4">
          <div class="flex items-center justify-center space-x-2">
            <StarIcon class="h-4 w-4 text-yellow-400 fill-current" />
            <span class="font-medium">{{ technicianData.rating }}</span>
            <span class="text-sm text-gray-500">({{ technicianData.completedServices }} servicios)</span>
          </div>

          <div>
            <h4 class="font-medium mb-2">Especialidades</h4>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="(specialty, index) in technicianData.specialties"
                :key="index"
                class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
              >
                {{ specialty }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Profile Details Card -->
      <div class="md:col-span-2 bg-white rounded-lg shadow p-6">
        <div class="mb-6">
          <h3 class="text-lg font-semibold">Información Personal</h3>
          <p class="text-gray-500">Actualiza tu información personal y profesional</p>
        </div>

        <form @submit.prevent="handleSave" class="space-y-6">
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <label class="flex items-center text-sm font-medium text-gray-700 mb-2">
                <UserIcon class="h-4 w-4 mr-2" />
                Nombre Completo
              </label>
              <input
                v-model="formData.name"
                type="text"
                :disabled="!isEditing"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label class="flex items-center text-sm font-medium text-gray-700 mb-2">
                <EnvelopeIcon class="h-4 w-4 mr-2" />
                Email
              </label>
              <input
                v-model="formData.email"
                type="email"
                :disabled="!isEditing"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label class="flex items-center text-sm font-medium text-gray-700 mb-2">
                <PhoneIcon class="h-4 w-4 mr-2" />
                Teléfono
              </label>
              <input
                v-model="formData.phone"
                type="tel"
                :disabled="!isEditing"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label class="flex items-center text-sm font-medium text-gray-700 mb-2">
                <WrenchScrewdriverIcon class="h-4 w-4 mr-2" />
                Especialidades
              </label>
              <input
                v-model="formData.specialties"
                type="text"
                :disabled="!isEditing"
                placeholder="Plomería, Electricidad, Climatización"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>
          </div>

          <div>
            <label class="flex items-center text-sm font-medium text-gray-700 mb-2">
              <MapPinIcon class="h-4 w-4 mr-2" />
              Dirección
            </label>
            <input
              v-model="formData.address"
              type="text"
              :disabled="!isEditing"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Biografía Profesional
            </label>
            <textarea
              v-model="formData.bio"
              :disabled="!isEditing"
              rows="4"
              placeholder="Describe tu experiencia y habilidades..."
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
  StarIcon
} from '@heroicons/vue/24/outline'

interface TechnicianData {
  name: string
  email: string
  phone: string
  specialties: string[]
  rating: number
  completedServices: number
}



const props = defineProps<{
  technicianData: TechnicianData
  mutation: any
}>()

const isEditing = ref(false)
const formData = ref({
  name: props.technicianData.name,
  email: props.technicianData.email,
  phone: props.technicianData.phone,
  address: "123 Main St, Ciudad, Estado 12345",
  bio: "Técnico especializado en plomería y electricidad con más de 10 años de experiencia.",
  specialties: props.technicianData.specialties.join(", ")
})

const toggleEdit = () => {
  if (isEditing.value) {
    handleSave()
  } else {
    isEditing.value = true
  }
}

const handleSave = () => {
  // Aquí iría la lógica para guardar los datos
  console.log('Guardando perfil:', formData.value)
  isEditing.value = false

  // Simular notificación
  alert('Perfil actualizado exitosamente')
}

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('')
}
</script>
