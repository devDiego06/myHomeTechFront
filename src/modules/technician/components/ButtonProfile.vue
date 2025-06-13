<template>
   <div class="flex items-center space-x-4">
          <div class="text-right">
            <p class="text-sm font-medium">Diego</p>
            <p class="text-xs text-gray-500">★  4.5 • 120 servicios</p>
          </div>

          <!-- Profile Dropdown -->
          <Menu as="div" class="relative">
            <MenuButton class="flex items-center rounded-full bg-gray-100 p-2 hover:bg-gray-200">
              <div class="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                {{ getInitials(technicianData.name) }}
              </div>
            </MenuButton>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-1"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems class="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="p-1">
                  <div class="px-4 py-3 border-b">
                    <p class="text-sm font-medium">Diego</p>
                    <p class="text-xs text-gray-500">diego@google.com</p>
                  </div>

                  <MenuItem v-slot="{ active }">
                    <router-link
                      to="/technician/profile"
                      :class="[active ? 'bg-gray-100' : '', 'flex w-full items-center px-4 py-2 text-sm text-gray-700']"
                    >
                      <UserIcon class="mr-3 h-4 w-4" />
                      Mi Perfil
                    </router-link>
                  </MenuItem>

                  <MenuItem v-slot="{ active }">
                    <router-link
                      to="/technician/services"
                      :class="[active ? 'bg-gray-100' : '', 'flex w-full items-center px-4 py-2 text-sm text-gray-700']"
                    >
                      <DocumentTextIcon class="mr-3 h-4 w-4" />
                      Mis Servicios
                    </router-link>
                  </MenuItem>

                  <MenuItem v-slot="{ active }">
                    <router-link
                      to="/technician/dashboard"
                      :class="[active ? 'bg-gray-100' : '', 'flex w-full items-center px-4 py-2 text-sm text-gray-700']"
                    >
                      <WrenchScrewdriverIcon class="mr-3 h-4 w-4" />
                      Dashboard
                    </router-link>
                  </MenuItem>

                  <div class="border-t my-1"></div>

                  <MenuItem v-slot="{ active }">
                    <router-link
                      to="/technician/settings"
                      :class="[active ? 'bg-gray-100' : '', 'flex w-full items-center px-4 py-2 text-sm text-gray-700']"
                    >
                      <CogIcon class="mr-3 h-4 w-4" />
                      Configuración
                    </router-link>
                  </MenuItem>

                  <div class="border-t my-1"></div>

                  <MenuItem v-slot="{ active }">
                    <button
                      @click="authStore.logOut()"
                      :class="[active ? 'bg-gray-100' : '', 'flex w-full items-center px-4 py-2 text-sm text-red-600']"
                    >
                      <ArrowRightOnRectangleIcon class="mr-3 h-4 w-4" />
                      Cerrar Sesión
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import {
  UserIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  CogIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/vue/24/outline'
import { useAuthStore } from '@/modules/auth/store/authStore'

const authStore = useAuthStore();

interface TechnicianData {
  name: string
  email: string
  phone: string
  specialties: string[]
  rating: number
  completedServices: number
}

const technicianData: TechnicianData = {
  name: "Carlos Rodriguez",
  email: "carlos.rodriguez@email.com",
  phone: "+1 (555) 123-4567",
  specialties: ["Plomería", "Electricidad", "Climatización"],
  rating: 4.8,
  completedServices: 127
}

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('')
}
</script>

