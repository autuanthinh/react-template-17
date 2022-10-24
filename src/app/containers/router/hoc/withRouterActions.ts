import { connect } from 'react-redux';
import { push, replace } from '../actions';

const mapDispatchToProps = {
    push,
    replace,
};

export default connect(null, mapDispatchToProps);
