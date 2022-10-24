import React, { FC, PropsWithChildren, ReactElement, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ConfigProvider } from 'antd';
import { Locale } from 'antd/lib/locale-provider';
import { LanguageType } from 'app/types';
import * as languageSelectors from '../LanguageProvider/selectors';

import { antdLocales } from 'src/i18n';

export interface AntdProviderProps extends PropsWithChildren<any> {}

const AntdProvider: FC<AntdProviderProps> = ({ children }): ReactElement => {
  const language: LanguageType = useSelector(languageSelectors.languageSelector);

  const locale: Locale = useMemo(() => {
    return antdLocales[language];
  }, [language]);

  return <ConfigProvider locale={locale}>{children}</ConfigProvider>;
};

export default AntdProvider;
