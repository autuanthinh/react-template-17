import { connect } from 'react-redux';
import { Location as ILocation } from 'history';
import { Push, Replace } from 'connected-react-router';
import { Object } from 'app/types';
import { push, replace } from '../actions';

import { routerLocationSelector, queryObjectSelector } from '../selectors';
import { RouterState } from '../types';

export interface Location extends ILocation {}
export interface IWithRouter {
    location?: ILocation;
    queryObject: Object<any>;
    push: Push;
    replace: Replace;
}

const mapStateToProps = (state: RouterState) => {
    return {
        location: routerLocationSelector(state),
        queryObject: queryObjectSelector(state),
    };
};

const mapDispatchToProps = {
    push,
    replace,
};

export default connect(mapStateToProps, mapDispatchToProps);
