export interface UserAuth {
  id: number;
  token: string;
  email: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export enum UserType {
  Natural = 0,
  Legal = 1,
}
