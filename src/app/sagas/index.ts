import { all, fork } from 'redux-saga/effects';

import sagaApp from 'app/app/saga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([fork(sagaApp)]);
}
