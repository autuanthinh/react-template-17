import { configureStore, EnhancedStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';
import { routerMiddleware } from 'connected-react-router';

import createReducer from '../reducers';
import rootSaga from '../sagas';
import history from './history';
const sagaMiddleware = createSagaMiddleware();

export default function configureAppStore(initialState = {}): EnhancedStore {
  const routesMiddleware = routerMiddleware(history);

  const { run: runSaga } = sagaMiddleware;

  // sagaMiddleware: Makes redux-sagas work
  const middlewares = [sagaMiddleware, routesMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }), ...middlewares],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  sagaMiddleware.run(rootSaga);
  return store;
}
