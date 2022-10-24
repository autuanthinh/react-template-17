import { fromJS } from 'immutable';
import { ImmutableState } from 'app/types';
import { localStorage } from 'app/utils';

import { appLocales } from 'i18n';
// import { setMomentLocale } from './momentLocales';
// import { setNumeralLocale } from './numeralLocales';

import { SET_LANGUAGE, DEFAULT_LANGUAGE } from './constants';

const lang: string = localStorage.getLang() || '';
const isLanguageCodeExists = appLocales.indexOf(lang) !== -1;
const initLang = isLanguageCodeExists ? lang : DEFAULT_LANGUAGE;

// setMomentLocale(initLang);
// setNumeralLocale(initLang);

const initialState = fromJS({
  language: initLang,
}) as ImmutableState;

function reducer(state: ImmutableState = initialState, action: any): ImmutableState {
  switch (action.type) {
    case SET_LANGUAGE:
      localStorage.setLanguage(action.language);
      // setMomentLocale(action.language);
      // setNumeralLocale(action.language);
      return state.set('language', action.language);
    default:
      return state;
  }
}

export default reducer;
