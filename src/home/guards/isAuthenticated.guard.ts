import { AuthStatus } from "@/modules/auth/interfaces/authStatus.enum";
import { useAuthStore } from "@/modules/auth/store/authStore";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStore();




  await authStore.checkAuthStatus();
  console.log('Checking authentication status...', authStore.checkAuthStatus);

  if (authStore.authStatus === AuthStatus.UnAuthenticated) {
    return next({ name: 'login' });
  } else {
    return next()
  }

  // const userId = localStorage.getItem('userId');
  // localStorage.setItem('lastPath', to.path);

  // if (!userId) {
  //   return next({
  //     name: 'login',
  //   });
  // }

  // return next();
};

export default isAuthenticatedGuard;
