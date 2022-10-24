// import _ from 'lodash';
// import { createSelector } from 'reselect';
import { ReducerStateMap } from 'app/types';

// App status
export const isLoadingSelector = (state: ReducerStateMap) => {
  return state.appReducer.get('isLoading');
};
export const isMaintainingSelector = (state: ReducerStateMap) => {
  return state.appReducer.get('isMaintaining');
};
export const userProfileSelector = (state: ReducerStateMap) => {
  return state.appReducer.get('userProfile');
};
