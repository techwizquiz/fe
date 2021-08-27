import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import sessionProvider from '../src/services/SessionProvider';

render(
  <Router>
    <sessionProvider>
      <App />
    </sessionProvider>
  </Router>,
  document.getElementById('root')
);
