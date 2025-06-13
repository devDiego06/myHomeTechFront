<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="text-3xl font-bold">Mi Perfil</h2>
      <button
        @click="toggleEdit"
        :disabled="isUpdating"
        :class="[
          'px-4 py-2 rounded-md font-medium transition-colors',
          isEditing
            ? 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400'
            : 'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100'
        ]"
      >
        <span v-if="isUpdating" class="flex items-center">
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Guardando...
        </span>
        <span v-else>
          {{ isEditing ? 'Guardar Cambios' : 'Editar Perfil' }}
        </span>
      </button>
    </div>

    <!-- Error Message -->
    <div v-if="updateError" class="bg-red-50 border border-red-200 rounded-md p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm text-red-800">Error al actualizar el perfil: {{ updateError.message }}</p>
        </div>
      </div>
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
            <span class="font-medium">4.8</span>
            <span class="text-sm text-gray-500">(127 servicios)</span>
          </div>

          <div>
            <h4 class="font-medium mb-2">Especialización</h4>
            <span class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
              {{ formData.specialization }}
            </span>
          </div>
        </div>
      </div>

      <!-- Profile Details Card -->
      <div class="md:col-span-2 bg-white rounded-lg shadow p-6">
        <div class="mb-6">
          <h3 class="text-lg font-semibold">Información Personal</h3>
          <p class="text-gray-500">Actualiza tu información personal y profesional</p>
        </div>

        <div class="space-y-6">
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
                required
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
                required
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
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label class="flex items-center text-sm font-medium text-gray-700 mb-2">
                <WrenchScrewdriverIcon class="h-4 w-4 mr-2" />
                Especialización
              </label>
              <input
                v-model="formData.specialization"
                type="text"
                :disabled="!isEditing"
                required
                placeholder="Ej: Plomería, Electricidad, etc."
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
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Biografía Profesional
            </label>
            <textarea
              v-model="formData.biography"
              :disabled="!isEditing"
              rows="4"
              required
              placeholder="Describe tu experiencia y habilidades..."
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
  StarIcon
} from '@heroicons/vue/24/outline'
import type { Technician } from '../interfaces/technician'
import type { UpdateTechnicianData } from '../actions/update-technician'

interface Props {
  technicianData?: Technician
  isUpdating?: boolean
  updateError?: Error | null
  updateSuccess?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isUpdating: false,
  updateError: null,
  updateSuccess: false
})

const emit = defineEmits<{
  updateProfile: [data: UpdateTechnicianData]
}>()

const isEditing = ref(false)

// Form data reactive
const formData = ref<UpdateTechnicianData>({
  name: '',
  email: '',
  phone: '',
  address: '',
  biography: '',
  specialization: ''
})

// Watch technician data and update form
watch(
  () => props.technicianData,
  (newData) => {
    if (newData) {
      formData.value = {
        name: newData.name,
        email: newData.email,
        phone: newData.phone.toString(),
        address: newData.address,
        biography: newData.biography,
        specialization: newData.specialization
      }
    }
  },
  { immediate: true }
)

// Watch update success to exit edit mode
watch(
  () => props.updateSuccess,
  (success) => {
    if (success) {
      isEditing.value = false
    }
  }
)

const toggleEdit = () => {
  if (isEditing.value) {
    handleSave()
  } else {
    isEditing.value = true
  }
}

const handleSave = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.phone) {
    alert('Por favor completa todos los campos requeridos')
    return
  }

  emit('updateProfile', formData.value)
}

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}
</script>

