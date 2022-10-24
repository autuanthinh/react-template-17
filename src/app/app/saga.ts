import { put, takeLatest, select } from 'redux-saga/effects';
// import Utils from 'app/utils';

// import { replace } from 'app/containers/router/actions';

import * as selectors from './selectors';
import * as actionList from './actions';
import * as nameActList from './constant';

function* initData(): any {
  let isMaintaining = yield select(selectors.isMaintainingSelector);
  if (isMaintaining) {
    yield put(actionList.setLoading(false));
    return;
  }

  try {
    // TODO
  } catch (error) {
    // Utils.handleError(error);
  }
}

export default function* root() {
  yield takeLatest([nameActList.INIT_DATA], initData);
}
