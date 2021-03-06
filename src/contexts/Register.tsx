import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserRegister, UserRegisterErrors, UserType } from './../models/user';
import * as service from '../api/services/user';

interface Props {
  children?: React.ReactNode;
}

interface ContextData {
  user: UserRegister;
  errors: UserRegisterErrors;
  handleChange: (key: keyof UserRegister, value: unknown) => void;
  register: () => void;
}

const RegisterContext = createContext<ContextData>({} as ContextData);
const useRegister = () => useContext(RegisterContext);

const initialUserRegister: UserRegister = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  birthdate: new Date(),
  identityDocument: '',
  cpfCnpj: '',
  responsibleCpf: '',
  responsibleName: '',
  stateRegistration: '',
  phone: '',
  cellPhone: '',
  address: '',
  addressNumber: '',
  addressComplement: '',
  neighborhood: '',
  city: '',
  zipCode: '',
  federativeUnit: '',
  type: UserType.Natural,
};

const initialUserErrors = {
  name: [],
  email: [],
  password: [],
  passwordConfirmation: [],
  birthdate: [],
  identityDocument: [],
  cpfCnpj: [],
  responsibleCpf: [],
  responsibleName: [],
  stateRegistration: [],
  phone: [],
  cellPhone: [],
  address: [],
  addressNumber: [],
  addressComplement: [],
  neighborhood: [],
  city: [],
  zipCode: [],
  federativeUnit: [],
  type: [],
};

const RegisterProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserRegister>(initialUserRegister);
  const [errors, setErrors] = useState<UserRegisterErrors>(initialUserErrors);

  const handleChange = (key: keyof UserRegister, value: unknown) => {
    setUser({ ...user, [key]: value });
  };

  const register = () => {
    service
      .register(user)
      .then((_) => {
        setUser(initialUserRegister);
        navigate('/login');
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setErrors(error.response.data.errors);
        }
      });
  };

  return (
    <RegisterContext.Provider value={{ user, errors, register, handleChange }}>
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterProvider, useRegister };
