import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import routes from './routes';
import { theme } from './themes/main';

import RequireAuth from './hocs/RequireAuth';
import { AuthProvider } from './contexts/Auth';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.isPrivate ? (
                    <RequireAuth>
                      <route.element />
                    </RequireAuth>
                  ) : (
                    <route.element />
                  )
                }
              />
            ))}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
