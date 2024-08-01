// React Router Dom
// import { Navigate, Outlet } from "react-router-dom";

// data
import { LINKS } from '../data/links';

// Components
import Dashboard from '../components/pages/Dashboard';
import Login from '../components/pages/Login';

// Types
import { RouteType } from '../types/commonTypes';
import Error401 from '../components/pages/Error401';
import Error404 from '../components/pages/Error404';
import User from '../components/pages/User';

export const PublicRoutes: RouteType[] = [
  {
    path: LINKS.LOGIN,
    Component: Login,
  },
];

export const PrivateRoutes = [
  {
    path: LINKS.DASHBOARD,
    Component: Dashboard,
  },
  {
    path: LINKS.USER,
    Component: User,
  },
];

export const OtherRoutes = [
  {
    path: LINKS.ERROR_404,
    Component: Error404,
  },
  {
    path: LINKS.ERROR_401,
    Component: Error401,
  },
];
