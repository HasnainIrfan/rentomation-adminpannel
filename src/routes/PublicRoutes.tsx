import React from 'react';

// react-router-dom
import { Outlet, Navigate, useLocation } from 'react-router-dom';

// Utils
import { getCookie } from '../utils/cookie';

// Data
import { LINKS } from '../data/links';
import { TABAYAD_SESSION } from '../utils/constant';

const PublicRoute = () => {
  const location = useLocation();
  const auth = getCookie(TABAYAD_SESSION);

  return !auth ? (
    <Outlet />
  ) : (
    <Navigate to={LINKS.DASHBOARD} state={{ from: location }} replace />
  );
};

export default PublicRoute;
