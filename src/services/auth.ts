import { UserAuth, UserCredentials } from './../models/user';

export const login = async (user: UserCredentials): Promise<UserAuth> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        token: '4j1k23j4kl123j4lk1234l12jk34çlj12341234kl123',
        email: 'email@email.com',
      });
    }, 2000);
  });
};
