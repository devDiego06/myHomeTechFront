<template>
  <div class="pt-22 min-h-screen flex flex-col">
   <RouterView />

    <!-- Hero section -->
    <div class="bg-blue-500 mt-2 text-white px-4 py-12">
      <div class="container mx-auto px-4 md:px-8;">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">Encuentra Técnicos de Electrodomésticos Cerca de Ti</h1>
          <p class="text-lg md:text-xl text-blue-100 mb-6">
            Selecciona entre los mejores profesionales para reparar o instalar tus electrodomésticos
          </p>
        </div>
      </div>
    </div>

    <!-- Search section -->
    <div class="bg-gray-100 px-4 py-8">
      <div class="container mx-auto px-4 md:px-8;">
        <SearchFilter @search="handleSearch" />
      </div>
    </div>

    <!-- Results section -->
    <div class="flex-1 px-4 py-8 bg-white">
      <div class="container mx-auto px-4 md:px-8;">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 class="text-2xl font-bold">
            {{ filteredTechnicians.length }} Técnicos Encontrados
          </h2>
          <div class="mt-2 md:mt-0">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
              Ordenar por: Valoración
            </button>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <TechnicianCard
            v-for="technician in filteredTechnicians"
            :key="technician.id"
            :id="technician.id"
            :name="technician.name"
            :specialty="technician.specialty"
            :rating="technician.rating"
            :reviewCount="technician.reviewCount"
            :location="technician.location"
            :image="technician.image"
            :verified="technician.verified"
          />
        </div>

        <div v-if="filteredTechnicians.length === 0" class="py-12 text-center">
          <h3 class="text-xl font-medium mb-2">No se encontraron técnicos</h3>
          <p class="text-gray-600 mb-6">
            Intenta ampliar tu búsqueda o utilizar otros filtros
          </p>
          <button
            @click="resetFilters"
            class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Ver todos los técnicos
          </button>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TechnicianCard from '../components/TechnicianCard.vue'
import SearchFilter from '../components/SearchFilter.vue'


// Datos de ejemplo para los técnicos
const technicians = [
  {
    id: "tech1",
    name: "Alberto Martínez",
    specialty: ["Refrigeración", "Congeladores"],
    rating: 4.8,
    reviewCount: 124,
    location: "Madrid, Centro",
    image: "https://i.pravatar.cc/150?img=12",
    verified: true,
  },
  {
    id: "tech2",
    name: "Laura García",
    specialty: ["Lavadoras", "Secadoras", "Lavavajillas"],
    rating: 4.9,
    reviewCount: 98,
    location: "Barcelona, Eixample",
    image: "https://i.pravatar.cc/150?img=27",
    verified: true,
  },
  {
    id: "tech3",
    name: "Ricardo López",
    specialty: ["Aire Acondicionado", "Calefacción"],
    rating: 4.7,
    reviewCount: 87,
    location: "Valencia, Ruzafa",
    image: "https://i.pravatar.cc/150?img=6",
    verified: false,
  },
  {
    id: "tech4",
    name: "Elena Sánchez",
    specialty: ["Cocinas", "Hornos", "Vitrocerámicas"],
    rating: 4.5,
    reviewCount: 62,
    location: "Madrid, Chamberí",
    image: "https://i.pravatar.cc/150?img=9",
    verified: true,
  },
  {
    id: "tech5",
    name: "José Fernández",
    specialty: ["Pequeños Electrodomésticos", "Televisores"],
    rating: 4.6,
    reviewCount: 53,
    location: "Sevilla, Centro",
    image: "https://i.pravatar.cc/150?img=19",
    verified: false,
  },
  {
    id: "tech6",
    name: "Carmen Rodríguez",
    specialty: ["Refrigeración", "Aire Acondicionado"],
    rating: 4.9,
    reviewCount: 112,
    location: "Bilbao, Abando",
    image: "https://i.pravatar.cc/150?img=25",
    verified: true,
  },
]

const filteredTechnicians = ref([...technicians])
const filters = ref({
  keyword: "",
  location: "",
  specialty: "",
  availability: "",
})

const handleSearch = (newFilters: {
  keyword: string;
  location: string;
  specialty: string;
  availability: string;
}) => {
  filters.value = newFilters

  // En un caso real, aquí haríamos una llamada a la API
  // Para este ejemplo, filtramos los datos locales

  let results = [...technicians]

  if (newFilters.keyword) {
    const keyword = newFilters.keyword.toLowerCase()
    results = results.filter(
      (tech) =>
        tech.name.toLowerCase().includes(keyword) ||
        tech.specialty.some((s) => s.toLowerCase().includes(keyword))
    )
  }

  if (newFilters.location) {
    const location = newFilters.location.toLowerCase()
    results = results.filter((tech) =>
      tech.location.toLowerCase().includes(location)
    )
  }

  // Actualizar los técnicos filtrados
  filteredTechnicians.value = results
}

const resetFilters = () => {
  handleSearch({ keyword: "", location: "", specialty: "", availability: "" })
}
</script>
