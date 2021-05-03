import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import browserHistory from './browser-history';
import {Router} from 'react-router-dom';
import App from './components/app/app';
import {reducer} from './store/reducer';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);
