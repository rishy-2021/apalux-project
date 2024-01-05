import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useStores } from '../utils/use-stores';

const UserRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const location = useLocation();
  const { userStore: { auth: { isAuthenticated } } } = useStores();
  
  if (!isAuthenticated) {
    return <Navigate
      to="/"
      state={{ from: location }}
      replace
    />;
  }

  return children;
};

export default UserRoute;
