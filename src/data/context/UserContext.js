import React from 'react';
import { setTokenValue } from '../auth';

/**
 * Example
 "email": "louis.lepetit@gmail.com",
 "userId": 2,
 "name": "Louis",
 "surname": "LePetit",
 "role": "CLIENT"
 **/

const UserContext = React.createContext(null);

export const emptyUser = {
  isAuthenticated: false,
  email: '',
  userId: null,
  name: '',
  surname: '',
  role: '',
  token: ''
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      setTokenValue(action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        email: action.payload.email,
        role: action.payload.role,
        name: action.payload.name,
        surname: action.payload.surname,
        userId: action.payload.userId,
        token: action.payload.token
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        ...emptyUser
      };
    default:
      return state;
  }
};

export default UserContext;
