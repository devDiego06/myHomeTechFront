
<template>
  <div class="bg-white p-8 rounded-xl shadow-lg">
    <h3 class="text-xl font-semibold text-gray-800 mb-4">Técnico Seleccionado</h3>
    <div class="flex items-center mb-6">
      <img
        :src="technician.image"
        :alt="`Foto de ${technician.name}`"
        class="h-14 w-14 rounded-full object-cover mr-4"
      />
      <div>
        <h4 class="font-medium">{{ technician.name }}</h4>
        <p class="text-sm text-gray-600">
          {{ technician.specialty.join(", ") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Technician {
  id: string
  name: string
  specialty: string[]
  image: string
}

defineProps<{
  technician: Technician
}>()
</script>
