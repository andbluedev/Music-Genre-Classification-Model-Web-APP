import { setTokenValue, removeToken } from './token';
import { emptyUserContextState } from './UserContext';

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
      // this doesn't return a token for now (TODO with refresh token)
      return {
        ...prevState,
        id: action.payload.id,
        username: action.payload.username,
        name: action.payload.name,
        lastName: action.payload.lastname,
        role: action.payload.role
      };
    case UserActionType.AUTH_FAILURE:
      removeToken();
      return {
        ...emptyUserContextState
      };
    default:
      return prevState;
  }
};
