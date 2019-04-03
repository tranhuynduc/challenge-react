import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App/index';
import store from './redux/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
