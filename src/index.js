import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'react-dates/initialize';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AppRouter from './routes/AppRouter';

import configureStore from './store';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

const state = store.getState();

const jsx = (
  <Provider store={store}>
    <App><AppRouter /></App>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
