import { takeLatest } from 'redux-saga/effects';

// import * as selectors from './selectors';
// import * as actionList from './actions';
import * as nameActList from './constant';

function* initData(): any {}

export default function* root() {
  yield takeLatest([nameActList.INIT_DATA], initData);
}
