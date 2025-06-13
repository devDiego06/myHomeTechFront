<template>

  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="text-3xl font-bold">Reporte de Servicios</h2>
      <button class="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
        <ArrowDownTrayIcon class="mr-2 h-4 w-4" />
        Exportar Reporte
      </button>
    </div>

    <!-- Statistics Cards -->
    <div class="grid gap-4 md:grid-cols-4">
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Servicios</p>
            <p class="text-2xl font-bold">{{ services.length }}</p>
            <p class="text-xs text-gray-500">{{ completedServices }} completados</p>
          </div>
          <CalendarIcon class="h-8 w-8 text-gray-400" />
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Ingresos Totales</p>
            <p class="text-2xl font-bold">${{ totalEarnings }}</p>
            <p class="text-xs text-gray-500">Este mes</p>
          </div>
          <CurrencyDollarIcon class="h-8 w-8 text-gray-400" />
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Calificación Promedio</p>
            <p class="text-2xl font-bold">{{ averageRating.toFixed(1) }}</p>
            <p class="text-xs text-gray-500">★★★★★</p>
          </div>
          <StarIcon class="h-8 w-8 text-gray-400" />
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Ingreso Promedio</p>
            <p class="text-2xl font-bold">${{ Math.round(totalEarnings / completedServices) }}</p>
            <p class="text-xs text-gray-500">Por servicio</p>
          </div>
          <CurrencyDollarIcon class="h-8 w-8 text-gray-400" />
        </div>
      </div>
    </div>

    <!-- Services Table -->
    <div class="bg-white rounded-lg shadow">
      <div class="p-6 border-b">
        <h3 class="text-lg font-semibold">Historial de Servicios</h3>
        <p class="text-gray-500">Todos tus servicios aceptados y completados</p>
      </div>

      <div class="p-6">
        <!-- Filters -->
        <div class="flex items-center space-x-4 mb-6">
          <div class="flex items-center space-x-2 flex-1">
            <MagnifyingGlassIcon class="h-4 w-4 text-gray-400" />
            <input
              v-model="searchTerm"
              type="text"
              placeholder="Buscar por cliente, servicio o ID..."
              class="flex-1 max-w-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="flex items-center space-x-2">
            <FunnelIcon class="h-4 w-4 text-gray-400" />
            <select
              v-model="statusFilter"
              class="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Todos los estados</option>
              <option value="completado">Completado</option>
              <option value="programado">Programado</option>
              <option value="en progreso">En Progreso</option>
            </select>
          </div>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Servicio</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calificación</th>
                <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="service in filteredServices" :key="service.id">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ service.id }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ service.date }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ service.client }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ service.service }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="getStatusBadgeClass(service.status)">
                    {{ service.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div v-if="service.rating" class="flex items-center">
                    <StarIcon class="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    {{ service.rating }}
                  </div>
                  <span v-else class="text-gray-400">-</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                  ${{ service.amount }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  CalendarIcon,
  CurrencyDollarIcon,
  StarIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowDownTrayIcon
} from '@heroicons/vue/24/outline'

interface Service {
  id: string
  date: string
  client: string
  service: string
  status: string
  amount: number
  rating: number | null
  duration: string
}

const searchTerm = ref('')
const statusFilter = ref('all')

const services: Service[] = [
  {
    id: "SV001",
    date: "2024-06-12",
    client: "María González",
    service: "Reparación de tubería",
    status: "Completado",
    amount: 150,
    rating: 5,
    duration: "2h 30m"
  },
  {
    id: "SV002",
    date: "2024-06-11",
    client: "Juan Pérez",
    service: "Instalación eléctrica",
    status: "Completado",
    amount: 280,
    rating: 4.8,
    duration: "4h 15m"
  },
  {
    id: "SV003",
    date: "2024-06-10",
    client: "Ana López",
    service: "Mantenimiento AC",
    status: "Completado",
    amount: 120,
    rating: 5,
    duration: "1h 45m"
  },
  {
    id: "SV004",
    date: "2024-06-15",
    client: "Carlos Ruiz",
    service: "Reparación de calentador",
    status: "Programado",
    amount: 200,
    rating: null,
    duration: "3h 00m"
  },
  {
    id: "SV005",
    date: "2024-06-09",
    client: "Luis Martín",
    service: "Instalación de lámpara",
    status: "Completado",
    amount: 80,
    rating: 4.5,
    duration: "1h 20m"
  }
]

const filteredServices = computed(() => {
  return services.filter(service => {
    const matchesSearch = service.client.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
                         service.service.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
                         service.id.toLowerCase().includes(searchTerm.value.toLowerCase())
    const matchesStatus = statusFilter.value === 'all' || service.status.toLowerCase() === statusFilter.value.toLowerCase()
    return matchesSearch && matchesStatus
  })
})

const completedServices = computed(() => services.filter(s => s.status === "Completado").length)

const totalEarnings = computed(() =>
  services.filter(s => s.status === "Completado").reduce((sum, s) => sum + s.amount, 0)
)

const averageRating = computed(() => {
  const rated = services.filter(s => s.rating !== null)
  return rated.length > 0 ? rated.reduce((sum, s) => sum + (s.rating || 0), 0) / rated.length : 0
})

const getStatusBadgeClass = (status: string) => {
  const baseClasses = "px-2 py-1 text-xs font-medium rounded-full"
  switch (status) {
    case "Completado":
      return `${baseClasses} bg-green-100 text-green-800`
    case "Programado":
      return `${baseClasses} bg-blue-100 text-blue-800`
    case "En Progreso":
      return `${baseClasses} bg-yellow-100 text-yellow-800`
    default:
      return `${baseClasses} bg-gray-100 text-gray-800`
  }
}
</script>
