
<template>
  <RouterView />
  <div class="min-h-screen flex flex-col">


    <section class="py-16 md:py-24 bg-white flex-1" id="contacto">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12 md:mb-16">
          <h1 class="text-4xl md:text-5xl pt-15 font-bold text-gray-800 mb-4">
            {{ technician
                ? `Solicitar servicio con ${technician.name}`
                : "Ponte en Contacto"
            }}
          </h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            {{ technician
                ? `Completa el formulario para programar una visita técnica${technician.specialty ? ` para tu ${technician.specialty[0].toLowerCase()}` : ""}.`
                : "¿Tienes preguntas o necesitas asistencia? Estamos aquí para ayudarte."
            }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-start">
          <ContactForm
            :technician="technician"
            :form-data="formData"
            :loading="loading"
            @submit="handleSubmit"
          />

          <div class="space-y-8">
            <TechnicianInfo v-if="technician" :technician="technician" />
            <ContactInfo :technician="technician" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import TechnicianInfo from '../components/TechnicianInfo.vue'
import ContactInfo from '../components/ContactInfo.vue'
import ContactForm from '../components/ContactForm.vue'



// Datos de ejemplo
const technicians = {
  tech1: {
    id: "tech1",
    name: "Alberto Martínez",
    specialty: ["Refrigeración", "Congeladores"],
    image: "https://i.pravatar.cc/150?img=12",
  },
  tech2: {
    id: "tech2",
    name: "Laura García",
    specialty: ["Lavadoras", "Secadoras"],
    image: "https://i.pravatar.cc/150?img=27",
  }
} as const

const route = useRoute()
const loading = ref(false)

// Datos del formulario
const formData = ref({
  name: "",
  email: "",
  phone: "",
  address: "",
  message: "",
  service: "",
  date: "",
  timeSlot: "",
  subject: ""
})

// Computed para obtener el técnico seleccionado
const technician = computed(() => {
  const techId = route.query.tech as string
  return techId ? technicians[techId as keyof typeof technicians] : null
})

const handleSubmit = () => {
  loading.value = true

  // Simulación de envío
  setTimeout(() => {
    loading.value = false

    // Simulación de toast success
    console.log("¡Solicitud enviada con éxito! Un técnico se pondrá en contacto contigo lo antes posible.")

    // Resetear formulario
    formData.value = {
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
      service: "",
      date: "",
      timeSlot: "",
      subject: ""
    }
  }, 1500)
}
</script>
