import { ref, computed } from 'vue'
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import { findTechnicianById, updateTechnician, type UpdateTechnicianData } from '../actions'
import type { Technician } from '../interfaces/technician'
import { useAuthStore } from '@/modules/auth/store/authStore'

export function useTechnicianProfile() {
  const queryClient = useQueryClient()
  const authStore = useAuthStore()

  // Obtener el ID del técnico desde el store de autenticación
  // Ajusta esto según cómo manejes la autenticación
  const technicianId = computed(() => authStore.user?.id || '1')

  // Query para obtener los datos del técnico
  const {
    data: technicianData,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['technician', technicianId.value],
    queryFn: () => findTechnicianById(technicianId.value),
    enabled: !!technicianId.value,
    staleTime: 5 * 60 * 1000, // 5 minutos
  })

  // Mutation para actualizar el perfil
  const updateMutation = useMutation({
    mutationFn: updateTechnician,
    onSuccess: (updatedData) => {
      // Actualizar el cache
      queryClient.setQueryData(['technician', technicianId.value], updatedData)

      // Opcional: invalidar queries relacionadas
      queryClient.invalidateQueries({ queryKey: ['technician'] })

      console.log('Perfil actualizado correctamente')
    },
    onError: (error) => {
      console.error('Error al actualizar perfil:', error)
    }
  })

  // Función helper para actualizar el perfil
  const updateProfile = (data: UpdateTechnicianData) => {
    updateMutation.mutate(data)
  }

  return {
    // Data
    technicianData,

    // Estados
    isLoading,
    error,
    isUpdating: updateMutation.isPending,
    updateError: updateMutation.error,
    updateSuccess: updateMutation.isSuccess,

    // Funciones
    updateProfile,
    refetch,

    // Mutation directa si necesitas más control
    updateMutation
  }
}