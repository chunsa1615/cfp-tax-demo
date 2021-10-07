import { ErrorBoundary } from './utils';
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import ThemeWrapper from './ThemeWrapper';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <RecoilRoot>
        <ThemeWrapper>
          <Router />
        </ThemeWrapper>
      </RecoilRoot>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
