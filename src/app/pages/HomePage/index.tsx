import React, { FC } from 'react';

import { injectReducer, injectSaga } from 'redux-injectors';
import { compose } from 'redux';

import { UtilInject } from 'app/utils';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import reducerHomePage from './reducer';
import sagaHomePage from './saga';

export interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = ({}) => {
  return (
    <div>
      <Helmet>
        <title>Auth Home Page</title>
      </Helmet>
      <h1>Auth Home Page</h1>
      <ul>
        <li>
          <Link to="/pageA">Page A</Link>
        </li>
        <li>
          <Link to="/pageB">Page B</Link>
        </li>
      </ul>
    </div>
  );
};

export default UtilInject.combineInjectionComponent(
  [
    compose(
      injectReducer({ key: 'reducerHomePage', reducer: reducerHomePage }),
      injectSaga({ key: 'sagaHomePage', saga: sagaHomePage })
    ),
  ],
  HomePage
) as FC<IHomePageProps>;
