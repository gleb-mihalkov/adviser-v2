import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';

import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import {
  applyMiddleware,
  createStore
} from 'redux';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createHashHistory();

const store = createStore(
  connectRouter(history)(state => state),
  applyMiddleware(
    routerMiddleware(history)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
