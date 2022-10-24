import * as listTypes from './constant';

export function clear() {
  return {
    type: listTypes.CLEAR,
  };
}

export function initData() {
  return {
    type: listTypes.INIT_DATA,
  };
}
