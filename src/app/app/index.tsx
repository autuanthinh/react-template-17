import React, { FC, Props, useEffect } from 'react';

import { injectReducer, injectSaga } from 'redux-injectors';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { UtilInject } from 'app/utils';

import Routers from './routers';

import appReducer from './reducer';
import appSaga from './saga';

import * as selectors from 'app/app/selectors';

export interface IAppProps extends Props<HTMLElement> {}

const App: FC<IAppProps> = ({}) => {
  const isLoading = useSelector(selectors.isLoadingSelector);

  const authToken = true;
  const isCheckedLogin = true;

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(authActions.checkTokenExisted());
  }, [dispatch]);

  // const isLoggedIn = useMemo(() => !!authToken, [authToken]);

  return <div>{isCheckedLogin && !isLoading && <Routers isLoggedIn={!!authToken} />}</div>;
};

export default UtilInject.combineInjectionComponent(
  [compose(injectReducer({ key: 'appReducer', reducer: appReducer }), injectSaga({ key: 'appSaga', saga: appSaga }))],
  App
) as FC<IAppProps>;
