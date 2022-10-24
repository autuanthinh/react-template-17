import queryString, { StringifiableRecord, StringifyOptions } from 'query-string';
import { Object } from 'app/types';

const queryOrders: string[] = [];
const queryOrdersMap: Object<number> = queryOrders.reduce((obj: Object<number>, next: string, index: number) => {
  obj[next] = index;
  return obj;
}, {});

const defaultParseOptions: StringifyOptions = {
  arrayFormat: 'bracket',
};

const defaultStringifyOptions: StringifyOptions = {
  arrayFormat: 'bracket',
  sort: (m: string, n: string): number => queryOrdersMap[m] - queryOrdersMap[n],
};

export const parseRouterQuery = (searchStr: string = '') => {
  const query = queryString.parse(searchStr, defaultParseOptions);

  return query || {};
};

export const stringifyQuery = (query: StringifiableRecord = {}) => {
  const searchStr = queryString.stringify(query, defaultStringifyOptions);
  return searchStr;
};
