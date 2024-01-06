import { observer } from "mobx-react-lite";
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { suspend } from 'suspend-react';
import { TopBar } from './components/top-bar';
import { DashBoard } from './pages/dashboard';
import { useStores } from './utils/use-stores';
import { SignUp } from './pages/auth/sign-up';
import { SignIn } from './pages/auth/sign-in';
import VerifyEmail from './pages/auth/verify-email';

const AppRoute: React.FC = observer(() => {
  const location = useLocation();
  const {
    userStore: {
      auth: { isAuthenticated },
    }
  } = useStores();

  suspend(async () => {
    if (!isAuthenticated) return;
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <>
        {!location.pathname.toLowerCase().includes("verify-email") && <TopBar />}
        <Routes>
          <Route
            path='signin'
            element={<SignIn />}
          />
          <Route
            path='signup'
            element={<SignUp />}
          />
          <Route
            path='verify-email/:id/:accessToken'
            element={<VerifyEmail />}
          />
          <Route path='*' element={<Navigate to='signin' replace />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <TopBar />
      <Routes>
        <Route path='dashboard' element={<DashBoard />} />
        <Route path='*' element={<Navigate to='dashboard' replace />} />
      </Routes>
    </>

  )
});

export default AppRoute;

