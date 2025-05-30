<template>
  <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100 card-hover">
    <div
      class="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-tech-blue"
    >
      <component :is="iconComponent" />
    </div>
    <h3 class="text-xl font-medium mb-2">{{ title }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <ul class="space-y-2">
      <li v-for="(feature, index) in features" :key="index" class="flex items-start">
        <CheckIcon class="h-5 w-5 text-tech-green mr-2 flex-shrink-0 mt-0.5" />
        <span class="text-gray-700">{{ feature }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import CheckIcon from '@/assets/icons/CheckIcon.vue';
import { LuRefrigerator, FlWasher, McAirConditionFill } from '@kalimahapps/vue-icons';

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  features: string[];
}

const props = defineProps<ServiceCardProps>();

// Mapeo de íconos
const iconMap = {
  refrigerator: LuRefrigerator,
  washer: FlWasher,
  airConditioner: McAirConditionFill,
};

// Selección del componente de ícono basado en el nombre proporcionado
const iconComponent = iconMap[props.icon] || null;
</script>
