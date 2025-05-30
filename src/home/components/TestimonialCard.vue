<template>
  <div class="bg-white p-6 rounded-lg shadow border border-gray-100 card-hover">
    <div class="flex space-x-1 mb-4">
      <StarIcon
        v-for="i in 5"
        :key="i"
        :fillColor="i <= rating ? '#ffc108' : '#d1d5db'"
        :strokeColor="i <= rating ? '#ffc108' : '#d1d5db'"
        class="h-4 w-4"
      />
    </div>
    <p class="text-gray-700 mb-6 italic">"{{ testimonial }}"</p>
    <div class="flex items-center">
      <img :src="image" :alt="`Foto de ${name}`" class="h-12 w-12 rounded-full object-cover mr-4" />
      <div>
        <h4 class="font-medium">{{ name }}</h4>
        <p class="text-sm text-gray-500">{{ location }}</p>
        <p class="text-xs text-blue-800 mt-1">{{ service }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StarIcon from '@/assets/icons/StarIcon.vue';

interface TestimonialCardProps {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
  image: string;
  service: string;
}

defineProps<TestimonialCardProps>();
</script>
