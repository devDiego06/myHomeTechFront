import { techApi } from '@/api/HomeTechApi';
import { isAxiosError } from 'axios';
import type { User } from '../auth/interfaces';

interface CheckError {
  ok: false;
}

interface CheckSuccess {
  ok: true;
  access_token: string;
  user: User;
}

export const checkStatusAction = async (): Promise<CheckError | CheckSuccess> => {
  try {
    const token = localStorage.getItem('token');
    if (!token || token.length <= 10) {
      return { ok: false };
    }

    const { data } = await techApi.get('/auth/login');

    return {
      ok: true,
      access_token: data.access_token,
      user: data.user,
    };
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      return {
        ok: false,
      };
    }
    throw new Error('No se pudo verificar la sesion');
  }
};
