import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { AuthStatus } from '../interfaces/authStatus.enum';
import { computed, ref } from 'vue';
import { loginAction } from '@/modules/auth/action/login.action';
import { checkStatusAction } from '@/modules/auth/action/check-status.action';
import { registerAction } from '@/modules/auth/action/register.action';
import type { User } from '../interfaces/user.interface';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | undefined>();
  const token = ref(useLocalStorage('token', '')); //recibe 2 parametros , key y valor por defecto
  const authStatus = ref(AuthStatus.Checking);

  const login = async (email: string, password: string) => {
    try {
      const loginResp = await loginAction(email, password);

      if (!loginResp.ok) {
        logOut();
        return false;
      }
      console.log(loginResp.access_token);

      authStatus.value = AuthStatus.Authenticated;
      token.value = loginResp.access_token;
      user.value = loginResp.user;

      console.log(loginResp.user);

      return true;
    } catch (error) {
      console.log(error);
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
      console.log(error);
      logOut();
    }
  };

  const checkAuthStatus = async (): Promise<boolean> => {
    try {
      const statusResp = await checkStatusAction();
      if (!statusResp.ok) {
        logOut();
        return false;
      }

      authStatus.value = AuthStatus.Authenticated;
      token.value = statusResp.access_token;
      user.value = statusResp.user;
      console.log('Usuario logueado');

      return true;
    } catch (error) {
      console.log(error);

      logOut();
      return false;
    }
  };

  const logOut = () => {
    console.log('Cerrado sesion');
    localStorage.removeItem('token');
    token.value = '';
    authStatus.value = AuthStatus.UnAuthenticated;
    user.value = undefined;
    console.log('Usuario Cerrado');

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
