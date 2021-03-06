import 'react-dates/initialize';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AppRouter from './routes/AppRouter';

import configureStore from './store';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App><AppRouter /></App>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
