// data
import { LINKS } from '../data/links';

// Components
import Dashboard from '../components/pages/Dashboard';
import Login from '../components/pages/Login';
import Error401 from '../components/pages/Error401';
import Error404 from '../components/pages/Error404';
import User from '../components/pages/User';
import Doctor from '../components/pages/Doctor';
import Services from '../components/pages/Services';
import Blogs from '../components/pages/Blogs';
import Messages from '../components/pages/Messages';

// Types
import { RouteType } from '../types/commonTypes';
import ServicesUpsert from '../components/pages/ServicesUpsert';
import BlogUpsert from '../components/pages/BlogUpsert';
import Reservation from '../components/pages/Reservation';

export const PublicRoutes: RouteType[] = [
  {
    path: LINKS.LOGIN,
    Component: Login,
  },
];

export const PrivateRoutes: RouteType[] = [
  {
    path: LINKS.DASHBOARD,
    Component: Dashboard,
  },
  {
    path: LINKS.DOCTOR,
    Component: Doctor,
  },
  {
    path: LINKS.USER,
    Component: User,
  },
  {
    path: LINKS.SERVICES,
    Component: Services,
  },
  {
    path: LINKS.SERVICESUPSERT,
    Component: ServicesUpsert,
  },
  {
    path: LINKS.BLOGS,
    Component: Blogs,
  },
  {
    path: LINKS.BlOGUPSERT,
    Component: BlogUpsert,
  },
  {
    path: LINKS.RESERVATIONS,
    Component: Reservation,
  },
  {
    path: LINKS.MESSAGES,
    Component: Messages,
  },
];

export const OtherRoutes: RouteType[] = [
  {
    path: LINKS.ERROR_404,
    Component: Error404,
  },
  {
    path: LINKS.ERROR_401,
    Component: Error401,
  },
];
