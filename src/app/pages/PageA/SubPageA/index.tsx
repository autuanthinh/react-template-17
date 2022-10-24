import React, { FC } from 'react';

import { injectReducer, injectSaga } from 'redux-injectors';
import { compose } from 'redux';

import { UtilInject } from 'app/utils';

// import { Switch, Route } from 'react-router-dom';

import reducerSubPageA from './reducer';
import sagaSubPageA from './saga';

export interface ISubPageAProps {}

const SubPageA: FC<ISubPageAProps> = ({}) => {
  return (
    <div>
      <h1>Sub Page A</h1>
    </div>
  );
};

export default UtilInject.combineInjectionComponent(
  [
    compose(
      injectReducer({ key: 'reducerSubPageA', reducer: reducerSubPageA }),
      injectSaga({ key: 'sagaSubPageA', saga: sagaSubPageA })
    ),
  ],
  SubPageA
) as FC<ISubPageAProps>;
