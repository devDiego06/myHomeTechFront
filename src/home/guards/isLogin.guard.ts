import { useAuthStore } from "@/modules/auth/store/authStore";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

const isLoginGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStore();
  await authStore.checkAuthStatus();

  if (!authStore.isAuthenticated) {
    return next({ name: 'login' });
  } else {
    return next();
  }
}

export default isLoginGuard;
