import { techApi } from '@/api/HomeTechApi';
import type { AuthResponse, User } from '../interfaces';
import { isAxiosError } from 'axios';

interface RegisterError {
  ok: false;
  message: string;
}

interface RegisterSuccess {
  ok: true;
  access_token: string;
  user: User;
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
      access_token: data.access_token,
      user: data.user,
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
