<template>
  <h1 class="text-2xl font-semibold mb-4">Register</h1>
  <form @submit.prevent="onRegister">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="name" class="block text-gray-600">Name</label>
      <input
        ref="nameInputRef"
        v-model="myForm.name"
        type="text"
        id="name"
        name="name"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700" for="service">
        Tipo de servicio
      </label>
      <select
        ref="rolInputRef"
        id="rol"
        v-model="myForm.rol"
        required
        class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="">Selecciona un rol</option>
        <option value="client">Cliente</option>
        <option value="technician">Tecnico</option>
      </select>
    </div>

    <!-- Username Input -->
    <div class="mb-4">
      <label for="email" class="block text-gray-600">Email</label>
      <input
        ref="emailInputRef"
        v-model="myForm.email"
        type="email"
        id="email"
        name="email"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input
        ref="passwordInputRef"
        v-model="myForm.password"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Forgot Password?</a>
    </div>
    <!-- Login Button -->
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      Register
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'login' }" class="hover:underline">Login Here</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '../store/authStore';
import { useToast } from 'vue-toast-notification';

const myForm = reactive({
  name: '',
  email: '',
  password: '',
  rol: '',
});

const emailInputRef = ref<HTMLInputElement | null>(null);
const passwordInputRef = ref<HTMLInputElement | null>(null);
const nameInputRef = ref<HTMLInputElement | null>(null);
const rolInputRef = ref<HTMLSelectElement | null>(null);

const authStore = useAuthStore();
const toast = useToast();

const onRegister = async () => {
  console.log('Datos', myForm);

  if (myForm.name.length < 2 || myForm.name.length > 20 || myForm.name === '') {
    nameInputRef.value?.focus();
  }

  if (myForm.email === '') {
    return emailInputRef.value?.focus();
  }

  if (myForm.password.length < 6) {
    toast.error('Contraseña debe ser mayor a 6 caracteres');
    return passwordInputRef.value?.focus();
  }

  const ok = await authStore.register(myForm.name, myForm.email, myForm.password, myForm.rol);

  if (ok) return;
  console.log(ok);

  toast.error('No se pudo crear el usuario');
};
</script>
