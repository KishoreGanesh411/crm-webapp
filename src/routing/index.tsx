import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Login } from '../component/loginSignup';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../component/dashboard/Dashboard';
export const AppRouter: React.FC = () => {
  const routes = useRoutes([
    { path: '/', element: <Login /> },
    { path: '/dashboard', element: <Dashboard /> },
  ]);

  return routes;
};
