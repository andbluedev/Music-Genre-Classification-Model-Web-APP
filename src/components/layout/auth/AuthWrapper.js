import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { get, HttpStatusCode } from '../../../data/api';
import { getTokenValue } from '../../../data/auth/token';
import { UserContext } from '../../../data/auth/UserContext';
import { UserActionType } from '../../../data/auth/reducer';

export const AuthWrapper = (props) => {
  const history = useHistory();
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    if (getTokenValue()) {
      get('/account/me').then((result) => {
        if (result.statusCode === HttpStatusCode.OK) {
          dispatch({
            type: UserActionType.AUTH_SUCCESS,
            payload: result.payload
          });
        } else {
          history.push('/login');
          dispatch({ type: UserActionType.AUTH_FAILURE });
        }
      });
    } else {
      history.push('/login');
      dispatch({ type: UserActionType.AUTH_FAILURE });
    }
  }, [history]);
  return <React.Fragment>{props.children}</React.Fragment>;
};
