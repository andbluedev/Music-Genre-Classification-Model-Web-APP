import React from 'react';
import { FormReducer } from './FormReducer';

const FormDispatch = React.createContext();
const FormState = React.createContext();

export function FormContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(FormReducer, emptyFormContext);
  return (
    <FormState.Provider value={state}>
      <FormDispatch.Provider value={dispatch}>{children}</FormDispatch.Provider>
    </FormState.Provider>
  );
}

export function useFormState() {
  return React.useContext(FormState);
}

export function useFormDispatch() {
  return React.useContext(FormDispatch);
}

export const emptyFormContext = {
  selectedBuildingId: undefined,
  selectedRoomId: undefined,
  selectedDeviceId: undefined
};
