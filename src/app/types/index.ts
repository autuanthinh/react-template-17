import { EnhancedStore } from '@reduxjs/toolkit';
import Immutable from 'immutable';

declare global {
  var store: EnhancedStore;
  var env: any;
}

export type ThemeModeType = 'light' | 'dark';
export type LanguageType = 'en';

export type Object<V> = { [key: string]: V };

// Redux
export interface ReducerStateMap {
  [reducer: string]: Immutable.Map<string, any>;
}
export interface ReducerStateList {
  [reducer: string]: Immutable.List<any>;
}

export interface ImmutableState extends Immutable.Map<string, any> {}
