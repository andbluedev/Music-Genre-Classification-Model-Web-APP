import React from 'react';
import { useFormState } from '../../formContext/FormContext';
import { FormInput } from '../FormInput/FormInput';
import { FormActionType } from '../../formContext/FormReducer';

export function SelectionsInForm() {
  const formState = useFormState();

  let toReturn = [
    <FormInput
      type={FormActionType.CHOOSE_BUILDING}
      fetchURL={'/buildings'}
      label={'Bâtiment'}
      apiKey={'name'}
    />
  ];
  if (formState.selectedBuildingId) {
    toReturn.push(
      <FormInput
        type={FormActionType.CHOOSE_ROOM}
        fetchURL={`/buildings/${formState.selectedBuildingId}/rooms`}
        label={'Salle'}
        apiKey={'number'}
      />
    );
  }
  if (formState.selectedRoomId) {
    toReturn.push(
      <FormInput
        type={FormActionType.CHOOSE_DEVICE}
        fetchURL={`/rooms/${formState.selectedRoomId}/device/categories`}
        label={'Appareil'}
        apiKey={'name'}
      />
    );
  }
  return toReturn;
}
