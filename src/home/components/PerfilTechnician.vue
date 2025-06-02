<template>
  <RouterView />
  <div class="min-h-screen flex flex-col">
    <div class="bg-gray-50 flex-1">
      <!-- Info principal -->
      <div class="bg-white border-b mt-24">
        <div class="container mx-auto px-4 md:px-8; py-8">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/4 mb-6 md:mb-0 flex justify-center md:justify-start">
              <div class="relative">
                <img
                  :src="technician.image"
                  :alt="`Foto de ${technician.name}`"
                  class="h-40 w-40 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div
                  v-if="technician.verified"
                  class="absolute bottom-3 right-3 bg-tech-blue text-white rounded-full p-1"
                >
                  <CheckIcon class="h-5 w-5" />
                </div>
              </div>
            </div>
            <div class="md:w-3/4">
              <div class="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div class="flex items-center">
                    <h1 class="text-3xl font-bold">{{ technician.name }}</h1>
                    <span
                      v-if="technician.verified"
                      class="ml-3 inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-400 border border-blue-200"
                    >
                      Verificado
                    </span>
                  </div>
                  <div class="flex items-center mt-2">
                    <div class="flex">
                      <StarIcon
                        v-for="i in 5"
                        :key="i"
                        :fillColor="i <= technician.rating ? '#ffc108' : '#d1d5db'"
                        :strokeColor="i <= technician.rating ? '#ffc108' : '#d1d5db'"
                        class="h-5 w-5"
                      />
                    </div>
                    <span class="ml-2 font-medium">{{ technician.rating }}</span>
                    <span class="ml-1 text-gray-500">({{ technician.reviewCount }} reseñas)</span>
                  </div>
                  <div class="flex flex-wrap gap-2 mt-3">
                    <span
                      v-for="(spec, idx) in technician.specialty"
                      :key="idx"
                      class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {{ spec }}
                    </span>
                  </div>
                  <div class="flex items-center mt-3 text-gray-600">
                    <LocalitationIcon class="h-4 w-4 mr-2" />
                    <span>{{ technician.location }}</span>
                  </div>
                </div>
                <router-link :to="`/contacto?tech=${technician.id}`" class="mt-4 md:mt-0">
                  <button
                    class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors w-full md:w-auto"
                  >
                    Solicitar Servicio
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenido con tabs -->
      <div class="container mx-auto px-4 md:px-8; py-8">
        <div class="w-full">
          <div
            class="grid w-full md:w-auto grid-cols-3 md:inline-flex mb-8 bg-gray-100 p-1 rounded-md"
          >
            <button
              v-for="tab in tabs"
              :key="tab.value"
              @click="activeTab = tab.value"
              :class="[
                'px-3 py-2 text-sm font-medium rounded transition-colors',
                activeTab === tab.value
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900',
              ]"
            >
              {{ tab.label }}
            </button>
          </div>

          <!-- Tab: Sobre el técnico -->
          <div v-if="activeTab === 'about'" class="space-y-8">
            <div class="bg-white rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Acerca de</h2>
              <p class="text-gray-700">{{ technician.about }}</p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div class="flex items-start">
                  <Award class="h-6 w-6 text-tech-blue mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-medium">Experiencia</h3>
                    <p class="text-gray-600 mt-1">{{ technician.experience }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <Calendar class="h-6 w-6 text-tech-blue mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-medium">Disponibilidad</h3>
                    <p class="text-gray-600 mt-1">{{ technician.availability }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-tech-blue mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-medium">Certificaciones</h3>
                    <ul class="text-gray-600 mt-1 list-disc list-inside">
                      <li v-for="(cert, index) in technician.certificates" :key="index">
                        {{ cert }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="flex items-start">
                  <MapPin class="h-6 w-6 text-tech-blue mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-medium">Áreas de Servicio</h3>
                    <p class="text-gray-600 mt-1">{{ technician.areas.join(', ') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Contactar</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <router-link :to="`/contact?tech=${technician.id}&type=email`">
                  <button
                    class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    <Phone class="mr-2 h-4 w-4 inline" /> Llamar
                  </button>
                </router-link>
                <router-link :to="`/contact?tech=${technician.id}&type=email`">
                  <button
                    class="w-full border border-blue-400 text-blue-400 hover:bg-blue-50 font-medium py-2 px-4 rounded transition-colors"
                  >
                    <Mail class="mr-2 h-4 w-4 inline" /> Mensaje
                  </button>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Tab: Servicios y Precios -->
          <div v-if="activeTab === 'services'">
            <div class="bg-white rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-6">Servicios Ofrecidos</h2>
              <div class="overflow-x-auto">
                <table class="min-w-full">
                  <thead class="bg-gray-50 border-b">
                    <tr>
                      <th
                        class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Servicio
                      </th>
                      <th
                        class="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Precio
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr v-for="(service, idx) in technician.services" :key="idx">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900">
                        {{ service.name }}
                      </td>
                      <td class="py-4 px-6 text-sm text-gray-900 text-right">
                        {{ service.price }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="mt-6 p-4 bg-blue-50 rounded-md border border-blue-100">
                <div class="flex items-start">
                  <HelpCircle class="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <p class="text-sm text-gray-600">
                    Los precios pueden variar según la complejidad del trabajo. Se proporcionará un
                    presupuesto exacto después del diagnóstico.
                  </p>
                </div>
              </div>
              <div class="mt-6">
                <router-link :to="`/contact?technicianId=${technician.id}`">
                  <button
                    class="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    Solicitar Presupuesto
                  </button>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Tab: Reseñas -->
          <div v-if="activeTab === 'reviews'">
            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl font-semibold">Reseñas de Clientes</h2>
                <div class="flex items-center">
                  <div class="flex">
                    <StarIcon
                      v-for="i in 5"
                      :key="i"
                      :fillColor="i <= technician.rating ? '#ffc108' : '#d1d5db'"
                      :strokeColor="i <= technician.rating ? '#ffc108' : '#d1d5db'"
                      class="h-5 w-5"
                    />
                  </div>
                  <span class="ml-2 font-medium">{{ technician.rating }}</span>
                  <span class="ml-1 text-gray-500">({{ technician.reviewCount }})</span>
                </div>
              </div>

              <div class="space-y-6">
                <div
                  v-for="review in technician.reviews"
                  :key="review.id"
                  class="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                >
                  <div class="flex items-start">
                    <img
                      :src="review.image"
                      :alt="`Avatar de ${review.user}`"
                      class="h-10 w-10 rounded-full object-cover mr-4"
                    />
                    <div class="flex-1">
                      <div class="flex justify-between items-start">
                        <div>
                          <h4 class="font-medium">{{ review.user }}</h4>
                          <div class="flex items-center mt-1">
                            <div class="flex">
                              <StarIcon
                                v-for="i in 5"
                                :key="i"
                                :fillColor="i <= technician.rating ? '#ffc108' : '#d1d5db'"
                                :strokeColor="i <= technician.rating ? '#ffc108' : '#d1d5db'"
                                class="h-5 w-5"
                              />
                            </div>
                          </div>
                        </div>
                        <span class="text-sm text-gray-500">{{ review.date }}</span>
                      </div>
                      <p class="mt-2 text-gray-700">{{ review.comment }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <button
                  class="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded transition-colors"
                >
                  Ver Todas las Reseñas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckIcon from '@/assets/icons/CheckIcon.vue';
import LocalitationIcon from '@/assets/icons/LocalitationIcon.vue';
import StarIcon from '@/assets/icons/StarIcon.vue';
import { Award, Calendar, HelpCircle, Mail, MapPin, Phone} from 'lucide-vue-next';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Datos de ejemplo para un técnico
const technicians = {
  tech1: {
    id: 'tech1',
    name: 'Alberto Martínez',
    specialty: ['Refrigeración', 'Congeladores'],
    rating: 4.8,
    reviewCount: 124,
    location: 'Madrid, Centro',
    image: 'https://i.pravatar.cc/150?img=12',
    verified: true,
    about:
      'Técnico especializado en sistemas de refrigeración con más de 10 años de experiencia. Ofrezco soluciones eficientes y duraderas para todo tipo de refrigeradores y congeladores. Servicio garantizado y a precios competitivos.',
    experience: '12 años',
    certificates: [
      'Técnico Superior en Climatización',
      'Certificado de Manipulación de Gases Fluorados',
    ],
    services: [
      { name: 'Diagnóstico de averías', price: '40€' },
      { name: 'Reparación de sistema de refrigeración', price: 'Desde 80€' },
      { name: 'Sustitución de compresor', price: 'Desde 150€' },
      { name: 'Mantenimiento preventivo', price: '60€' },
    ],
    reviews: [
      {
        id: 'rev1',
        user: 'María López',
        rating: 5,
        comment:
          'Excelente servicio, puntual y profesional. Reparó mi nevera rápidamente y a un precio justo.',
        date: '15 abril, 2025',
        image: 'https://i.pravatar.cc/150?img=32',
      },
      {
        id: 'rev2',
        user: 'Juan García',
        rating: 5,
        comment: 'Alberto diagnosticó y reparó mi congelador en una sola visita. Muy recomendable.',
        date: '2 abril, 2025',
        image: 'https://i.pravatar.cc/150?img=2',
      },
      {
        id: 'rev3',
        user: 'Luisa Fernández',
        rating: 4,
        comment:
          'Buen servicio y precios razonables. La reparación tardó un poco más de lo previsto pero el resultado fue bueno.',
        date: '28 marzo, 2025',
        image: 'https://i.pravatar.cc/150?img=7',
      },
    ],
    availability: 'Lunes a viernes de 9:00 a 18:00, sábados de 9:00 a 14:00',
    areas: ['Madrid Centro', 'Chamberí', 'Salamanca', 'Chamartín', 'Retiro'],
  },
};

const activeTab = ref('about');

const tabs = [
  { value: 'about', label: 'Sobre el Técnico' },
  { value: 'services', label: 'Servicios y Precios' },
  { value: 'reviews', label: 'Reseñas' },
];

const technician = computed(() => {
  const id = route.params.id as keyof typeof technicians;
  return technicians[id] || technicians.tech1;
});
</script>
