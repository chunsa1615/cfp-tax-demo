import React, { Suspense } from 'react';

import { ErrorBoundary } from './utils';
import { Loading } from './components';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import ThemeWrapper from './ThemeWrapper';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <RecoilRoot>
        <ThemeWrapper>
          <Suspense fallback={<Loading />}>
            <Router />
          </Suspense>
        </ThemeWrapper>
      </RecoilRoot>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
