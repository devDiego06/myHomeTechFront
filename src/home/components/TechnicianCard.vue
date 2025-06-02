<template>
  <div class="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
    <div class="flex items-start space-x-4">
      <img
        :src="image"
        :alt="`Foto de ${name}`"
        class="h-16 w-16 rounded-full object-cover"
      />
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-gray-900 truncate">{{ name }}</h3>
          <div v-if="verified" class="flex-shrink-0">
            <CheckCircleIcon class="h-5 w-5 text-green-500" />
          </div>
        </div>

        <div class="mt-1 flex flex-wrap gap-1">
          <span
            v-for="spec in specialty"
            :key="spec"
            class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
          >
            {{ spec }}
          </span>
        </div>

        <div class="mt-2 flex items-center space-x-4 text-sm text-gray-600">
          <div class="flex items-center">
            <StarIcon class="h-4 w-4 text-yellow-400 mr-1" />
            <span class="font-medium">{{ rating }}</span>
            <span class="ml-1">({{ reviewCount }} reseñas)</span>
          </div>
        </div>

        <div class="mt-2 flex items-center text-sm text-gray-600">
          <LocalitationIcon class="h-4 w-4 mr-1" />
          <span>{{ location }}</span>
        </div>
      </div>
    </div>

    <div class="mt-4 flex flex-col sm:flex-row gap-2">
      <router-link
        :to="`/technicianId=${id}`"
        class="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded transition-colors"
      >
        Ver Perfil
      </router-link>
      <router-link
        :to="`/contact?tech=${id}&type=email`"
        class="flex-1 bg-white hover:bg-gray-50 text-tech-blue border border-tech-blue text-center py-2 px-4 rounded transition-colors"
      >
        Contactar
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import LocalitationIcon from '@/assets/icons/LocalitationIcon.vue';
import StarIcon from '@/assets/icons/StarIcon.vue';



defineProps<{
  id: string
  name: string
  specialty: string[]
  rating: number
  reviewCount: number
  location: string
  image: string
  verified: boolean
}>()
</script>
