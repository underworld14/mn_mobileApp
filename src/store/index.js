import { createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducers from './reducers';
import middlewares from './middlewares';

const persistConfig = {
  // Root
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'news'],
  blacklist: [''],
};

const persistReducers = persistReducer(persistConfig, rootReducers);

const store = createStore(persistReducers, middlewares);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export { persistor, store };
