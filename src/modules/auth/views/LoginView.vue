<template>
  <h1 class="text-2xl font-semibold mb-4">Login</h1>
  <!-- .prevent avoid that page be recharged when the accion its executed-->
  <form @submit.prevent="onLogin">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="email" class="block text-gray-600">Email</label>
      <input
        v-model="myForm.email"
        ref="emailInputRef"
        type="text"
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
        v-model="myForm.password"
        ref="passwordInputRef"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Remember Me Checkbox -->
    <div class="mb-4 flex items-center">
      <input
        type="checkbox"
        id="remember"
        name="remember"
        v-model="myForm.rememberMe"
        class="text-blue-500"
      />
      <label for="remember" class="text-gray-600 ml-2">Recordar Email</label>
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
      Login
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'register' }" class="hover:underline">Sign up Here</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watchEffect } from 'vue';

import { ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import { useAuthStore } from '../store/authStore';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

//Is utilized reactive becase is better yo use for save arrays or objetcs. For this reason we use reactive and not ref
const myForm = reactive({
  email: '',
  password: '',
  rememberMe: false,
});

const emailInputRef = ref<HTMLInputElement | null>(null);
const passwordInputRef = ref<HTMLInputElement | null>(null);

const authStore = useAuthStore();

const toast = useToast();

const onLogin = async () => {
  //we validate that the user has filled the inputs
  if (myForm.email === '') {
    return emailInputRef.value?.focus();
  }

  if (myForm.password.length < 6) {
    return passwordInputRef.value?.focus();
  }

  //If the user dont wanna remember the email, we remove it from localStorage
  if (myForm.rememberMe) {
    localStorage.setItem('email', myForm.email);
  } else {
    localStorage.removeItem('email');
  }

  const ok = await authStore.login(myForm.email, myForm.password);
  if (ok) {
    const redirectPath = route.query.redirect || '/';
    router.push(redirectPath as string);
  };

  toast.error('Usuario/Contraseña incorrectos');
};

watchEffect(() => {
  const email = localStorage.getItem('email');
  if (email) {
    myForm.email = email;
    myForm.rememberMe = true;
  }
});
</script>
