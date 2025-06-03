import { techApi } from '@/api/HomeTechApi';
import type { AuthResponse } from '../auth/interfaces';
import { isAxiosError } from 'axios';

interface RegisterError {
  ok: false;
  message: string;
}

interface RegisterSuccess {
  ok: true;
  token: string;
}

export const registerAction = async (
  name: string,
  email: string,
  password: string,
  role: string,
): Promise<RegisterError | RegisterSuccess> => {
  try {
    const { data } = await techApi.post<AuthResponse>('/users/register', {
      name,
      email,
      password,
      role,
    });

    return {
      ok: true,
      token: data.access_token,
    };
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 400) {
      return {
        ok: false,
        message: 'No se pudo crear el usuario, usuario ya existente',
      };
    }
    console.log(error);
    throw new Error('No se pudo realizar la peticion');
  }
};
