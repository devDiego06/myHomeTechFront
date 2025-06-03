import { techApi } from '@/api/HomeTechApi';
import { isAxiosError } from 'axios';

interface CheckError {
  ok: false;
}

interface CheckSuccess {
  ok: true;
  token: string;
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
      token: data.token,
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
