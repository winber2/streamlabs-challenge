import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const login = (user) => dispatch => (
  // APIUtil.login()
  //   .then(
  //     (currentUser) => dispatch(receiveCurrentUser(currentUser)),
  //     (error) => dispatch(receiveErrors(error.responseJSON))
  //   )
  dispatch(receiveCurrentUser(user))
);


export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logout = () => dispatch => (
  // APIUtil.logout()
  //   .then(() => dispatch(receiveCurrentUser(null)))
  dispatch(receiveCurrentUser(null))
);

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
