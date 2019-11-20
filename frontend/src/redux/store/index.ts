import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import reducers from '../reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: [],
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const persistReducers = persistReducer(persistConfig, reducers);

export const store = createStore(persistReducers, {}, composeEnhancers(applyMiddleware(promiseMiddleware, ReduxThunk)));
export const persistor = persistStore(store);
