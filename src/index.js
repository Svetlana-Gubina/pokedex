import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import browserHistory from './browser-history';
import {Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router history={browserHistory}>
        <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
