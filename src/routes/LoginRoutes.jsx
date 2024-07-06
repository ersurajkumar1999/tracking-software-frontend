import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import AuthLayout from 'auth/layout/AuthLayout';
import LoginIn from 'auth/LoginIn';
import SignUp from 'auth/SignUp';

// render - login
const AuthLogin = Loadable(lazy(() => import('auth/LoginIn')));
const AuthRegister = Loadable(lazy(() => import('auth/SignUp')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <AuthLayout />,
  children: [
    {
      path: '/login',
      element: <LoginIn />
    },
    {
      path: '/register',
      element: <SignUp />
    }
  ]
};

export default LoginRoutes;
