import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/lib/store';
import ToastContextProvider from './app/lib/ToastContext';
import App from './app/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ToastContextProvider>
      <App />
    </ToastContextProvider>
  </Provider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
