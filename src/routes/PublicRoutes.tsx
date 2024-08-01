import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { getCookie } from '../utils/cookie';

const PublicRoute = () => {
  const location = useLocation();
  const auth = getCookie('auth');

  return <Outlet />;

  return !auth ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  );
};

export default PublicRoute;
