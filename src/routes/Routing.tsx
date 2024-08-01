import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './RoutesPaths';
import LayoutRoute from './LayoutRoute';
import PublicRoute from './PublicRoutes';
import PrivateRoute from './PrivateRoute';

// Compoents
import Error404 from '../components/pages/Error404';

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutRoute />} path="/">
            {PublicRoutes.map(({ path, Component }, index) => (
              <Route element={<PublicRoute />} key={`public-${index}`}>
                <Route path={path} element={<Component />} />
              </Route>
            ))}

            {PrivateRoutes.map(({ path, Component }, index) => (
              <Route element={<PrivateRoute />} key={`private-${index}`}>
                <Route path={path} element={<Component />} />
              </Route>
            ))}

            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
