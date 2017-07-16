import { RECEIVE_USER_MESSAGES, RECEIVE_CHATROOM_MESSAGES } from '../actions/message_actions';
import { merge } from 'lodash';

const MessageReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER_MESSAGES:
      newState.messages = action.messages;
      return newState;

    case RECEIVE_CHATROOM_MESSAGES:
      newState.chatroomMessages = action.messages;
      return newState;

    default:
      return state;
  }
};

export default MessageReducer;
