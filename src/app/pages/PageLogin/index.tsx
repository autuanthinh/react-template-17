import React, { FC } from 'react';

import { injectReducer, injectSaga } from 'redux-injectors';
import { compose } from 'redux';

import { UtilInject } from 'app/utils';

import { Switch, Route } from 'react-router-dom';

import reducerPageLogin from './reducer';
import sagaPageLogin from './saga';

export interface IPageLoginProps {}

const PageLogin: FC<IPageLoginProps> = ({}) => {
  return (
    <Switch>
      <Route></Route>
    </Switch>
  );
};

export default UtilInject.combineInjectionComponent(
  [
    compose(
      injectReducer({ key: 'reducerPageLogin', reducer: reducerPageLogin }),
      injectSaga({ key: 'sagaPageLogin', saga: sagaPageLogin })
    ),
  ],
  PageLogin
) as FC<IPageLoginProps>;
