<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="pb-23">
      <TopMenu />
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-6 py-8">
      <RouterView :mutation="mutation" :technician-data="technicianData"/>

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import TopMenu from '@/home/components/TopMenu.vue'
import { findTechnicianById } from '../actions'
import { getTechnician } from '../actions/get-technician'
import { useMutation } from '@tanstack/vue-query'
import { updateTechnician } from '../actions/update-technician'


const mutation = useMutation({
  mutationFn: updateTechnician,
  onSuccess: (data) => {
    alert('Perfil actualizado corrrectamente')
  }
})

function updateProfile(formData: any){
  mutation.mutate(formData)
}


// interface TechnicianData {
//   name: string
//   email: string
//   phone: string
//   specialties: string[]
//   rating: number
//   completedServices: number
// }



// const technicianData: TechnicianData = {
//   name: "Carlos Rodriguez",
//   email: "carlos.rodriguez@email.com",
//   phone: "+1 (555) 123-4567",
//   specialties: ["Plomería", "Electricidad", "Climatización"],
//   rating: 4.8,
//   completedServices: 127
// }





function useQuery(arg0: {}): { data: any } {
  throw new Error('Function not implemented.')
}
</script>
