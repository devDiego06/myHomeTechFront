<template>
  <!-- component -->
  <section>
    <div class="bg-black text-white py-20">
      <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <h1 class="text-3xl md:text-5xl p-2 orange tracking-loose">
            Soluciones para tus electrodomésticos al alcance de un clic
          </h1>
          <!-- <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
            Soluciones para tus electrodomésticos al alcance de un clic
          </h2> -->
          <p class="text-sm md:text-base text-gray-50 mb-4 p-2">
            Conectamos tus necesidades con los mejores técnicos especializados en electrodomésticos
            en tu zona. Reparaciones confiables, rápidas y con garantía.
          </p>
          <a
            href="#"
            class="bg-transparent bg-color orange hover:text-black rounded shadow hover:shadow-lg mx-2 py-2 px-4 border border-color hover:border-transparent"
          >
            Encontrar Tecnico</a
          >
        </div>
        <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
          <div class="flex flex-wrap content-center">
            <div class="w-55 h-96 overflow-hidden absolute top-40 right-205">
              <!-- Image -->
              <img
                class="w-full h-full object-cover rounded-xl"
                src="https://plus.unsplash.com/premium_photo-1718043036192-b874bb43c64f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div class="w-55 h-96 overflow-hidden absolute top-80 right-115">
              <!-- Image -->
              <img
                class="w-full h-full object-cover rounded-xl"
                src="https://plus.unsplash.com/premium_photo-1718043036192-b874bb43c64f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>

            <div class="w-55 h-96 overflow-hidden absolute top-40 right-30">
              <!-- Image -->
              <img
                class="w-full h-full object-cover rounded-xl"
                src="https://plus.unsplash.com/premium_photo-1663047695260-98cde4d6bbc7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference main.css;

.orange {
  color: #ff7602;
}

.border-color {
  border-color: #ff7602;
}

.bg-color:hover {
  background-color: #ff7602;
  color: black;
}

.bg-hero {
  background-color: #02284d;
}
</style>
