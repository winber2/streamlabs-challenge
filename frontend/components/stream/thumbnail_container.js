import { connect } from 'react-redux';
import Thumbnail from './thumbnail';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Thumbnail);
