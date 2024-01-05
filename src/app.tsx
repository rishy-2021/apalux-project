import React, { Suspense } from 'react';
import { useInitialRootStore } from './utils/use-stores';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './app-route';
import { ConfigProvider } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  const { rehydrated } = useInitialRootStore();

  if (!rehydrated) {
    return null;
  }

  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#4E3AB5',
            colorBorderSecondary: '#e5e5e5',
            colorFillQuaternary: "#f5f5f5",
            colorError: "#cc2222"
          }
        }}
      >
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <AppRoute />
          </Suspense>
        </ErrorBoundary>
      </ConfigProvider>
    </BrowserRouter>
  );
}


export default App;
