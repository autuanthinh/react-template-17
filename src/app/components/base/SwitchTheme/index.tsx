import React, { useCallback, useEffect, useState } from 'react';
import { ConfigProvider, Switch } from 'antd';
import { ThemeModeType } from 'app/types';
import { getThemeByType, modeDefault } from './theme';

function SwitchTheme({}) {
  const [mode, setTheme] = useState<ThemeModeType>(modeDefault);

  const onChange = useCallback(checked => {
    setTheme(checked ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    ConfigProvider.config({
      theme: getThemeByType(mode),
    });
  }, [mode]);

  return (
    <Switch
      checkedChildren="light"
      unCheckedChildren="dark"
      checked={mode === 'dark' ? true : false}
      onChange={onChange}
    />
  );
}

export default SwitchTheme;
