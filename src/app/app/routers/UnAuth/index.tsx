import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Switch from 'app/containers/router/Switch';

import asyncComponent from 'app/components/base/asyncComponent';

const AsyncPageLogin = asyncComponent(() => import('app/pages/PageLogin'));

const UnAuthRouter: FC<any> = () => {
  return (
    <Switch>
      <Route exact={true} path={'/'} component={AsyncPageLogin} />
      <Route exact={false} path={'/login'} component={AsyncPageLogin} />
      <Redirect to={'/'} />
    </Switch>
  );
};

export default UnAuthRouter;
