import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import history from 'app/stores/history';

import reducerApp from 'app/app/reducer';
import reducerLanguage from 'app/providers/LanguageProvider/reducer';

export let rootReducer = combineReducers({});

export default function createReducer(injectedReducers = {}) {
  // @ts-ignore
  rootReducer = combineReducers({
    router: connectRouter(history),
    reducerApp,
    reducerLanguage,
    ...injectedReducers,
  });

  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>;
