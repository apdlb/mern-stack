import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { LocalizeProvider } from 'react-localize-redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import App from './App';
import { persistor, store } from './redux/store';
import * as serviceWorker from './serviceWorker';

const rootComponent = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <LocalizeProvider store={store}>
        <App />
      </LocalizeProvider>
    </PersistGate>
  </Provider>
);
ReactDOM.render(rootComponent, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
