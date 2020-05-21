import React from 'react';

export const emptyFormContext = {
  selectedBuildingId: undefined,
  selectedRoomId: undefined,
  selectedDeviceId: undefined,
};

export const FormContext = React.createContext({
  formState: emptyFormContext,
  formDispatch: () => undefined
});
