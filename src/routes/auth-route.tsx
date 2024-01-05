import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useStores } from '../utils/use-stores';

const AuthRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const location = useLocation();
  const { userStore: { auth: { isAuthenticated } } } = useStores();

  if (isAuthenticated) {
    return <Navigate
      to="/home"
      state={{ from: location }}
      replace
    />;
  }

  return children;
}

export default AuthRoute;
