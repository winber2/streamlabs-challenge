import { connect } from 'react-redux';
import ShowVideo from './show_video';
import { fetchUserMessages, fetchChatroomMessages } from '../../actions/message_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  fetchUserMessages: (query) => dispatch(fetchUserMessages(query)),
  fetchChatroomMessages: (query) => dispatch(fetchChatroomMessages(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowVideo);
