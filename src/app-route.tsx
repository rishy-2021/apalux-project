import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { suspend } from 'suspend-react';
import { TopBar } from './components/top-bar';
import { DashBoard } from './pages/account';
import { useStores } from './utils/use-stores';
import { SignUp } from './pages/auth/sign-up';
import { SignIn } from './pages/auth/sign-in';
import VerifyEmail from './pages/auth/verify-email';

const AppRoute: React.FC = observer(() => {
  const location = useLocation();
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  const {
    userStore: {
      auth: { isAuthenticated },
    }
  } = useStores();

  suspend(async () => {
    if (!isAuthenticated) return;
  }, [isAuthenticated]);
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <>
      {!location.pathname.toLowerCase().includes("verify-email") &&<TopBar />}
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
        <Route path='business' element={<DashBoard />} />
        <Route path='*' element={<Navigate to='business' replace />} />
      </Routes>
    </>

  )
});

export default AppRoute;

