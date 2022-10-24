import React, { FC } from 'react';

import { injectReducer, injectSaga } from 'redux-injectors';
import { compose } from 'redux';

import { UtilInject } from 'app/utils';

// import { Switch, Route } from 'react-router-dom';

import reducerSubPageB from './reducer';
import sagaSubPageB from './saga';

export interface ISubPageBProps {}

const SubPageB: FC<ISubPageBProps> = ({}) => {
  return (
    <div>
      <h1>Sub Page B</h1>
    </div>
  );
};

export default UtilInject.combineInjectionComponent(
  [
    compose(
      injectReducer({ key: 'reducerSubPageB', reducer: reducerSubPageB }),
      injectSaga({ key: 'sagaSubPageB', saga: sagaSubPageB })
    ),
  ],
  SubPageB
) as FC<ISubPageBProps>;
