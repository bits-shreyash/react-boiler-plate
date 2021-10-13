import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './root.reducer';
import loggerMiddleware from './middleware/Logger';
import ApiMiddleware from './middleware/ApiMiddleware';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'global','posts','authentication'
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
  ],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(applyMiddleware(thunk,ApiMiddleware,loggerMiddleware), ...enhancerList);

const store = createStore(persistedReducer, composedEnhancer);

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

export { store, persistor };
