import React from 'react';

export const emptyUserContextState = {
  id: undefined,
  username: undefined,
  name: undefined,
  lastName: undefined,
  role: undefined,
  token: undefined
};

export const UserContext = React.createContext({
  state: emptyUserContextState,
  dispatch: () => undefined
});
