import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './Components/App';

import store from './redux/store';

import './styles.css';

// console.log('store=', store);

ReactDOM.render(
  <Provider store={store}>
    {' '}
    <App />{' '}
  </Provider>,
  document.getElementById('root'),
);
