import React, { FC } from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';

import { injectReducer, injectSaga } from 'redux-injectors';
import { compose } from 'redux';

import { UtilInject } from 'app/utils';

import { Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import reducerPageA from './reducer';
import sagaPageA from './saga';

import asyncComponent from 'app/components/base/asyncComponent';

import messages from './messages';

const SubPageA = asyncComponent(() => import('./SubPageA'));
const SubPageB = asyncComponent(() => import('./SubPageB'));

export interface IPageAProps {
  intl: InjectedIntl;
}

const PageA: FC<IPageAProps> = ({ intl }) => {
  return (
    <div>
      <Helmet>
        <title>{intl.formatMessage(messages.title)}</title>
      </Helmet>
      <h1>{intl.formatMessage(messages.title)}</h1>
      <ul>
        <li>
          <Link to="/pageA/subPageA">{intl.formatMessage(messages.subPageA)}</Link>
        </li>
        <li>
          <Link to="/pageA/subPageB">{intl.formatMessage(messages.subPageB)}</Link>
        </li>
      </ul>
      <Switch>
        <Route exact={false} path={'/pageA/subPageA'} component={SubPageA} />
        <Route exact={false} path={'/pageA/subPageB'} component={SubPageB} />
        <Redirect to={'/pageA/subPageA'} />
      </Switch>
    </div>
  );
};

export default UtilInject.combineInjectionComponent(
  [
    compose(
      injectReducer({ key: 'reducerPageA', reducer: reducerPageA }),
      injectSaga({ key: 'sagaPageA', saga: sagaPageA })
    ),
    injectIntl,
  ],
  PageA
) as FC<IPageAProps>;
