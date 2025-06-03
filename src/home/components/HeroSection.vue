<template>
  <!-- component -->
  <section class="pt-20 hero-bg bg-[#443850]  text-white min-h-screen flex items-center" id="hero">
    <div
      class="container mx-auto px-6 py-16 text-center md:text-left flex justify-between items-center"
    >
      <div class="md:w-1/2">
        <span class="text-[#6fd2cf] font-semibold uppercase tracking-wider"
          >SOLUCIONES RÁPIDAS Y CONFIABLES</span
        >
        <h1 class="text-5xl text-white md:text-6xl font-bold mt-4 mb-6">
          Encuentra Técnicos Expertos <br class="hidden md:block" />
          para tus Electrodomésticos
        </h1>
        <p class="text-lg text-white mb-8">
          Conecta con profesionales calificados cerca de ti. Agenda servicios de reparación y
          mantenimiento de forma fácil y segura.
        </p>
        <div class="flex justify-center md:justify-start space-x-4">
          <router-link
            class="bg-[#6fd2cf] text-[#443850] font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#443850] hover:text-[#6fd2cf] transition duration-300 flex items-center"
            to="search"
          >
            Buscar un Técnico
            <span class="material-icons ml-2">search</span>
          </router-link>
          <router-link
            class="border-2 border-[#6fd2cf] text-[#6fd2cf] font-semibold py-3 px-8 rounded-lg hover:bg-[#6fd2cf] hover:text-[#443850] transition duration-300 flex items-center"
            to="auth/register"
          >
            Soy Técnico
            <span class="material-icons ml-2">engineering</span>
          </router-link>
        </div>
      </div>

      <div class="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
        <img src="/src/assets/imageHero.png" alt="heroImagen" class="object-cover absolute inset-3" />
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#6FD2CF"
            d="M44.9,-63C57.7,-52.4,67.2,-38.7,71.1,-23.8C74.9,-8.9,73,7.1,66,19.2C59,31.3,46.8,39.5,35,51.8C23.1,64,11.6,80.4,0.6,79.5C-10.3,78.6,-20.5,60.5,-28.5,47C-36.5,33.5,-42.2,24.5,-48.9,13.6C-55.5,2.7,-63.1,-10.1,-64.4,-25.5C-65.6,-40.8,-60.6,-58.7,-48.9,-69.5C-37.1,-80.4,-18.5,-84.3,-1.3,-82.6C16,-80.8,32,-73.5,44.9,-63Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  </section>
</template>
