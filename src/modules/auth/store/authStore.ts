import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { AuthStatus } from '../interfaces/authStatus.enum';
import { computed, ref, watch } from 'vue';
import { loginAction } from '@/modules/auth/action/login.action';
import { checkStatusAction } from '@/modules/auth/action/check-status.action';
import { registerAction } from '@/modules/auth/action/register.action';
import type { User } from '../interfaces/user.interface';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | undefined>();
  const token = ref(useLocalStorage('token', ''));
  const authStatus = ref(AuthStatus.Checking);

  // Agregar un watcher para el token
  watch(token, (newValue) => {
    console.log('Token changed:', newValue);
  });

  const login = async (email: string, password: string) => {
    try {
      const loginResp = await loginAction(email, password);

      if (!loginResp.ok) {
        logOut();
        return false;
      }

      authStatus.value = AuthStatus.Authenticated;
      token.value = loginResp.access_token;
      user.value = loginResp.user;

      return true;
    } catch (error) {
      console.error('Error en login:', error);
      logOut();
      return false;
    }
  };

  const register = async (name: string, email: string, password: string, rol: string) => {
    try {
      const registerResp = await registerAction(name, email, password, rol);
      if (!registerResp.ok) {
        logOut();
        return false;
      }

      authStatus.value = AuthStatus.Authenticated;
      token.value = registerResp.access_token;
      user.value = registerResp.user;

      return true;
    } catch (error) {
      console.error('Error en registro:', error);
      logOut();
      return false;
    }
  };

  const checkAuthStatus = async (): Promise<boolean> => {
    try {
      console.log('Checking auth status...');
      console.log('Current token:', token.value);
      const statusResp = await checkStatusAction();
      if (!statusResp.ok) {
        console.log('Status check failed');
        logOut();
        return false;
      }

      authStatus.value = AuthStatus.Authenticated;
      token.value = statusResp.access_token;
      user.value = statusResp.user;
      console.log('Usuario logueado, token actualizado:', token.value);

      return true;
    } catch (error) {
      console.log('Error checking status:', error);
      logOut();
      return false;
    }
  };

  const logOut = () => {
    console.log('Iniciando cierre de sesión');
    console.log('Token antes de cerrar:', token.value);
    localStorage.removeItem('token');
    token.value = '';
    authStatus.value = AuthStatus.UnAuthenticated;
    user.value = undefined;
    console.log('Sesión cerrada, token eliminado');

    return false;
  };

  return {
    //VARIABLES
    user,
    token,
    authStatus,

    //METHODS - ACTIONS
    login,
    logOut,
    register,
    checkAuthStatus,

    //GETTERS
    isCheking: computed(() => authStatus.value === AuthStatus.Checking),
    isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),

    //TODO: Check what type of user is looged in
  };
});
