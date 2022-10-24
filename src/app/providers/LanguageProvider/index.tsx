import React, { FC, PropsWithChildren, ReactElement, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { localStorage } from 'app/utils';

import { IntlProvider } from 'react-intl';

import { translationMessages } from 'src/i18n';

import IntlCapture from './Intl';

import * as languageActions from './actions';
import * as languageSelectors from './selectors';

export interface LanguageProviderProps extends PropsWithChildren<any> {}

const LanguageProvider: FC<LanguageProviderProps> = ({ children }): ReactElement => {
  const language = useSelector(languageSelectors.languageSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getLang()) {
      dispatch(languageActions.getLanguage());
    }
  }, [dispatch]);

  const messages = useMemo<any>(() => {
    const translateData: any = translationMessages;
    return translateData[language];
  }, [language]);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <IntlCapture>{React.Children.only(children)}</IntlCapture>
    </IntlProvider>
  );
};

export default LanguageProvider;
