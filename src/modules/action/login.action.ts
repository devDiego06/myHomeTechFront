import { techApi } from '@/api/HomeTechApi';
import type { AuthResponse, User } from '../auth/interfaces';
import { isAxiosError } from 'axios';

interface LoginError {
  ok: false;
  message: string;
}

interface LoginSuccess {
  ok: true;
  access_token: string;
  user: User;
}

export const loginAction = async (
  email: string,
  password: string,
): Promise<LoginError | LoginSuccess> => {
  try {
    const { data } = await techApi.post<AuthResponse>('/auth/login', { email, password });

    console.log('token', data);

    return {
      ok: true,
      access_token: data.access_token,
      user: data.user,
    };
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      return {
        ok: false,
        message: 'Credenciales invalidas',
      };
    }
    console.log(error);

    throw new Error('No se pudo realizar la peticion');
  }
};
