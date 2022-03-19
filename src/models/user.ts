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

export interface UserProfile {
  name: string;
  email: string;
  birthdate: Date;
  identityDocument: string;
  cpfCnpj: string;
  responsibleCpf: string;
  responsibleName: string;
  stateRegistration: string;
  phone: string;
  cellPhone: string;
  address: string;
  addressNumber: string;
  addressComplement: string;
  neighborhood: string;
  city: string;
  zipCode: string;
  federativeUnit: string;
  type: UserType;
}

export interface UserRegister extends UserProfile {
  password: string;
  passwordConfirmation: string;
}

export interface UserRegisterErrors {
  name: string[];
  email: string[];
  password: string[];
  passwordConfirmation: string[];
  birthdate: string[];
  identityDocument: string[];
  cpfCnpj: string[];
  responsibleCpf: string[];
  responsibleName: string[];
  stateRegistration: string[];
  phone: string[];
  cellPhone: string[];
  address: string[];
  addressNumber: string[];
  addressComplement: string[];
  neighborhood: string[];
  city: string[];
  zipCode: string[];
  federativeUnit: string[];
  type: string[];
}

export interface UserLoginErrors {
  email: string[];
  password: string[];
  invalidLogin: string[];
}
