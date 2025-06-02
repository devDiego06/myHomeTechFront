
<template>
  <form @submit.prevent="handleSubmit" class="bg-white rounded-lg shadow-md p-6 border border-gray-100">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="space-y-2">
        <label for="keyword" class="block text-sm font-medium text-gray-700">
          ¿Qué estás buscando?
        </label>
        <div class="relative">
          <SearchIcon class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            id="keyword"
            v-model="keyword"
            placeholder="Lavadora, refrigerador..."
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9"
          />
        </div>
      </div>

      <div class="space-y-2">
        <label for="location" class="block text-sm font-medium text-gray-700">
          Ubicación
        </label>
        <div class="relative">
          <LocalitationIcon class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            id="location"
            v-model="location"
            placeholder="Ciudad, distrito..."
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9"
          />
        </div>
      </div>

      <div class="space-y-2">
        <label for="specialty" class="block text-sm font-medium text-gray-700">
          Especialidad
        </label>
        <select
          id="specialty"
          v-model="specialty"
          class="flex h-10 w-full rounded-md border border-input bg-background px-2 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Seleccione especialidad</option>
          <option value="refrigeracion">Refrigeración</option>
          <option value="lavado">Lavadoras y Secadoras</option>
          <option value="cocinas">Cocinas y Hornos</option>
          <option value="aire">Aire Acondicionado</option>
          <option value="pequenos">Pequeños Electrodomésticos</option>
        </select>
      </div>

      <div class="space-y-2">
        <label for="availability" class="block text-sm font-medium text-gray-700">
          Disponibilidad
        </label>
        <select
          id="availability"
          v-model="availability"
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Cualquier día</option>
          <option value="any">Cualquier día</option>
          <option value="today">Hoy</option>
          <option value="tomorrow">Mañana</option>
          <option value="week">Esta semana</option>
          <option value="weekend">Fin de semana</option>
        </select>
      </div>
    </div>

    <div class="mt-6 flex justify-end">
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
      >
        Buscar Técnicos
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import LocalitationIcon from '@/assets/icons/LocalitationIcon.vue';
import SearchIcon from '@/assets/icons/SearchIcon.vue';
import { ref } from 'vue'


const emit = defineEmits<{
  search: [filters: {
    keyword: string;
    location: string;
    specialty: string;
    availability: string;
  }]
}>()

const keyword = ref("")
const location = ref("")
const specialty = ref("")
const availability = ref("")

const handleSubmit = () => {
  emit('search', {
    keyword: keyword.value,
    location: location.value,
    specialty: specialty.value,
    availability: availability.value,
  })
}
</script>
