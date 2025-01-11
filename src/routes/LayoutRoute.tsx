/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom';

const LayoutRoute = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default LayoutRoute;
