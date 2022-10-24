import { fromJS } from 'immutable';
import * as nameActList from './constant';
import { ImmutableState } from 'app/types';

const getInitData = () => {
  return fromJS({
    isLoading: false,
  }) as ImmutableState;
};

const reducer = (state: ImmutableState = getInitData(), action: any): ImmutableState => {
  switch (action.type) {
    case nameActList.INIT_DATA:
      return state.set('isLoading', true);
    // App status
    case nameActList.SET_LOADING:
      return state.set('isLoading', action.payload);

    case nameActList.CLEAR:
      return getInitData();
    default:
      return state;
  }
};

export default reducer;
