import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';

import configureStore from 'app/stores';

const initialState = {};
const store = configureStore(initialState);
global.store = store;

export interface ReduxProviderProps extends PropsWithChildren<any> {}

const ReduxProvider: FC<ReduxProviderProps> = ({ children }): ReactElement => {
  return <Provider store={global.store}>{children}</Provider>;
};

export default ReduxProvider;
