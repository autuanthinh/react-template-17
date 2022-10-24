/*
 *
 * LanguageProvider actions
 *
 */

import { SET_LANGUAGE, GET_LANGUAGE } from './constants';

export function setLanguage(language: string) {
  return {
    type: SET_LANGUAGE,
    language,
  };
}

export function getLanguage() {
  return {
    type: GET_LANGUAGE,
  };
}
