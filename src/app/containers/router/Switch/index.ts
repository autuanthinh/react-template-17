import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { RouterState } from '../types';

const mapStateToProps = (state: RouterState) => {
  return {
    location: state.router.location,
  };
};

export default connect(mapStateToProps, null)(Switch);
