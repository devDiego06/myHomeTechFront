<template>
 <footer class="bg-gray-800 text-gray-300 py-12" id="contact">
<div class="container mx-auto px-6">
<div class="grid md:grid-cols-4 gap-8 mb-8">
<div>
<h4 class="text-xl font-semibold text-white mb-4">TecniApp</h4>
<p class="text-sm">Conectando clientes con los mejores técnicos de electrodomésticos.</p>
<div class="flex space-x-4 mt-4">
<router-link class="text-gray-400 hover:text-white transition duration-300" to="#"><img alt="Facebook icon" class="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIub37b5ELiFEhWkKatznv-h1aFUT7unojXDpP0npoU1k71YRH8EmwVmn7EqX5rS5WXwsakuepvoif-t2tJ75rdU-UISCCLyndyhwIn515xWvYCECaqwvTAf-eJGIhTpmh624Ey9QXeGBmXd5-skj1l9cvJ7DFrMv4YGtzphID2yZtKTeJ7WPILsi0OzSLW7Z7Ne949G3qFlNcGhQEBaQvT0hW2Nh6hapMQYvZl70HRAuebuj5YBfSc-wF89JIF_uq7vgdV-uvgTA"/></router-link>
<router-link class="text-gray-400 hover:text-white transition duration-300" to="#"><img alt="Twitter icon" class="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYyNUcS3LCkf1WzZ2Bd_u-_wFbleYApuk-UbOZhM7FkAnt396HJB5ru_o0yL8uxxvxvp9C-1wPo716GovP9R5kfIbAWHcAqDk8KqsVfFpFYTHJFr4rLU3sp5THSQyE6d6kykg25WuBWG4lnJsRa-M2dBJKaTKa4UoG9HbP7cp7KueVfP_VLDzf7KzTpxwsUSfGglHYo0LnR30U3_5OHS7IQiGty75rh9aYEu7lpj__cECLl5XNtWJPIDxx_zijtSB_spajhYj2nUE"/></router-link>
<router-link class="text-gray-400 hover:text-white transition duration-300" to="#"><img alt="Instagram icon" class="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS4zmzMal6s0PSG_5Go16KhkGbC3Y-F9aUQuGS-uhIqZXYIY-xFxP9MW9ossNkTW_nAVHeXr-jJbqE5tdllLLScxoccMTIKCliEhF994e7K0VCwKrgJ6BYmujdmsi9dcFWOsouC_YD3PfZcZtKHAWwWvAjgcpBC0yE1m_vdoRSqWojDUxoT8qZu5DBylthXII7gMEXasz5sHICI2c41StK8KOaQPeXaSSJAjw46YDshXT4a7k21m876nyRyj2-3pEOn-KySHr70pY"/></router-link>
</div>
</div>
<div>
<h5 class="text-lg font-semibold text-white mb-4">Navegación</h5>
<ul class="space-y-2">
<li><router-link class="hover:text-indigo-400 transition duration-300" to="/">Inicio</router-link></li>
<li><router-link class="hover:text-indigo-400 transition duration-300" to="#services">Servicios</router-link></li>
<li><router-link class="hover:text-indigo-400 transition duration-300" to="#find-technician">Buscar Técnicos</router-link></li>
<li><router-link class="hover:text-indigo-400 transition duration-300" to="#testimonials">Testimonios</router-link></li>
<li><router-link class="hover:text-indigo-400 transition duration-300" to="#register-technician">Soy Técnico</router-link></li>
</ul>
</div>
<div>
<h5 class="text-lg font-semibold text-white mb-4">Soporte</h5>
<ul class="space-y-2">
<li><router-link class="hover:text-indigo-400 transition duration-300" to="#">Preguntas Frecuentes</router-link></li>
<li><router-link class="hover:text-indigo-400 transition duration-300" to="#">Términos y Condiciones</router-link></li>
<li><router-link class="hover:text-indigo-400 transition duration-300" to="#">Política de Privacidad</router-link></li>
<li><router-link class="hover:text-indigo-400 transition duration-300" to="#">Contacto Soporte</router-link></li>
</ul>
</div>
<div>
<h5 class="text-lg font-semibold text-white mb-4">Contacto Empresa</h5>
<p class="text-sm flex items-center mb-2"><span class="material-icons mr-2 text-indigo-400">email</span> info@myhometech.com</p>
<p class="text-sm flex items-center mb-2"><span class="material-icons mr-2 text-indigo-400">phone</span> +1 234 567 8900</p>
<p class="text-sm flex items-center"><span class="material-icons mr-2 text-indigo-400">location_on</span> Calle Falsa 123, Ciudad</p>
</div>
</div>
</div>

<div class="mt-12 pt-8 border-t border-black text-sm text-black px-10">
  <div class="flex flex-col md:flex-row justify-between items-center">
    <p>© {{ year }} MyHomeTech. Todos los derechos reservados.</p>
    <div class="flex space-x-4 mt-4 md:mt-0">
      <router-link to="/" class="hover:text-white transition-colors">Privacidad</router-link>
      <router-link to="/" class="hover:text-white transition-colors">Términos</router-link>
      <router-link to="/" class="hover:text-white transition-colors">Cookies</router-link>
    </div>
  </div>
</div>
</footer>
</template>



<script setup lang="ts">
import FacebookIcon from '@/assets/icons/FacebookIcon.vue';
import { RouterLink } from 'vue-router';


const year = new Date().getFullYear();

// Icons como componentes simples
</script>
