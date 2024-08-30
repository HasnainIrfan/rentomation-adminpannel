import React from 'react';

// react-router-dom
import { Outlet, Navigate, useLocation } from 'react-router-dom';

// Components
import DashbboardLayout from '../components/organisms/DashboardLayout';

// Utils
import { getCookie } from '../utils/cookie';

// Data
import { LINKS } from '../data/links';
import { TABAYAD_SESSION } from '../utils/constant';

const PrivateRoute = () => {
  const location = useLocation();
  const auth = getCookie(TABAYAD_SESSION);

  return auth ? (
    <DashbboardLayout>
      <Outlet />
    </DashbboardLayout>
  ) : (
    <Navigate to={LINKS.LOGIN} state={{ from: location }} replace />
  );
};

export default PrivateRoute;
