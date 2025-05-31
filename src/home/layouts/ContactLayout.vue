<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-1 bg-gray-50 py-12">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-2">
            {{ technician ? `Solicitar servicio con ${technician.name}` : 'Contacta con Nosotros' }}
          </h1>
          <p class="text-gray-600 mb-8">
            {{
              technician
                ? `Completa el formulario para programar una visita técnica${technician.specialty ? ` para tu ${technician.specialty[0].toLowerCase()}` : ''}.`
                : 'Estamos aquí para ayudarte con cualquier consulta o problema con tus electrodomésticos.'
            }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Formulario -->
            <div class="md:col-span-2">
              <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-xl font-semibold mb-6">
                  {{ technician ? 'Datos para la visita técnica' : 'Envíanos un mensaje' }}
                </h2>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <label for="name" class="block text-sm font-medium text-gray-700">
                        Nombre completo
                      </label>
                      <input
                        id="name"
                        v-model="formData.name"
                        type="text"
                        placeholder="Tu nombre"
                        required
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div class="space-y-2">
                      <label for="email" class="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        id="email"
                        v-model="formData.email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <label for="phone" class="block text-sm font-medium text-gray-700">
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        v-model="formData.phone"
                        type="text"
                        placeholder="Tu teléfono"
                        required
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div v-if="technician" class="space-y-2">
                      <label for="service" class="block text-sm font-medium text-gray-700">
                        Tipo de servicio
                      </label>
                      <select
                        id="service"
                        v-model="formData.service"
                        required
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="repair">Reparación</option>
                        <option value="maintenance">Mantenimiento</option>
                        <option value="installation">Instalación</option>
                        <option value="diagnosis">Diagnóstico</option>
                      </select>
                    </div>
                  </div>

                  <div v-if="technician" class="space-y-2">
                    <label for="address" class="block text-sm font-medium text-gray-700">
                      Dirección completa
                    </label>
                    <input
                      id="address"
                      v-model="formData.address"
                      type="text"
                      placeholder="Calle, número, piso, código postal, ciudad"
                      required
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div v-if="technician" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <label class="block text-sm font-medium text-gray-700">
                        Fecha preferida
                      </label>
                      <input
                        v-model="formData.date"
                        type="date"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div class="space-y-2">
                      <label for="time" class="block text-sm font-medium text-gray-700">
                        Horario preferido
                      </label>
                      <select
                        id="time"
                        v-model="formData.timeSlot"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Selecciona horario</option>
                        <option value="morning">Mañana (9:00 - 13:00)</option>
                        <option value="afternoon">Tarde (15:00 - 19:00)</option>
                      </select>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <label for="message" class="block text-sm font-medium text-gray-700">
                      Descripción del problema
                    </label>
                    <textarea
                      id="message"
                      v-model="formData.message"
                      placeholder="Describe con detalle el problema que tienes con tu electrodoméstico"
                      rows="5"
                      required
                      class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    :disabled="loading"
                    class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors disabled:opacity-50"
                  >
                    {{ loading ? 'Enviando...' : 'Enviar Solicitud' }}
                  </button>
                </form>
              </div>
            </div>

            <!-- Información de contacto -->
            <div class="md:col-span-1">
              <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-xl font-semibold mb-6">Información de Contacto</h2>

                <div v-if="technician" class="flex items-center mb-6 pb-6 border-b border-gray-200">
                  <img
                    :src="technician.image"
                    :alt="`Foto de ${technician.name}`"
                    class="h-14 w-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 class="font-medium">{{ technician.name }}</h3>
                    <p class="text-sm text-gray-600">
                      {{ technician.specialty.join(', ') }}
                    </p>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="bg-blue-100 p-2 rounded-full mr-4">
                      <PhoneIcon class="h-5 w-5" />
                    </div>
                    <div>
                      <h3 class="font-medium">Teléfono</h3>
                      <p class="text-gray-600">+34 912 345 678</p>
                      <p class="text-xs text-gray-500 mt-1">Lun-Vie 9:00-18:00</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="bg-blue-100 p-2 rounded-full mr-4">
                      <MailIcon class="h-5 w-5 text-tech-blue" />
                    </div>
                    <div>
                      <h3 class="font-medium">Email</h3>
                      <p class="text-gray-600">info@tecnihogar.com</p>
                      <p class="text-xs text-gray-500 mt-1">Respondemos en 24h</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="bg-blue-100 p-2 rounded-full mr-4">
                      <LocalitationIcon class="h-5 w-5 text-tech-blue" />
                    </div>
                    <div>
                      <h3 class="font-medium">Oficina Principal</h3>
                      <p class="text-gray-600">
                        Calle Principal 123<br />
                        28001 Madrid, España
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-blue-50 rounded-lg mt-6 p-6 border border-blue-100">
                <h3 class="font-medium mb-2">¿Emergencia?</h3>
                <p class="text-sm text-gray-600 mb-4">
                  Para problemas urgentes, llámanos directamente y trataremos de asignar un técnico
                  lo antes posible.
                </p>
                <button
                  class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  <PhoneIcon class="mr-2 h-4 w-4 inline" /> Llamar Ahora
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
import LocalitationIcon from '@/assets/icons/LocalitationIcon.vue';
import MailIcon from '@/assets/icons/MailIcon.vue';
import PhoneIcon from '@/assets/icons/PhoneIcon.vue';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

// Datos de ejemplo
const technicians = {
  tech1: {
    id: 'tech1',
    name: 'Alberto Martínez',
    specialty: ['Refrigeración', 'Congeladores'],
    image: 'https://i.pravatar.cc/150?img=12',
  },
  tech2: {
    id: 'tech2',
    name: 'Laura García',
    specialty: ['Lavadoras', 'Secadoras'],
    image: 'https://i.pravatar.cc/150?img=27',
  },
} as const;

const route = useRoute();
const loading = ref(false);

// Datos del formulario
const formData = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  message: '',
  service: '',
  date: '',
  timeSlot: '',
});

// Computed para obtener el técnico seleccionado
const technician = computed(() => {
  const techId = route.query.tech as string;
  return techId ? technicians[techId as keyof typeof technicians] : null;
});

const handleSubmit = () => {
  loading.value = true;

  // Simulación de envío
  setTimeout(() => {
    loading.value = false;

    // Simulación de toast success
    console.log(
      '¡Solicitud enviada con éxito! Un técnico se pondrá en contacto contigo lo antes posible.',
    );

    // Resetear formulario
    formData.value = {
      name: '',
      email: '',
      phone: '',
      address: '',
      message: '',
      service: '',
      date: '',
      timeSlot: '',
    };
  }, 1500);
};
</script>
