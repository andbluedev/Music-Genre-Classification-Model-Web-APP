import { setTokenValue, removeToken } from './token';

export const UserActionType = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_FAILURE: 'AUTH_FAILURE'
};

export const UserReducer = (prevState, action) => {
  switch (action.type) {
    case UserActionType.LOGIN_SUCCESS:
      setTokenValue(action.payload.token);
      return {
        ...prevState,
        username: action.payload.username
      };
    case UserActionType.AUTH_SUCCESS:
      return {
        ...prevState,
        username: action.payload.username
      };
    case UserActionType.LOGOUT:
      removeToken();
      return {
        ...prevState,
        username: ''
      };
    case UserActionType.AUTH_FAILURE:
      removeToken();
      return {
        ...prevState,
        username: ''
      };
    default:
      return prevState;
  }
};
