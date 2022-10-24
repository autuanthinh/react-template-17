import React, { FC, PropsWithChildren, ReactElement } from 'react';

import ReduxProvider from './ReduxProvider';
import AntdProvider from './AntdProvider';
import LanguageProvider from './LanguageProvider';
import RouterProvider from './RouterProvider';

export interface AppProviderProps extends PropsWithChildren<any> {}

const AppProvider: FC<AppProviderProps> = ({ children }): ReactElement => {
  return (
    <ReduxProvider>
      <RouterProvider>
        <AntdProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </AntdProvider>
      </RouterProvider>
    </ReduxProvider>
  );
};

export default AppProvider;
