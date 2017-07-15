import { connect } from 'react-redux';
import ShowVideo from './show_video';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(ShowVideo);
