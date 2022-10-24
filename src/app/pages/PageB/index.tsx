import React, { FC } from 'react';
import { FormattedMessage, injectIntl, InjectedIntl } from 'react-intl';

import { injectReducer, injectSaga } from 'redux-injectors';
import { compose } from 'redux';

import { UtilInject } from 'app/utils';

// import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import reducerPageB from './reducer';
import sagaPageB from './saga';

import messages from './messages';

export interface IPageBProps {
  intl: InjectedIntl;
}

const PageB: FC<IPageBProps> = ({ intl }) => {
  return (
    <div>
      <Helmet>
        <title>{intl.formatMessage(messages.title)}</title>
      </Helmet>
      <h1>
        <FormattedMessage {...messages.title} />
      </h1>
    </div>
  );
};

export default UtilInject.combineInjectionComponent(
  [
    compose(
      injectReducer({ key: 'reducerPageB', reducer: reducerPageB }),
      injectSaga({ key: 'sagaPageB', saga: sagaPageB })
    ),
    injectIntl,
  ],
  PageB
) as FC<IPageBProps>;
