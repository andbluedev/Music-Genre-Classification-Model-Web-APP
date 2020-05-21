export const FormActionType = {
  CHOOSE_BUILDING: 'CHOOSE_BUILDING',
  CHOOSE_ROOM: 'CHOOSE_ROOM',
  CHOOSE_DEVICE: 'CHOOSE_DEVICE'
};

export const FormReducer = (prevState, action) => {
  switch (action.type) {
    case FormActionType.CHOOSE_BUILDING: {
      const { id } = action.payload;
      return {
        ...prevState,
        selectedBuildingId: id
      };
    }
    case FormActionType.CHOOSE_ROOM: {
      const { id } = action.payload;
      return {
        ...prevState,
        selectedRoomId: id
      };
    }
    case FormActionType.CHOOSE_DEVICE: {
      const { id } = action.payload;
      return {
        ...prevState,
        selectedDeviceId: id
      };
    }
    default:
      return prevState;
  }
};
