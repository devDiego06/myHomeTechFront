<template>
  <section class="py-16 bg-gray-100" id="services">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h2 class="text-3xl font-bold text-gray-800">Servicios Populares</h2>
          <p class="text-gray-600">Descubre los servicios más solicitados por nuestros usuarios.</p>
        </div>
        <div class="flex space-x-2">
          <button
            class="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
          >
            <span class="material-icons text-gray-600">chevron_left</span>
          </button>
          <button
            class="bg-indigo-600 text-white p-2 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
          >
            <span class="material-icons">chevron_right</span>
          </button>
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <img
            alt="Técnico reparando refrigerador"
            class="w-full h-56 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8XNGlVNw4W5YizSRLJ8JLJvCnYeW54gpNV0bYtCrlf4bPhmbBW5-IKg1JAKiXNYuh0Rz-SkGq54Z7dVgPDX0JkoX_x72UzKL_UoSR3rQcdUqTaS-JJmkh9xqR100c0co5-BIKiEfw_dBRtWlGGf19jAyHF0l8t153RO6FE5MbDFj7FsSzjdVZoqoLV1thNoBBOT8XPN5EnftyTcacV4gw7qQoCJX9h90Bu-OtI5EvAc-dYUVX2OVduCvl5GY7u7kEtxMS1Q9_0FQ"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Reparación de Refrigeradores</h3>
            <p class="text-gray-600 text-sm mb-4">
              Expertos en todas las marcas y modelos. Soluciones rápidas para mantener tus alimentos
              frescos.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-indigo-600 font-semibold">Desde $50</span>
              <div class="flex items-center text-yellow-500">
                <span class="material-icons text-sm">star</span>
                <span class="ml-1 text-sm text-gray-600">4.8 (120 opiniones)</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <img
            alt="Técnico revisando lavadora"
            class="w-full h-56 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnN78HyPMYh7br75Q39MqrFoL3ypni4ZOOB36NiMiDg68f8npwHjbk7haPxPmj4DqaTd-KtTE7urRGVdADRS04Rmi9XlBIxq0otNFHRwSMvLNCiSGwbEoHycHCjae--3jg9zsr-I6PekCeLgjFw02EEA5FV3OL-m2qLSAXa4TLZ9AylE9SXYoj4k4jUnU3MNXxMsAhCm3_aPo1s9CE8ciWwbbOUX1mpA1OxuejVL2msvqmPXwgJixA2tz9jznWa0vM0dFsnLgKJ58"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Reparación de Lavadoras</h3>
            <p class="text-gray-600 text-sm mb-4">
              Solucionamos problemas de fugas, ruidos o fallos de ciclo. Tu ropa limpia sin
              contratiempos.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-indigo-600 font-semibold">Desde $45</span>
              <div class="flex items-center text-yellow-500">
                <span class="material-icons text-sm">star</span>
                <span class="ml-1 text-sm text-gray-600">4.7 (95 opiniones)</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <img
            alt="Técnico instalando horno"
            class="w-full h-56 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Zw321Mr1Douu_8CtAD8Jdx1hve9Mwnz-P107s3QnwGuWufc7F_oGPw8tuAwjVWGsnAAnLzGwazAfMQvoMY-OcFnpk07CmghUh5Gm_ompURgdIFk3hDpaACuOtXzB-FTG8XMYzGoNSXSkSavpZnaFet-uf6b3HKQP8QwEaKUwlOR3lju2Q0PWuiaPFEi_Es2j_MID-6XnbKgqOoRla10oKg9OoFJhvmB8v8HP9ldImJEzTzvZvcran9hcCfikuHFLA8lMRRYWSAs"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Instalación de Hornos</h3>
            <p class="text-gray-600 text-sm mb-4">
              Instalación segura y profesional de hornos eléctricos y a gas. Cocina tus mejores
              platos.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-indigo-600 font-semibold">Desde $60</span>
              <div class="flex items-center text-yellow-500">
                <span class="material-icons text-sm">star</span>
                <span class="ml-1 text-sm text-gray-600">4.9 (78 opiniones)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


// Servicios destacados
// const services = ref([
//   {
//     title: 'Refrigeración',
//     icon: 'refrigerator',
//     description: 'Mantenimiento y reparación de refrigeradores y         congeladores de todas las marcas.',
//     features: [
//       'Diagnóstico completo del sistema',
//       'Reparación de fugas de gas',
//       'Reemplazo de componentes',
//       'Limpieza y mantenimiento',
//     ],
//   },
//   {
//     title: 'Lavadoras',
//     icon: 'washer',
//     description:
//       'Soluciones para problemas con tu lavadora o secadora de manera rápida y efectiva.',
//     features: [
//       'Reparación de motores y bombas',
//       'Solución de problemas electrónicos',
//       'Instalación de nuevas unidades',
//       'Mantenimiento preventivo',
//     ],
//   },
//   {
//     title: 'Aire Acondicionado',
//     icon: 'airConditioner',
//     description: 'Instalación, mantenimiento y reparación de sistemas de aire acondicionado.',
//     features: [
//       'Recarga de gas refrigerante',
//       'Limpieza de filtros y ductos',
//       'Reparación de compresores',
//       'Optimización de eficiencia energética',
//     ],
//   },
// ]);
</script>
