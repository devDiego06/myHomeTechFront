<template>
  <div class="space-y-8">
    <div v-if="!technician">
      <img
        alt="Ilustración de personas contactando a soporte técnico"
        class="rounded-xl shadow-xl w-full h-auto object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhv0u7Kat7Rr37Jj2_kcDfFb1JYcq4EQniDdX9UrlSSgUg5DS1MKs8M_g_6Yfh-0bjpkeKxhtbtC4EIUXt-kpCgh-ifcLTxCAefwAKyWKw58IlgwE4D-K-PeQQPEnv8iacbozRo9LJCgAPV_ZOUUtod6W0bawwcGuQ2rWUkUIL2guWv54PnbzQNa50IuJBNSHvvzqaQYI_k7p2baYS4fUh4E0LKxYEjNBIiVlbfNrm6WLqPi2uK7UnOJdf-vVjspdnE5T-Niuv1D4"
        style="max-height: 300px"
      />
    </div>

    <div class="bg-blue-50 p-8 rounded-xl shadow-md">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Información de Contacto</h3>
      <div class="space-y-3 text-gray-600">
        <p class="flex items-center">
          <MapPin class="text-blue-600 mr-3 h-5 w-5" />
          123 Avenida Siempre Viva, Ciudad Ejemplo, PA 12345
        </p>
        <p class="flex items-center">
          <Mail class="text-blue-600 mr-3 h-5 w-5" />
          soporte@myhometech.com
        </p>
        <p class="flex items-center">
          <Phone class="text-blue-600 mr-3 h-5 w-5" />
          +1 (555) 123-4567
        </p>
      </div>
    </div>

    <div class="bg-green-50 p-8 rounded-xl shadow-md">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Horario de Atención</h3>
      <div class="space-y-2 text-gray-600">
        <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
        <p>Sábados: 10:00 AM - 2:00 PM</p>
        <p>Domingos y festivos: Cerrado</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Mail, Phone } from 'lucide-vue-next'

interface Technician {
  id: string
  name: string
  specialty: string[]
  image: string
}

defineProps<{
  technician: Technician | null
}>()
</script>
