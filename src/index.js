import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { SessionProvider } from '../src/services/SessionProvider';

render(
  <Router>
    <SessionProvider>
      <App />
    </SessionProvider>
  </Router>,
  document.getElementById('root')
);
