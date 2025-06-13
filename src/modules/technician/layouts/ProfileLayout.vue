<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="pb-23">
      <TopMenu />
    </header>

    <!-- Loading State -->
    <div v-if="isLoading" class="container mx-auto px-6 py-8">
      <div class="flex justify-center items-center min-h-[400px]">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span class="ml-3 text-gray-600">Cargando perfil...</span>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="container mx-auto px-6 py-8">
      <div class="bg-red-50 border border-red-200 rounded-md p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-red-800">Error al cargar el perfil</h3>
            <p class="text-sm text-red-700 mt-1">{{ error.message }}</p>
            <button
              @click="refetch()"
              class="mt-2 text-sm text-red-800 underline hover:text-red-900"
            >
              Intentar de nuevo
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main v-else class="container mx-auto px-6 py-8">
      <RouterView
        :technician-data="technicianData"
        :is-updating="isUpdating"
        :update-error="updateError"
        :update-success="updateSuccess"
        @update-profile="updateProfile"
      />
    </main>

    <!-- Success Notification -->
    <div
      v-if="updateSuccess"
      class="fixed top-4 right-4 bg-green-50 border border-green-200 rounded-md p-4 shadow-lg z-50"
    >
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-green-800">¡Perfil actualizado correctamente!</p>
        </div>
      </div>
    </div>
    <footer>
      <FooterVue />
    </footer>
  </div>
</template>

<script setup lang="ts">
import FooterVue from '@/home/components/FooterVue.vue';
import { useTechnicianProfile } from '../composable/useTechnicianProfile';
import TopMenu from '@/home/components/TopMenu.vue';

const {
  technicianData,
  isLoading,
  error,
  isUpdating,
  updateError,
  updateSuccess,
  updateProfile,
  refetch
} = useTechnicianProfile()
</script>
