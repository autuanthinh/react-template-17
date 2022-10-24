import React, { FC, PropsWithChildren } from 'react';

import Auth from './Auth';
import UnAuth from './UnAuth';

interface RouterProps extends PropsWithChildren<any> {
  isLoggedIn: boolean;
}

const Router: FC<RouterProps> = ({ isLoggedIn }) => {
  return isLoggedIn ? <Auth /> : <UnAuth />;
};

export default Router;
