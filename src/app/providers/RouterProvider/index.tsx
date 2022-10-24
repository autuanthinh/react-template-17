import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { ConnectedRouter } from 'connected-react-router';

import history from 'app/stores/history';

export interface RouterProviderProps extends PropsWithChildren<any> {}

const RouterProvider: FC<RouterProviderProps> = ({ children }): ReactElement => {
  return <ConnectedRouter history={history}>{children}</ConnectedRouter>;
};

export default RouterProvider;
