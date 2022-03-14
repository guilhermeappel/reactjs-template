import { UserAuth, UserCredentials } from '../../models/user';
import api from '../axios';

export const login = async (user: UserCredentials): Promise<UserAuth> => {
  const { data } = await api.post<UserAuth>('users/authenticate', user);

  return data;
};
