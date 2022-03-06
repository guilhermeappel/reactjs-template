import { Route } from './models/route';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgot-password';

const routes: Route[] = [
  { path: '/', isPrivate: true, element: Home },
  { path: '/login', isPrivate: false, element: Login },
  { path: '/register', isPrivate: true, element: Register },
  { path: '/forgot-password', isPrivate: false, element: ForgotPassword },
];

export default routes;
