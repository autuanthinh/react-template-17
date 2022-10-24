import { Theme } from 'antd/lib/config-provider/context';
import { ThemeModeType } from 'app/types';

const theme: { [k in ThemeModeType]?: Theme } = {
  light: {},
  dark: {},
};

export const modeDefault: ThemeModeType = 'light';

export function getThemeByType(mode: ThemeModeType = modeDefault) {
  return theme[mode] || theme[modeDefault];
}

export default theme;
