import React, { createContext, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { UserAuth, UserCredentials } from './../models/user';
import * as auth from './../services/auth';

interface Props {
  children?: React.ReactNode;
}

interface AuthContextData {
  authenticated: boolean;
  login: (user: UserCredentials) => Promise<void>;
  logout: () => void;
}

const sessionUser = sessionStorage.getItem('appeltemplate.user');

const initialUserState = sessionUser
  ? (JSON.parse(sessionUser) as UserAuth)
  : undefined;

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState<UserAuth | undefined>(initialUserState);

  const login = async (user: UserCredentials) => {
    const response = await auth.login(user);

    // TODO - Validate errors from the API
    if (!response) {
      return;
    }

    setUser(response);
    sessionStorage.setItem('appeltemplate.user', JSON.stringify(response));

    // Send the user back to the page he tried to visit when he was
    // redirected to the login page. Use { replace: true } so we don't create
    // another entry in the history stack for the login page.  This means that
    // when the user get to the protected page and click the back button, he
    // won't end up back on the login page, which is also really nice for the
    // user experience.
    const from = ((location.state as any)?.from?.pathname as string) || '/';
    navigate(from, { replace: true });
  };

  const logout = async () => {
    sessionStorage.removeItem('appeltemplate.user');
    setUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
