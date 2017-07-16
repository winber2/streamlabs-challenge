import * as APIUtil from '../util/message_api_util';

export const RECEIVE_USER_MESSAGES = 'RECEIVE_USER_MESSAGES';
export const RECEIVE_CHATROOM_MESSAGES = 'RECEIVE_CHATROOM_MESSAGES';

export const receiveUserMessages = messages => ({
  type: RECEIVE_USER_MESSAGES,
  messages
});

export const receiveChatroomMessages = messages => ({
  type: RECEIVE_CHATROOM_MESSAGES,
  messages
})

export const fetchUserMessages = (query) => dispatch => (
  APIUtil.fetchMessages(query)
    .then(messages => {
      return(dispatch(receiveUserMessages(messages)))
    })
)

export const fetchChatroomMessages = (query) => dispatch => (
  APIUtil.fetchMessages(query)
    .then(messages => dispatch(receiveChatroomMessages(messages)))
)
