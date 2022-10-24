import { createSelector } from 'reselect';
import { parseRouterQuery } from './utils';
import { RouterState } from './types';

export const routerLocationSelector = (state: RouterState) => state.router.location;

export const queryObjectSelector = createSelector(routerLocationSelector, location => {
    const queryObject = parseRouterQuery(location.search);
    return queryObject;
});
