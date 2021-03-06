import { UserAuth, UserCredentials, UserRegister } from '../../models/user';
import api from '../axios';

export const login = async (user: UserCredentials): Promise<UserAuth> => {
  const { data } = await api.post<UserAuth>('users/authenticate', user);

  return data;
};

export const register = async (user: UserRegister) => {
  return await api.post('users/register', user);
};

export const getById = async (id: number) => {
  return await api.get<any>(`users/${id}`);
};

export const list = async () => {
  return await api.get<any[]>(`users`);
};
