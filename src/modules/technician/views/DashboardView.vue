<template>

  <div class="space-y-6">
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Servicios Completados</p>
            <p class="text-2xl font-bold">127</p>
            <p class="text-xs text-gray-500">+12% desde el mes pasado</p>
          </div>
          <WrenchScrewdriverIcon class="h-8 w-8 text-gray-400" />
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Calificación Promedio</p>
            <p class="text-2xl font-bold">4.8</p>
            <p class="text-xs text-gray-500">De 127 reseñas</p>
          </div>
          <StarIcon class="h-8 w-8 text-gray-400" />
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Ingresos del Mes</p>
            <p class="text-2xl font-bold">$2,847</p>
            <p class="text-xs text-gray-500">+8% desde el mes pasado</p>
          </div>
          <CurrencyDollarIcon class="h-8 w-8 text-gray-400" />
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Próximas Citas</p>
            <p class="text-2xl font-bold">8</p>
            <p class="text-xs text-gray-500">Esta semana</p>
          </div>
          <CalendarIcon class="h-8 w-8 text-gray-400" />
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow">
      <div class="p-6 border-b">
        <h3 class="text-lg font-semibold">Servicios Recientes</h3>
        <p class="text-gray-500">Últimos trabajos completados</p>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <div
            v-for="service in recentServices"
            :key="service.id"
            class="flex items-center justify-between border-b pb-2 last:border-b-0"
          >
            <div>
              <p class="font-medium">{{ service.service }}</p>
              <p class="text-sm text-gray-500">{{ service.client }} - {{ service.date }}</p>
            </div>
            <div class="text-right">
              <span class="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                {{ service.status }}
              </span>
              <p class="text-sm font-medium">{{ service.amount }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  WrenchScrewdriverIcon,
  StarIcon,
  CurrencyDollarIcon,
  CalendarIcon
} from '@heroicons/vue/24/outline'

interface RecentService {
  id: number
  service: string
  client: string
  date: string
  status: string
  amount: string
}

const recentServices: RecentService[] = [
  { id: 1, service: "Reparación de tubería", client: "María González", date: "2024-06-10", status: "Completado", amount: "$150" },
  { id: 2, service: "Instalación eléctrica", client: "Juan Pérez", date: "2024-06-09", status: "Completado", amount: "$280" },
  { id: 3, service: "Mantenimiento AC", client: "Ana López", date: "2024-06-08", status: "Completado", amount: "$120" }
]
</script>
